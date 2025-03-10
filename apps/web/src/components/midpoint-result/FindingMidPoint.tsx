"use client";

import MapHeader from "./organisms/MapHeader";
import MapTest from "@/components/MapTest";
import RefreshCenterButton from "./organisms/RefreshCenterButton";
import { Flex, Text } from "@repo/ui/components";
import ParticipantBottomSheet from "@/components/midpoint-result/organisms/ParticipantBottomSheet";
import { refreshStyle } from "./style.css";

const FindingMidPoint = () => {
  return (
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
  );
};

export default FindingMidPoint;
