import { Candidate } from "../templates/types";
import { PlaceItem } from "./PlaceItem";
import * as Style from "./PlaceList.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules"; // FreeMode 모듈 추가

interface Props {
  placeList: Candidate[];
}

export function PlaceList({ placeList }: Props) {
  return (
    <div className={Style.listContainer}>
      <Swiper
        modules={[FreeMode]}
        slidesPerView="auto"
        spaceBetween={12}
        freeMode={true}
        direction="horizontal"
        slidesOffsetBefore={30}
        style={{
          width: "100%",
          maxWidth: "600px",
          paddingTop: "10.2vh",
          height: "auto",
        }}
      >
        {placeList.map((place) => (
          <SwiperSlide
            key={place.stationId}
            style={{
              width: "auto",
              height: "auto",
              display: "flex",
            }}
          >
            <PlaceItem {...place} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
