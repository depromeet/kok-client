import { API_URLS } from "@/constants/api";
import { PlaceType } from "@/constants/filter-options";
import { useMutation, useQuery } from "@repo/shared/tanstack-query";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export interface Location {
  latitude: number;
  longitude: number;
}

export interface PlaceResponse {
  displayName: string;
  formattedAddress: string;
  location: Location;
  id: string;
}

interface PlacesApiResponse {
  code: number;
  message: string;
  data: {
    placeResponses: PlaceResponse[];
  };
}

interface SearchPlacesParams {
  placeType: PlaceType;
  latitude: number;
  longitude: number;
  maxCount?: number;
}

// 장소 검색 API 호출 함수
const searchPlaces = async (
  params: SearchPlacesParams
): Promise<PlaceResponse[]> => {
  const response = await fetch(`${BASE_URL}${API_URLS.POST_SEARCH_PLACES}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({
      placeType: params.placeType,
      latitude: params.latitude,
      longitude: params.longitude,
      maxCount: params.maxCount || 3,
    }),
  });

  if (!response.ok) {
    throw new Error(`API 요청 실패: ${response.status}`);
  }

  const data: PlacesApiResponse = await response.json();

  if (data.code !== 200) {
    throw new Error(`API 오류: ${data.message}`);
  }

  return data.data.placeResponses;
};

export const usePlaces = () => {
  return useMutation({
    mutationFn: searchPlaces,
  });
};

export const usePlacesQuery = (params: SearchPlacesParams, options?: any) => {
  const queryKey = [
    "places",
    params.placeType,
    params.latitude,
    params.longitude,
    params.maxCount,
  ];

  return useQuery({
    queryKey,
    queryFn: () => searchPlaces(params),
    staleTime: Infinity,
    cacheTime: Infinity,
    ...options,
  });
};
