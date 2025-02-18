import { getTestData } from "@/api/test/getTestData";
import { useQuery } from "@repo/shared/tanstack-query";

export const useGetTestData = (index: number) => {
  // index를 받아와서 해당 index의 test post 데이터를 가져오는 hook
  const QUERY_KEYS = {
    Test: ["Test", index],
  };

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: QUERY_KEYS.Test,
    queryFn: () => getTestData(index),
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
