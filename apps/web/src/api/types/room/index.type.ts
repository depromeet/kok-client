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
}

export type RoomInfoResponse = ICommon<RoomInfo>;
