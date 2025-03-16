import { useState } from "react";

interface Location {
  latitude: number;
  longitude: number;
}

export const useCurrentLocation = () => {
  const [location, setLocation] = useState<Location | null>(null);

  const getCurrentLocation = () => {
    // TODO: 이후 error 대응은 콘솔이 아닌 팝업 창으로 개선 필요
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (err) => {
        console.error(err.message);
      }
    );
  };

  return { currentLocation: location, getCurrentLocation };
};
