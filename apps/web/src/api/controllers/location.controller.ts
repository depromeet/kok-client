import { getRequest } from "@repo/shared/axios";
import type {
  LocationCentroid,
  LocationConvexHull,
} from "../types/location/location.types";
import { API_URLS } from "../../constants/api";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

class LocationController {
  private static instance: LocationController;

  private constructor() {}

  public static getInstance(): LocationController {
    if (!LocationController.instance) {
      LocationController.instance = new LocationController();
    }
    return LocationController.instance;
  }

  public async getCentroid(uuid: string): Promise<LocationCentroid> {
    try {
      return await getRequest<LocationCentroid>({
        url: `${BASE_URL}${API_URLS.GET_CENTROID}${uuid}`,
      });
    } catch (error: any) {
      console.error("getCentroid 오류 발생:", error);
      throw error;
    }
  }

  public async getConvexHull(uuid: string): Promise<LocationConvexHull> {
    try {
      return await getRequest<LocationConvexHull>({
        url: `${BASE_URL}${API_URLS.GET_CONVEXHULL}${uuid}`,
      });
    } catch (error: any) {
      console.error("getConvexHull 오류 발생:", error);
      throw error;
    }
  }
}

export default LocationController.getInstance();
