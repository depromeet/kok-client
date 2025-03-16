export const getLatLng = ({ y, x }: { y: number; x: number }) => {
  return new naver.maps.LatLng(y, x);
};
