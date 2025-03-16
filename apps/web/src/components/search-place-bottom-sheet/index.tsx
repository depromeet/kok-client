"use client";

import { Button, Flex, Input, Text } from "@repo/ui/components";
import { ChangeEvent, useState } from "react";
import * as Style from "./style.css";
import { Place } from "./types";
import SearchListItem from "./search-list-item";
import { SearchIcon } from "@repo/ui/icons";
import { useGetPlaceSearchList } from "@/hooks/api/useGetPlaceSearchList";
import CurrentLocationIcon from "../../assets/icons/CurrentLocationIcon";

// TODO: 선택한 주소에 해당하는 마커 표기, 시트 배경 dimmed 처리, 현재 위치 지정 기능 필요

const SearchPlaceBottomSheet = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [place, setPlace] = useState<Place | null>(null);
  const { data, refetch } = useGetPlaceSearchList(query);

  const onChangeInputText = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const onClickSearchButton = () => {
    refetch();
  };

  const onFocusSearchInput = () => {
    setIsSearching(true);
  };

  const onBlurSearchInput = () => {};

  const onClickListItem = (place: Place) => {
    setPlace(place);
    setIsSearching(false);
  };

  const onClickSelectPlace = () => {
    if (!place) return;

    // TODO: 생성된 모임방 uuid를 통해 모임장 위치 등록 API 요청 및 링크 생성 페이지로 라우팅
  };

  return (
    <section
      className={Style.containerRecipe({
        // TODO: 출발지 선택 시트에서 언제 창이 넓어지고 다시 좁아지는지 시나리오 재정의 필요
        isFocus: isSearching,
      })}
    >
      {!place && (
        <div className={Style.wrapper}>
          <Text variant="title2">어디서 출발하시나요?</Text>

          <Input
            className={Style.input}
            placeholder="출발지를 입력해주세요"
            value={query}
            rightElement={
              <button onClick={onClickSearchButton}>
                <SearchIcon />
              </button>
            }
            padding="xs"
            onChange={onChangeInputText}
            onFocus={onFocusSearchInput}
            onBlur={onBlurSearchInput}
          />

          {!isSearching && (
            <Button>
              <Flex as="div" gap={4} align="center">
                <CurrentLocationIcon />
                <Text variant="title3">현재 내 위치</Text>
              </Flex>
            </Button>
          )}

          {isSearching && data && data.length > 0 && (
            // FIXME: 리스트가 overflow될 때 스크롤이 생기지 않는 현상 수정 필요
            <Flex as="ul" direction="column" className={Style.seachResultList}>
              {data.map((item: Place, index: number) => (
                <SearchListItem
                  key={`search-result-${index}-${item.title}`}
                  {...item}
                  isLast={index === data.length - 1}
                  onSelect={(place: Place) => onClickListItem(place)}
                />
              ))}
            </Flex>
          )}
        </div>
      )}

      {place && (
        <Flex as="div" direction="column" gap={20}>
          <Flex as="div" direction="column" gap={12} className={Style.result}>
            <Text variant="title2">주소</Text>

            <Text variant="caption" className={Style.selectedAddress}>
              {place.address}
            </Text>
          </Flex>

          <Button onClick={onClickSelectPlace}>
            <Text variant="title3">출발지로 설정하기</Text>
          </Button>
        </Flex>
      )}
    </section>
  );
};

export default SearchPlaceBottomSheet;
