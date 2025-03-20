"use client";

import { Button, Flex, Input, Text, textRecipe } from "@repo/ui/components";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import * as Style from "./style.css";
import { Place } from "./types";
import SearchListItem from "./search-list-item";
import { DeleteIcon, SearchIcon } from "@repo/ui/icons";
import { useGetPlaceSearchList } from "@/hooks/api/useGetPlaceSearchList";
import CurrentLocationIcon from "../../assets/icons/CurrentLocationIcon";
import { getLatLng, Marker, NaverLatLng, useNaverMap } from "@repo/naver-map";
import { convertWGS84ToLatLng, getFullAddressAndTitle } from "@/utils/location";
import { useCurrentLocation } from "@/hooks/api/useCurrentLocation";
import ProfileMarker from "./profile-marker";
import { useSelectStartPlace } from "@/hooks/api/useSelectStartPlace";
import { useRouter } from "next/navigation";

interface SearchPlaceBottomSheetProps {
  roomId: string;
  memberId: string;
  memberImgUrl: string;
}

const SearchPlaceBottomSheet = ({
  roomId,
  memberId,
  memberImgUrl,
}: SearchPlaceBottomSheetProps) => {
  const router = useRouter();
  const { mutate, isSuccess } = useSelectStartPlace();
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [place, setPlace] = useState<Place | null>(null);

  const { map } = useNaverMap();
  const { currentLocation, getCurrentLocation, addressInfo } =
    useCurrentLocation();

  const [query, setQuery] = useState<string>("");
  const { data: searchList, refetch: fetchSearchList } =
    useGetPlaceSearchList(query);

  const marker = Marker({
    map: map!,
    customMarkerData: {
      marker: ProfileMarker({ profileImageUrl: memberImgUrl }),
      width: 48,
      height: 48,
    },
  }); // TODO: 프로필 URL을 전달받아 렌더링

  const moveTo = useCallback(
    (latLng: NaverLatLng) => {
      if (map) {
        map.panTo(latLng);
      }
    },
    [map]
  );

  const onChangeInputText = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const onClickCurrentLocation = () => {
    getCurrentLocation();
  };

  const onClickSearchButton = () => {
    fetchSearchList();
  };

  const onFocusSearchInput = () => {
    setIsSearching(true);
  };

  const onClickBackground = () => {
    setIsSearching(false);
  };

  const onClickListItem = (place: Place) => {
    const latLng = convertWGS84ToLatLng({ y: place.mapy, x: place.mapx });

    setPlace({
      ...place,
      mapy: latLng.y.toString(),
      mapx: latLng.x.toString(),
    });
    setIsSearching(false);
  };

  const onClickSelectPlace = () => {
    if (!place) return;

    mutate({
      roomId,
      memberId,
      latitude: Number(place.mapy),
      longitude: Number(place.mapx),
    });
  };

  const onClickRemovePlace = () => {
    setPlace(null);
  };

  // NOTE: 현 위치로 저장
  useEffect(() => {
    if (!currentLocation || !addressInfo) return;

    const { latitude, longitude } = currentLocation;
    const { title, fullAddress } = getFullAddressAndTitle(addressInfo);

    setPlace({
      title,
      mapy: latitude.toString(),
      mapx: longitude.toString(),
      address: fullAddress,
    });
  }, [currentLocation, addressInfo]);

  // NOTE: 출발지 선택시 해당 위치 마커 표기 및 이동
  useEffect(() => {
    if (!place) return;

    const latLng = getLatLng({ y: Number(place.mapy), x: Number(place.mapx) });

    marker.cleanUp();
    marker.create({
      latitude: latLng.y,
      longitude: latLng.x,
    });

    moveTo(latLng);
  }, [place, moveTo, marker]);

  useEffect(() => {
    if (!isSuccess) return;

    router.push("/share");
  }, [router, isSuccess]);

  return (
    <>
      {isSearching && (
        <div className={Style.backgroundDimmed} onClick={onClickBackground} />
      )}
      <section
        className={Style.containerRecipe({
          // TODO: 출발지 선택 시트에서 언제 창이 넓어지고 다시 좁아지는지 시나리오 재정의 필요
          isFocus: place !== null ? "finish" : isSearching,
        })}
      >
        {!place && (
          <div className={Style.wrapper}>
            <Text variant="title2">어디서 출발하시나요?</Text>

            <Input
              className={Style.input}
              variant="search"
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
            />

            {!isSearching && (
              <Button
                className={textRecipe({ variant: "title3" })}
                onClick={onClickCurrentLocation}
              >
                <Flex as="div" gap={4} align="center">
                  <CurrentLocationIcon />
                  <Text variant="title3">현재 내 위치</Text>
                </Flex>
              </Button>
            )}

            {isSearching && searchList && searchList.length > 0 && (
              // FIXME: 리스트가 overflow될 때 스크롤이 생기지 않는 현상 수정 필요
              <Flex
                as="ul"
                direction="column"
                className={Style.seachResultList}
              >
                {searchList.map((item: Place, index: number) => (
                  <SearchListItem
                    key={`search-result-${index}-${item.title}`}
                    {...item}
                    isLast={index === searchList.length - 1}
                    onSelect={(place: Place) => onClickListItem(place)}
                  />
                ))}
              </Flex>
            )}
          </div>
        )}

        {place && (
          <Flex
            as="div"
            className={Style.resultContainer}
            direction="column"
            gap={20}
          >
            <Flex justify="between">
              <Flex
                as="div"
                direction="column"
                gap={12}
                className={Style.result}
              >
                <Text variant="title2">{removeBTag(place.title)}</Text>

                <Text variant="caption" className={Style.selectedAddress}>
                  {place.address}
                </Text>
              </Flex>

              <button onClick={onClickRemovePlace}>
                <DeleteIcon />
              </button>
            </Flex>

            {/* TODO: isSuccess를 활용해 API 요청중 버튼 disable */}
            <Button onClick={onClickSelectPlace}>
              <Text variant="title3">출발지로 설정하기</Text>
            </Button>
          </Flex>
        )}
      </section>
    </>
  );
};

export default SearchPlaceBottomSheet;

const removeBTag = (str: string) => {
  return str.trim().replace(/<\/?b>/g, "");
};
