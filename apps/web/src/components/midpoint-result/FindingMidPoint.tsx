"use client";

import MapHeader from "./organisms/MapHeader";
import MapTest from "@/components/MapTest";
import RefreshCenterButton from "./organisms/RefreshCenterButton";
import { Flex, Text } from "@repo/ui/components";
import ParticipantBottomSheet from "@/components/midpoint-result/organisms/ParticipantBottomSheet";
import { refreshStyle, mapContainer } from "./style.css";

const FindingMidPoint = () => {
  return (
    <div className={mapContainer}>
      <Flex direction="column">
        <MapHeader>
          <Text>디프만 모각작</Text>
        </MapHeader>
        <div className={refreshStyle}>
          <RefreshCenterButton />
        </div>
        <MapTest />
        <ParticipantBottomSheet />
      </Flex>
    </div>
  );
};

export default FindingMidPoint;
