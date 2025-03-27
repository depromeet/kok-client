import { NaverMap } from "@repo/naver-map";
import AddCandidateBottomSheet from "../molecules/AddCandidateBottomSheet";

const SearchResultMap = () => {
  return (
    <>
      <NaverMap width="100vw" height="calc(100dvh - 58px)" />

      <AddCandidateBottomSheet />
    </>
  );
};

export default SearchResultMap;
