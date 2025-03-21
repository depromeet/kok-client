import Page from "@/pages/MemberOnboarding/Page";

export default async function MemberOnboardingPage({
  params,
}: {
  params: Promise<{ roomId: string }>;
}) {
  const { roomId } = await params;

  return <Page roomId={roomId} />;
}
