import { useStationInfo } from "../contexts/station";
import SearchList from "../organisms/SearchList";
import SearchResultMap from "../organisms/SearchResultMap";

const SelectStation = () => {
  const { stationInfo } = useStationInfo();

  if (!stationInfo) return <SearchList />;

  return <SearchResultMap {...stationInfo} />;
};

export default SelectStation;
