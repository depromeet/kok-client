import { useQuery } from "@repo/shared/tanstack-query";
import { API_URLS } from "@/constants/api";
import { Candidate } from "@/components/vote-finish/templates/types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const fetchVoteResult = async (roomId: string) => {
  const response = await fetch(
    `${BASE_URL}${API_URLS.GET_VOTE_RESULT(roomId)}`,
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

export const useVoteResult = (roomId: string) => {
  return useQuery<{ data: { notVotedCount: number; results: Candidate[] } }>({
    queryKey: ["voteResult", roomId],
    queryFn: () => fetchVoteResult(roomId),
  });
};
