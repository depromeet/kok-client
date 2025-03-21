import { ICommon } from "../common/common.type";

export interface LocationsRequestProps {
  roomId: string;
  memberId: string;
  latitude: number;
  longitude: number;
}

export interface Locations {
  roomId: string;
  latitude: number;
  longitude: number;
}

export type LocationsResponse = ICommon<Locations>;
