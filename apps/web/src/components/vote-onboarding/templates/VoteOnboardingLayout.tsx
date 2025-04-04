"use client";

import {
  Button,
  Flex,
  Skeleton,
  Spacing,
  Text,
  textRecipe,
} from "@repo/ui/components";
import * as Style from "./style.css";
import { Tooltip } from "../atom/Tooltip/Tooltip";
import Image from "next/image";
import { Stepper } from "../atom/Stepper/Stepper";
import { useParams, useRouter } from "next/navigation";
import { useVoteDeadline } from "@/hooks/api/useVoteDeadline";
import { getTimeDifferenceInMinutes } from "./getDeadlineInMinutes";
import { convertMinutes } from "@/components/vote-onboarding/templates/convertMinutes";
import { useStopWatch } from "@/hooks/useStopWatch";

export function VoteOnboardingLayout() {
  const router = useRouter();
  const params = useParams();

  const { data } = useVoteDeadline(params?.roomId as string);

  const restMinutes =
    data != null ? getTimeDifferenceInMinutes(data?.data.endAt) : undefined;
  const { restTime } = useStopWatch({ startTime: restMinutes });

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
      <Flex direction="column" align="center">
        <Tooltip>
          <Flex justify="center" align="center" gap={4}>
            {data ? data.data.candidateCount : <Skeleton />}
            <Text>가지 장소 후보</Text>
          </Flex>
        </Tooltip>
        <Spacing size={4} />
        <Text variant="heading3" className={Style.titleStyle}>
          어디로 갈까요?
        </Text>
        <Spacing size="12.65vh" />
        <Image src="/images/vote/banner.png" width={335} height={160} alt="" />
        <Spacing size="12.65vh" />
        <Stepper>
          <Stepper.Item order={1}>
            중간장소 후보를 둘러보고 투표해요
          </Stepper.Item>
          <Stepper.Item order={2}>투표 안 한 친구들을 독촉해요</Stepper.Item>
        </Stepper>
      </Flex>

      {/* 아래 */}
      <Flex
        direction="column"
        align="center"
        className={Style.footerContainerStyle}
      >
        <Flex align="center" justify="center" gap={4}>
          {restMinutes == null ? (
            <Skeleton width={65} height={14} />
          ) : (
            <Text variant="caption" className={Style.LimitHour}>
              {convertMinutes(restTime)}
            </Text>
          )}
          <Text variant="caption">안에 투표 해주세요!</Text>
        </Flex>
        <Spacing size={20} />
        <Button
          variant="secondary"
          className={textRecipe({ variant: "title3" })}
          onClick={() =>
            router.push(`/room/${params?.roomId}/vote/select-profile`)
          }
        >
          투표 참여하기
        </Button>
      </Flex>
    </Flex>
  );
}
