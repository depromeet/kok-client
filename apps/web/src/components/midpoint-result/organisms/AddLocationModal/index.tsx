"use client";

import { PageModal, Header, Flex, Input, Text } from "@repo/ui/components";
import * as styles from "./style.css";
import XIcon from "@/assets/icons/XIcon";
import { SearchIcon } from "@repo/ui/icons";
import { ChangeEvent, Fragment, useState } from "react";
import useDebounce from "@/hooks/useDebounce";

interface AddLocationModalProps {
  isOpen: boolean;
  onClose: VoidFunction;
}

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

const removeLineSuffix = (line: string): string => {
  return line.replace(/(선|호선|철도)$/, "");
};

const getLineColorName = (lineName: string): styles.SubwayProps => {
  if (!isNaN(Number(lineName))) return `line${lineName}` as styles.SubwayProps;

  switch (lineName) {
    case "신분당":
      return "shinbundang";
    // case "공항":
    //   return "gonghang";
    case "경의중앙":
      return "gyeonguiJungang";
    case "수인분당":
      return "suinbundang";
  }

  return "default";
};

const AddLocationModal = ({ isOpen, onClose }: AddLocationModalProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const debouncedValue = useDebounce(inputValue, 300);

  const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <PageModal isOpen={isOpen}>
      <div className={styles.container}>
        <Header
          title="만날 역 추가"
          rightElement={
            <button onClick={onClose}>
              <XIcon />
            </button>
          }
        />

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
                <Fragment key={stationInfo.name}>
                  <li className={styles.searchItem}>
                    <Flex
                      as="button"
                      align="center"
                      gap={8}
                      onClick={() => console.log(stationInfo)}
                      className={styles.searchItemButton}
                    >
                      <Flex gap={4} align="center">
                        {stationInfo.lines.map(removeLineSuffix).map((line) => (
                          <Flex
                            key={line}
                            direction="column"
                            justify="center"
                            align="center"
                            className={styles.lineNumberRecipe({
                              subway: getLineColorName(line),
                            })}
                          >
                            <Text variant="number">{line}</Text>
                          </Flex>
                        ))}
                      </Flex>
                      <div className={styles.divider} />
                      <Text variant="body3" className={styles.stationName}>
                        {stationInfo.name}
                      </Text>
                    </Flex>
                  </li>
                  <div className={styles.horizontalDivider} />
                </Fragment>
              ))}
          </Flex>
        </Flex>
      </div>
    </PageModal>
  );
};

export default AddLocationModal;
