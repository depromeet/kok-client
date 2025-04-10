"use client";

import { useState, useEffect, useMemo } from "react";
import MapHeader from "./organisms/MapHeader";
import RefreshCenterButton from "./organisms/RefreshCenterButton";
import { Flex, Skeleton, Text } from "@repo/ui/components";
import ParticipantBottomSheet from "@/components/midpoint-result/organisms/ParticipantBottomSheet";
import {
  refreshStyle,
  mapContainer,
  overlayStyle,
  AddLocationButtonPositionStyle,
  headerSkeletonWrapper,
} from "./style.css";
import {
  useLocationCentroid,
  useLocationConvexHull,
} from "@/hooks/api/useLocation";
import {
  NaverMap,
  useNaverMap,
  useMarker,
  usePolygon,
  ProfileMarker,
  DotMarker,
} from "@repo/naver-map";
import {
  convertToMarkerData,
  convertToPolygonPath,
  convertToCenterMarkerData,
} from "@/utils/location";
import StartBanner from "./organisms/StartBanner";
import AddLocationButton from "./organisms/AddLocationButton";
import { useRoomInfo } from "@/hooks/api/useRoomInfo";
import { useMemberLocation } from "@/hooks/api/useLocation";
import { theme } from "@repo/ui/tokens";
import { getFinalMarkerElement } from "@repo/naver-map";

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
  const { data: centroid, refetch: refetchCentroid } =
    useLocationCentroid(roomId);
  const { data: convH, refetch: refetchConvexHull } =
    useLocationConvexHull(roomId);

  const dotMarkers = useMemo(
    () => (convH ? convertToMarkerData(convH) : []),
    [convH]
  );
  const polygonPath = useMemo(
    () => (convH ? convertToPolygonPath(convH) : []),
    [convH]
  );
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
  const { map } = useNaverMap();

  const profileMarker = useMarker({ map: map! });
  const dotMarker = useMarker({ map: map! });
  const centerMarker = useMarker({ map: map! });

  const { create: createPolygon, cleanUp: cleanUpPolygon } = usePolygon({
    map: map!,
    options: {
      fillColor: theme.colors.mapPolygon,
      strokeColor: theme.colors.mapPolygon,
      strokeWeight: 1,
      strokeOpacity: 0.1,
    },
  });

  // 프로필 마커
  useEffect(() => {
    if (!map || !locationsData?.data) return;
    const profileMarkerElement = ProfileMarker({
      profileImageUrl: locationsData.data.imageUrl,
    });

    profileMarker.cleanUp();

    profileMarker.create({
      latitude: locationsData.data.latitude,
      longitude: locationsData.data.longitude,
      customMarkerData: profileMarkerElement
        ? {
            marker: profileMarkerElement,
            width: 45,
            height: 45,
          }
        : undefined,
    });

    return () => {
      profileMarker.cleanUp();
    };
  }, [map, locationsData, profileMarker]);

  // 나머지 마커
  useEffect(() => {
    if (!map || dotMarkers.length === 0) return;

    dotMarker.cleanUp();

    dotMarkers.forEach((marker) => {
      if (!marker.position.lat || !marker.position.lng) return;

      const dotMarkerElement = DotMarker({
        size: 6,
        color: theme.colors.mapMarkerBorder,
        borderColor: "transparent",
      });

      dotMarker.create({
        latitude: marker.position.lat,
        longitude: marker.position.lng,
        customMarkerData: {
          marker: dotMarkerElement ?? document.createElement("div"),
        },
      });
    });

    return () => {
      dotMarker.cleanUp();
    };
  }, [map, dotMarkers, dotMarker]);

  // 중심 마커
  useEffect(() => {
    if (!map) return;

    centerMarker.cleanUp();

    if (!centerMarkerData || dotMarkers.length <= 1) {
      return;
    }

    centerMarker.create({
      latitude: centerMarkerData.latitude,
      longitude: centerMarkerData.longitude,
      customMarkerData: {
        marker: getFinalMarkerElement(),
        width: 24,
        height: 24,
      },
    });

    return () => {
      centerMarker.cleanUp();
    };
  }, [map, centerMarkerData, dotMarkers.length, centerMarker]);

  // 폴리곤
  useEffect(() => {
    if (!map) return;

    cleanUpPolygon();

    if (polygonPath.length < 3) {
      return;
    }

    createPolygon(
      polygonPath.map((point) => ({
        latitude: point.lat,
        longitude: point.lng,
      }))
    );

    return () => {
      cleanUpPolygon();
    };
  }, [map, polygonPath, createPolygon, cleanUpPolygon]);

  const handleBannerClose = () => {
    setIsOverlayVisible(false);
  };

  const handleClick = () => {
    setIsBannerVisible(false);
  };

  const handleRefresh = async () => {
    try {
      await Promise.all([
        refetchCentroid(),
        refetchConvexHull(),
        refetchRoomInfo(),
      ]);
    } catch (error) {
      console.error("handleRefresh 에러:", error);
    }
  };

  const roomName = isRoomInfoLoading ? (
    <div className={headerSkeletonWrapper}>
      <Skeleton width={120} height={24} />
    </div>
  ) : (
    roomInfo?.data?.roomName || ""
  );

  const totalParticipants = isRoomInfoLoading ? (
    <Skeleton width={32} height={24} style={{ display: "inline-block" }} />
  ) : (
    <Text variant="title1" style={{ color: theme.colors.red50 }}>
      {roomInfo?.data?.nonParticipantCount}
    </Text>
  );

  const isVoteMode = roomInfo?.data?.roomStatus === "VOTE" ? true : false;

  const mapCenter = (() => {
    if (centerMarkerData && dotMarkers.length > 1) {
      return {
        latitude: centerMarkerData.latitude,
        longitude: centerMarkerData.longitude,
      };
    }
    if (locationsData?.data) {
      return {
        latitude: locationsData.data.latitude,
        longitude: locationsData.data.longitude,
      };
    }

    return { latitude: 37.5665, longitude: 126.978 };
  })();

  useEffect(() => {
    if (!map || dotMarkers.length <= 1) return;

    const bounds = new window.naver.maps.LatLngBounds(
      new window.naver.maps.LatLng(0, 0),
      new window.naver.maps.LatLng(0, 0)
    );

    dotMarkers.forEach((marker) => {
      if (marker.position) {
        const latLng = new window.naver.maps.LatLng(
          marker.position.lat,
          marker.position.lng
        );
        bounds.extend(latLng);
      }
    });
    map.fitBounds(bounds);
  }, [map, dotMarkers]);

  return (
    <div className={mapContainer}>
      <Flex direction="column">
        <MapHeader title={roomName} />

        <div className={refreshStyle}>
          <RefreshCenterButton
            coordinates={
              centerMarkerData && dotMarkers.length > 1
                ? {
                    lat: centerMarkerData.latitude,
                    lng: centerMarkerData.longitude,
                  }
                : { lat: 0, lng: 0 }
            }
            participantCount={dotMarkers.length}
            onRefresh={handleRefresh}
          />
        </div>

        <NaverMap width="100vw" height="100vh" center={mapCenter} />

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
