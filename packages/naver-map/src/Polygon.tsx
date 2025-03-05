"use client";

import { useEffect, useRef } from "react";
import { NaverPolygon, PolygonProps } from "./types";

const Polygon = ({ map, markerData }: PolygonProps) => {
  const polygonRef = useRef<NaverPolygon>(null);

  useEffect(() => {
    if (!window.naver || !map || !markerData.length) return;

    if (polygonRef.current) {
      polygonRef.current.setMap(null);
    }

    const paths = markerData.map(
      (marker) =>
        new naver.maps.LatLng(marker.position.lat, marker.position.lng)
    );

    const polygon = new naver.maps.Polygon({
      map: map,
      paths: [paths],
      fillColor: "rgb(248, 64, 27)",
      strokeWeight: 0,
      fillOpacity: 0.5,
    });

    polygonRef.current = polygon;

    return () => {
      if (polygonRef.current) {
        polygonRef.current.setMap(null);
      }
    };
  }, [markerData]);
  return null;
};

export default Polygon;
