import { Place } from "../templates/dummy";
import { PlaceItem } from "./PlaceItem";
import * as Style from "./PlaceList.css";

interface Props {
  placeList: Place[];
}

export function PlaceList({ placeList }: Props) {
  return (
    <ul className={Style.listContainer}>
      {placeList.map((place) => (
        <PlaceItem key={place.name} {...place} />
      ))}
    </ul>
  );
}
