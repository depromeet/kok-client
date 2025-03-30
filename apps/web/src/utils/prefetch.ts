import { QueryClient } from "@repo/shared/tanstack-query";
import { getRoomInfo } from "@/hooks/api/useRoomInfo";

export const prefetchRoomData = async (
  queryClient: QueryClient,
  roomId: string
) => {
  await queryClient.prefetchQuery({
    queryKey: ["RoomInfo", roomId],
    queryFn: () => getRoomInfo(roomId),
  });
};
