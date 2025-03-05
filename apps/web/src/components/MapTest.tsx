"use client";

import { NaverMap } from "@repo/naver-map";
import { useGetMapLocationData } from "@/hooks/api/useGetMapLocationData";
import { useEffect } from "react";

const MapTest = () => {
  const { locations, centerPoint, isLoading, isError } =
    useGetMapLocationData();

  useEffect(() => {
    console.log("지도 데이터:", { locations, centerPoint, isLoading, isError });
  }, [locations, centerPoint, isLoading, isError]);

  const handleMarkerClick = (markerId: number) => {
    console.log(`마커 ${markerId} 클릭`);
  };

  if (isLoading) {
    return <div>지도 데이터 불러오는 중...</div>;
  }

  if (isError) {
    return <div>지도 데이터 불러오기 실패</div>;
  }

  return (
    <NaverMap
      width="600px"
      height="700px"
      markerData={locations}
      centerMarker={centerPoint}
      onMarkerClick={handleMarkerClick}
    />
  );
};

export default MapTest;
