"use client";

import { useState, useEffect, useMemo } from "react";
import { useSimpleTransfer, useComplexTransfer } from "@/hooks/api/useTransfer";
import { Flex } from "@repo/ui/components";
import { NaverMap, useNaverMap, useMarker } from "@repo/naver-map";
import ResultBottomSheet from "@/components/midpoint-result/organisms/ResultBottomSheet";
import { overlayStyle, mapContainer } from "./style.css";
import MapHeader from "../molecules/MapHeader";
import ResultBanner from "../organisms/ResultBanner";
import { getFinalMarkerElement } from "@repo/naver-map";
import { useFinalVoteResult } from "@/hooks/api/useFinalVoteResult";

interface MidPointResultProps {
  roomId: string;
  memberId: string;
}

const MidPointResult = ({ roomId, memberId }: MidPointResultProps) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const { map } = useNaverMap();
  const { create, cleanUp } = useMarker({
    map: map!,
  });

  const handleBannerClose = () => {
    setIsOverlayVisible(false);
  };

  const handleClick = () => {
    setIsBannerVisible(false);
  };

  const { data: voteResult } = useFinalVoteResult(roomId);
  const station = voteResult?.data;

  const centerPoint = useMemo(
    () =>
      station
        ? {
            latitude: station.latitude,
            longitude: station.longitude,
            isFinal: true,
          }
        : undefined,
    [station]
  );

  const { data: simpleData } = useSimpleTransfer(station?.id || 0, {
    roomId: roomId,
    memberId: memberId,
  });

  const { data: complexData } = useComplexTransfer(station?.id || 0, {
    roomId: roomId,
    memberId: memberId,
  });

  useEffect(() => {
    if (!map || !centerPoint) return;

    return () => {
      cleanUp();
    };
  }, [map, centerPoint, cleanUp]);

  useEffect(() => {
    if (!centerPoint) return;

    cleanUp();
    create({
      latitude: Number(centerPoint?.latitude),
      longitude: Number(centerPoint?.longitude),
      customMarkerData: {
        marker: getFinalMarkerElement(),
        width: 46,
        height: 46,
      },
    });
  }, [centerPoint, create, cleanUp]);

  return (
    <div className={mapContainer}>
      <Flex direction="column">
        <MapHeader title="투표 결과" isFinal={true} />
        <NaverMap width="100vw" height="100dvh" center={centerPoint} />

        {isOverlayVisible && (
          <div className={overlayStyle} onClick={handleClick} />
        )}

        <Flex>
          <ResultBottomSheet
            roomId={roomId}
            totalTime={simpleData?.data?.totalTime}
            transferCount={simpleData?.data?.transferCount}
            totalDistance={complexData?.data?.parsedItinerary?.totalDistance}
            legs={complexData?.data?.parsedItinerary?.legs}
            banner={
              isOverlayVisible && (
                <ResultBanner
                  isVisible={isBannerVisible}
                  onClose={handleBannerClose}
                  onDeleteClick={handleClick}
                  stationName={station?.name}
                  routes={station?.routes}
                />
              )
            }
            bannerBottom="180px"
          />
        </Flex>
      </Flex>
    </div>
  );
};

export default MidPointResult;
