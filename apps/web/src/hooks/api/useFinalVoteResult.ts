import { VoteResultResponse } from "@/api/types/vote/index.type";
import { API_URLS } from "@/constants/api";
import { useQuery } from "@repo/shared/tanstack-query";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getFinalVoteResult = async (roomId: string) => {
  const response = await fetch(
    `${BASE_URL}${API_URLS.GET_FINAL_VOTE_RESULT(roomId)}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export const useFinalVoteResult = (roomId: string) => {
  return useQuery<VoteResultResponse>({
    queryKey: ["FinalVoteResult", roomId],
    queryFn: () => getFinalVoteResult(roomId),
    enabled: !!roomId,
  });
};
