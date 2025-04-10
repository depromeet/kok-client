"use client";

import { useRef } from "react";
import { NaverMapInstance } from "../types";

interface PolygonParams {
  map: NaverMapInstance;
  options?: {
    fillColor?: string;
    fillOpacity?: number;
    strokeColor?: string;
    strokeWeight?: number;
    strokeOpacity?: number;
  };
}

export const usePolygon = ({
  map,
  options = {
    fillColor: "rgba(0, 128, 255, 0.2)",
    fillOpacity: 0.5,
    strokeColor: "#0080ff",
    strokeWeight: 3,
    strokeOpacity: 0.6,
  },
}: PolygonParams) => {
  const polygonsRef = useRef<naver.maps.Polygon[]>([]);

  const create = (path: { latitude: number; longitude: number }[]) => {
    if (!window.naver || !map) return;
    if (!path || path.length < 3) return;

    const naverPath = path.map(
      (point) => new naver.maps.LatLng(point.latitude, point.longitude)
    );

    const polygon = new naver.maps.Polygon({
      map,
      paths: [naverPath],
      fillColor: options.fillColor,
      fillOpacity: options.fillOpacity,
      strokeColor: options.strokeColor,
      strokeWeight: options.strokeWeight,
      strokeOpacity: options.strokeOpacity,
    });

    polygonsRef.current.push(polygon);
    return polygon;
  };

  const cleanUp = () => {
    if (!window.naver || !map) return;

    polygonsRef.current.forEach((polygon) => {
      polygon.setMap(null);
    });
    polygonsRef.current = [];
  };

  return { create, cleanUp };
};
