"use client";

import { useEffect, useRef } from "react";
import { NaverMapProps } from "./types";

export const NaverMap = ({ width, height }: NaverMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const defaultZoomLevel = 16; // 디자인팀 논의 후 수정

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_NAVER_CLIENT_ID) {
      console.error("네이버 ID 부재");
      return;
    }

    const script = document.createElement("script");
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`;
    script.async = true;

    script.onerror = () => {
      console.error("네이버 지도 로드 실패");
    };

    script.onload = () => {
      if (!mapRef.current || !window.naver) {
        console.error("지도 초기화 불가");
        return;
      }
      try {
        const mapOptions = {
          center: new naver.maps.LatLng(37.5666103, 126.9783882), // 기본: 시청
          zoom: defaultZoomLevel,
          logoControl: false,
          mapDataControl: false,
          scaleControl: false,
        };

        new naver.maps.Map(mapRef.current, mapOptions);
      } catch (error) {
        console.error("네이버 지도 생성 실패", error);
      }
    };

    document.head.appendChild(script);
  }, []);

  return <div ref={mapRef} style={{ width, height }} />;
};
