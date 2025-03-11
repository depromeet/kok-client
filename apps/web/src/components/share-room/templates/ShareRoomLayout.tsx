import ShareRoomBottom from "../organisms/share-room-bottom/ShareRoomBottom";
import ShareRoomTop from "../organisms/share-room-top/ShareRoomTop";

const ShareRoomLayout = () => {
  return (
    <div>
      {/* 위 */}
      <ShareRoomTop />

      {/* 아래 */}
      <ShareRoomBottom />
    </div>
  );
};

export default ShareRoomLayout;
