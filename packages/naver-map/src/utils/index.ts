export const getLatLng = ({ y, x }: { y: number; x: number }) => {
  if (!window.naver || !window.naver.maps) {
    throw new Error("네이버 지도 api가 로드되지 않았습니다.");
  }
  return new naver.maps.LatLng(y, x);
};
