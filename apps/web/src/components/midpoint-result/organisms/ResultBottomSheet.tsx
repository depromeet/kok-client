"use client";

import { Flex, Text, AnimationBottomSheet } from "@repo/ui/components";
import { theme } from "@repo/ui/tokens";
import GreyDividerIcon from "@/assets/icons/GreyDividerIcon";
import * as styles from "./styles.css";
import { secondsToTime } from "@/utils/time";
import { metersToKilometersString } from "@/utils/meterToKilometers";
import TransportBar from "./TransporBar";
import { ReactNode } from "react";
import { KakaoTalkShareButton } from "@/components/common";
import { KAKAO_TEMPLATE_IDS } from "@/constants/kakao-template";

interface ResultBottomSheetProps {
  totalTime?: number;
  totalDistance?: number;
  transferCount?: number;
  legs?: {
    mode: "WALK" | "SUBWAY" | "BUS";
    distance: number;
    sectionTime: number;
    route: string | null;
    routeColor: string | null;
  }[];
  banner?: ReactNode;
  bannerBottom?: string;
  roomId?: string;
}

const ResultBottomSheet = ({
  totalTime = 0,
  totalDistance = 0,
  transferCount = 0,
  legs = [],
  banner,
  bannerBottom,
  roomId = "",
}: ResultBottomSheetProps) => {
  const transferTotalTime = secondsToTime(totalTime);
  const transferTotalDistance = metersToKilometersString(totalDistance);
  const getWidthPercentage = (sectionTime: number) => {
    const originalPercentage = (sectionTime / totalTime) * 100;
    return originalPercentage < 5 ? 5 : Math.round(originalPercentage);
  };
  return (
    <AnimationBottomSheet
      initialY="100%"
      animateY={0}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 40,
      }}
      banner={banner}
      bannerBottom={bannerBottom}
    >
      <div className={styles.wrapper}>
        <Text variant="title4" style={{ color: theme.colors.orange50 }}>
          최적 이동경로
        </Text>
        <Flex
          as="div"
          justify="between"
          align="center"
          style={{ marginTop: "12px" }}
        >
          <div>
            <Text variant="title1" style={{ color: theme.colors.gray90 }}>
              {transferTotalTime}
            </Text>
            <Text variant="body1" style={{ color: theme.colors.gray90 }}>
              분
            </Text>
          </div>
          <Flex direction="row">
            <Text variant="caption" style={{ color: theme.colors.gray90 }}>
              환승 &nbsp;
            </Text>
            <Text variant="caption" style={{ color: theme.colors.orange50 }}>
              {transferCount} 회
            </Text>
            <div style={{ margin: "0 8px 0 8px" }}>
              <GreyDividerIcon />
            </div>
            <Text variant="caption">{transferTotalDistance}</Text>
          </Flex>
        </Flex>
      </div>
      <div className={styles.directionLineStyle}>
        <Flex direction="row" style={{ width: "100%", height: "100%" }}>
          {legs.map((leg, index) => {
            const widthPercentage = getWidthPercentage(leg.sectionTime);

            if (leg.mode === "SUBWAY") {
              return (
                <TransportBar
                  key={index}
                  width={widthPercentage}
                  time={Math.round(leg.sectionTime / 60)}
                  isSubway={true}
                  color={
                    leg.routeColor ? `#${leg.routeColor}` : theme.colors.gray40
                  }
                  route={leg.route || undefined}
                  mode={leg.mode}
                />
              );
            } else if (leg.mode === "BUS") {
              return (
                <TransportBar
                  key={index}
                  width={widthPercentage}
                  time={Math.round(leg.sectionTime / 60)}
                  isSubway={false}
                  color={theme.colors.gray50}
                  route={leg.route || undefined}
                  mode={leg.mode}
                />
              );
            } else {
              // WALK 모드
              return (
                <TransportBar
                  key={index}
                  width={widthPercentage}
                  time={Math.round(leg.sectionTime / 60)}
                  isSubway={false}
                  color={theme.colors.gray15}
                  route="WALK"
                  mode={leg.mode}
                />
              );
            }
          })}
        </Flex>
      </div>
      <Flex as="div" direction="column" gap={20}>
        <KakaoTalkShareButton
          variant="primary"
          templateId={KAKAO_TEMPLATE_IDS.FINISH}
          templateArgs={{
            roomId,
          }}
        >
          결과 공유하기
        </KakaoTalkShareButton>
      </Flex>
    </AnimationBottomSheet>
  );
};

export default ResultBottomSheet;
