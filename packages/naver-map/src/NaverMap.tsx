"use client";

import { useEffect, useRef, useState } from "react";
import { NaverMapProps, NaverMapInstance } from "./types";
import Polygon from "./Polygon";
import { getCenterMarkerElement } from "./CenterMarkerElement";
import DotMarker from "./DotMarker";
import { getFinalMarkerElement } from "./FinalMarker";
import { Flex } from "@repo/ui/components";

export const NAVER_MAP_CONFIG = {
  ZOOM_LEVEL: 17, // 확정
  MIN_ZOOM: 11, // 10, 11 추후 결정 예정
  MAX_ZOOM: 17,
  SCALE_FACTOR: 0.3,
  SEOUL_CENTER: { lat: 37.5665, lng: 126.978 },
  SEOUL_BOUNDS: {
    north: 37.7017,
    south: 37.4276,
    east: 127.1836,
    west: 126.7642,
  }, // 서울시 경계 좌표
};

export const NaverMap = ({
  width,
  height,
  markerData,
  centerMarker,
  finaCenterMarker,
  onMarkerClick,
  polygon,
}: NaverMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<NaverMapInstance | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPolygon, setShowPolygon] = useState<boolean>(false);
  const [showPolyline, setShowPolyline] = useState<boolean>(false);
  const centerMarkerRef = useRef<naver.maps.Marker | null>(null);

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

  // 지도 초기화 함수
  const initializeMap = () => {
    if (!mapRef.current || !window.naver || !window.naver.maps) return;
    try {
      const mapOptions = {
        center: finaCenterMarker
          ? new window.naver.maps.LatLng(
              finaCenterMarker.latitude,
              finaCenterMarker.longitude
            )
          : centerMarker
            ? new window.naver.maps.LatLng(
                centerMarker.latitude,
                centerMarker.longitude
              )
            : undefined,
        zoom: NAVER_MAP_CONFIG.ZOOM_LEVEL,
        minZoom: NAVER_MAP_CONFIG.MIN_ZOOM,
        maxZoom: NAVER_MAP_CONFIG.MAX_ZOOM,
        logoControl: false,
        mapDataControl: false,
        scaleControl: false,
      };

      const map = new window.naver.maps.Map(mapRef.current, mapOptions);

      window.naver.maps.Event.addListener(map, "click", (e) => {
        const clickedLat = e.coord.lat();
        const clickedLng = e.coord.lng();

        if (
          clickedLat > NAVER_MAP_CONFIG.SEOUL_BOUNDS.north ||
          clickedLat < NAVER_MAP_CONFIG.SEOUL_BOUNDS.south ||
          clickedLng > NAVER_MAP_CONFIG.SEOUL_BOUNDS.east ||
          clickedLng < NAVER_MAP_CONFIG.SEOUL_BOUNDS.west
        ) {
          map.panTo(
            new window.naver.maps.LatLng(
              NAVER_MAP_CONFIG.SEOUL_CENTER.lat,
              NAVER_MAP_CONFIG.SEOUL_CENTER.lng
            )
          ); // 서울 외 지역 클릭 시 시청으로 이동
        }
      });

      if (centerMarker) {
        // 센터 마커 생성
        const centerMarkerElement = getFinalMarkerElement();

        if (centerMarkerRef.current) {
          centerMarkerRef.current.setMap(null);
        }

        centerMarkerRef.current = new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(
            centerMarker.latitude,
            centerMarker.longitude
          ),
          map: map,
          icon: {
            content: centerMarkerElement,
            anchor: new window.naver.maps.Point(20.5, 20.5),
          },
        });
      }

      if (finaCenterMarker) {
        if (centerMarkerRef.current) {
          centerMarkerRef.current.setMap(null);
        }

        const finalMarkerElement = getFinalMarkerElement();

        centerMarkerRef.current = new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(
            finaCenterMarker.latitude,
            finaCenterMarker.longitude
          ),
          map: map,
          icon: {
            content: finalMarkerElement,
            anchor: new window.naver.maps.Point(46, 46),
          },
        });
      }

      setMapInstance(map);
      setShowPolygon(true);
      setShowPolyline(true);
    } catch (e) {
      console.error("네이버 지도 생성 실패", e);
    }
  };

  const handleMarkerClicked = (markerId: number) => {
    if (onMarkerClick) {
      onMarkerClick(markerId);
    }
  };

  useEffect(() => {
    if (!isLoaded) {
      loadNaverMapScript();
    } else if (mapRef.current && !mapInstance) {
      initializeMap();
    }
  }, [isLoaded]);

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
        {!isLoaded && <div>지도 스크립트 로딩 중..</div>}

        {mapInstance && (
          <>
            {showPolygon && polygon && polygon.length > 0 && (
              <Polygon map={mapInstance} path={polygon} />
            )}
            {markerData && (
              <DotMarker
                map={mapInstance}
                markerData={markerData}
                onMarkerClicked={handleMarkerClicked}
              />
            )}
          </>
        )}
      </div>
    </Flex>
  );
};

export default NaverMap;
