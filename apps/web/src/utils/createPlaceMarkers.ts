import { DotMarker, getFinalMarkerElement } from "@repo/naver-map";
import { theme } from "@repo/ui/tokens";
import { createNameElement } from "@/utils/createNameElement";
import { PlaceResponse } from "@/hooks/api/useSearchPlaces";

interface MarkerController {
  create: (params: {
    latitude: number;
    longitude: number;
    customMarkerData?: {
      marker: HTMLDivElement;
      width?: number;
      height?: number;
    };
  }) => naver.maps.Marker | undefined;
  cleanUp: () => void;
}

export const createDotMarker = () =>
  DotMarker({
    size: 7,
    color: theme.colors.orange5,
    borderColor: theme.colors.orange50,
  });

export interface CreatePlaceMarkerOptions {
  map: naver.maps.Map | null;
  places: PlaceResponse[];
  placesMarkers: MarkerController;
}

export const createPlaceMarkers = ({
  map,
  places,
  placesMarkers,
}: CreatePlaceMarkerOptions) => {
  if (!map || !window.naver) return;

  placesMarkers.cleanUp();

  places.forEach((place) => {
    const markerWrapper = document.createElement("div");
    markerWrapper.style.position = "relative";
    markerWrapper.style.pointerEvents = "auto";

    let isFinal = false;
    const dotMarkerElement = createDotMarker();
    const nameElement = createNameElement({ displayName: place.displayName });

    markerWrapper.appendChild(
      dotMarkerElement || document.createElement("div")
    );
    markerWrapper.appendChild(nameElement);

    const marker = placesMarkers.create({
      latitude: place.location.latitude,
      longitude: place.location.longitude,
      customMarkerData: {
        marker: markerWrapper,
        width: 30,
        height: 30,
      },
    });

    if (marker && window.naver) {
      naver.maps.Event.addListener(marker, "click", () => {
        if (!isFinal) {
          const finalEl = getFinalMarkerElement();
          finalEl.style.position = "absolute";
          finalEl.style.top = "50%";
          finalEl.style.left = "50%";
          finalEl.style.transform = "translate(-50%, -100%)";
          finalEl.style.pointerEvents = "auto";

          markerWrapper.replaceChildren(finalEl, nameElement);
          isFinal = true;
        } else {
          markerWrapper.replaceChildren(
            createDotMarker() || document.createElement("div"),
            nameElement
          );
          isFinal = false;
        }

        nameElement.style.display =
          nameElement.style.display === "none" ? "block" : "none";
      });
    }
  });
};
