import { Candidate } from "../templates/types";
import { PlaceItem } from "./PlaceItem";
import * as Style from "./PlaceList.css";

interface Props {
  placeList: Candidate[];
}

export function PlaceList({ placeList }: Props) {
  return (
    <ul className={Style.listContainer}>
      {placeList.map((place) => (
        <PlaceItem key={place.stationId} {...place} />
      ))}
    </ul>
  );
}
