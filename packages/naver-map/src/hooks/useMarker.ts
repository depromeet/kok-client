"use client";

import { useRef } from "react";
import { NaverMapInstance, NaverMapMarker } from "../types";

interface MarkerParams {
  map: NaverMapInstance;
  customMarkerData?: { marker: HTMLDivElement; width: number; height: number };
}

export const Marker = ({ map, customMarkerData }: MarkerParams) => {
  const markersRef = useRef<NaverMapMarker[]>([]);

  const create = ({
    latitude,
    longitude,
  }: {
    latitude: number;
    longitude: number;
  }) => {
    const markerOptions = {
      map,
      position: new naver.maps.LatLng(latitude, longitude),
      icon: customMarkerData && {
        content: customMarkerData.marker,
        anchor: new naver.maps.Point(
          customMarkerData.width / 2,
          customMarkerData.height + 4
        ),
      },
    };
    const marker = new naver.maps.Marker(markerOptions);
    markersRef.current.push(marker);
  };

  const cleanUp = () => {
    markersRef.current.forEach((marker) => {
      marker.setMap(null);
    });
    markersRef.current = [];
  };

  return { create, cleanUp };
};
