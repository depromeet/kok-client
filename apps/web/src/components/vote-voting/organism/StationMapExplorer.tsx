import { NaverMap } from "@repo/naver-map";
import { createPortal } from "react-dom";
import MapHeader from "@/components/midpoint-result/organisms/MapHeader";
import { AnimationBottomSheet } from "@repo/ui/components";
import { fullScreenMapContainer } from "./CardItem.css";

interface StationMapExplorerProps {
  setShowFullScreenMap: (value: boolean) => void;
}

export const StationMapExplorer = ({
  setShowFullScreenMap,
}: StationMapExplorerProps) => {
  const handleMapClose = () => {
    setShowFullScreenMap(false);
  };

  const subway = "망원";

  return (
    <>
      {createPortal(
        <>
          <MapHeader
            title={`${subway}역 둘러보기`}
            isLookAround={true}
            onClose={handleMapClose}
          />
          <div className={fullScreenMapContainer}>
            <NaverMap width="100%" height="100vh" zoom={17} />
          </div>
          <AnimationBottomSheet>작성</AnimationBottomSheet>
        </>,
        document.body
      )}
    </>
  );
};
