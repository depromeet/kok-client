import MemberOnboarding from "@/components/member-onboarding";
import { notFound, redirect } from "next/navigation";

export default async function MemberOnboardingPage({
  params,
}: {
  params: Promise<{ roomId: string }>;
}) {
  const { roomId } = await params;

  let roomInfo = null;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/rooms/${roomId}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    roomInfo = data.data;
  } catch (error) {
    console.error(error, "유효하지 않은 방입니다.");
    notFound();
  }

  if (roomInfo.roomStatus === "VOTE") {
    redirect(`/room/${roomId}/vote `);
  } else if (roomInfo.roomStatus === "VOTE_RESULT") {
    // TODO: 투표 결과 화면으로 redirect
  }

  return <MemberOnboarding roomId={roomId} roomName={roomInfo.roomName} />;
}
