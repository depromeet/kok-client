import { NaverMap } from "@repo/naver-map";
import AddCandidateBottomSheet from "../molecules/AddCandidateBottomSheet";
import { StationInfo } from "@/api/types/stations/index.type";

type SearchResultMapProps = Pick<StationInfo, "station">;

const SearchResultMap = ({ station }: SearchResultMapProps) => {
  return (
    <>
      <NaverMap
        width="100vw"
        height="calc(100dvh - 58px)"
        finalCenterMarker={{
          latitude: station.latitude,
          longitude: station.longitude,
        }}
      />

      <AddCandidateBottomSheet />
    </>
  );
};

export default SearchResultMap;
