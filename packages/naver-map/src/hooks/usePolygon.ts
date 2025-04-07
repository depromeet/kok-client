"use client";

import { useEffect, useRef } from "react";
import { useNaverMap } from "../naver-map-provider";

export const usePolygon = (path: { lat: number; lng: number }[]) => {
  const { map } = useNaverMap();
  const polygonRef = useRef<naver.maps.Polygon | null>(null);

  useEffect(() => {
    if (!map || !path || path.length < 3) {
      if (polygonRef.current) {
        polygonRef.current.setMap(null);
        polygonRef.current = null;
      }
      return;
    }

    const naverPath = path.map(
      (point) => new window.naver.maps.LatLng(point.lat, point.lng)
    );

    if (polygonRef.current) {
      polygonRef.current.setPath(naverPath);
    } else {
      polygonRef.current = new window.naver.maps.Polygon({
        map: map,
        paths: [naverPath],
        fillColor: "rgba(0, 128, 255, 0.2)",
        strokeColor: "#0080ff",
        strokeWeight: 3,
        strokeOpacity: 0.6,
      });
    }

    return () => {
      if (polygonRef.current) {
        polygonRef.current.setMap(null);
        polygonRef.current = null;
      }
    };
  }, [map, path]);

  return polygonRef.current;
};
