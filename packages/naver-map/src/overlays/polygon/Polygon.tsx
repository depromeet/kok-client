"use client";

import { useEffect, useRef } from "react";
import { NaverPolygon, PolygonProps } from "../../types";
import { theme } from "@repo/ui/tokens";

const Polygon = ({ map, path }: PolygonProps) => {
  const polygonRef = useRef<NaverPolygon | null>(null);

  useEffect(() => {
    if (!window.naver || !map || !path) return;

    if (polygonRef.current) {
      polygonRef.current.setMap(null);
    }

    try {
      const polygonPath = path.map(
        (point) => new naver.maps.LatLng(point.lat, point.lng)
      );

      const polygon = new naver.maps.Polygon({
        map: map,
        paths: [polygonPath],
        fillColor: theme.colors.mapPolygon,
        strokeColor: theme.colors.mapPolygon,
        strokeWeight: 0.1,
      });

      polygonRef.current = polygon;
    } catch (error) {
      console.error("폴리곤 생성 실패:", error);
    }

    return () => {
      if (polygonRef.current) {
        polygonRef.current.setMap(null);
      }
    };
  }, [map, path]);

  return null;
};

export default Polygon;
