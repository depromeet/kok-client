import { useQuery } from "@repo/shared/tanstack-query";
import { API_URLS } from "../../constants/api";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface TransferRequest {
  roomId: string;
  memberId: string; // 3.20 변경됨
}

interface SimpleTransferResponse {
  code: number;
  message: string;
  data: {
    totalTime: number;
    transferCount: number;
  };
}

interface ComplexTransferResponse {
  code: number;
  message: string;
  data: {
    parsedItinerary: {
      totalDistance: number;
      totalTime: number;
      legs: {
        mode: "WALK" | "SUBWAY" | "BUS";
        distance: number;
        sectionTime: number;
        route: string | null;
        routeColor: string | null;
      }[];
    };
  };
}

const fetchSimpleTransfer = async (
  stationId: number,
  request: TransferRequest
) => {
  const response = await fetch(
    `${BASE_URL}${API_URLS.POST_ROUTE}${stationId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

const fetchComplexTransfer = async (
  stationId: number,
  request: TransferRequest
) => {
  const response = await fetch(
    `${BASE_URL}${API_URLS.POST_ROUTE_COMPLEX}${stationId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export const useSimpleTransfer = (
  stationId: number,
  request: TransferRequest
) => {
  return useQuery<SimpleTransferResponse>({
    queryKey: ["transfer", "simple", stationId, request],
    queryFn: () => fetchSimpleTransfer(stationId, request),
    // staleTime: 1000 * 60 * 60,
    enabled: !!stationId,
  });
};

export const useComplexTransfer = (
  stationId: number,
  request: TransferRequest
) => {
  return useQuery<ComplexTransferResponse>({
    queryKey: ["transfer", "complex", stationId, request],
    queryFn: () => fetchComplexTransfer(stationId, request),
    // staleTime: 1000 * 60 * 60,
    enabled: !!stationId,
  });
};
