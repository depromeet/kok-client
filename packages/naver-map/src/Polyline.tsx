"use client";

import { useEffect, useRef } from "react";
import { PolylineProps } from "./types";

const Polyline = ({ map, markerData, centerMarker }: PolylineProps) => {
  const polylinesRef = useRef<naver.maps.Polyline[]>([]);
  const animationsRef = useRef<number[]>([]);

  useEffect(() => {
    if (!window.naver || !map || !markerData.length || !centerMarker) return;

    cleanup();

    const centerLatLng = new naver.maps.LatLng(
      centerMarker.position.lat,
      centerMarker.position.lng
    );

    markerData.forEach((marker, index) => {
      const markerLatLng = new naver.maps.LatLng(
        marker.position.lat,
        marker.position.lng
      );

      const polyline = new naver.maps.Polyline({
        map: map,
        path: [markerLatLng, markerLatLng],
        strokeColor: "rgb(255, 251, 0)",
        strokeWeight: 6,
        strokeOpacity: 0.9,
        strokeLineCap: "round",
      });

      polylinesRef.current.push(polyline);

      const startTime = Date.now(); // 시작 시간

      const animate = () => {
        const elapsedTime = Date.now() - startTime; // 경과 시간
        const duration = 2000;
        const progress = Math.min(elapsedTime / duration, 1);

        if (progress < 1) {
          const currentLat =
            markerLatLng.lat() +
            (centerLatLng.lat() - markerLatLng.lat()) * progress;
          const currentLng =
            markerLatLng.lng() +
            (centerLatLng.lng() - markerLatLng.lng()) * progress;
          const currentEnd = new naver.maps.LatLng(currentLat, currentLng);

          // 폴리라인 경로 업데이트
          polyline.setPath([markerLatLng, currentEnd]);

          // 다음 프레임 요청
          const animationId = requestAnimationFrame(animate);
          animationsRef.current.push(animationId);
        } else {
          polyline.setPath([markerLatLng, centerLatLng]);
        }
      };
      const animationId = requestAnimationFrame(animate);
      animationsRef.current.push(animationId);
    });

    return () => {
      cleanup();
    };
  }, [map, markerData, centerMarker]);

  const cleanup = () => {
    animationsRef.current.forEach((animationId) => {
      cancelAnimationFrame(animationId);
    });
    animationsRef.current = [];

    polylinesRef.current.forEach((polyline) => {
      if (polyline) {
        polyline.setMap(null);
      }
    });
    polylinesRef.current = [];
  };

  return null;
};

export default Polyline;
