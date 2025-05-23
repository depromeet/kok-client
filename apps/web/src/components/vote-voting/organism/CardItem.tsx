import { classMerge } from "@repo/ui/utils";
import * as Style from "./CardItem.css";
import { motion } from "@repo/motion";
import { Text, Spacing, Flex } from "@repo/ui/components";
import { Candidate } from "../templates/type";
import { theme } from "@repo/ui/tokens";
import { SUBWAY_META } from "@/constants/subway";
import { useState } from "react";
import { StationMapExplorer } from "./StationMapExplorer";
import { CandidateStationData } from "@/hooks/api/useCandidateStation";

interface Props extends Candidate {
  view: "card" | "list";
  className: string;
  selected: boolean;
  onSelectCard: ({ id, name }: { id: number; name: string }) => void;
  stationLocations: CandidateStationData;
}

export function CardItem({
  className,
  view,
  stationId,
  routes,
  transferCount,
  totalTime,
  stationName,
  selected,
  onSelectCard,
  stationLocations,
}: Props) {
  const [showFullScreenMap, setShowFullScreenMap] = useState(false);

  const handleMapOpen = (e: any) => {
    e.stopPropagation();
    setShowFullScreenMap(true);
  };

  const getStationLocation = (stationId: number) => {
    const station = stationLocations?.find(
      (station) => station.station.id === stationId
    );

    return station
      ? {
          latitude: station.station.latitude,
          longitude: station.station.longitude,
        }
      : null;
  };

  const handleCardClick = (e: any, stationId: number) => {
    e.stopPropagation();
    onSelectCard({ id: stationId, name: stationName });
  };
  const stationCoords = getStationLocation(stationId);

  return (
    <Flex direction="column" gap={8} className={stationName}>
      <div className={classMerge(className, Style.containerStyle)}>
        <motion.div
          initial={view}
          variants={{
            card: {
              width: 220,
              height: 280,
              transition: { delay: 0.7 },
              background: "#fff",
            },
            list: {
              width: 335,
              height: 94,
              transition: { delay: 0.5 },
              background: "#fff",
            },
          }}
          animate={view}
          className={Style.cardContainerStyle}
          onClick={handleMapOpen}
        >
          <motion.div
            initial={view}
            animate={view}
            variants={{
              card: { opacity: 1, transition: { delay: 1.1 } },
              list: { opacity: 0, transition: { duration: 0.5 } },
            }}
            className={Style.innerCardContainerStyle}
          >
            <div className={Style.topContainerStyle}>
              <Text variant="title2" color={theme.colors.text.primary}>
                {stationName}
              </Text>
              <Spacing size={14} />
              <div className={Style.subwayContainer}>
                {routes.map((route) => {
                  const subway = Object.entries(SUBWAY_META).find(
                    ([_, value]) => {
                      return value.name === route;
                    }
                  );
                  if (subway == null) {
                    return null;
                  }

                  return (
                    <div
                      key={route}
                      style={{ backgroundColor: subway[1].color }}
                      className={Style.subwayItem}
                    >
                      {subway[0]}
                    </div>
                  );
                })}
              </div>
              <Spacing size={28} />
              <div className={Style.infoContainer}>
                <div className={Style.infoInnerContainer}>
                  <Text
                    color={theme.colors.text.secondary}
                    style={{ fontSize: 13 }}
                  >
                    이동 시간
                  </Text>
                  <Text color={theme.colors.text.secondary} variant="title3">
                    {Math.floor(totalTime / 60)} 분
                  </Text>
                </div>
                <div className={Style.line} />
                <div className={Style.infoInnerContainer}>
                  <Text
                    color={theme.colors.text.secondary}
                    style={{ fontSize: 13 }}
                  >
                    환승
                  </Text>
                  <Text color={theme.colors.text.secondary} variant="title3">
                    {transferCount ?? 0}회
                  </Text>
                </div>
              </div>
              <div className={Style.subwayLine} />
            </div>
            <div className={Style.bottomContainerStyle}>
              <motion.button
                className={Style.cardButtonStyle}
                style={{
                  border: `1px solid ${selected ? theme.colors.orange40 : theme.colors.gray15}`,
                  backgroundColor: selected
                    ? theme.colors.orange40
                    : theme.colors.gray0,
                  color: selected ? "white" : theme.colors.icon.pressed,
                }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => handleCardClick(e, stationId)}
              >
                <Text
                  color={selected ? "white" : theme.colors.icon.pressed}
                  className={Style.cardButtonTitleStyle}
                >
                  {"✓ "}콕
                </Text>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
        {showFullScreenMap && stationCoords && (
          <StationMapExplorer
            setShowFullScreenMap={setShowFullScreenMap}
            stationLocation={stationCoords}
            stationName={stationName}
          />
        )}
      </div>
    </Flex>
  );
}
