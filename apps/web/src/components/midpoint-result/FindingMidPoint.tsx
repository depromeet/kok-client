"use client";

import MapHeader from "./organisms/MapHeader";
import RefreshCenterButton from "./organisms/RefreshCenterButton";
import { Flex, Text } from "@repo/ui/components";
import ParticipantBottomSheet from "@/components/midpoint-result/organisms/ParticipantBottomSheet";
import { refreshStyle, mapContainer } from "./style.css";
import {
  useLocationCentroid,
  useLocationConvexHull,
} from "@/hooks/useLocation";
import { NaverMap } from "@repo/naver-map";
import {
  convertToMarkerData,
  convertToPolygonPath,
  convertToCenterMarkerData,
} from "@/utils/location";

const FindingMidPoint = () => {
  const { data: centroid, isLoading: centroidLoading } =
    useLocationCentroid("ConvH");

  const { data: convH, isLoading: convHLoading } =
    useLocationConvexHull("ConvH");

  const markerData = convertToMarkerData(convH);
  const polygonPath = convertToPolygonPath(convH);
  const centerMarkerData = convertToCenterMarkerData(centroid);

  if (centroidLoading || convHLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={mapContainer}>
      <Flex direction="column">
        <MapHeader>
          <Text>디프만 모각작</Text>
        </MapHeader>
        <div className={refreshStyle}>
          <RefreshCenterButton />
        </div>
        <NaverMap
          width="100vw"
          height="100vh"
          markerData={markerData}
          centerMarker={centerMarkerData}
          polygon={polygonPath}
        />
        <ParticipantBottomSheet totalParticipants={markerData.length} />
      </Flex>
    </div>
  );
};

export default FindingMidPoint;
