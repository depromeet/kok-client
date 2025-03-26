import { RoomInfoResponse } from "@/api/types/room/index.type";
import { useQuery } from "@repo/shared/tanstack-query";

export const getRoomInfo = async (roomId: string) => {
  try {
    const response = await fetch(`/api/rooms/${roomId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  } catch (error) {
    console.error("Error: ", error);
    throw new Error("방 정보를 불러올 수 없습니다.");
  }
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
