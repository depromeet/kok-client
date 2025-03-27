import { Button, Flex, Text } from "@repo/ui/components";
import { DeleteIcon } from "@repo/ui/icons";
import { useStation } from "../contexts/station";
import LineNumbers from "./LineNumbers";
import WarningIcon from "@/assets/icons/WarningIcon";
import * as styles from "../style.css";

const AddCandidateBottomSheet = () => {
  const { station, setStation } = useStation();

  if (!station) return null;

  const handleClickDelete = () => {
    setStation(null);
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
            <LineNumbers lines={station.lines} />
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

      <Button>투표 후보 추가하기</Button>
    </Flex>
  );
};

export default AddCandidateBottomSheet;
