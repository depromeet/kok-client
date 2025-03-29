import MemberOnboarding from "@/components/member-onboarding";
import { ErrorBoundary } from "react-error-boundary";

export default async function MemberOnboardingPage({
  params,
}: {
  params: Promise<{ roomId: string }>;
}) {
  const { roomId } = await params;

  // TODO: 유효하지 않은 roomID의 경우 fallback 처리
  return (
    <ErrorBoundary fallback={<>유효하지 않은 방입니다.</>}>
      <MemberOnboarding roomId={roomId} />
    </ErrorBoundary>
  );
}
