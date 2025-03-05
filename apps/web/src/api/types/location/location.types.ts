import { MarkerData } from "@repo/naver-map";

export interface MapLocationData {
  locations: MarkerData[];
  centerPoint: MarkerData;
}

export interface MapLocationParams {
  userLat: number;
  userLng: number;
}
