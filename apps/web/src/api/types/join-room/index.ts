import { ICommon } from "../common/common.type";

export interface IJoinRoom {
  profile: string;
  nickname: string;
}

export interface ICompleteJoinRoom {
  id: string;
  profile: string;
  nickname: string;
  participantCount: number;
  nonParticipantCount: number;
}

export type TCompleteJoinRoom = ICommon<ICompleteJoinRoom>;
