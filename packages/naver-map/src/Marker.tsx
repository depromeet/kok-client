"use client";

import { useEffect, useRef } from "react";
import { MarkerProps, NaverMapMarker } from "./types";

const Marker = ({ map, markerData, onMarkerClicked }: MarkerProps) => {
  const markersRef = useRef<NaverMapMarker[]>([]);

  useEffect(() => {
    if (!window.naver || !map) return;

    if (markersRef.current.length > 0) {
      cleanup();
    }

    createMarkers();

    return () => {
      if (markersRef.current.length > 0) {
        cleanup();
      }
    };
  }, [map, markerData]);

  const cleanup = () => {
    markersRef.current.forEach((marker) => {
      marker.setMap(null);
    });
    markersRef.current = [];
  };

  const createMarkers = () => {
    if (!markerData.length) return;

    markersRef.current = markerData.map((item) => {
      const markerElement = document.createElement("div");
      markerElement.style.cssText = `
      width: 20px;
      height: 20px;
      background:rgb(251, 161, 143);
      border-radius: 50px;
      border: 3px solid rgb(248, 64, 27);
      box-shadow: 0 2px 5px 3px rgba(145, 145, 145, 0.5);
      cursor: pointer;
      `; // 추후 스타일 코드 분리 예정

      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(item.position.lat, item.position.lng),
        map: map,
        icon: {
          content: markerElement,
          anchor: new naver.maps.Point(10, 10),
        },
        animation: 2,
      });

      naver.maps.Event.addListener(marker, "click", () => {
        if (onMarkerClicked) {
          onMarkerClicked(item.id);
          alert(`${item.id}인 ${item.title}이 클릭되었어요`);
        }
      });
      return marker;
    });

    if (markersRef.current.length > 1) {
      // 좌표들을 포함하는 사각형 영역을 정의하는 클래스
      const initialPoint = new naver.maps.LatLng(0, 0);
      const bounds = new naver.maps.LatLngBounds(initialPoint, initialPoint);
      markerData.forEach((item) => {
        bounds.extend(
          new naver.maps.LatLng(item.position.lat, item.position.lng)
        );
      });
      map.fitBounds(bounds, {
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
      });
    }
  };
  return null;
};

export default Marker;
