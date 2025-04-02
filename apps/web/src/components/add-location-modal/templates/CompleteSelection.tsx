import { Flex, Text } from "@repo/ui/components";
import { useStationInfo } from "../contexts/station";
import CompleteAddingBottomSheet from "../molecules/CompleteAddingBottomSheet";
import * as styles from "../style.css";
import StationBanner from "../molecules/StationBanner";

interface CompleteSelectionProps {
  onClose: VoidFunction;
}

const CompleteSelection = ({ onClose }: CompleteSelectionProps) => {
  const { stationInfo } = useStationInfo();

  if (!stationInfo) return null;

  return (
    <div className={styles.gradientBackground}>
      <Flex direction="column" gap={16} justify="center" align="center">
        <Text variant="body3">디프만 모각작</Text>
        <Text variant="heading1">후보지 추가 완료!</Text>
      </Flex>

      <StationBanner {...stationInfo} />

      <CompleteAddingBottomSheet onClose={onClose} />
    </div>
  );
};

export default CompleteSelection;
