/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  MapLocationData,
  MapLocationParams,
} from "@/api/types/location/location.types";
import { buildURL } from "@/utils/buildURL";
import { getRequest } from "@repo/shared/axios";
import { API_URLS } from "@/constants/api";
import { MarkerData } from "@repo/naver-map";

// 폴백용 더미 데이터 -> 백엔드 폴리곤 정렬 필요
const DUMMY_MARKERS: MarkerData[] = [
  { id: 6, position: { lat: 37.557192, lng: 126.925381 }, title: "홍대입구역" },
  { id: 3, position: { lat: 37.561243, lng: 126.99428 }, title: "충무로역" },
  { id: 2, position: { lat: 37.57142, lng: 127.009745 }, title: "동대문역" },
  { id: 1, position: { lat: 37.561533, lng: 127.037732 }, title: "왕십리역" },
  { id: 7, position: { lat: 37.484147, lng: 127.034631 }, title: "양재역" },
  { id: 4, position: { lat: 37.493415, lng: 127.01408 }, title: "교대역" },
  { id: 5, position: { lat: 37.529849, lng: 126.964561 }, title: "용산역" },
];

const CENTER_MARKER: MarkerData = {
  id: 999,
  position: { lat: 37.540685, lng: 127.017965 }, // 옥수역
  title: "중심",
};

class MapDataController {
  private static instance: MapDataController;
  private constructor() {}

  /**
   * 싱글톤 인스턴스를 반환.
   * 인스턴스가 없으면 새로 생성.
   */
  public static getInstance(): MapDataController {
    if (!MapDataController.instance) {
      MapDataController.instance = new MapDataController();
    }
    return MapDataController.instance;
  }

  /**
   * 지도 위치 데이터를 가져옵니다 (위치 목록 및 중심점).
   * 실제 API 호출 없이 더미 데이터를 반환합니다.
   * @param params 선택적 매개변수 (사용자 위치, 반경 등)
   * @returns 지도 위치 데이터 (현재는 더미 데이터)
   */
  public async getMapLocationData(
    params?: MapLocationParams
  ): Promise<MapLocationData> {
    // API 연동 전에는 더미 데이터만 반환
    console.info("지도 데이터: 개발용 더미 데이터를 사용합니다.");

    return {
      locations: DUMMY_MARKERS,
      centerPoint: CENTER_MARKER,
    };

    // 실제 API 연동 시 사용
    /*
    const url = buildURL(API_URLS.MAP_LOCATIONS, { ...params });
    try {
      return await getRequest<MapLocationData>({
        url,
        params,
      });
    } catch (error: any) {
      this.handleError(error);
      return {
        locations: DUMMY_MARKERS,
        centerPoint: CENTER_MARKER,
      };
    }
    */
  }

  /**
   * 여러 위치의 중심점을 계산하여 가져옵니다.
   * 실제 API 호출 없이 더미 데이터를 반환합니다.
   * @param locationIds 위치 ID 배열
   * @returns 중심점 데이터 (현재는 더미 데이터)
   */
  public async getMapCenterPoint(locationIds: number[]): Promise<MarkerData> {
    // API 연동 전에는 더미 데이터만 반환
    console.info("지도 중심점: 개발용 더미 데이터를 사용합니다.");

    return CENTER_MARKER;

    // 실제 API 연동 시 사용
    /*
    try {
      return await getRequest<MarkerData>({
        url: API_URLS.MAP_CENTER,
        params: { ids: locationIds.join(',') },
      });
    } catch (error: any) {
      this.handleError(error);
      return CENTER_MARKER;
    }
    */
  }

  /**
   * 에러를 처리합니다.
   * @param error 발생한 에러 객체
   */
  private handleError(error: any): void {
    const { status, desc } = error.response?.data || {};

    console.warn(
      `지도 API 요청 실패 (${status || "알 수 없음"}): ${desc || "오류 정보 없음"}`
    );
  }
}

export default MapDataController.getInstance();
