import SearchPlaceBottomSheet from "@/components/SearchPlaceBottomSheet";
import { NaverMap } from "@repo/naver-map";

const SelectStartPlace = () => {
  return (
    <>
      <NaverMap width="100vw" height="100vh" />
      <SearchPlaceBottomSheet />
    </>
  );
};

export default SelectStartPlace;
