import { NaverMap } from "@repo/naver-map";
import { createPortal } from "react-dom";
import MapHeader from "@/components/midpoint-result/organisms/MapHeader";
import { AnimationBottomSheet, Text } from "@repo/ui/components";
import * as Style from "./StationMapExplorer.css";
import {
  Activity,
  Restaurant,
  Cafe,
  Bar,
  Nature,
  Exhibition,
  Event,
  Shopping,
} from "../atom/filter-icon";
import { useState } from "react";

interface FilterOption {
  id: string;
  name: string;
  icon: React.FC;
}

interface StationMapExplorerProps {
  setShowFullScreenMap: (value: boolean) => void;
}

export const StationMapExplorer = ({
  setShowFullScreenMap,
}: StationMapExplorerProps) => {
  const handleMapClose = (e: any) => {
    if (e) e.stopPropagation();
    setShowFullScreenMap(false);
  };

  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const subway = "망원";

  const filterOptions: FilterOption[] = [
    { id: "activity", name: "액티비티", icon: Activity },
    { id: "restaurant", name: "식당", icon: Restaurant },
    { id: "cafe", name: "카페", icon: Cafe },
    { id: "bar", name: "술집", icon: Bar },
    { id: "nature", name: "자연", icon: Nature },
    { id: "exhibition", name: "전시", icon: Exhibition },
    { id: "event", name: "이벤트", icon: Event },
    { id: "shopping", name: "쇼핑", icon: Shopping },
  ];

  const handleFilterClick = (filterId: string) => {
    if (selectedFilter === filterId) {
      setSelectedFilter(null);
    } else {
      setSelectedFilter(filterId);
    }
  };

  return (
    <>
      {createPortal(
        <>
          <MapHeader
            title={`${subway}역 둘러보기`}
            isLookAround={true}
            onClose={handleMapClose}
          />
          <div className={Style.fullScreenMapContainerStyle}>
            <NaverMap width="100%" height="100vh" zoom={17} />
          </div>
          <AnimationBottomSheet>
            <div>
              <div className={Style.containerStyle}>
                {filterOptions.map((filter) => {
                  const IconComponent = filter.icon;
                  const isSelected = selectedFilter === filter.id;

                  return (
                    <div
                      key={filter.id}
                      className={Style.FilterStyle}
                      onClick={() => handleFilterClick(filter.id)}
                    >
                      <div className={Style.iconContainerStyle}>
                        <IconComponent />
                      </div>
                      <Text
                        variant="title4"
                        className={`${Style.filterTextStyle} 
                          ${isSelected && Style.selectedFilterTextStyle}`}
                      >
                        {filter.name}
                      </Text>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimationBottomSheet>
        </>,
        document.body
      )}
    </>
  );
};
