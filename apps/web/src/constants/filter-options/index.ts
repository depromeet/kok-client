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

export type PlaceType = keyof typeof PlaceFilter;

export const PlaceFilter = {
  ACTIVITY: "ACTIVITY" as const,
  RESTAURANT: "RESTAURANT" as const,
  CAFE: "CAFE" as const,
  BAR: "BAR" as const,
  NATURE: "PARK" as const,
  EXHIBITION: "CULTURE" as const,
  EVENT: "EVENT" as const,
  SHOPPING: "SHOPPING" as const,
} as const;

export const FILTER_OPTIONS = [
  {
    id: PlaceFilter.ACTIVITY,
    name: "액티비티",
    icon: Activity,
    apiValue: PlaceFilter.ACTIVITY,
  },
  {
    id: PlaceFilter.RESTAURANT,
    name: "식당",
    icon: Restaurant,
    apiValue: PlaceFilter.RESTAURANT,
  },
  {
    id: PlaceFilter.CAFE,
    name: "카페",
    icon: Cafe,
    apiValue: PlaceFilter.CAFE,
  },
  {
    id: PlaceFilter.BAR,
    name: "술집",
    icon: Bar,
    apiValue: PlaceFilter.BAR,
  },
  {
    id: PlaceFilter.NATURE,
    name: "자연",
    icon: Nature,
    apiValue: PlaceFilter.NATURE,
  },
  {
    id: PlaceFilter.EXHIBITION,
    name: "전시",
    icon: Exhibition,
    apiValue: PlaceFilter.EXHIBITION,
  },
  {
    id: PlaceFilter.EVENT,
    name: "이벤트",
    icon: Event,
    apiValue: PlaceFilter.EVENT,
  },
  {
    id: PlaceFilter.SHOPPING,
    name: "쇼핑",
    icon: Shopping,
    apiValue: PlaceFilter.SHOPPING,
  },
];
