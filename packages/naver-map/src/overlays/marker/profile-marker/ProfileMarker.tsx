"use client";

import { theme } from "@repo/ui/tokens";

interface ProfileMarkerProps {
  profileImageUrl?: string;
}

export const ProfileMarker = ({
  profileImageUrl = "/images/create-room/1.png",
}: ProfileMarkerProps) => {
  if (typeof document === "undefined") return null;

  const markerElement = document.createElement("div");
  markerElement.innerHTML = `
    <div style="position: relative;">
      <div style="position: inherit; width: 48px; height: 48px; border-radius: 50%; overflow: hidden; background-color: ${theme.colors.navy}; border: 3px solid ${theme.colors.navy}; z-index: 5">
        <img
          src="${profileImageUrl}"
          alt="profile image"
          style="width: 48px; height: 48px;"
        />
      </div>
      <div style="position: absolute; left: 50%; bottom: -2px; border-radius: 2px; width: 16px; height: 16px; background-color: ${theme.colors.navy}; transform: translateX(-50%) rotate(45deg); z-index: 4;"></div>
    </div>
  `;
  return markerElement;
};
