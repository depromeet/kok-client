import { useQuery } from "@repo/shared/tanstack-query";
import LocationController from "@/api/controllers/location.controller";
import type {
  TransformedCentroid,
  TransformedConvexHull,
} from "@/api/types/location/location.types";

export const useLocationCentroid = (uuid: string) => {
  const result = useQuery<any>({
    queryKey: ["locationCentroid", uuid],
    queryFn: () => LocationController.getCentroid(uuid),
    enabled: !!uuid,
  });

  const transformedData: TransformedCentroid | null = (() => {
    if (!result.data) return null;

    // API 응답 구조: { code, message, data: { uuid, latitude, longitude } }
    if (result.data.code === 200 && result.data.data) {
      const apiData = result.data.data;

      return {
        uuid: apiData.uuid || uuid,
        centroid: {
          latitude: apiData.longitude, // longitude에 위도값이 들어있음. 수정 요청 필요
          longitude: apiData.latitude, // latitude에 경도값이 들어있음.
        },
      };
    }

    return null;
  })();

  return {
    ...result,
    data: transformedData,
  };
};

export const useLocationConvexHull = (uuid: string) => {
  const result = useQuery<any>({
    queryKey: ["locationConvexHull", uuid],
    queryFn: () => LocationController.getConvexHull(uuid),
    enabled: !!uuid,
  });

  const transformedData: TransformedConvexHull | null = (() => {
    if (!result.data) return null;

    // API 응답 구조 : { code, message, data: { convexHull, inside } }
    if (result.data.code === 200 && result.data.data) {
      const apiData = result.data.data;

      // convexHull과 inside 배열이 있는 경우
      if (apiData.convexHull && apiData.inside) {
        return {
          uuid: uuid,
          convexHull: apiData.convexHull.map((point: any) => ({
            uuid: point.uuid,
            memberId: point.memberId,
            latitude: point.latitude,
            longitude: point.longitude,
          })),
          inside: apiData.inside.map((point: any) => ({
            uuid: point.uuid,
            memberId: point.memberId,
            latitude: point.latitude,
            longitude: point.longitude,
          })),
        };
      }
    }

    return null;
  })();

  return {
    ...result,
    data: transformedData,
  };
};
