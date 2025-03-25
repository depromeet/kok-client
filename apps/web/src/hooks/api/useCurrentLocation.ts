import { useState } from "react";
import { useQuery } from "@repo/shared/tanstack-query";

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
  return response.json();
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
    staleTime: 1000 * 60 * 2,
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
      },
      {
        enableHighAccuracy: true, // GPS 기반 정확한 위치 요청
        maximumAge: 0, // 캐시된 위치 데이터 사용하지 않음
      }
    );
  };

  return {
    currentLocation: location,
    addressInfo,
    getCurrentLocation,
  };
};
