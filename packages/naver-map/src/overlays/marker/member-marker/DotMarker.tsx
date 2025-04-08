"use client";

interface DotMarkerOptions {
  size?: number;
  color?: string;
  borderColor?: string;
}

export const DotMarker = ({
  size = 6,
  color = "rgba(27, 32, 44, 0.8)",
  borderColor = "transparent",
}: DotMarkerOptions) => {
  if (typeof document === "undefined") return null;

  const markerElement = document.createElement("div");
  markerElement.innerHTML = `
    <div style="
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background-color: ${color};
      border: 2px solid ${borderColor};
      box-shadow: 0 0 12px rgba(27, 32, 44, 0.4);">
    </div>
  `;

  return markerElement;
};
