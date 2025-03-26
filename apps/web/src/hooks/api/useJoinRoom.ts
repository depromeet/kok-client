import type { IJoinRoom } from "@/api/types/participate-room";
import { useMutation } from "@repo/shared/tanstack-query";
import roomController from "@/api/controllers/room.controller";

export const useJoinRoom = (options?: { onError?: () => void }) => {
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
      console.error("방 참여 실패:", error);
      if (options?.onError) {
        options.onError();
      }
    },
  });
};
