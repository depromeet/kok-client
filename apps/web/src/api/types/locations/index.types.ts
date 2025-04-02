import { ICommon } from "../common/common.type";

export interface LocationsRequestProps {
  roomId: string;
  memberId: string;
  latitude: number;
  longitude: number;
  name: string;
}

export interface Locations {
  roomId: string;
  latitude: number;
  longitude: number;
  imageUrl?: string;
}

export type LocationsResponse = ICommon<Locations>;
