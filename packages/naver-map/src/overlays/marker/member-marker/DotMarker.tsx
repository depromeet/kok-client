"use client";

interface DotMarkerOptions {
  size?: number;
  color?: string;
  borderColor?: string;
}

export const DotMarker = ({
  size = 12,
  color = "#0080ff",
  borderColor = "white",
}: DotMarkerOptions = {}) => {
  if (typeof document === "undefined") return null;

  const markerElement = document.createElement("div");
  markerElement.innerHTML = `
    <div style="
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background-color: ${color};
      border: 2px solid ${borderColor};
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);">
    </div>
  `;

  return markerElement;
};
