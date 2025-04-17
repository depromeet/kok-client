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
  activeMarkerId: string | null;
  onMarkerClick?: (id: string | null) => void;
}

export const createPlaceMarkers = ({
  map,
  places,
  placesMarkers,
  activeMarkerId,
  onMarkerClick,
}: CreatePlaceMarkerOptions) => {
  if (!map || !window.naver) return;

  placesMarkers.cleanUp();

  places.forEach((place) => {
    const markerId =
      place.id || `${place.location.latitude},${place.location.longitude}`;
    const markerWrapper = document.createElement("div");
    markerWrapper.style.position = "relative";
    markerWrapper.style.pointerEvents = "auto";

    const nameElement = createNameElement({ displayName: place.displayName });
    const isActive = markerId === activeMarkerId;

    if (isActive) {
      const finalEl: HTMLDivElement = getFinalMarkerElement();
      finalEl.style.position = "absolute";
      finalEl.style.top = "50%";
      finalEl.style.left = "50%";
      finalEl.style.transform = "translate(-50%, -100%)";
      finalEl.style.pointerEvents = "auto";

      markerWrapper.appendChild(finalEl);
      nameElement.style.display = "block";
    } else {
      const dotMarkerElement = createDotMarker();
      if (dotMarkerElement) {
        dotMarkerElement.style.zIndex = "1";
      }
      markerWrapper.appendChild(
        dotMarkerElement || document.createElement("div")
      );
      nameElement.style.display = "none";
    }

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

    if (marker) {
      naver.maps.Event.addListener(marker, "click", () => {
        if (isActive) {
          onMarkerClick?.(null);
        } else {
          onMarkerClick?.(markerId);
        }
      });
    }
  });
};
