import { useQuery } from "@repo/shared/tanstack-query";
import LocationController from "@/api/controllers/location.controller";
import type {
  LocationCentroid,
  LocationConvexHull,
} from "@/api/types/location/location.types";
import { LocationsResponse } from "@/api/types/locations/index.types";
import { getRequest } from "@repo/shared/axios";
import { API_URLS } from "@/constants/api";

export const useLocationCentroid = (roomId: string) => {
  const result = useQuery<
    { data: LocationCentroid },
    Error,
    { data: LocationCentroid }
  >({
    queryKey: ["locationCentroid", roomId],
    queryFn: () => LocationController.getCentroid(roomId),
    enabled: !!roomId,
    // staleTime: 1000 * 60 * 60, // 개발 작업 동안
  });

  const transformedData: LocationCentroid | null = (() => {
    if (!result.data?.data) return null;
    const apiData = result.data.data;

    return {
      roomId: apiData.roomId || roomId,
      latitude: apiData.latitude, // 3.20 수정완료
      longitude: apiData.longitude,
    };
  })();

  return {
    ...result,
    data: transformedData,
  };
};

export const useLocationConvexHull = (roomId: string) => {
  const result = useQuery<
    { data: LocationConvexHull },
    Error,
    { data: LocationConvexHull }
  >({
    queryKey: ["locationConvexHull", roomId],
    queryFn: () => LocationController.getConvexHull(roomId),
    enabled: !!roomId,
  });

  const transformedData: LocationConvexHull | null = (() => {
    if (!result.data?.data) return null;

    const apiData = result.data.data;

    // convexHull과 inside 배열이 있는 경우
    if (apiData.convexHull || apiData.inside) {
      return {
        roomId: roomId,
        convexHull: apiData.convexHull.map((point) => ({
          roomId: point.roomId,
          memberId: point.memberId,
          latitude: point.latitude,
          longitude: point.longitude,
        })),
        inside: apiData.inside.map((point) => ({
          roomId: point.roomId,
          memberId: point.memberId,
          latitude: point.latitude,
          longitude: point.longitude,
        })),
      };
    }

    return null;
  })();

  return {
    ...result,
    data: transformedData,
  };
};

export const useMemberLocation = (roomId: string, memberId: string) => {
  return useQuery({
    queryKey: ["locations", roomId, memberId],
    queryFn: () =>
      getRequest<LocationsResponse>({
        url: `${API_URLS.GET_LOCATION}${roomId}/${memberId}`,
      }),
  });
};
