"use client";

import { useRef } from "react";
import { NaverMapInstance, NaverMapMarker } from "../types";

interface MarkerParams {
  map: NaverMapInstance;
}

export const Marker = ({ map }: MarkerParams) => {
  const markersRef = useRef<NaverMapMarker[]>([]);

  const create = ({
    latitude,
    longitude,
    customMarkerData,
  }: {
    latitude: number;
    longitude: number;
    customMarkerData?: {
      marker: HTMLDivElement;
      width?: number;
      height?: number;
    };
  }) => {
    if (!window.naver || !map) return;

    const markerOptions = {
      map,
      position: new naver.maps.LatLng(latitude, longitude),
      icon: customMarkerData && {
        content: customMarkerData.marker,
        anchor: new naver.maps.Point(
          (customMarkerData.width ?? 0) / 2,
          (customMarkerData.height ?? 0) + 4
        ),
      },
    };
    const marker = new naver.maps.Marker(markerOptions);
    markersRef.current.push(marker);
  };

  const cleanUp = () => {
    if (!window.naver || !map) return;

    markersRef.current.forEach((marker) => {
      marker.setMap(null);
    });
    markersRef.current = [];
  };

  return { create, cleanUp };
};
