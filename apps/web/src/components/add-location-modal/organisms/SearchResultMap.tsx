import { NaverMap, MapOverlay } from "@repo/naver-map";
import AddCandidateBottomSheet from "../molecules/AddCandidateBottomSheet";
import { StationInfo } from "@/api/types/stations/index.type";

type SearchResultMapProps = Pick<StationInfo, "station">;

const SearchResultMap = ({ station }: SearchResultMapProps) => {
  const centerMarker = {
    latitude: station.latitude,
    longitude: station.longitude,
    center: true,
  };

  return (
    <>
      <NaverMap
        width="100vw"
        height="calc(100dvh - 58px)"
        center={centerMarker}
      >
        <MapOverlay centerMarker={centerMarker} />
      </NaverMap>
      <AddCandidateBottomSheet />
    </>
  );
};

export default SearchResultMap;
