import { getLatLng } from "@repo/naver-map";

interface Point {
  memberId?: number;
  latitude: number;
  longitude: number;
}

interface ConvexHullData {
  convexHull?: Point[];
  inside?: Point[];
}

interface MarkerData {
  id: number;
  position: {
    lat: number;
    lng: number;
  };
  title: string;
}

export const convertToMarkerData = (convH: ConvexHullData): MarkerData[] => {
  if (!convH) return [];
  return [
    ...(convH.convexHull || []).map((point, index) => ({
      id: point.memberId ?? -1,
      position: {
        lat: point.latitude,
        lng: point.longitude,
      },
      title: `convH ${index + 1}`,
    })),
    ...(convH.inside || []).map((point, index) => ({
      id: point.memberId ?? -1,
      position: {
        lat: point.latitude,
        lng: point.longitude,
      },
      title: `inside ${index + 1}`,
    })),
  ];
};

export const convertToPolygonPath = (convH: ConvexHullData) => {
  if (!convH?.convexHull) return [];
  return convH.convexHull.map((point) => ({
    lat: point.latitude,
    lng: point.longitude,
  }));
};

interface Centroid {
  roomId: string;
  latitude: number;
  longitude: number;
}

export const convertToCenterMarkerData = (
  centroid: Centroid | null
): Centroid | undefined => {
  if (!centroid) return undefined;
  return {
    roomId: centroid.roomId,
    latitude: centroid.latitude,
    longitude: centroid.longitude,
  };
};

export const convertWGS84ToLatLng = ({ y, x }: { y: string; x: string }) => {
  return getLatLng({ y: +y / 10000000, x: +x / 10000000 });
};

export const getFullAddressAndTitle = (addressInfo: any) => {
  const [admcode, loadAddr] = addressInfo;
  const { addition0, name, number1, number2 } = loadAddr.land;
  const { area1, area2 } = admcode.region;
  const title = addition0.value ?? "현재 위치";
  const firstAddress = `${area1.name} ${area2.name}`;
  const secondAddress = `${name}${number1 !== "" ? ` ${number1 + (number2 !== "" ? `-${number2}` : "")}` : ""}`;
  const fullAddress = `${firstAddress} ${secondAddress}`;
  return { title, fullAddress };
};

// 구 추출 TODO: 타입 추가 필요 - 다른 브랜치에 존재
export const extractDistrict = (data: any): string => {
  return data.results?.[0]?.region?.area2?.name || "알 수 없음";
};
