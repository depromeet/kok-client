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

  if (centroidLoading || convHLoading) {
    return <div>Loading...</div>;
  }

  const roomId = centerMarkerData?.roomId || "test_pt";
  const roomName = "디프만 모각자"; // TODO: 추후 방생성 후 연동해야함

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
        {isOverlayVisible && <div className={overlayStyle} />}
        <StartBanner onClose={() => setIsOverlayVisible(false)} />
        <ParticipantBottomSheet
          totalParticipants={markerData.length}
          roomId={roomId}
          roomName={roomName}
        />
      </Flex>
    </div>
  );
};

export default FindingMidPoint;
