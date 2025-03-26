import JoinRoomLayout from "@/components/join-room/templates/JoinRoomLayout";
import { API_URLS } from "@/constants/api";

export default async function JoinRoomPage() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}${API_URLS.GET_RANDOM_PROFILE}`
  );

  const { data: randomProfile } = response.ok ? await response.json() : {};
  return <JoinRoomLayout randomProfile={randomProfile} />;
}
