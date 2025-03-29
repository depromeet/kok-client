"use client";

import {
  Button,
  Flex,
  Input,
  LoadingDots,
  Text,
  textRecipe,
} from "@repo/ui/components";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import * as Style from "./style.css";
import { Place } from "./types";
import SearchListItem from "./search-list-item";
import { DeleteIcon, SearchIcon } from "@repo/ui/icons";
import { useGetPlaceSearchList } from "@/hooks/api/useGetPlaceSearchList";
import CurrentLocationIcon from "../../assets/icons/CurrentLocationIcon";
import {
  getLatLng,
  Marker,
  NaverLatLng,
  ProfileMarker,
  useNaverMap,
} from "@repo/naver-map";
import { convertWGS84ToLatLng, getFullAddressAndTitle } from "@/utils/location";
import { useCurrentLocation } from "@/hooks/api/useCurrentLocation";
import { useSelectStartPlace } from "@/hooks/api/useSelectStartPlace";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useSetStartLocation } from "@/hooks/api/useStartLocation";
import { searchButton } from "@/components/search-place-bottom-sheet/style.css";
import { AnimatePresence, motion } from "@repo/motion";

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
  const pathname = usePathname();
  const { mutate, isSuccess } = useSelectStartPlace();
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [place, setPlace] = useState<Place | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { map } = useNaverMap();
  const { currentLocation, getCurrentLocation, addressInfo } =
    useCurrentLocation();

  const [query, setQuery] = useState<string>("");
  const { data: searchList, refetch: fetchSearchList } =
    useGetPlaceSearchList(query);
  const { setStartLocation } = useSetStartLocation();
  const profileMarkerElement = ProfileMarker({ profileImageUrl: memberImgUrl });
  const marker = Marker({
    map: map!,
    customMarkerData: profileMarkerElement
      ? {
          marker: profileMarkerElement,
          width: 48,
          height: 48,
        }
      : undefined, // NOTE: undefined시 기본 마커 사용
  });

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
    setIsLoading(true);
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
    setStartLocation({
      roomId,
      latitude: Number(place.mapy),
      longitude: Number(place.mapx),
      profileImageUrl: memberImgUrl,
    });

    mutate({
      roomId,
      memberId,
      latitude: Number(place.mapy),
      longitude: Number(place.mapx),
    });

    // router.push(`/share/${roomId}`);
  };

  const onClickRemovePlace = () => {
    setPlace(null);
    marker.cleanUp();
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

  useEffect(() => {
    if (!place) return;

    const latLng = getLatLng({ y: Number(place.mapy), x: Number(place.mapx) });

    marker.cleanUp();
    marker.create({
      latitude: latLng.y,
      longitude: latLng.x,
    });

    moveTo(latLng);
    setIsLoading(false);
  }, [place, moveTo, marker]);

  useEffect(() => {
    if (!isSuccess || !pathname) return;

    const roleQueryParam = pathname.includes("create-room")
      ? `?role=${encodeURIComponent("leader")}`
      : "";
    router.push(`/share/${roomId}${roleQueryParam}`);
  }, [router, pathname, isSuccess, roomId]);

  return (
    <>
      <AnimatePresence>
        {isSearching && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={Style.backgroundDimmed}
            onClick={onClickBackground}
          />
        )}
      </AnimatePresence>
      <Flex
        as="section"
        direction="column"
        className={Style.containerRecipe({
          isFocus: place !== null ? "finish" : isSearching,
        })}
      >
        {!place && (
          <div className={Style.placeContainer}>
            <Text variant="title2">어디서 출발하시나요?</Text>

            <motion.div whileTap={{ scale: 0.96 }}>
              <Input
                className={Style.input}
                variant="search"
                placeholder="아파트, 지하철역 등 장소 검색"
                value={query}
                rightElement={
                  <motion.button
                    className={searchButton}
                    onClick={onClickSearchButton}
                  >
                    <SearchIcon />
                  </motion.button>
                }
                padding="xs"
                onChange={onChangeInputText}
                onFocus={onFocusSearchInput}
              />
            </motion.div>

            <AnimatePresence>
              {!isSearching && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={Style.buttonContainer}
                >
                  <Button
                    className={textRecipe({ variant: "title3" })}
                    onClick={onClickCurrentLocation}
                    disabled={isLoading}
                  >
                    <Flex as="div" gap={4} align="center">
                      {isLoading ? (
                        <LoadingDots />
                      ) : (
                        <>
                          <CurrentLocationIcon />
                          <Text variant="title3">현재 내 위치</Text>
                        </>
                      )}
                    </Flex>
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            {isSearching && searchList && (
              <Flex
                as="ul"
                direction="column"
                className={Style.seachResultList}
              >
                {searchList.length > 0 ? (
                  searchList.map((item: Place, index: number) => (
                    <SearchListItem
                      key={`search-result-${index}-${item.title}`}
                      {...item}
                      isLast={index === searchList.length - 1}
                      onSelect={(place: Place) => onClickListItem(place)}
                    />
                  ))
                ) : (
                  <Flex
                    className={Style.noResult}
                    direction="column"
                    align="center"
                  >
                    <Image
                      src="/images/ghost-character.png"
                      alt="empty list image"
                      width={100}
                      height={100}
                    />
                    <Text variant="body2">주소를 다시 확인해주세요</Text>
                  </Flex>
                )}
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
      </Flex>
    </>
  );
};

export default SearchPlaceBottomSheet;

const removeBTag = (str: string) => {
  return str.trim().replace(/<\/?b>/g, "");
};
