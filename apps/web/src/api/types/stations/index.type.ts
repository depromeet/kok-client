import { ICommon } from "../common/common.type";

export interface Station {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  priority: number;
}

export interface StationInfo {
  routes: string[];
  station: Station;
}

export type SearchedStationsResponse = ICommon<StationInfo[]>;
export type CandidateStationResponse = ICommon<StationInfo>;
