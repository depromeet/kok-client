import { useState, useEffect, useRef } from "react";
import { extractDistrict } from "@/utils/location";

export const useReverseGeocode = (coordinates: {
  lat: number;
  lng: number;
}) => {
  const [district, setDistrict] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const coordinatesRef = useRef(coordinates);

  useEffect(() => {
    coordinatesRef.current = coordinates;
  }, [coordinates]);

  const fetchLocation = async () => {
    const coords = coordinatesRef.current;
    if (!coords.lat || !coords.lng) return;

    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(
        `/api/naver/map/reverseGeocoding?latitude=${coords.lat}&longitude=${coords.lng}`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "위치 정보를 가져오는데 실패했습니다");
      }

      const districtName = extractDistrict(data);
      setDistrict(districtName);
    } catch (err) {
      console.error("리버스 지오코딩 오류:", err);
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
  }, [coordinates]);

  return {
    district,
    isLoading,
    error,
    refetch: fetchLocation,
  };
};
