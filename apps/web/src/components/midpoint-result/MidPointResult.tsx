"use client";

import { useState } from "react";
import { useGetMapLocationData } from "@/hooks/api/useGetMapLocationData";
import MapHeader from "./organisms/MapHeader";
import { Flex, Text } from "@repo/ui/components";
import { NaverMap } from "@repo/naver-map";
import ResultBanner from "@/components/midpoint-result/organisms/ResultBanner";
import FinalBottomSheet from "@/components/midpoint-result/organisms/ResultBottomSheet";
import { overlayStyle } from "./style.css";

const MidPointResult = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const { locations, centerPoint } = useGetMapLocationData();

  return (
    <Flex direction="column">
      <MapHeader>
        <Text>중간 장소 결과</Text>
      </MapHeader>
      <NaverMap
        width="600px"
        height="100vh"
        markerData={locations}
        centerMarker={centerPoint}
      />
      {isOverlayVisible && <div className={overlayStyle} />}
      <ResultBanner onClose={() => setIsOverlayVisible(false)} />
      <FinalBottomSheet />
    </Flex>
  );
};

export default MidPointResult;
