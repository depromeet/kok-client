import ProfileListLayout from "@/components/profile-list/templates/ProfileListLayout";

type ProfilePageProps = {
  params: Promise<{ roomId: string }>;
};

async function getProfileData(roomId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/rooms/${roomId}/participants`,
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
  const { roomId } = await params;

  if (!roomId) {
    return;
  }

  const profileData = await getProfileData(roomId);

  if (!profileData) {
    return;
  }

  return <ProfileListLayout profileData={profileData.data} />;
}
