"use client";

import { useState } from "react";
import { useLocationCentroid } from "@/hooks/api/useLocation";
// import { useSimpleTransfer, useComplexTransfer } from "@/hooks/api/useTransfer";
import MapHeader from "./organisms/MapHeader";
import { Flex } from "@repo/ui/components";
import { NaverMap } from "@repo/naver-map";
// import ResultBottomSheet from "@/components/midpoint-result/organisms/ResultBottomSheet";
import { overlayStyle, mapContainer } from "./style.css";
// import ResultBanner from "./organisms/ResultBanner";

const MidPointResult = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const { data: centerPoint } = useLocationCentroid("ConvH");
  // TODO: 작업 중
  // const { data: simpleData } = useSimpleTransfer(59, {
  //   UUID: "test_pt",
  //   memberId: 1,
  // });
  // const { data: complexData } = useComplexTransfer(59, {
  //   UUID: "test_pt",
  //   memberId: 1,
  // });
  // console.log("simpleData", simpleData);
  // console.log("complexData", complexData);

  return (
    <div className={mapContainer}>
      <Flex direction="column">
        <MapHeader title="중간 장소 결과" />
        {centerPoint && (
          <NaverMap
            width="100vw"
            height="100vh"
            finaCenterMarker={centerPoint}
          />
        )}
        {isOverlayVisible && <div className={overlayStyle} />}
        {/* <ResultBanner onClose={() => setIsOverlayVisible(false)} /> */}
        {/* TODO: 작업 중 */}
        {/* <ResultBottomSheet
          totalTime={simpleData?.data.totalTime}
          transferCount={simpleData?.data.transferCount}
          totalDistance={complexData?.data.parsedItinerary.totalDistance}
          legs={complexData?.data.parsedItinerary.legs}
        /> */}
      </Flex>
    </div>
  );
};

export default MidPointResult;
