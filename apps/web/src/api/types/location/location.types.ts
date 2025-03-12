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
  centroid: {
    latitude: number;
    longitude: number;
  };
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
    uuid: string;
    memberId: number;
  }[];
}

export interface TransformedCentroid {
  uuid: string;
  centroid: {
    latitude: number;
    longitude: number;
  };
}

export interface TransformedConvexHull {
  uuid: string;
  convexHull: Array<{
    uuid?: string;
    memberId?: number;
    latitude: number;
    longitude: number;
  }>;
  inside: Array<{
    uuid?: string;
    memberId?: number;
    latitude: number;
    longitude: number;
  }>;
}
