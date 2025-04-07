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
  Marker,
  Polygon,
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
  const centerMarker = centroid
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

  const [profileMarker, setProfileMarker] = useState<ReturnType<
    typeof Marker
  > | null>(null);
  const [dotMarkersList, setDotMarkersList] = useState<
    ReturnType<typeof Marker>[]
  >([]);
  const [centerMarkerInstance, setCenterMarkerInstance] = useState<ReturnType<
    typeof Marker
  > | null>(null);
  const [polygonInstance, setPolygonInstance] = useState<ReturnType<
    typeof Polygon
  > | null>(null);

  useEffect(() => {
    if (!map || !locationsData?.data) return;
    const profileMarkerElement = ProfileMarker({
      profileImageUrl: locationsData.data.imageUrl,
    });

    if (profileMarker) profileMarker.cleanUp();

    const newProfileMarker = Marker({
      map,
      customMarkerData: profileMarkerElement
        ? {
            marker: profileMarkerElement,
            width: 48,
            height: 48,
          }
        : undefined,
    });

    newProfileMarker.create({
      latitude: locationsData.data.latitude,
      longitude: locationsData.data.longitude,
    });

    setProfileMarker(newProfileMarker);

    return () => {
      if (newProfileMarker) newProfileMarker.cleanUp();
    };
  }, [map, locationsData, profileMarker]);

  useEffect(() => {
    if (!map || dotMarkers.length === 0) return;

    dotMarkersList.forEach((marker) => {
      if (marker) marker.cleanUp();
    });

    const newDotMarkers: ReturnType<typeof Marker>[] = [];

    dotMarkers.forEach((marker) => {
      if (!marker.position.lat || !marker.position.lng) return;

      const dotMarkerElement = DotMarker({
        size: 12,
        color: theme.colors.gray10,
        borderColor: theme.colors.gray50,
      });

      const newDotMarker = Marker({
        map,
        customMarkerData: {
          marker: dotMarkerElement ?? document.createElement("div"),
          width: 12,
          height: 12,
        },
      });

      newDotMarker.create({
        latitude: marker.position.lat,
        longitude: marker.position.lng,
      });

      newDotMarkers.push(newDotMarker);
    });

    setDotMarkersList(newDotMarkers);

    return () => {
      newDotMarkers.forEach((marker) => {
        if (marker) marker.cleanUp();
      });
    };
  }, [map, dotMarkers, dotMarkersList]);

  useEffect(() => {
    if (!map) return;

    if (!centerMarker || dotMarkers.length <= 1) {
      if (centerMarkerInstance) centerMarkerInstance.cleanUp();
      setCenterMarkerInstance(null);
      return;
    }

    if (centerMarkerInstance) centerMarkerInstance.cleanUp();

    const newCenterMarker = Marker({
      map,
      customMarkerData: {
        marker: getFinalMarkerElement(),
        width: 24,
        height: 24,
      },
    });

    newCenterMarker.create({
      latitude: centerMarker.latitude,
      longitude: centerMarker.longitude,
    });

    setCenterMarkerInstance(newCenterMarker);

    return () => {
      if (newCenterMarker) newCenterMarker.cleanUp();
    };
  }, [map, centerMarker, dotMarkers.length, centerMarkerInstance]);

  useEffect(() => {
    if (!map) return;

    if (polygonPath.length < 3) {
      if (polygonInstance) polygonInstance.cleanUp();
      setPolygonInstance(null);
      return;
    }

    if (polygonInstance) polygonInstance.cleanUp();

    const newPolygon = Polygon({
      map,
      options: {
        fillColor: theme.colors.gray10,
        fillOpacity: 0.5,
        strokeColor: theme.colors.gray10,
        strokeWeight: 1,
        strokeOpacity: 0.8,
      },
    });

    newPolygon.create(
      polygonPath.map((point) => ({
        latitude: point.lat,
        longitude: point.lng,
      }))
    );

    setPolygonInstance(newPolygon);

    return () => {
      if (newPolygon) newPolygon.cleanUp();
    };
  }, [map, polygonPath, polygonInstance]);

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
    if (centerMarker && dotMarkers.length > 1) {
      return {
        latitude: centerMarker.latitude,
        longitude: centerMarker.longitude,
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

  return (
    <div className={mapContainer}>
      <Flex direction="column">
        <MapHeader title={roomName} />

        <div className={refreshStyle}>
          <RefreshCenterButton
            coordinates={
              centerMarker && dotMarkers.length > 1
                ? {
                    lat: centerMarker.latitude,
                    lng: centerMarker.longitude,
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
