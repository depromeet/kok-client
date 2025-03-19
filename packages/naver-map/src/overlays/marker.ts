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
  }: {
    latitude: number;
    longitude: number;
  }) => {
    const markerOptions = {
      map,
      position: new naver.maps.LatLng(latitude, longitude),
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
