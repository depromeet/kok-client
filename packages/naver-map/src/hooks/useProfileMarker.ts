"use client";

import { useEffect, useRef } from "react";
import { useNaverMap } from "../naver-map-provider";
import { ProfileMarker } from "../overlays/marker/profile-marker/ProfileMarker";

export type ProfileMarkerProps = {
  latitude: number;
  longitude: number;
  imageUrl: string;
};

export const useProfileMarker = (markerData?: ProfileMarkerProps) => {
  const { map } = useNaverMap();
  const markerRef = useRef<naver.maps.Marker | null>(null);

  useEffect(() => {
    if (!map || !markerData) {
      if (markerRef.current) {
        markerRef.current.setMap(null);
        markerRef.current = null;
      }
      return;
    }

    if (markerRef.current) {
      markerRef.current.setMap(null);
      markerRef.current = null;
    }

    const position = new window.naver.maps.LatLng(
      markerData.latitude,
      markerData.longitude
    );

    const profileMarkerElement = ProfileMarker({
      profileImageUrl: markerData.imageUrl || "",
    });

    const marker = new window.naver.maps.Marker({
      position: position,
      map: map,
      icon: {
        content: profileMarkerElement || "",
        anchor: new window.naver.maps.Point(24, 48),
      },
    });

    markerRef.current = marker;

    return () => {
      if (markerRef.current) {
        markerRef.current.setMap(null);
        markerRef.current = null;
      }
    };
  }, [map, markerData]);

  return markerRef.current;
};
