"use client";

import { useState } from "react";
import { useLocationCentroid } from "@/hooks/useLocation";
import MapHeader from "./organisms/MapHeader";
import { Flex, Text } from "@repo/ui/components";
import { NaverMap } from "@repo/naver-map";
import ResultBottomSheet from "@/components/midpoint-result/organisms/ResultBottomSheet";
import { overlayStyle, mapContainer } from "./style.css";
// import ResultBanner from "./organisms/ResultBanner";

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
        {/* <ResultBanner onClose={() => setIsOverlayVisible(false)} /> */}
        {/* api 연동 후 props 추가 필요 */}
        <ResultBottomSheet />
      </Flex>
    </div>
  );
};

export default MidPointResult;
