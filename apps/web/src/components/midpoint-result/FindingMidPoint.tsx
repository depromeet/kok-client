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
  roomNameSkeletonStyle,
  participantsSkeletonStyle,
  headerSkeletonWrapper,
} from "./style.css";
import {
  useLocationCentroid,
  useLocationConvexHull,
} from "@/hooks/api/useLocation";
import { MarkerItem, NaverMap } from "@repo/naver-map";
import {
  convertToMarkerData,
  convertToPolygonPath,
  convertToCenterMarkerData,
} from "@/utils/location";
import StartBanner from "./organisms/StartBanner";
import AddLocationButton from "./organisms/AddLocationButton";
import { useRoomInfo } from "@/hooks/api/useRoomInfo";
import { useMemberLocation } from "@/hooks/api/useLocation";

interface FindingMidPointProps {
  roomId: string;
  memberId: string;
  isLeader?: boolean;
}

const FindingMidPoint = ({
  roomId,
  memberId,
  isLeader = false,
}: FindingMidPointProps) => {
  const {
    data: centroid,
    isLoading: centroidLoading,
    refetch: refetchCentroid,
  } = useLocationCentroid(roomId);
  const {
    data: convH,
    isLoading: convHLoading,
    refetch: refetchConvexHull,
  } = useLocationConvexHull(roomId);
  const markerData = convH ? convertToMarkerData(convH) : [];
  const polygonPath = convH ? convertToPolygonPath(convH) : [];
  const centerMarkerData = centroid
    ? convertToCenterMarkerData({ ...centroid, roomId: roomId })
    : undefined;
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const {
    data: roomInfo,
    isLoading: isRoomInfoLoading,
    refetch: refetchRoomInfo,
  } = useRoomInfo(roomId);
  const { data: locationsData } = useMemberLocation(roomId, memberId);

  const handleBannerClose = () => {
    setIsOverlayVisible(false);
  };

  const handleClick = () => {
    setIsBannerVisible(false);
  };

  let displayMarkerData: MarkerItem[] = [];
  if (markerData.length > 0) {
    displayMarkerData = markerData;
  }

  const roomName = isRoomInfoLoading ? (
    <div className={headerSkeletonWrapper}>
      <div className={roomNameSkeletonStyle} />
    </div>
  ) : (
    roomInfo?.data?.roomName || ""
  );

  const totalParticipants = isRoomInfoLoading ? (
    <div className={participantsSkeletonStyle} />
  ) : (
    roomInfo?.data?.nonParticipantCount
  );

  const isVoteMode = roomInfo?.data?.roomStatus === "VOTE" ? true : false;

  return (
    <div className={mapContainer}>
      <Flex direction="column">
        <MapHeader title={roomName} />

        <div className={refreshStyle}>
          <RefreshCenterButton
            coordinates={
              centerMarkerData && markerData.length > 1
                ? {
                    lat: centerMarkerData.latitude,
                    lng: centerMarkerData.longitude,
                  }
                : { lat: 0, lng: 0 }
            }
            participantCount={markerData.length}
            onRefresh={async () => {
              await Promise.all([
                refetchCentroid(),
                refetchConvexHull(),
                refetchRoomInfo(),
              ]);
            }}
          />
        </div>
        <NaverMap
          width="100vw"
          height="100vh"
          markerData={displayMarkerData}
          centerMarker={markerData.length > 1 ? centerMarkerData : undefined}
          polygon={markerData.length > 1 ? polygonPath : []}
          memberMarkers={
            locationsData?.data
              ? [
                  {
                    latitude: locationsData.data.latitude,
                    longitude: locationsData.data.longitude,
                    imageUrl: locationsData.data.imageUrl,
                  },
                ]
              : []
          }
        />
        {isOverlayVisible && (
          <div className={overlayStyle} onClick={handleClick} />
        )}
        <Flex className={AddLocationButtonPositionStyle}>
          <AddLocationButton />
        </Flex>
        <ParticipantBottomSheet
          roomId={roomId}
          totalParticipants={totalParticipants}
          isVoteMode={isVoteMode}
          banner={
            isOverlayVisible && (
              <StartBanner
                roomName={roomName}
                isVisible={isBannerVisible}
                onClose={handleBannerClose}
                onDeleteClick={handleClick}
                isLeader={isLeader}
                isLoading={isRoomInfoLoading}
              />
            )
          }
        />
      </Flex>
    </div>
  );
};

export default FindingMidPoint;
