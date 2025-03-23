"use client";

import { useState } from "react";
import MapHeader from "./organisms/MapHeader";
import RefreshCenterButton from "./organisms/RefreshCenterButton";
import { Flex } from "@repo/ui/components";
import ParticipantBottomSheet from "@/components/midpoint-result/organisms/ParticipantBottomSheet";
import { refreshStyle, mapContainer, overlayStyle } from "./style.css";
import {
  useLocationCentroid,
  useLocationConvexHull,
} from "@/hooks/api/useLocation";
import { NaverMap } from "@repo/naver-map";
import {
  convertToMarkerData,
  convertToPolygonPath,
  convertToCenterMarkerData,
} from "@/utils/location";
import StartBanner from "./organisms/StartBanner";

const FindingMidPoint = () => {
  const { data: centroid, isLoading: centroidLoading } =
    useLocationCentroid("ConvH");

  const { data: convH, isLoading: convHLoading } =
    useLocationConvexHull("ConvH");

  const markerData = convH ? convertToMarkerData(convH) : [];
  const polygonPath = convH ? convertToPolygonPath(convH) : [];
  const centerMarkerData = centroid
    ? convertToCenterMarkerData({ ...centroid, roomId: "test_pt" })
    : undefined;
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleBannerClose = () => {
    setIsOverlayVisible(false);
  };
  const handleClick = () => {
    setIsBannerVisible(false);
  };

  if (centroidLoading || convHLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={mapContainer}>
      <Flex direction="column">
        <MapHeader title="디프만 모각자" />
        <div className={refreshStyle}>
          {centerMarkerData && (
            <RefreshCenterButton
              coordinates={{
                lat: centerMarkerData.latitude,
                lng: centerMarkerData.longitude,
              }}
            />
          )}
        </div>
        <NaverMap
          width="100vw"
          height="100vh"
          markerData={markerData}
          centerMarker={centerMarkerData}
          polygon={polygonPath}
        />
        {isOverlayVisible && (
          <div className={overlayStyle} onClick={handleClick} />
        )}
        <ParticipantBottomSheet
          totalParticipants={markerData.length}
          banner={
            isOverlayVisible && (
              <StartBanner
                isVisible={isBannerVisible}
                onClose={handleBannerClose}
                onDeleteClick={handleClick}
              />
            )
          }
        />
      </Flex>
    </div>
  );
};

export default FindingMidPoint;
