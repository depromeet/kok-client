import { useQuery } from "@repo/shared/tanstack-query";
import { API_URLS } from "../../constants/api";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface Station {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  priority: number;
}

export interface CandidateStationResponse {
  code: number;
  message: string;
  data: Array<{
    routes: string[];
    station: Station;
  }>;
}

export type CandidateStationData = Array<{
  routes: string[];
  station: Station;
}>;

const fetchCandidateStation = async (roomId: string) => {
  const response = await fetch(
    `${BASE_URL}${API_URLS.GET_CANDIDATE_STATION(roomId)}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json() as Promise<CandidateStationResponse>;
};

export const useCandidateStation = (roomId: string) => {
  return useQuery<CandidateStationResponse>({
    queryKey: ["candidateStation", roomId],
    queryFn: () => fetchCandidateStation(roomId),
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
