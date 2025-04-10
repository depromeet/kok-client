"use client";

import {
  NaverMap,
  useNaverMap,
  useMarker,
  getFinalMarkerElement,
} from "@repo/naver-map";
import AddCandidateBottomSheet from "../molecules/AddCandidateBottomSheet";
import { StationInfo } from "@/api/types/stations/index.type";
import { useEffect, useMemo } from "react";

type SearchResultMapProps = Pick<StationInfo, "station">;

const SearchResultMap = ({ station }: SearchResultMapProps) => {
  const { map } = useNaverMap();
  const { create, cleanUp } = useMarker({
    map: map!,
  });
  cleanUp();

  const centerMarker = useMemo(
    () => ({
      latitude: station.latitude,
      longitude: station.longitude,
      center: true,
    }),
    [station.latitude, station.longitude]
  );

  useEffect(() => {
    if (!map) return;

    create({
      latitude: centerMarker.latitude,
      longitude: centerMarker.longitude,
      customMarkerData: {
        marker: getFinalMarkerElement(),
        width: 46,
        height: 46,
      },
    });

    return () => {
      cleanUp();
    };
  }, [map, station, centerMarker, create, cleanUp]);

  return (
    <>
      <NaverMap
        width="100vw"
        height="calc(100dvh - 58px)"
        center={centerMarker}
      />
      <AddCandidateBottomSheet />
    </>
  );
};

export default SearchResultMap;
