"use client";

import {
  NaverMap,
  NaverMapProvider,
  useNaverMap,
  useMarker,
  getFinalMarkerElement,
} from "@repo/naver-map";
import AddCandidateBottomSheet from "../molecules/AddCandidateBottomSheet";
import { StationInfo } from "@/api/types/stations/index.type";
import { useEffect, useMemo } from "react";

type SearchResultMapProps = Pick<StationInfo, "station">;

const StationMarker = ({ station }: SearchResultMapProps) => {
  const { map } = useNaverMap();
  const { create, cleanUp } = useMarker({
    map: map!,
  });

  useEffect(() => {
    if (!map) return;

    create({
      latitude: station.latitude,
      longitude: station.longitude,
      customMarkerData: {
        marker: getFinalMarkerElement(),
        width: 46,
        height: 46,
      },
    });

    return () => cleanUp();
  }, [map, station, create, cleanUp]);

  return null;
};

const SearchResultMap = ({ station }: SearchResultMapProps) => {
  const centerMarker = useMemo(
    () => ({
      latitude: station.latitude,
      longitude: station.longitude,
      center: true,
    }),
    [station.latitude, station.longitude]
  );

  return (
    <NaverMapProvider>
      <NaverMap
        width="100vw"
        height="calc(100dvh - 58px)"
        center={centerMarker}
        zoom={18}
      />
      <StationMarker station={station} />
      <AddCandidateBottomSheet />
    </NaverMapProvider>
  );
};

export default SearchResultMap;
