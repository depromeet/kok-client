"use client";

import { useEffect, useRef, useState } from "react";
import { NaverMapCoreProps, NaverMapInstance } from "./types";
import { Flex, LoadingSpinner } from "@repo/ui/components";
import { useNaverMap } from "./naver-map-provider";

export const NAVER_MAP_CONFIG = {
  ZOOM_LEVEL: 17,
  MIN_ZOOM: 9,
  MAX_ZOOM: 18,
  SCALE_FACTOR: 0.3,
  SEOUL_CENTER: { lat: 37.5665, lng: 126.978 },
  SEOUL_BOUNDS: {
    north: 37.7017,
    south: 37.4276,
    east: 127.1836,
    west: 126.7642,
  },
};

export const NaverMap = ({
  width,
  height,
  center,
  zoom = NAVER_MAP_CONFIG.ZOOM_LEVEL,
  children,
}: NaverMapCoreProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<NaverMapInstance | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { setMap } = useNaverMap();

  const loadNaverMapScript = () => {
    if (window.naver && window.naver.maps) {
      setIsLoaded(true);
      return;
    }

    const NAVER_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
    if (!NAVER_CLIENT_ID) return;

    const script = document.createElement("script");
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVER_CLIENT_ID}`;
    script.async = true;

    script.onerror = () => console.error("네이버 지도 로드 실패");
    script.onload = () => {
      if (!mapRef.current || !window.naver) {
        console.error("지도 초기화 불가");
        return;
      }
      setIsLoaded(true);
    };

    document.head.appendChild(script);
  };

  const initializeMap = () => {
    if (!mapRef.current || !window.naver || !window.naver.maps) return;

    try {
      const centerPosition = center
        ? new window.naver.maps.LatLng(center.latitude, center.longitude)
        : new window.naver.maps.LatLng(
            NAVER_MAP_CONFIG.SEOUL_CENTER.lat,
            NAVER_MAP_CONFIG.SEOUL_CENTER.lng
          );

      const mapOptions = {
        center: centerPosition,
        zoom: zoom,
        minZoom: NAVER_MAP_CONFIG.MIN_ZOOM,
        maxZoom: NAVER_MAP_CONFIG.MAX_ZOOM,
        logoControl: false,
        mapDataControl: false,
        scaleControl: false,
      };

      const map = new window.naver.maps.Map(mapRef.current, mapOptions);

      setMapInstance(map);
      setMap(map);
    } catch (e) {
      console.error("네이버 지도 생성 실패", e);
    }
  };

  useEffect(() => {
    if (!isLoaded) {
      loadNaverMapScript();
    } else if (mapRef.current && !mapInstance) {
      initializeMap();
    }
  }, [isLoaded]);

  useEffect(() => {
    if (mapInstance && center) {
      const centerPosition = new window.naver.maps.LatLng(
        center.latitude,
        center.longitude
      );
      mapInstance.setCenter(centerPosition);
    }
  }, [mapInstance, center]);

  return (
    <Flex style={{ maxWidth: "600px" }}>
      <div
        ref={mapRef}
        style={{
          width,
          height,
          position: "relative",
        }}
      >
        {!isLoaded ? (
          <Flex
            justify="center"
            align="center"
            style={{ height: "100%", width: "100%" }}
          >
            <LoadingSpinner width={30} height={30} />
          </Flex>
        ) : (
          mapInstance && children
        )}
      </div>
    </Flex>
  );
};

export default NaverMap;
