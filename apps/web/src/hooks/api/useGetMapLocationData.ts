import mapDataController from "@/api/controllers/mocks/mapData.controller";
import type { MapLocationParams } from "@/api/types/location/location.types";
import { useQuery } from "@repo/shared/tanstack-query";

/**
 * 지도 위치 데이터(위치 목록과 중심점)를 가져오는 훅
 * @param params 선택적 매개변수 (사용자 위치, 반경 등)
 */
export const useGetMapLocationData = (params?: MapLocationParams) => {
  const QUERY_KEYS = {
    MapLocations: ["MapLocations", params],
  };

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: QUERY_KEYS.MapLocations,
    queryFn: () => mapDataController.getMapLocationData(params),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return {
    mapData: data,
    locations: data?.locations || [],
    centerPoint: data?.centerPoint,
    isLoading,
    isError,
    error,
    isFetching,
  };
};

/**
 * 여러 위치의 중심점을 계산하여 가져오는 훅
 * @param locationIds 위치 ID 배열
 */
export const useGetMapCenterPoint = (locationIds: number[]) => {
  const QUERY_KEYS = {
    MapCenter: ["MapCenter", locationIds],
  };

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: QUERY_KEYS.MapCenter,
    queryFn: () => mapDataController.getMapCenterPoint(locationIds),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    enabled: locationIds.length > 0, // 위치 ID가 있을 때만 쿼리 활성화
  });

  return {
    centerPoint: data,
    isLoading,
    isError,
    error,
    isFetching,
  };
};
