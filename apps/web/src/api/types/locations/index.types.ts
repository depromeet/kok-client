import { ICommon } from "../common/common.type";

export interface LocationsRequestProps {
  roomId: string;
  memberId: string;
  latitude: number;
  longitude: number;
  name: string; // TODO소정 -> 준영 확인 필요!!! Address 추가로 인해 추가되었는데 확인 바람!!!
}

export interface Locations {
  roomId: string;
  latitude: number;
  longitude: number;
  imageUrl?: string;
}

export type LocationsResponse = ICommon<Locations>;
