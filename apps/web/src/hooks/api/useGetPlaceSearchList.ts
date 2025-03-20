import { useQuery } from "@repo/shared/tanstack-query";

const getPlaceSearchList = async (query: string) => {
  const response = await fetch(`/api/naver/search?query=${query}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
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
