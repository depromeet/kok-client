import { useState } from "react";
import { useQuery } from "@repo/shared/tanstack-query";
import { readReadableStream } from "@/utils/readableStream";

interface Location {
  latitude: number;
  longitude: number;
}

const getAddressByCoords = async ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  const response = await fetch(
    `/api/naver/map/reverseGeocoding?latitude=${latitude}&longitude=${longitude}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.body) throw new Error("No response body");
  return readReadableStream(response.body);
};

export const useCurrentLocation = () => {
  const [location, setLocation] = useState<Location | null>(null);
  const { data: addressInfo, refetch } = useQuery({
    queryKey: ["ConvertedAddress", location],
    queryFn: async () => {
      if (!location) return null;
      return await getAddressByCoords(location);
    },
    select: (data) => data.results,
    enabled: !!location,
    retry: false,
  });

  const getCurrentLocation = () => {
    // TODO: 이후 error 대응은 콘솔이 아닌 팝업 창으로 개선 필요
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({
          latitude,
          longitude,
        });
        refetch();
      },
      (err) => {
        console.error(err.message);
      }
    );
  };

  return {
    currentLocation: location,
    addressInfo,
    getCurrentLocation,
  };
};
