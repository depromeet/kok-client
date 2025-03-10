export interface NaverMapProps {
  width?: string;
  height?: string;
  markerData?: any;
  centerMarker?: any;
  onMarkerClick?: (markerId: number) => void;
}

export interface MarkerData {
  // 서버 API DTO 구조 확정되면 수정 예정
  id: number;
  position: {
    lat: number;
    lng: number;
  };
  title: string;
}

export interface MarkerProps {
  map: naver.maps.Map;
  markerData: MarkerData[];
  onMarkerClicked?: (markerId: number) => void;
}

export interface PolylineProps {
  map: naver.maps.Map;
  markerData: MarkerData[];
  centerMarker: MarkerData;
}

export interface PolygonProps {
  map: naver.maps.Map;
  markerData: MarkerData[];
  centerMarker?: MarkerData;
  scaleFactor?: number;
}

export type NaverMapInstance = naver.maps.Map;
export type NaverPolygon = naver.maps.Polygon;
export type NaverMapMarker = naver.maps.Marker;
