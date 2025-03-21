"use client";

declare global {
  interface Window {
    Kakao: any;
  }
}
interface ShareKakaoOptions {
  roomId: string;
  roomName: string;
  memberCount: number;
}

export const KAKAO_STARTING_POINT_TEMPLATE_ID = 118630;

export const initKakaoSDK = () => {
  if (typeof window !== "undefined") {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
    }
  }
};

export const shareKakao = (options: ShareKakaoOptions): void => {
  const { roomId, roomName, memberCount } = options;

  if (typeof window === "undefined") return;

  try {
    if (window.Kakao && window.Kakao.Share) {
      window.Kakao.Share.sendCustom({
        templateId: KAKAO_STARTING_POINT_TEMPLATE_ID,
        templateArgs: {
          roomId,
          roomName,
          memberCount,
        },
      });
    }
  } catch (error) {
    console.error("카카오 공유 중 오류 발생:", error);
  }
};
