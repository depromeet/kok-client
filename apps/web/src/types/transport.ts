export type VehicleType = "SUBWAY" | "BUS";

export type TransportType = "WALK" | VehicleType;

export interface TransportInfo {
  mode: TransportType;
  distance: number;
  sectionTime: number;
  route: string | null;
  routeColor: string | null;
}
