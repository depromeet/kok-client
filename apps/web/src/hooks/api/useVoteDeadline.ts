import { useQuery } from "@repo/shared/tanstack-query";
import { API_URLS } from "@/constants/api";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const fetchVoteDeadline = async (roomId: string) => {
  const response = await fetch(
    `${BASE_URL}${API_URLS.GET_VOTE_DEADLINE(roomId)}`,
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

export const useVoteDeadline = (roomId: string) => {
  if (typeof window === "undefined") {
    return { data: undefined, isLoading: false, error: null };
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery<{ data: { endAt: string; candidateCount: number } }>({
    queryKey: ["voteDeadline", roomId],
    queryFn: () => fetchVoteDeadline(roomId),
  });
};
