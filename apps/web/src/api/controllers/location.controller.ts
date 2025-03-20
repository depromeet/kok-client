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

  private handleError(operation: string, error: any): never {
    console.error(`${operation} 오류 발생:`, error);
    throw error;
  }

  public async getCentroid(
    roomId: string
  ): Promise<{ data: LocationCentroid }> {
    try {
      return await getRequest<{ data: LocationCentroid }>({
        url: `${BASE_URL}${API_URLS.GET_CENTROID}${roomId}`,
      });
    } catch (error: any) {
      this.handleError("getCentroid", error);
    }
  }

  public async getConvexHull(
    roomId: string
  ): Promise<{ data: LocationConvexHull }> {
    try {
      return await getRequest<{ data: LocationConvexHull }>({
        url: `${BASE_URL}${API_URLS.GET_CONVEXHULL}${roomId}`,
      });
    } catch (error: any) {
      this.handleError("getConvexHull", error);
    }
  }
}

export default LocationController.getInstance();
