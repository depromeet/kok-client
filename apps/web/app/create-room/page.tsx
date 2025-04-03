import CreateRoomLayout from "@/components/create-room/templates/CreateRoomLayout";
import { API_URLS } from "@/constants/api";

export default async function CreateRoomPage() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}${API_URLS.GET_RANDOM_PROFILE}`,
    { cache: "no-store" }
  );

  const { data: randomProfile } = response.ok ? await response.json() : {};

  return <CreateRoomLayout randomProfile={randomProfile} />;
}
