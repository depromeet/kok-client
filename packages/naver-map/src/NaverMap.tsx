"use client";

import { useEffect, useRef, useState } from "react";
import { NaverMapProps, NaverMapInstance } from "./types";
import Polygon from "./Polygon";
import DotMarker from "./DotMarker";
import { getFinalMarkerElement } from "./FinalMarker";
import { Flex, LoadingSpinner } from "@repo/ui/components";
import { useNaverMap } from "./naver-map-provider";
import { ProfileMarker } from "./overlays/profile-marker";

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
  markerData = [],
  centerMarker,
  finalCenterMarker,
  memberMarkers = [],
  onMarkerClick,
  polygon = [],
}: NaverMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<NaverMapInstance | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPolygon, setShowPolygon] = useState<boolean>(false);
  const centerMarkerRef = useRef<naver.maps.Marker | null>(null);
  const leaderMarkerRef = useRef<naver.maps.Marker | null>(null);
  const memberMarkersRef = useRef<naver.maps.Marker[]>([]);
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

  const createLatLng = (lat: number, lng: number) => {
    return new window.naver.maps.LatLng(lat, lng);
  };

  const initializeMap = () => {
    if (!mapRef.current || !window.naver || !window.naver.maps) return;

    try {
      const centerPosition = finalCenterMarker
        ? createLatLng(finalCenterMarker.latitude, finalCenterMarker.longitude)
        : centerMarker
          ? createLatLng(centerMarker.latitude, centerMarker.longitude)
          : undefined;

      const mapOptions = {
        center: centerPosition,
        zoom: NAVER_MAP_CONFIG.ZOOM_LEVEL,
        minZoom: NAVER_MAP_CONFIG.MIN_ZOOM,
        maxZoom: NAVER_MAP_CONFIG.MAX_ZOOM,
        logoControl: false,
        mapDataControl: false,
        scaleControl: false,
      };

      const map = new window.naver.maps.Map(mapRef.current, mapOptions);

      setMapInstance(map);
      setShowPolygon(true);
      setMap(map);
    } catch (e) {
      console.error("네이버 지도 생성 실패", e);
    }
  };

  const updateCenterMarker = () => {
    if (!mapInstance) return;

    if (centerMarkerRef.current) {
      centerMarkerRef.current.setMap(null);
      centerMarkerRef.current = null;
    }

    const markerToUse = finalCenterMarker || centerMarker;
    if (!markerToUse) return;

    const markerElement = getFinalMarkerElement();
    const isFinalized = !!finalCenterMarker;

    centerMarkerRef.current = new window.naver.maps.Marker({
      position: createLatLng(markerToUse.latitude, markerToUse.longitude),
      map: mapInstance,
      icon: {
        content: markerElement,
        anchor: new window.naver.maps.Point(
          isFinalized ? 46 : 20.5,
          isFinalized ? 46 : 20.5
        ),
      },
    });
  };

  const createLeaderMarker = () => {
    if (!mapInstance || !Array.isArray(markerData) || !markerData[0]) return;

    if (leaderMarkerRef.current) {
      leaderMarkerRef.current.setMap(null);
    }

    const { position, profileUrl } = markerData[0];
    const markerPosition = createLatLng(position.lat, position.lng);

    const profileMarkerElement = ProfileMarker({
      profileImageUrl: profileUrl || "",
    });

    leaderMarkerRef.current = new window.naver.maps.Marker({
      position: markerPosition,
      map: mapInstance,
      icon: {
        content: profileMarkerElement || "",
        anchor: new window.naver.maps.Point(24, 48),
      },
    });

    mapInstance.setCenter(markerPosition);
    mapInstance.setZoom(NAVER_MAP_CONFIG.ZOOM_LEVEL);
  };

  const updateMemberMarkers = () => {
    if (!mapInstance) return;

    // 기존 마커 제거
    memberMarkersRef.current.forEach((marker) => marker.setMap(null));
    memberMarkersRef.current = [];

    memberMarkers.forEach((markerData) => {
      const markerPosition = createLatLng(
        markerData.latitude,
        markerData.longitude
      );
      const profileMarkerElement = ProfileMarker({
        profileImageUrl: markerData.imageUrl || "",
      });

      const marker = new window.naver.maps.Marker({
        position: markerPosition,
        map: mapInstance,
        icon: {
          content: profileMarkerElement || "",
          anchor: new window.naver.maps.Point(24, 48),
        },
      });

      memberMarkersRef.current.push(marker);
    });
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

  useEffect(() => {
    if (mapInstance) {
      updateCenterMarker();
    }
  }, [mapInstance, centerMarker, finalCenterMarker]);

  useEffect(() => {
    if (mapInstance && Array.isArray(markerData) && markerData.length === 1) {
      createLeaderMarker();
    }

    return () => {
      if (leaderMarkerRef.current) {
        leaderMarkerRef.current.setMap(null);
      }
    };
  }, [mapInstance, markerData]);

  useEffect(() => {
    if (mapInstance && memberMarkers.length > 0) {
      updateMemberMarkers();
    }

    return () => {
      memberMarkersRef.current.forEach((marker) => marker.setMap(null));
      memberMarkersRef.current = [];
    };
  }, [mapInstance, memberMarkers]);

  const isMarkerDataValid = Array.isArray(markerData) && markerData.length > 0;
  const isPolygonValid = Array.isArray(polygon) && polygon.length > 0;

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
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LoadingSpinner width={30} height={30} />
          </div>
        ) : (
          mapInstance && (
            <>
              {showPolygon && isPolygonValid && (
                <Polygon map={mapInstance} path={polygon} />
              )}
              {isMarkerDataValid && markerData.length > 1 && (
                <DotMarker
                  map={mapInstance}
                  markerData={markerData}
                  onMarkerClicked={handleMarkerClicked}
                />
              )}
            </>
          )
        )}
      </div>
    </Flex>
  );
};

export default NaverMap;
