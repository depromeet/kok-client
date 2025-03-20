import SearchPlaceBottomSheet from "@/components/search-place-bottom-sheet";
import { NaverMap } from "@repo/naver-map";

interface ISelectStartPlace {
  roomId: string;
  profileId: string;
  profile: string;
  nickname: string;
}

const SelectStartPlace = ({
  roomId,
  profileId,
  profile,
  nickname,
}: ISelectStartPlace) => {
  return (
    <>
      <NaverMap width="100vw" height="100vh" />
      <SearchPlaceBottomSheet />
    </>
  );
};

export default SelectStartPlace;
