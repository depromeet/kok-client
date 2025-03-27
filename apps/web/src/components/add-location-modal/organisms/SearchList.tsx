import { useState, ChangeEvent } from "react";
import { Flex, Input } from "@repo/ui/components";
import { SearchIcon } from "@repo/ui/icons";
import SearchListItem from "../molecules/SearchListItem";
import useDebounce from "@/hooks/useDebounce";
import * as styles from "../style.css";
import { StationInfo } from "..";

const dummyList = [
  {
    id: 1,
    name: "서울역",
    lines: ["1호선", "4호선", "경의중앙선"],
  },
  { id: 2, name: "시청", lines: ["1호선", "2호선"] },
  { id: 3, name: "종각", lines: ["1호선"] },
  { id: 4, name: "을지로입구", lines: ["2호선"] },
  { id: 5, name: "을지로3가", lines: ["2호선", "3호선"] },
  { id: 6, name: "을지로4가", lines: ["2호선", "5호선"] },
  { id: 7, name: "동대문", lines: ["1호선", "4호선"] },
  { id: 8, name: "동대문역사문화공원", lines: ["2호선", "4호선", "5호선"] },
  { id: 9, name: "충무로", lines: ["3호선", "4호선"] },
  { id: 10, name: "명동", lines: ["4호선"] },
  { id: 11, name: "강남", lines: ["2호선", "신분당선"] },
  { id: 12, name: "교대", lines: ["2호선", "3호선"] },
  { id: 13, name: "고속터미널", lines: ["3호선", "7호선", "9호선"] },
  { id: 14, name: "삼성", lines: ["2호선"] },
  { id: 15, name: "잠실", lines: ["2호선", "8호선"] },
];

interface SearchListProps {
  onSelect: (item: StationInfo) => void;
}

const SearchList = ({ onSelect }: SearchListProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const debouncedValue = useDebounce(inputValue, 300);

  const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <Flex as="section" direction="column" className={styles.searchSection}>
      <Input
        value={inputValue}
        onChange={handleChangeInputValue}
        variant="search"
        placeholder="지하철역 검색"
        rightElement={
          <button>
            <SearchIcon />
          </button>
        }
      />

      <Flex as="ul" direction="column" className={styles.searchList}>
        {dummyList
          .filter((stationInfo) =>
            debouncedValue.length > 0
              ? stationInfo.name.includes(debouncedValue)
              : stationInfo
          )
          .map((stationInfo) => (
            <SearchListItem
              key={stationInfo.name}
              {...stationInfo}
              onClick={() => onSelect(stationInfo)}
            />
          ))}
      </Flex>
    </Flex>
  );
};

export default SearchList;
