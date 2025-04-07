"use client";

import { useEffect, useRef } from "react";
import { useNaverMap } from "../naver-map-provider";
import getFinalMarkerElement from "../overlays/marker/final-marker/FinalMarker";

export type CenterMarkerProps = {
  latitude: number;
  longitude: number;
  isFinal?: boolean;
};

export const useCenterMarker = (markerData?: CenterMarkerProps) => {
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

    const markerElement = getFinalMarkerElement();
    const isFinalized = !!markerData.isFinal;
    const position = new window.naver.maps.LatLng(
      markerData.latitude,
      markerData.longitude
    );

    if (markerRef.current) {
      markerRef.current.setPosition(position);
    } else {
      markerRef.current = new window.naver.maps.Marker({
        position: position,
        map: map,
        icon: {
          content: markerElement,
          anchor: new window.naver.maps.Point(
            isFinalized ? 46 : 20.5,
            isFinalized ? 46 : 20.5
          ),
        },
      });
    }

    return () => {
      if (markerRef.current) {
        markerRef.current.setMap(null);
        markerRef.current = null;
      }
    };
  }, [map, markerData]);

  return markerRef.current;
};
