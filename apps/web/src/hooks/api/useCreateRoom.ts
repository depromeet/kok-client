import type { ICreateRoom } from "@/api/types/create-room/index.type";

import { useMutation } from "@repo/shared/tanstack-query";
import roomController from "@/api/controllers/room.controller";

export const usePostTestData = () => {
  return useMutation({
    mutationFn: async (createRoomValues: ICreateRoom) => {
      const response = await roomController.postCreateRoom(createRoomValues);
      return response;
    },
  });
};
