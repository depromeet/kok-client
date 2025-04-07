"use client";

type DotMarkerOptions = {
  size?: number;
  color?: string;
  borderColor?: string;
};

// 추후 둘러보기에서 재사용 할 예정
export const DotMarker = ({
  size = 12,
  color = "#0080ff",
  borderColor = "white",
}: DotMarkerOptions = {}) => {
  const dotMarkerElement = document.createElement("div");

  dotMarkerElement.style.width = `${size}px`;
  dotMarkerElement.style.height = `${size}px`;
  dotMarkerElement.style.borderRadius = "50%";
  dotMarkerElement.style.backgroundColor = color;
  dotMarkerElement.style.border = `2px solid ${borderColor}`;
  dotMarkerElement.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.3)";

  return {
    element: dotMarkerElement,
    anchor: new window.naver.maps.Point(size / 2, size / 2),
  };
};
