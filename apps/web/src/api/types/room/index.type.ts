import { ICommon } from "../common/common.type";

export interface MemberInfo {
  id: string;
  nickname: string;
  profile: string;
  role: string;
}

export interface RoomInfo {
  id: string;
  roomName: string;
  nonParticipantCount: number;
  roomStatus: string; // 소정: 약속방 상태 조회에 생긴 모드 추가
}

export type RoomInfoResponse = ICommon<RoomInfo>;
