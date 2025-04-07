import {
  NaverMap,
  useNaverMap,
  Marker,
  getFinalMarkerElement,
} from "@repo/naver-map";
import AddCandidateBottomSheet from "../molecules/AddCandidateBottomSheet";
import { StationInfo } from "@/api/types/stations/index.type";
import { useEffect, useState, useMemo } from "react";

type SearchResultMapProps = Pick<StationInfo, "station">;

const SearchResultMap = ({ station }: SearchResultMapProps) => {
  const centerMarker = useMemo(
    () => ({
      latitude: station.latitude,
      longitude: station.longitude,
      center: true,
    }),
    [station.latitude, station.longitude]
  );

  const { map } = useNaverMap();
  const [markerData, setMarkerData] = useState<{ cleanUp: () => void } | null>(
    null
  );

  useEffect(() => {
    if (!map) return;

    if (markerData) {
      markerData.cleanUp();
    }

    const resultMarker = Marker({
      map: map,
      customMarkerData: {
        marker: getFinalMarkerElement(),
        width: 46,
        height: 46,
      },
    });

    resultMarker.create({
      latitude: centerMarker.latitude,
      longitude: centerMarker.longitude,
    });

    setMarkerData(resultMarker);

    return () => {
      if (resultMarker) resultMarker.cleanUp();
    };
  }, [map, station, centerMarker, markerData]);

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
