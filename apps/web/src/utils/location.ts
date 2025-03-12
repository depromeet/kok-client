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
    centroid: {
      latitude: centroid.centroid.latitude,
      longitude: centroid.centroid.longitude,
    },
  };
};
