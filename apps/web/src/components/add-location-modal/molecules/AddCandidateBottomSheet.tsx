import { Button, Flex, Text } from "@repo/ui/components";
import { DeleteIcon } from "@repo/ui/icons";
import { useStationInfo } from "../contexts/station";
import LineNumbers from "./LineNumbers";
import WarningIcon from "@/assets/icons/WarningIcon";
import { useSelectFlag } from "../contexts/selected-flag";
import * as styles from "../style.css";

const AddCandidateBottomSheet = () => {
  const { stationInfo, setStationInfo } = useStationInfo();
  const { setSelectFlag } = useSelectFlag();

  if (!stationInfo || !setSelectFlag) return null;

  const { station, routes } = stationInfo;

  const handleClickDelete = () => {
    setStationInfo(null);
  };

  const handleClickAddCandidate = () => {
    // TODO: 후보지 추가 API 연결
    setSelectFlag(true);
  };

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

      <Button onClick={handleClickAddCandidate}>투표 후보 추가하기</Button>
    </Flex>
  );
};

export default AddCandidateBottomSheet;
