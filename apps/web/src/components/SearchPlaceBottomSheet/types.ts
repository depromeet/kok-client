export interface Place {
  mapx: string;
  mapy: string;
  address: string;
  title: string;
}

export interface NaverPlaceSearchResponse {
  display: number;
  items: Array<Place>;
  lastBuildDate: string;
  start: number;
  total: number;
}

export interface Point {
  y: string;
  x: string;
}
