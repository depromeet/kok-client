"use client";

import { useState, useEffect, useMemo } from "react";
import { useSimpleTransfer, useComplexTransfer } from "@/hooks/api/useTransfer";
import { useRecommendStation } from "@/hooks/api/useRecommendStation";
import MapHeader from "./organisms/MapHeader";
import { Flex } from "@repo/ui/components";
import { NaverMap, useNaverMap, Marker } from "@repo/naver-map";
import ResultBottomSheet from "@/components/midpoint-result/organisms/ResultBottomSheet";
import { overlayStyle, mapContainer } from "./style.css";
import ResultBanner from "./organisms/ResultBanner";
import { getFinalMarkerElement } from "@repo/naver-map";

interface MidPointResultProps {
  roomId: string;
  memberId: string;
}

const MidPointResult = ({ roomId, memberId }: MidPointResultProps) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const { map } = useNaverMap();
  const { create, cleanUp } = Marker({
    map: map!,
  });

  const handleBannerClose = () => {
    setIsOverlayVisible(false);
  };

  const handleClick = () => {
    setIsBannerVisible(false);
  };

  const { data: stationsResponse } = useRecommendStation(roomId);
  const stations = stationsResponse?.data;
  const firstStation = stations?.[0]; //최종역

  const centerPoint = useMemo(
    () =>
      firstStation
        ? {
            latitude: firstStation.station.latitude,
            longitude: firstStation.station.longitude,
            isFinal: true,
          }
        : undefined,
    [firstStation]
  );

  const { data: simpleData } = useSimpleTransfer(
    firstStation?.station.id || 0,
    {
      roomId: roomId,
      memberId: memberId,
    }
  );

  const { data: complexData } = useComplexTransfer(
    firstStation?.station.id || 0,
    {
      roomId: roomId,
      memberId: memberId,
    }
  );

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
                  stationName={firstStation?.station.name}
                  routes={firstStation?.routes}
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
