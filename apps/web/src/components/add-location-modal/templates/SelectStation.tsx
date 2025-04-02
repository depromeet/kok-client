import { useStationInfo } from "../contexts/station";
import SearchList from "../organisms/SearchList";
import SearchResultMap from "../organisms/SearchResultMap";

const SelectStation = () => {
  const { stationInfo } = useStationInfo();

  return stationInfo ? <SearchResultMap /> : <SearchList />;
};

export default SelectStation;
