import SearchPlaceBottomSheet from "@/components/search-place-bottom-sheet";
import { NaverMap } from "@repo/naver-map";

interface SelectStartPlaceProps {
  roomId: string;
  memberId: string;
  memberImgUrl: string;
}

const SelectStartPlace = (props: SelectStartPlaceProps) => {
  return (
    <>
      <NaverMap width="100vw" height="calc(100dvh - 56px)" />
      <SearchPlaceBottomSheet {...props} />
    </>
  );
};

export default SelectStartPlace;
