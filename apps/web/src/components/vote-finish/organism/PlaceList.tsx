import { Candidate } from "../templates/types";
import { PlaceItem } from "./PlaceItem";
import * as Style from "./PlaceList.css";

interface Props {
  placeList: Candidate[];
}

export function PlaceList({ placeList }: Props) {
  return (
    <ul className={Style.listContainer}>
      <div style={{ marginLeft: "100px" }} />
      {placeList.map((place) => (
        <PlaceItem key={place.stationId} {...place} />
      ))}
      <div style={{ marginLeft: "100px" }} />
    </ul>
  );
}
