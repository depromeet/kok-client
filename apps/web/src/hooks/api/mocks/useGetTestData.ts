import testDataController from "@/api/controllers/mocks/testData.controller";
import { useQuery } from "@repo/shared/tanstack-query";

export const useGetTestData = (index: number) => {
  const QUERY_KEYS = {
    Test: ["Test", index],
  };

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: QUERY_KEYS.Test,
    queryFn: () => testDataController.getTestData(index),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return {
    testData: data,
    isLoading,
    isError,
    error,
    isFetching,
  };
};
