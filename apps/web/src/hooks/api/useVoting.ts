import { API_URLS } from "@/constants/api";
import { useMutation } from "@repo/shared/tanstack-query";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const voting = async (params: {
  roomId: string;
  memberId: string;
  agreedStationIds: number[];
}) => {
  const validStationIds = params.agreedStationIds.filter(Boolean).map(Number);

  const response = await fetch(
    `${BASE_URL}${API_URLS.POST_VOTING(params.roomId, params.memberId)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ agreedStationIds: validStationIds }),
    }
  );

  return response.json();
};

export const useVoting = ({ onSuccess }: { onSuccess: VoidFunction }) => {
  return useMutation({
    mutationFn: voting,
    onSuccess,
  });
};
