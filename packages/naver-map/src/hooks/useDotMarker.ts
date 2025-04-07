"use client";

import { useEffect, useRef } from "react";
import { useNaverMap } from "../naver-map-provider";
import { ProfileMarker } from "../overlays";
import { DotMarker } from "../overlays/marker/member-marker/DotMarker";

export type DotMarkerProps = {
  position: { lat: number; lng: number };
  id: number;
  profileUrl?: string;
};

export const useDotMarkers = (markers: DotMarkerProps[]) => {
  const { map } = useNaverMap();
  const markersRef = useRef<naver.maps.Marker[]>([]);

  useEffect(() => {
    if (!map || !markers || markers.length === 0) {
      markersRef.current.forEach((marker) => marker.setMap(null));
      markersRef.current = [];
      return;
    }

    markersRef.current.forEach((marker) => marker.setMap(null));
    markersRef.current = [];

    markers.forEach((markerData) => {
      const position = new window.naver.maps.LatLng(
        markerData.position.lat,
        markerData.position.lng
      );

      // 선택한 마커
      if (markerData === markers[0] && markerData.profileUrl) {
        const profileMarkerElement = ProfileMarker({
          profileImageUrl: markerData.profileUrl || "",
        });

        const marker = new window.naver.maps.Marker({
          position: position,
          map: map,
          icon: {
            content: profileMarkerElement || "",
            anchor: new window.naver.maps.Point(24, 48),
          },
        });

        markersRef.current.push(marker);
      } else {
        const { element, anchor } = DotMarker();

        const marker = new window.naver.maps.Marker({
          position: position,
          map: map,
          icon: {
            content: element,
            anchor: anchor,
          },
        });

        markersRef.current.push(marker);
      }
    });

    return () => {
      markersRef.current.forEach((marker) => marker.setMap(null));
      markersRef.current = [];
    };
  }, [map, markers]);

  return markersRef.current;
};
