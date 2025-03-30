"use client";

import { Button, Flex, Spacing, Text } from "@repo/ui/components";
import * as Style from "./style.css";
import { theme } from "@repo/ui/tokens";
import { useState } from "react";
import { Counter } from "../atom/Counter";
import { Controller } from "../atom/Controller";
import { CardList } from "../organism/CardList";
import { dummyPlaceList } from "@/components/vote-voting/templates/dummy";

const DUMMY_REST_TIME = "9시간 59분";

interface Props {
  onNext: VoidFunction;
}

export function VoteVotingLayout({ onNext }: Props) {
  const [view, setView] = useState<"card" | "list">("card");
  const [order, setOrder] = useState(1);

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
          마음에 드는 장소를 '콕'
        </Text>
        <Spacing size={20} />
        <Text
          variant="caption"
          color={theme.colors.text.secondary}
          className={Style.subtitleStyle}
        >
          <span className={Style.timeStyle}>{DUMMY_REST_TIME}</span> 안에
          투표해요
        </Text>
        <Spacing size={20} />
        <div className={Style.topNavStyle}>
          <Counter
            view={view}
            order={order}
            totalOrder={dummyPlaceList.length}
          />
          <Controller view={view} onItemClick={setView} />
        </div>
        <Spacing size={45} />
        <CardList view={view} list={dummyPlaceList} onIndexChange={setOrder} />
      </Flex>

      {/* 아래 */}
      <div className={Style.footerContainerStyle}>
        <Button onClick={onNext}>1가지 이상 장소에 콕!</Button>
      </div>
    </Flex>
  );
}
