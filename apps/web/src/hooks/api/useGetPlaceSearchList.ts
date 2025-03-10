import { readReadableStream } from "@/utils/readableStream";
import { useQuery } from "@repo/shared/tanstack-query";

const getPlaceSearchList = async (query: string) => {
  const response = await fetch(`/api/naver/search?query=${query}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.body) throw new Error("No response body");
  return readReadableStream(response.body);
};

export const useGetPlaceSearchList = (query: string) => {
  return useQuery({
    queryKey: ["PlaceSearchList", query],
    queryFn: async () => await getPlaceSearchList(query),
    enabled: false,
    retry: false,
    select: (data) => data.items,
    gcTime: 0,
  });
};
