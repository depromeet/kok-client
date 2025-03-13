import { useQuery } from "@repo/shared/tanstack-query";
import LocationController from "@/api/controllers/location.controller";
import type {
  LocationCentroid,
  LocationConvexHull,
} from "@/api/types/location/location.types";

export const useLocationCentroid = (uuid: string) => {
  const result = useQuery<
    { data: LocationCentroid },
    Error,
    { data: LocationCentroid }
  >({
    queryKey: ["locationCentroid", uuid],
    queryFn: () => LocationController.getCentroid(uuid),
    enabled: !!uuid,
  });
  console.log("useLocationCentroid", result.data);

  const transformedData: LocationCentroid | null = (() => {
    if (!result.data?.data) return null;
    const apiData = result.data.data;
    console.log("apiData", apiData);

    return {
      uuid: apiData.uuid || uuid,
      latitude: apiData.longitude, // longitude에 위도값이 들어있음. 수정 요청 필요
      longitude: apiData.latitude, // latitude에 경도값이 들어있음.
    };
  })();

  return {
    ...result,
    data: transformedData,
  };
};

export const useLocationConvexHull = (uuid: string) => {
  const result = useQuery<
    { data: LocationConvexHull },
    Error,
    { data: LocationConvexHull }
  >({
    queryKey: ["locationConvexHull", uuid],
    queryFn: () => LocationController.getConvexHull(uuid),
    enabled: !!uuid,
  });

  const transformedData: LocationConvexHull | null = (() => {
    if (!result.data?.data) return null;

    const apiData = result.data.data;

    // convexHull과 inside 배열이 있는 경우
    if (apiData.convexHull || apiData.inside) {
      return {
        uuid: uuid,
        convexHull: apiData.convexHull.map((point) => ({
          uuid: point.uuid,
          memberId: point.memberId,
          latitude: point.latitude,
          longitude: point.longitude,
        })),
        inside: apiData.inside.map((point) => ({
          uuid: point.uuid,
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
