import SearchPlaceBottomSheet from "@/components/SearchPlaceBottomSheet";
import * as Style from "./style.css";
import { NaverMap } from "@repo/naver-map";

const SelectStartPlace = () => {
  return (
    <>
      <div className={Style.container}>
        <NaverMap width="100vw" height="100vh" />
      </div>
      <SearchPlaceBottomSheet />
    </>
  );
};

export default SelectStartPlace;
