import { RoomInfoResponse } from "@/api/types/room/index.type";
import { useQuery } from "@repo/shared/tanstack-query";

export const getRoomInfo = async (roomId: string) => {
  const response = await fetch(`/api/rooms/${roomId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const useRoomInfo = (roomId: string) => {
  return useQuery<RoomInfoResponse>({
    queryKey: ["RoomInfo", roomId],
    queryFn: () => getRoomInfo(roomId),
    retry: false,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
// "34f25ea7-176a-44ee-8e7e-45842cd2f790"
