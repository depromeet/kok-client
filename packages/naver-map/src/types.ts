export interface LocationCentroid {
  roomId?: string;
  latitude: number;
  longitude: number;
}

export interface CenterMarkerData {
  latitude: number;
  longitude: number;
  roomId?: string;
  isFinal?: boolean;
}

export interface MarkerData {
  roomId?: string;
  latitude: number;
  longitude: number;
}

export interface MarkerItem {
  id: number;
  position: {
    lat: number;
    lng: number;
  };
  profileUrl?: string;
}

export interface MarkerDataCollection {
  roomId: string;
  convexHull: MarkerData[];
  inside: MarkerData[];
}

export type MarkerDataType = MarkerDataCollection | MarkerItem[];

export interface MarkerProps {
  map: naver.maps.Map;
  markerData: MarkerDataType;
}

export interface PolygonProps {
  map: naver.maps.Map;
  path: { lat: number; lng: number }[];
}

export type NaverMapInstance = naver.maps.Map;
export type NaverPolygon = naver.maps.Polygon;
export type NaverMapMarker = naver.maps.Marker;
export type NaverLatLng = naver.maps.LatLng;

export type NaverMapCoreProps = {
  width: string | number;
  height: string | number;
  center?: { latitude: number; longitude: number };
  zoom?: number;
  children?: React.ReactNode;
};
