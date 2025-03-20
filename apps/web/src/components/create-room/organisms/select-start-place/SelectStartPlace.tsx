import SearchPlaceBottomSheet from "@/components/search-place-bottom-sheet";
import { NaverMap } from "@repo/naver-map";

interface ISelectStartPlace {
  roomId: string;
  memberId: string;
  memberImgUrl: string;
  memberNickname: string;
}

const SelectStartPlace = ({
  roomId,
  memberId,
  memberImgUrl,
  memberNickname,
}: ISelectStartPlace) => {
  return (
    <>
      <NaverMap width="100vw" height="100vh" />
      <SearchPlaceBottomSheet />
    </>
  );
};

export default SelectStartPlace;
