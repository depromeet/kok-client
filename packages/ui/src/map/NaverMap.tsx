"use client";
import React, { useEffect, useRef } from "react";
import { NaverMapProps } from "./types";

export const NaverMap = ({
  width = "100%",
  height = "400px",
}: NaverMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

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
          center: new window.naver.maps.LatLng(37.5666103, 126.9783882), // 기본: 시청
          zoom: 17,
          logoControl: false,
          mapDataControl: false,
          scaleControl: false,
        };

        new window.naver.maps.Map(mapRef.current, mapOptions);
      } catch (error) {
        console.error("네이버 지도 생성 실패", error);
      }
    };

    document.head.appendChild(script);
  }, []);

  return <div ref={mapRef} style={{ width, height }} />;
};
