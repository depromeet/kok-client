import { motion } from "@repo/motion";
import * as Style from "./CardList.css";
import useInfiniteSliderDrag from "./useInfiniteSliderDrag";
import { CardItem } from "./CardItem";
import { useViewTransform } from "./useViewTransform";
import { RowCardList } from "./RowCardList";
import { Candidate } from "../templates/type";
import { LeftArrowIcon } from "../atom/left-arrow-icon";
import { RightArrowIcon } from "../atom/right-arrow-icon";
import { CandidateStationData } from "@/hooks/api/useCandidateStation";

interface Props {
  view: "card" | "list";
  list: Candidate[];
  selectedCardIds: number[];
  stationLocations: CandidateStationData;
  onIndexChange: (index: number) => void;
  onSelectCard: ({ id, name }: { id: number; name: string }) => void;
}

export function CardList({
  view,
  list,
  selectedCardIds,
  stationLocations,
  onIndexChange,
  onSelectCard,
}: Props) {
  const { focusedIndex, translateXMotion, dragEvents, onNext, onPrev } =
    useInfiniteSliderDrag({
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
  const totalList = [last, ...list, first];

  const prevStationName = totalList[focusedIndex - 1]?.stationName;
  const nextStationName = totalList[focusedIndex + 1]?.stationName;

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
          {last && (
            <CardItem
              onSelectCard={onSelectCard}
              view={view}
              className="card-0"
              selected={selectedCardIds.includes(last.stationId)}
              stationLocations={stationLocations}
              {...last}
            />
          )}
          {list.map((place, index) => (
            <CardItem
              onSelectCard={onSelectCard}
              view={view}
              key={index}
              className={`card-${index + 1}`}
              selected={selectedCardIds.includes(place.stationId)}
              stationLocations={stationLocations}
              {...place}
            />
          ))}
          {first && (
            <CardItem
              onSelectCard={onSelectCard}
              view={view}
              className={`card-${list.length + 1}`}
              selected={selectedCardIds.includes(first.stationId)}
              stationLocations={stationLocations}
              {...first}
            />
          )}
        </motion.div>
        <motion.div
          variants={{
            show: { opacity: 1, transition: { delay: 1.6 } },
            hide: { opacity: 0 },
          }}
          animate={view === "list" ? "hide" : "show"}
          className={Style.leftArrowContainerStyle}
          onClick={onPrev}
        >
          <LeftArrowIcon />
          <div className={Style.arrowStationStyle}>{prevStationName}</div>
        </motion.div>
        <motion.div
          variants={{
            show: { opacity: 1, transition: { delay: 1.6 } },
            hide: { opacity: 0 },
          }}
          animate={view === "list" ? "hide" : "show"}
          className={Style.rightArrowContainerStyle}
          onClick={onNext}
        >
          <RightArrowIcon />
          <div className={Style.arrowStationStyle}>{nextStationName}</div>
        </motion.div>
      </div>
      <div
        style={{
          pointerEvents: view === "list" ? "auto" : "none",
          paddingBottom: view === "list" ? 70 : 0,
        }}
      >
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
