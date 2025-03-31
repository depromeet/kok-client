import { API_URLS } from "@/constants/api";
import { useQuery } from "@repo/shared/tanstack-query";
import { Candidate } from "@/components/vote-voting/templates/type";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const fetchVoteCandidates = async (roomId: string, memberId: string) => {
  const response = await fetch(
    `${BASE_URL}${API_URLS.GET_VOTE_CANDIDATES(roomId, memberId)}`,
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

export function useVoteCandidates(roomId: string, memberId: string) {
  return useQuery<{ data: Candidate[] }>({
    queryKey: ["voteCandidates", roomId, memberId],
    queryFn: () => fetchVoteCandidates(roomId, memberId),
  });
}
