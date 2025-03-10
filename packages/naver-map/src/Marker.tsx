"use client";

import { useEffect, useRef } from "react";
import { MarkerProps, NaverMapMarker } from "./types";
import { theme } from "@repo/ui/tokens";
import { createMapMarkerIcon } from "./MapMarkerIcon";

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
    const borderColor = theme.colors.mapMarkerBorder;

    markersRef.current = markerData.map((item) => {
      const markerIcon = createMapMarkerIcon({ borderColor });

      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(item.position.lat, item.position.lng),
        map: map,
        icon: {
          content: markerIcon,
          anchor: new naver.maps.Point(10, 30),
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
