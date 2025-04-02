"use client";

import { useState, ChangeEvent, useEffect } from "react";
import { Flex, Input, LoadingSpinner } from "@repo/ui/components";
import { SearchIcon } from "@repo/ui/icons";
import SearchListItem from "../molecules/SearchListItem";
import useDebounce from "@/hooks/useDebounce";
import * as styles from "../style.css";
import { useSearchStations } from "@/hooks/api/useSearchStations";

const SearchList = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(inputValue, 300);
  const {
    data: searchList,
    refetch: fetchSearchList,
    isLoading,
  } = useSearchStations(debouncedValue);

  const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    if (debouncedValue === "") return;

    fetchSearchList();
  }, [fetchSearchList, debouncedValue]);

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

      {isLoading ? (
        <Flex
          align="center"
          justify="center"
          style={{ width: "100%", height: "80%" }}
        >
          <LoadingSpinner width={64} height={64} />
        </Flex>
      ) : (
        <Flex as="ul" direction="column" className={styles.searchList}>
          {searchList &&
            searchList.data &&
            searchList.data.map((stationInfo) => (
              <SearchListItem key={stationInfo.station.name} {...stationInfo} />
            ))}
        </Flex>
      )}
    </Flex>
  );
};

export default SearchList;
