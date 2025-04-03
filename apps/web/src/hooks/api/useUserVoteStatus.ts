import { useQuery } from "@repo/shared/tanstack-query";
import { API_URLS } from "@/constants/api";
import { TUserStatus } from "@/api/types/vote/index.type";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const fetchUserVoteStatus = async (roomId: string) => {
  const response = await fetch(
    `${BASE_URL}${API_URLS.GET_USER_VOTE_STATUS(roomId)}`,
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

export const useUserVoteStatus = (roomId: string) => {
  if (typeof window === "undefined") {
    return { data: undefined, isLoading: false, error: null };
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery<{ data: TUserStatus[] }>({
    queryKey: ["voteStatus", roomId],
    queryFn: () => fetchUserVoteStatus(roomId),
  });
};
