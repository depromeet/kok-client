import { ICommon } from "../common/common.type";
import { Station } from "../stations/index.type";

export interface IGetUserStatus {
  roomId: string;
}

export interface TUserStatus {
  memberId: string;
  nickname: string;
  imageUrl: string;
  isVoted: true;
  address: string;
}

export interface VoteResult extends Station {
  routes: string[];
}

export type VoteResultResponse = ICommon<VoteResult>;
