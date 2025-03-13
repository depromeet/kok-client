"use client";

import { NaverMap } from "@repo/naver-map";

const MapTest = () => {
  // if (isLoading) {
  //   return <div>지도 데이터 불러오는 중...</div>;
  // }

  return (
    <>
      <NaverMap width="100vw" height="100vh" />
    </>
  );
};

export default MapTest;
