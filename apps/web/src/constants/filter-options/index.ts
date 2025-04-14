import {
  Activity,
  Restaurant,
  Cafe,
  Bar,
  Nature,
  Exhibition,
  Event,
  Shopping,
} from "../../components/vote-voting/atom/filter-icon";

export type PlaceType =
  | "ACTIVITY"
  | "RESTAURANT"
  | "CAFE"
  | "BAR"
  | "NATURE"
  | "EXHIBITION"
  | "EVENT"
  | "SHOPPING";

export const PlaceType = {
  ACTIVITY: "ACTIVITY" as const,
  RESTAURANT: "RESTAURANT" as const,
  CAFE: "CAFE" as const,
  BAR: "BAR" as const,
  NATURE: "NATURE" as const,
  EXHIBITION: "EXHIBITION" as const,
  EVENT: "EVENT" as const,
  SHOPPING: "SHOPPING" as const,
} as const;

export const FILTER_OPTIONS = [
  {
    id: PlaceType.ACTIVITY,
    name: "액티비티",
    icon: Activity,
    apiValue: PlaceType.ACTIVITY,
  },
  {
    id: PlaceType.RESTAURANT,
    name: "식당",
    icon: Restaurant,
    apiValue: PlaceType.RESTAURANT,
  },
  {
    id: PlaceType.CAFE,
    name: "카페",
    icon: Cafe,
    apiValue: PlaceType.CAFE,
  },
  {
    id: PlaceType.BAR,
    name: "술집",
    icon: Bar,
    apiValue: PlaceType.BAR,
  },
  {
    id: PlaceType.NATURE,
    name: "자연",
    icon: Nature,
    apiValue: PlaceType.NATURE,
  },
  {
    id: PlaceType.EXHIBITION,
    name: "전시",
    icon: Exhibition,
    apiValue: PlaceType.EXHIBITION,
  },
  {
    id: PlaceType.EVENT,
    name: "이벤트",
    icon: Event,
    apiValue: PlaceType.EVENT,
  },
  {
    id: PlaceType.SHOPPING,
    name: "쇼핑",
    icon: Shopping,
    apiValue: PlaceType.SHOPPING,
  },
];
