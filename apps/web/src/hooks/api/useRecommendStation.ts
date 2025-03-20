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

export interface RecommendStationResponse {
  code: number;
  message: string;
  data: Array<{
    routes: string[];
    station: Station;
  }>;
}

export type RecommendStationData = Array<{
  routes: string[];
  station: Station;
}>;

const fetchRecommendStation = async (roomId: string) => {
  const response = await fetch(
    `${BASE_URL}${API_URLS.GET_RECOMMEND_STATION}${roomId}`,
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

  return response.json();
};

export const useRecommendStation = (roomId: string) => {
  return useQuery<RecommendStationResponse>({
    queryKey: ["recommendStation", roomId],
    queryFn: () => fetchRecommendStation(roomId),
    // staleTime: 1000 * 60 * 60, // 1시간 동안 신선하게 유지
  });
};
