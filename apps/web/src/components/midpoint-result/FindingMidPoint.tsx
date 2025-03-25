"use client";

import { useState } from "react";
import MapHeader from "./organisms/MapHeader";
import RefreshCenterButton from "./organisms/RefreshCenterButton";
import { Flex } from "@repo/ui/components";
import ParticipantBottomSheet from "@/components/midpoint-result/organisms/ParticipantBottomSheet";
import {
  refreshStyle,
  mapContainer,
  overlayStyle,
  AddLocationButtonPositionStyle,
} from "./style.css";
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
import AddLocationButton from "./organisms/AddLocationButton";

interface FindingMidPointProps {
  roomId: string;
  isLeader?: boolean;
}

const FindingMidPoint = ({
  roomId,
  isLeader = false,
}: FindingMidPointProps) => {
  const { data: centroid, isLoading: centroidLoading } =
    useLocationCentroid(roomId);
  const { data: convH, isLoading: convHLoading } =
    useLocationConvexHull(roomId);
  const markerData = convH ? convertToMarkerData(convH) : [];
  const polygonPath = convH ? convertToPolygonPath(convH) : [];
  const centerMarkerData = centroid
    ? convertToCenterMarkerData({ ...centroid, roomId: roomId })
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

  const roomName = "디프만 모각자"; // 소정 TODO: 서버한테 달라하기

  return (
    <div className={mapContainer}>
      <Flex direction="column">
        <MapHeader title={roomName} />

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
        <Flex className={AddLocationButtonPositionStyle}>
          <AddLocationButton />
        </Flex>
        <ParticipantBottomSheet
          roomId={roomId}
          totalParticipants={markerData.length}
          banner={
            isOverlayVisible && (
              <StartBanner
                isVisible={isBannerVisible}
                onClose={handleBannerClose}
                onDeleteClick={handleClick}
                isLeader={isLeader}
              />
            )
          }
        />
      </Flex>
    </div>
  );
};

export default FindingMidPoint;
