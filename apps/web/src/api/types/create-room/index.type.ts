import { ICommon } from "../common/common.type";

export interface ICreateRoom {
  roomName: string;
  capacity: number;
  hostProfile: string;
  hostNickname: string;
}

export interface ICreateRoomValues extends ICreateRoom {
  step: number;
}

export interface IRaondomProfile {
  imageUrl: string;
  nickname: string;
}

export interface IMemberProfile {
  id: string;
  nickname: string;
  profile: string;
  role: string;
}

export interface ICompleteCreateRoom {
  id: string;
  roomName: string;
  capacity: number;
  member: IMemberProfile;
  participantCount: number;
  nonParticipantCount: number;
}

export type TRaondomProfile = ICommon<IRaondomProfile>;

export type TCompleteCreateRoom = ICommon<ICompleteCreateRoom>;
