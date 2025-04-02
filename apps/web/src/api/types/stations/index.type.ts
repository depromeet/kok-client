import { ICommon } from "../common/common.type";

export interface StationInfo {
  routes: string[];
  station: {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    priority: number;
  };
}

export type SearchedStationsResponse = ICommon<StationInfo[]>;
