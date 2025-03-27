import { useQuery, useQueryClient } from "@repo/shared/tanstack-query";

export interface StartLocationData {
  roomId: string;
  latitude: number;
  longitude: number;
  profileImageUrl: string;
}

export const useSetStartLocation = () => {
  const queryClient = useQueryClient();

  return {
    setStartLocation: (data: StartLocationData) => {
      // 'startLocation'과 roomId를 키로 사용하여 캐시에 저장
      queryClient.setQueryData(["startLocation", data.roomId], data);
    },
  };
};

export const useGetStartLocation = (roomId: string) => {
  return useQuery<StartLocationData | null>({
    queryKey: ["startLocation", roomId],
    queryFn: () => null, // 실제 API 호출 없음
    enabled: false, // 자동 요청 비활성화
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
