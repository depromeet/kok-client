import { MarkerData } from "@repo/naver-map";

export interface MapLocationData {
  locations: MarkerData[];
  centerPoint: MarkerData;
}

export interface MapLocationParams {
  userLat: number;
  userLng: number;
}

export interface LocationCentroid {
  uuid: string;
  latitude: number;
  longitude: number;
} // 중간역 필요

export interface LocationConvexHull {
  uuid: string;
  convexHull: {
    latitude: number;
    longitude: number;
    uuid: string;
    memberId: number;
  }[];
  inside: {
    latitude: number;
    longitude: number;
    uuid?: string;
    memberId: number;
  }[];
}
