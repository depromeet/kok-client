import { Flex, Text } from "@repo/ui/components";
import * as styles from "../style.css";
import { useStationInfo } from "../contexts/station";
import { StationInfo } from "@/api/types/stations/index.type";
import LineNumbers from "./LineNumbers";

type SearchListItemProps = StationInfo;

const SearchListItem = (stationInfo: SearchListItemProps) => {
  const { setStationInfo } = useStationInfo();
  const { routes, station } = stationInfo;

  const handleClickItem = () => {
    setStationInfo(stationInfo);
  };

  return (
    <>
      <li className={styles.searchItem}>
        <Flex
          as="button"
          align="center"
          gap={8}
          className={styles.searchItemButton}
          onClick={handleClickItem}
        >
          <LineNumbers lines={routes} />

          <div className={styles.divider} />

          <Text variant="body3" className={styles.stationName}>
            {station.name}
          </Text>
        </Flex>
      </li>

      <div className={styles.horizontalDivider} />
    </>
  );
};

export default SearchListItem;
