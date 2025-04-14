import { useState } from "react";
import { usePlaces, PlaceResponse } from "@/hooks/api/useSearchPlaces";
import { PlaceType } from "@/constants/filter-options";
import { usePlacesQuery } from "@/hooks/api/useSearchPlaces";

interface SearchPlacesOptions {
  map: naver.maps.Map | null | undefined;
  selectedFilter: PlaceType | null;
  stationLocation: { latitude: number; longitude: number };
  onCleanUp: () => void;
}
export function useSearchPlacesByFilter({
  map,
  selectedFilter,
  stationLocation,
  onCleanUp,
}: SearchPlacesOptions) {
  const [places, setPlaces] = useState<PlaceResponse[]>([]);

  const placesQuery = selectedFilter
    ? usePlacesQuery(
        {
          placeType: selectedFilter,
          latitude: stationLocation.latitude,
          longitude: stationLocation.longitude,
          maxCount: 20,
        },
        {
          enabled: !!map && !!selectedFilter,
          onSuccess: (data: PlaceResponse[]) => {
            setPlaces(data);
          },
          onError: (error: unknown) => {
            console.error("장소 검색 중 오류 발생:", error);
            setPlaces([]);
            onCleanUp();
          },
        }
      )
    : null;

  const { mutate: searchPlaces } = usePlaces();

  const fetchPlaces = (filterType: PlaceType) => {
    if (!map) return;

    searchPlaces(
      {
        placeType: filterType,
        latitude: stationLocation.latitude,
        longitude: stationLocation.longitude,
        maxCount: 20,
      },
      {
        onSuccess: (data) => {
          setPlaces(data);
        },
        onError: (error) => {
          console.error("장소 검색 중 오류 발생:", error);
          setPlaces([]);
          onCleanUp();
        },
      }
    );
  };

  return {
    places,
    setPlaces,
    fetchPlaces,
    isLoading: placesQuery?.isLoading || false,
    isError: placesQuery?.isError || false,
  };
}
