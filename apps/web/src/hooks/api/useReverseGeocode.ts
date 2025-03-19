import { useState, useEffect } from "react";
import { extractDistrict } from "@/utils/location";

export const useReverseGeocode = (coordinates: {
  lat: number;
  lng: number;
}) => {
  const [district, setDistrict] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchLocation = async () => {
    if (!coordinates.lat || !coordinates.lng) return;

    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(
        `/api/naver/map/reverseGeocoding?latitude=${coordinates.lat}&longitude=${coordinates.lng}`
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordinates]);

  return {
    district,
    isLoading,
    error,
    refetch: fetchLocation,
  };
};
