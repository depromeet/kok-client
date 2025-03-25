import { motion } from "@repo/motion";
import * as Style from "./CardList.css";
import useInfiniteSliderDrag from "./useInfiniteSliderDrag";
import { CardItem } from "./CardItem";
import { useViewTransform } from "./useViewTransform";
import { RowCardList } from "./RowCardList";
import { Place } from "../templates/dummy";

interface Props {
  view: "card" | "list";
  list: Place[];
  onIndexChange: (index: number) => void;
}

export function CardList({ view, list, onIndexChange }: Props) {
  const { focusedIndex, translateXMotion, dragEvents } = useInfiniteSliderDrag({
    totalNum: list.length,
    onIndexChange,
  });

  useViewTransform({
    view,
    listLength: list.length,
    focusedCarouselIndex: focusedIndex,
  });

  const first = list[0];
  const last = list[list.length - 1];

  return (
    <div className={Style.containerStyle}>
      <div
        className={Style.sliderContainerStyle}
        style={{ pointerEvents: view === "card" ? "auto" : "none" }}
        {...dragEvents}
      >
        <motion.div
          className={`hohooh ${Style.innerContainerStyle}`}
          style={{ x: translateXMotion }}
        >
          {first && <CardItem view={view} className="card-0" {...first} />}
          {list.map((place, index) => (
            <CardItem
              view={view}
              key={index}
              className={`card-${index + 1}`}
              {...place}
            />
          ))}
          {last && (
            <CardItem
              view={view}
              className={`card-${list.length + 1}`}
              {...last}
            />
          )}
        </motion.div>
      </div>
      <div style={{ pointerEvents: view === "list" ? "auto" : "none" }}>
        <RowCardList view={view} list={list} />
      </div>
    </div>
  );
}
