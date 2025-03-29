import { Flex, Text } from "@repo/ui/components";
import * as styles from "../style.css";
import { useStation } from "../contexts/station";
import { StationInfo } from "../types";
import LineNumbers from "./LineNumbers";

type SearchListItemProps = StationInfo;

const SearchListItem = (stationInfo: SearchListItemProps) => {
  const { setStation } = useStation();
  const { name, lines } = stationInfo;

  const handleClickItem = () => {
    setStation(stationInfo);
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
          <LineNumbers lines={lines} />

          <div className={styles.divider} />

          <Text variant="body3" className={styles.stationName}>
            {name}
          </Text>
        </Flex>
      </li>

      <div className={styles.horizontalDivider} />
    </>
  );
};

export default SearchListItem;
