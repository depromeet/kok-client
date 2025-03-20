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
  roomId: string;
  latitude: number;
  longitude: number;
} // 중간역 필요

export interface LocationConvexHull {
  roomId: string;
  convexHull: {
    latitude: number;
    longitude: number;
    roomId: string;
    memberId: number;
  }[];
  inside: {
    latitude: number;
    longitude: number;
    roomId?: string;
    memberId: number;
  }[];
}
