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

export type TRaondomProfile = ICommon<IRaondomProfile>;
