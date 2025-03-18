import { getLatLng } from "@repo/naver-map";

export const convertToMarkerData = (convH: any) => {
  if (!convH) return [];

  return [
    ...(convH.convexHull || []).map((point, index) => ({
      id: point.memberId || index,
      position: {
        lat: point.latitude,
        lng: point.longitude,
      },
      title: `convH ${index + 1}`,
    })),
    ...(convH.inside || []).map((point, index) => ({
      id: point.memberId || (convH.convexHull?.length || 0) + index,
      position: {
        lat: point.latitude,
        lng: point.longitude,
      },
      title: `inside ${index + 1}`,
    })),
  ];
};

export const convertToPolygonPath = (convH: any) => {
  if (!convH?.convexHull) return [];

  return convH.convexHull.map((point) => ({
    lat: point.latitude,
    lng: point.longitude,
  }));
};

export const convertToCenterMarkerData = (centroid: any) => {
  if (!centroid) return undefined;

  return {
    uuid: centroid.uuid,
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
