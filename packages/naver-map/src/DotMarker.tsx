import { useEffect, useRef } from "react";
import { MarkerProps, MarkerDataCollection, MarkerItem } from "./types";

const DotMarker = ({ map, markerData, onMarkerClicked }: MarkerProps) => {
  // 중간 지점 계산 화면에서 보이는 마커
  const markersRef = useRef<naver.maps.Marker[]>([]);

  useEffect(() => {
    if (!map || !markerData || !window.naver || !window.naver.maps) return;

    // 기존 마커 제거
    if (markersRef.current.length > 0) {
      markersRef.current.forEach((marker) => {
        marker.setMap(null);
      });
      markersRef.current = [];
    }

    // markerData 구조에 따라 처리할 마커 데이터 배열 설정
    let markersToRender: MarkerItem[] = [];

    if (Array.isArray(markerData)) {
      markersToRender = markerData;
    } else {
      // MarkerDataCollection 형태인 경우
      const collection = markerData as MarkerDataCollection;
      if (collection.convexHull || collection.inside) {
        // MarkerData[]를 MarkerItem[] 형태로 변환
        const convertedMarkers = [
          ...collection.convexHull,
          ...collection.inside,
        ].map((item) => ({
          id: parseInt(item.uuid || "0"),
          position: {
            lat: item.latitude,
            lng: item.longitude,
          },
          title: item.uuid || "",
        }));

        markersToRender = convertedMarkers;
      }
    }

    // 마커 생성
    markersRef.current = markersToRender.map((data) => {
      const markerElement = document.createElement("div");
      markerElement.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <g filter="url(#filter0_d_950_65836)">
            <circle cx="16" cy="16" r="2" fill="#F73418" />
          </g>
          <defs>
            <filter id="filter0_d_950_65836" x="4" y="4" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.968627 0 0 0 0 0.203922 0 0 0 0 0.0941176 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_950_65836" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_950_65836" result="shape" />
            </filter>
          </defs>
        </svg>
      `;

      const marker = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(
          data.position.lat,
          data.position.lng
        ),
        map: map,
        icon: {
          content: markerElement,
          size: new window.naver.maps.Size(32, 32),
          anchor: new window.naver.maps.Point(16, 16),
        },
        title: data.title,
      });

      if (onMarkerClicked) {
        window.naver.maps.Event.addListener(marker, "click", () => {
          onMarkerClicked(data.id);
        });
      }

      return marker;
    });

    // 여러 마커가 있을 경우 모든 마커가 보이도록 지도 영역 조정
    if (markersToRender.length > 1) {
      const initialPoint = new window.naver.maps.LatLng(0, 0);
      const bounds = new window.naver.maps.LatLngBounds(
        initialPoint,
        initialPoint
      );
      markersToRender.forEach((data) => {
        bounds.extend(
          new window.naver.maps.LatLng(data.position.lat, data.position.lng)
        );
      });
      map.fitBounds(bounds, {
        top: 15,
        right: 15,
        bottom: 30,
        left: 15,
      });
    }

    return () => {
      markersRef.current.forEach((marker) => {
        marker.setMap(null);
      });
      markersRef.current = [];
    };
  }, [map, markerData, onMarkerClicked]);

  return null;
};

export default DotMarker;
