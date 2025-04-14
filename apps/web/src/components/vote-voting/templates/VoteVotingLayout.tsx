"use client";

import { Button, Flex, Spacing, Text } from "@repo/ui/components";
import * as Style from "./style.css";
import { theme } from "@repo/ui/tokens";
import { useState } from "react";
import { Counter } from "../atom/Counter";
import { Controller } from "../atom/Controller";
import { CardList } from "../organism/CardList";
// import { dummyPlaceList } from "@/components/vote-voting/templates/dummy";
import { useParams } from "next/navigation";
import { useVoteDeadline } from "@/hooks/api/useVoteDeadline";
import { convertMinutes, getTimeDifferenceInMinutes } from "@/utils/time";
import { useVoteCandidates } from "@/hooks/api/useVoteCandidates";
import { useVoting } from "@/hooks/api/useVoting";
import { FixedBottomWithSpacing } from "@/components/fixed-bottom/FixedBottomWithSpacing";
import { useStopWatch } from "@/hooks/useStopWatch";
import { motion } from "@repo/motion";
import { Tooltip } from "../atom/Tooltip";
import { useCandidateStation } from "@/hooks/api/useCandidateStation";

interface Props {
  memberId: string;
  onNext: VoidFunction;
}

interface AgreedStation {
  id: number;
  name: string;
}

export function VoteVotingLayout({ memberId, onNext }: Props) {
  const [view, setView] = useState<"card" | "list">("card");
  const [order, setOrder] = useState(1);
  const [agreedStationIds, setAgreedStationIds] = useState<AgreedStation[]>([]);

  const params = useParams();

  const { data: deadlineData } = useVoteDeadline(params?.roomId as string);
  const { data: candidatesData, isLoading } = useVoteCandidates(
    params?.roomId as string,
    memberId
  );

  const roomId = params?.roomId as string;
  const { data: stationLocationsData } = useCandidateStation(roomId);
  console.log("stationLocationsData", stationLocationsData);

  const { mutate: vote, isPending } = useVoting({
    onSuccess: () => {
      setAgreedStationIds([]);
      onNext();
    },
  });

  const restMinutes =
    deadlineData != null
      ? getTimeDifferenceInMinutes(deadlineData?.data.endAt)
      : undefined;
  const { restTime } = useStopWatch({ startTime: restMinutes });

  const totalCounter = candidatesData != null ? candidatesData.data.length : 0;

  const handleVoteSubmit = () => {
    if (agreedStationIds.length === 0) return;

    const validStationIds = agreedStationIds
      .map(({ id }) => id)
      .filter((id) => id !== undefined && id !== null)
      .map((id) => Number(id));

    vote({
      roomId: typeof params?.roomId === "string" ? params.roomId : "",
      memberId,
      agreedStationIds: validStationIds,
    });
  };

  return (
    <Flex
      justify="between"
      align="center"
      direction="column"
      className={Style.containerStyle}
    >
      {/* 배경 */}
      <div className={Style.backgroundStyle} />

      {/* 위 */}
      <Flex
        align="center"
        direction="column"
        className={Style.innerContainerStyle}
      >
        <Text variant="heading3" color={theme.colors.text.primary}>
          {`마음에 드는 장소를 '콕'`}
        </Text>
        <Spacing size={20} />
        <Text
          variant="caption"
          color={theme.colors.text.secondary}
          className={Style.subtitleStyle}
        >
          <span className={Style.timeStyle}>
            {restMinutes == null ? "-" : convertMinutes(restTime)}{" "}
          </span>{" "}
          안에 투표해요
        </Text>
        <Spacing size={20} />
        <div className={Style.topNavStyle}>
          <Counter view={view} order={order} totalOrder={totalCounter} />
          <Controller view={view} onItemClick={setView} />
        </div>
        <Spacing size={45} />
        {isLoading && <div className={Style.skeletonLoading} />}
        {candidatesData != null && (
          <>
            <Tooltip />
            <CardList
              view={view}
              list={candidatesData.data}
              selectedCardIds={agreedStationIds.map(({ id }) => id)}
              stationLocations={stationLocationsData?.data || []}
              onIndexChange={setOrder}
              onSelectCard={({ id, name }) => {
                const isSelected = agreedStationIds.some(
                  (station) => station.id === id
                );

                if (isSelected) {
                  setAgreedStationIds((prev) =>
                    prev.filter((station) => station.id !== id)
                  );
                  return;
                }

                setAgreedStationIds((prev) => [...prev, { id, name }]);
              }}
            />
          </>
        )}
      </Flex>

      {/* 아래 */}
      <FixedBottomWithSpacing>
        <Button
          onClick={handleVoteSubmit}
          disabled={agreedStationIds.length === 0 || isPending}
          containerStyle={{ position: "relative" }}
        >
          {agreedStationIds.length > 0 && (
            <motion.div
              initial={{
                background: "linear-gradient(to right, #3D84FF, #3D84FF80)",
              }}
              animate={{
                width: 28,
                background: "#3D84FF",
                transition: { delay: 1 },
              }}
              className={Style.buttonNumberContainer}
            >
              {agreedStationIds.length}
              <motion.span
                animate={{
                  opacity: 0,
                  width: 0,
                  paddingLeft: 0,
                  transition: { delay: 1 },
                }}
                className={Style.buttonNumberText}
              >
                <Text
                  color="white"
                  variant="caption"
                  style={{ whiteSpace: "pre" }}
                >
                  {agreedStationIds[agreedStationIds.length - 1]?.name}에
                  투표했습니다
                </Text>
              </motion.span>
            </motion.div>
          )}
          {agreedStationIds.length > 0
            ? `투표 끝내기`
            : "1가지 이상 장소에 콕!"}
        </Button>
      </FixedBottomWithSpacing>
    </Flex>
  );
}
