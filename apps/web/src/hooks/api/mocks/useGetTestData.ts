import testDataController from "@/api/controllers/mocks/testData.controller";
import { useQuery } from "@repo/shared/tanstack-query";

export const useGetTestData = (index: number) => {
  // 특정 인덱스의 데이터 가져오기

  const QUERY_KEYS = {
    // 쿼리 키 정의
    Test: ["Test", index],
  };

  const { data, isLoading, isError, error, isFetching } = useQuery({
    // 쿼리 훅 사용
    queryKey: QUERY_KEYS.Test,
    queryFn: () => testDataController.getTestData(index),
    staleTime: Infinity, // 캐시 유지 시간
    refetchOnWindowFocus: false, // 윈도우 포커스 시 재요청 여부
    refetchOnReconnect: false, // 재연결 시 재요청 여부
  });

  return {
    testData: data,
    isLoading,
    isError,
    error,
    isFetching,
  };
};
