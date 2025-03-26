export interface LocationCentroid {
  roomId?: string;
  latitude: number;
  longitude: number;
}

export interface NaverMapProps {
  width?: string;
  height?: string;
  markerData?: MarkerDataCollection | MarkerItem[]; // 두 형태 모두 지원하도록 변경
  finalCenterMarker?: LocationCentroid;
  centerMarker?: LocationCentroid;
  onMarkerClick?: (markerId: number) => void;
  polygon?: { lat: number; lng: number }[];
}

export interface CenterMarkerData {
  roomId: string;
  latitude: number;
  longitude: number;
}

export interface MarkerData {
  roomId?: string;
  latitude: number;
  longitude: number;
}

// 네이버 맵 컴포넌트에서 사용하는 마커
export interface MarkerItem {
  id: number | string;
  position: {
    lat: number;
    lng: number;
  };
  title?: string;
  profileUrl?: string;
}

// 마커 데이터 컬렉션 인터페이스
export interface MarkerDataCollection {
  roomId: string;
  convexHull: MarkerData[];
  inside: MarkerData[];
}

// 두 형태의 마커 데이터를 모두 지원한다.
export type MarkerDataType = MarkerDataCollection | MarkerItem[];

export interface MarkerProps {
  map: naver.maps.Map;
  markerData: MarkerDataType;
  onMarkerClicked?: (markerId: number) => void;
}

export interface PolylineProps {
  map: naver.maps.Map;
  markerData: MarkerDataCollection;
  centerMarker: CenterMarkerData;
}

export interface PolygonProps {
  map: naver.maps.Map;
  path: { lat: number; lng: number }[];
}

export type NaverMapInstance = naver.maps.Map;
export type NaverPolygon = naver.maps.Polygon;
export type NaverMapMarker = naver.maps.Marker;
export type NaverLatLng = naver.maps.LatLng;
