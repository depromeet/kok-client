"use client";

import { useState } from "react";
import { useLocationCentroid } from "@/hooks/useLocation";
import MapHeader from "./organisms/MapHeader";
import { Flex, Text } from "@repo/ui/components";
import { NaverMap } from "@repo/naver-map";
import ResultBanner from "@/components/midpoint-result/organisms/ResultBanner";
import FinalBottomSheet from "@/components/midpoint-result/organisms/ResultBottomSheet";
import { overlayStyle, mapContainer } from "./style.css";

const MidPointResult = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const { data: centerPoint } = useLocationCentroid("ConvH"); // 테스트

  return (
    <div className={mapContainer}>
      <Flex direction="column">
        <MapHeader>
          <Text>중간 장소 결과</Text>
        </MapHeader>
        {centerPoint && (
          <NaverMap
            width="100vw"
            height="100vh"
            finaCenterMarker={centerPoint}
          />
        )}
        {isOverlayVisible && <div className={overlayStyle} />}
        <ResultBanner onClose={() => setIsOverlayVisible(false)} />
        <FinalBottomSheet />
      </Flex>
    </div>
  );
};

export default MidPointResult;
