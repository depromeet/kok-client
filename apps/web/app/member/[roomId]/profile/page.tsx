import ProfileListLayout from "@/components/profile-list/templates/ProfileListLayout";

type ProfilePageProps = {
  params: { roomId: string };
};

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
  const profileData = await getProfileData(roomId);

  return <ProfileListLayout profileData={profileData.data} />;
}
