import { Flex } from "@repo/ui/components";
import ShareRoomBottom from "../organisms/share-room-bottom/ShareRoomBottom";
import ShareRoomTop from "../organisms/share-room-top/ShareRoomTop";
import { containerStyle } from "./style.css";

const ShareRoomLayout = () => {
  return (
    <Flex direction="column" className={containerStyle}>
      {/* 위 */}
      <ShareRoomTop />

      {/* 아래 */}
      <ShareRoomBottom />
    </Flex>
  );
};

export default ShareRoomLayout;
