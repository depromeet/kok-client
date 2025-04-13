import { NaverMap } from "@repo/naver-map";
import { createPortal } from "react-dom";
import MapHeader from "@/components/midpoint-result/molecules/MapHeader";
import { AnimationBottomSheet, Text } from "@repo/ui/components";
import * as Style from "./StationMapExplorer.css";
import { useState } from "react";
import { FILTER_OPTIONS } from "@/constants/filter-options";

interface StationMapExplorerProps {
  setShowFullScreenMap: (value: boolean) => void;
}

export const StationMapExplorer = ({
  setShowFullScreenMap,
}: StationMapExplorerProps) => {
  const handleMapClose = (e?: MouseEvent | TouchEvent) => {
    if (e) e.stopPropagation();
    setShowFullScreenMap(false);
  };

  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const subway = "망원";

  const filterOptions = FILTER_OPTIONS;

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
