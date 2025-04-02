import { SearchedStationsResponse } from "@/api/types/stations/index.type";
import { useQuery } from "@repo/shared/tanstack-query";

const getSearchedStationList = async (searchWord: string) => {
  console.log(searchWord);
  const response = await fetch(`/api/stations/search/${searchWord}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const useSearchStations = (searchWord: string) => {
  return useQuery<SearchedStationsResponse>({
    queryKey: ["stationSearchResult", searchWord],
    queryFn: () => getSearchedStationList(searchWord),
    enabled: false,
    retry: false,
    staleTime: 1000 * 60 * 5, // NOTE: 같은 검색어로 검색하면 항상 같은 결과가 나오기 때문에 조정
  });
};
