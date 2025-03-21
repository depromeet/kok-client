import ProfileListLayout from "@/components/profile-list/templates/ProfileListLayout";

type ProfilePageProps = {
  params: { roomId: string };
};

async function getRoomIsFull(roomId: string) {
  const res = await fetch(
    `http://dev-api.kokokok.com:8080/v1/api/rooms/${roomId}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return null;
  }

  return res.json();
}

async function getProfileData(roomId: string) {
  const res = await fetch(
    `http://dev-api.kokokok.com:8080/v1/api/rooms/${roomId}/participants`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { roomId } = params;
  const [roomIsFullData, profileData] = await Promise.all([
    getRoomIsFull(roomId),
    getProfileData(roomId),
  ]);

  // 호진 todo : roomIsFullData에서 isFull 데이터 꺼내오기

  return <ProfileListLayout profileData={profileData.data} />;
}
