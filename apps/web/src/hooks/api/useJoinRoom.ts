import type { IJoinRoom } from "@/api/types/join-room";
import { useMutation } from "@repo/shared/tanstack-query";
import roomController from "@/api/controllers/room.controller";

export const useJoinRoom = (options?: {
  onError?: () => void;
  onSuccess?: () => void;
}) => {
  return useMutation({
    mutationFn: async ({
      roomId,
      profileValue,
    }: {
      roomId: string;
      profileValue: IJoinRoom;
    }) => {
      return await roomController.postJoinRoom(roomId, profileValue);
    },

    onError: (error) => {
      if (options?.onError) {
        options.onError();
      }
    },

    onSuccess: (data) => {
      if (options?.onSuccess) {
        options.onSuccess(); // onSuccess 콜백 호출
      }
    },
  });
};
