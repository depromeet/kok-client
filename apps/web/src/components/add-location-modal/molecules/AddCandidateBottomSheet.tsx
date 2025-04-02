"use react";

import { Button, Flex, LoadingDots, Text } from "@repo/ui/components";
import { DeleteIcon } from "@repo/ui/icons";
import { useStationInfo } from "../contexts/station";
import LineNumbers from "./LineNumbers";
import WarningIcon from "@/assets/icons/WarningIcon";
import { useSelectFlag } from "../contexts/selected-flag";
import * as styles from "../style.css";
import { notFound, useParams } from "next/navigation";
import { useCreateCandidateStation } from "@/hooks/api/useCreateCandidateStation";
import { useEffect } from "react";

const AddCandidateBottomSheet = () => {
  const params = useParams<{ roomId: string }>();

  const { stationInfo, setStationInfo } = useStationInfo();
  const { setSelectFlag } = useSelectFlag();
  const {
    mutate: createCandidateStation,
    isPending,
    isSuccess,
  } = useCreateCandidateStation();

  // TODO: 잘못된 정보 및 경로이므로 404 페이지로 라우팅
  if (!stationInfo || !setSelectFlag || !params) {
    notFound();
  }

  const { roomId } = params;
  const { station, routes } = stationInfo;

  const handleClickDelete = () => {
    setStationInfo(null);
  };

  const handleClickAddCandidate = () => {
    createCandidateStation({ roomId, stationId: station.id });
  };

  useEffect(() => {
    if (!isSuccess) return;
    setSelectFlag(true);
  }, [setSelectFlag, isSuccess]);

  return (
    <Flex
      as="section"
      direction="column"
      gap={20}
      className={styles.bottomSheetContainer}
    >
      <Flex direction="column" gap={12} className={styles.infoContainer}>
        <Flex justify="between" align="center">
          <Flex gap={8}>
            <LineNumbers lines={routes} />
            <Text variant="title2">{station.name}</Text>
          </Flex>

          <Flex as="button" onClick={handleClickDelete}>
            <DeleteIcon />
          </Flex>
        </Flex>

        <Flex align="center" gap={6}>
          <WarningIcon />
          <Text variant="caption" className={styles.description}>
            하나의 역만 추가할 수 있어요!
          </Text>
        </Flex>
      </Flex>

      <Button onClick={handleClickAddCandidate} disabled={isPending}>
        {isPending ? <LoadingDots /> : "투표 후보 추가하기"}
      </Button>
    </Flex>
  );
};

export default AddCandidateBottomSheet;
