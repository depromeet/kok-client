import { useMutation } from "@repo/shared/tanstack-query";
import roomController from "@/api/controllers/room.controller";
import { ICreateRoom } from "@/api/types/create-room/index.type";

export const usePostData = (options?: { onError?: () => void }) => {
  return useMutation({
    mutationFn: async (createRoomValues: ICreateRoom) => {
      return await roomController.postCreateRoom(createRoomValues);
    },

    onError: (error) => {
      console.error("방 생성 실패:", error);
      if (options?.onError) {
        options.onError();
      }
    },
  });
};
