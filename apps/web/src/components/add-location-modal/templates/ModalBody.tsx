import { useStation } from "../contexts/station";
import SearchList from "../organisms/SearchList";
import SearchResultMap from "../organisms/SearchResultMap";

const ModalBody = () => {
  const { station } = useStation();

  return station ? <SearchResultMap /> : <SearchList />;
};

export default ModalBody;
