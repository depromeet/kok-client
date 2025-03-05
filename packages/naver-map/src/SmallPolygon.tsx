"use client";

import { useEffect, useRef } from "react";
import { PolygonProps, NaverPolygon } from "./types";
import { NAVER_MAP_CONFIG } from "./NaverMap";

const SmallPolygon = ({
  map,
  markerData,
  centerMarker,
  scaleFactor = NAVER_MAP_CONFIG.SCALE_FACTOR,
}: PolygonProps) => {
  const polygonRef = useRef<NaverPolygon>(null);

  useEffect(() => {
    if (!window.naver || !map || !markerData.length || !centerMarker) return;

    if (polygonRef.current) {
      polygonRef.current.setMap(null);
    }

    try {
      const centerPos = new naver.maps.LatLng(
        centerMarker.position.lat,
        centerMarker.position.lng
      );
      // 위/경도 => 픽셀 변환
      const projection = map.getProjection();

      const centerPoint = projection.fromCoordToOffset(centerPos);

      const markerPoints = markerData.map((marker) => {
        const markerPos = new naver.maps.LatLng(
          marker.position.lat,
          marker.position.lng
        );
        return projection.fromCoordToOffset(markerPos);
      });

      const smallPolygonPoints = markerPoints.map((point) => {
        const dx = point.x - centerPoint.x;
        const dy = point.y - centerPoint.y;

        // 벡터에 축소 비율 적용
        const scaledX = centerPoint.x + dx * scaleFactor;
        const scaledY = centerPoint.y + dy * scaleFactor;

        // 픽셀 => 위/경도 변환
        return projection.fromOffsetToCoord(
          new naver.maps.Point(scaledX, scaledY)
        );
      });

      const smallPolygon = new naver.maps.Polygon({
        map: map,
        paths: [smallPolygonPoints],
        fillColor: "rgb(255, 42, 0)",
        fillOpacity: 0.8,
        strokeWeight: 0,
      });

      polygonRef.current = smallPolygon;
    } catch (e) {
      console.error("SmallPolygon 생성 오류", e);
    }

    return () => {
      if (polygonRef.current) {
        polygonRef.current.setMap(null);
      }
    };
  }, [map, markerData, centerMarker, scaleFactor]);

  return null;
};

export default SmallPolygon;
