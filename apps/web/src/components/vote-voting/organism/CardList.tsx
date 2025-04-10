import { motion } from "@repo/motion";
import * as Style from "./CardList.css";
import useInfiniteSliderDrag from "./useInfiniteSliderDrag";
import { CardItem } from "./CardItem";
import { useViewTransform } from "./useViewTransform";
import { RowCardList } from "./RowCardList";
import { Candidate } from "../templates/type";

interface Props {
  view: "card" | "list";
  list: Candidate[];
  selectedCardIds: number[];
  onIndexChange: (index: number) => void;
  onSelectCard: ({ id, name }: { id: number; name: string }) => void;
}

export function CardList({
  view,
  list,
  selectedCardIds,
  onIndexChange,
  onSelectCard,
}: Props) {
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
          className={Style.innerContainerStyle}
          style={{ x: translateXMotion }}
        >
          {first && (
            <CardItem
              onSelectCard={onSelectCard}
              view={view}
              className="card-0"
              selected={selectedCardIds.includes(first.stationId)}
              {...first}
            />
          )}
          {list.map((place, index) => (
            <CardItem
              onSelectCard={onSelectCard}
              view={view}
              key={index}
              className={`card-${index + 1}`}
              selected={selectedCardIds.includes(place.stationId)}
              {...place}
            />
          ))}
          {last && (
            <CardItem
              onSelectCard={onSelectCard}
              view={view}
              className={`card-${list.length + 1}`}
              selected={selectedCardIds.includes(last.stationId)}
              {...last}
            />
          )}
        </motion.div>
      </div>
      <div style={{ pointerEvents: view === "list" ? "auto" : "none" }}>
        <RowCardList
          selectedCardIds={selectedCardIds}
          view={view}
          list={list}
          onSelectCard={onSelectCard}
        />
      </div>
    </div>
  );
}
