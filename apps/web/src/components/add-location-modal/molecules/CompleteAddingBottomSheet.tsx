import { Button, Flex, Text } from "@repo/ui/components";
import * as styles from "../style.css";
import { useStation } from "../contexts/station";
import { useSelectFlag } from "../contexts/selected-flag";

interface CompleteAddingBottomSheetProps {
  onClose: VoidFunction;
}

const CompleteAddingBottomSheet = ({
  onClose,
}: CompleteAddingBottomSheetProps) => {
  const { setStation } = useStation();
  const { setSelectFlag } = useSelectFlag();

  if (!setStation || !setSelectFlag) return null;

  const handleClickModify = () => {
    setStation(null);
    setSelectFlag(false);
  };

  return (
    <Flex
      as="section"
      direction="column"
      gap={20}
      className={styles.bottomSheetContainer}
    >
      <Flex direction="column" gap={12}>
        <Text as="p" variant="title2">
          후보에 <Text variant="title2">망원역</Text>이 추가됐어요!
        </Text>

        <Text as="p" variant="caption">
          내가 추가한 역이 투표 후보에 포함될거에요
        </Text>
      </Flex>

      <Flex gap={8}>
        <Button
          variant="border"
          style={{ flexBasis: "35%" }}
          onClick={handleClickModify}
        >
          수정하기
        </Button>
        <Button
          variant="gradient-loop"
          style={{ flexBasis: "65%" }}
          onClick={onClose}
        >
          완료하기
        </Button>
      </Flex>
    </Flex>
  );
};

export default CompleteAddingBottomSheet;
