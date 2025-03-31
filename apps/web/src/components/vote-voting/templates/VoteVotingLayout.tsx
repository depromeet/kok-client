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
import { getTimeDifferenceInMinutes } from "@/components/vote-onboarding/templates/getDeadlineInMinutes";
import { convertMinutes } from "@/components/vote-onboarding/templates/convertMinutes";
import { useVoteCandidates } from "@/hooks/api/useVoteCandidates";
import { useVoting } from "@/hooks/api/useVoting";
import { FixedBottomWithSpacing } from "@/components/fixed-bottom/FixedBottomWithSpacing";

interface Props {
  memberId: string;
  onNext: VoidFunction;
}

export function VoteVotingLayout({ memberId, onNext }: Props) {
  const [view, setView] = useState<"card" | "list">("card");
  const [order, setOrder] = useState(1);
  const [agreedStationIds, setAgreedStationIds] = useState<number[]>([]);

  const params = useParams();

  const { data: deadlineData } = useVoteDeadline(params?.roomId as string);
  const { data: candidatesData } = useVoteCandidates(
    params?.roomId as string,
    memberId
  );

  const { mutate: vote } = useVoting({
    onSuccess: () => onNext(),
  });

  const restMinutes =
    deadlineData != null
      ? getTimeDifferenceInMinutes(deadlineData?.data.endAt)
      : 0;

  const totalCounter = candidatesData != null ? candidatesData.data.length : 0;

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
            {convertMinutes(restMinutes)}{" "}
          </span>{" "}
          안에 투표해요
        </Text>
        <Spacing size={20} />
        <div className={Style.topNavStyle}>
          <Counter view={view} order={order} totalOrder={totalCounter} />
          <Controller view={view} onItemClick={setView} />
        </div>
        <Spacing size={45} />
        {candidatesData != null && (
          <CardList
            view={view}
            list={candidatesData.data}
            selectedCardIds={agreedStationIds}
            onIndexChange={setOrder}
            onSelectCard={(id) => {
              if (agreedStationIds.includes(id)) {
                setAgreedStationIds((prev) =>
                  prev.filter((selectedId) => selectedId !== id)
                );
                return;
              }
              setAgreedStationIds((prev) => [...prev, id]);
            }}
          />
        )}
      </Flex>

      {/* 아래 */}
      <FixedBottomWithSpacing>
        <Button
          onClick={() => {
            vote({
              roomId: params?.roomId as string,
              memberId,
              agreedStationIds,
            });
          }}
        >
          1가지 이상 장소에 콕!
        </Button>
      </FixedBottomWithSpacing>
    </Flex>
  );
}
