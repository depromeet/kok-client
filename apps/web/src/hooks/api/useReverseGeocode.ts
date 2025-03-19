import { useState, useEffect } from "react";
import { NaverReverseGeocodeResponse } from "app/api/naver/reverse-geocode/types";
import { extractDistrict } from "@/utils/location";

interface Coordinates {
  lat: number;
  lng: number;
}

export const useReverseGeocode = (coordinates: Coordinates) => {
  const [district, setDistrict] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchLocation = async () => {
    if (!coordinates.lat || !coordinates.lng) return;

    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(
        `/api/naver/reverse-geocode?lat=${coordinates.lat}&lng=${coordinates.lng}`
      );

      if (!response.ok) {
        throw new Error("위치 정보를 가져오는데 실패했습니다");
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }
      const districtName = extractDistrict(
        data.fullData as NaverReverseGeocodeResponse
      );
      setDistrict(districtName);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "알 수 없는 오류가 발생했습니다"
      );
      setDistrict("알 수 없음");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordinates]);

  return {
    district,
    isLoading,
    error,
    refetch: fetchLocation,
  };
};
