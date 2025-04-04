import { Button, Flex, Text } from "@repo/ui/components";
import * as styles from "../style.css";

interface CompleteAddingBottomSheetProps {
  onClose: VoidFunction;
  stationName: string;
}

const CompleteAddingBottomSheet = ({
  onClose,
  stationName,
}: CompleteAddingBottomSheetProps) => {
  return (
    <Flex
      as="section"
      direction="column"
      gap={20}
      className={styles.bottomSheetContainer}
    >
      <Flex direction="column" gap={12}>
        <Text as="p" variant="title2">
          후보에 <Text variant="title2">{stationName}</Text>역이 추가되었어요!
        </Text>

        <Text as="p" variant="caption">
          내가 추가한 역이 투표 후보에 포함될 거에요
        </Text>
      </Flex>

      <Button variant="gradient-loop" onClick={onClose}>
        완료하기
      </Button>
    </Flex>
  );
};

export default CompleteAddingBottomSheet;
