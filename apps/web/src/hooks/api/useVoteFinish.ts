import { API_URLS } from "@/constants/api";
import { useMutation } from "@repo/shared/tanstack-query";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const voteFinish = async (roomId: string) => {
  const response = await fetch(
    `${BASE_URL}${API_URLS.POST_VOTE_FINISH(roomId)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.json();
};

export const useVoteFinish = ({ onSuccess }: { onSuccess: VoidFunction }) => {
  return useMutation({
    mutationFn: voteFinish,
    onSuccess,
  });
};
