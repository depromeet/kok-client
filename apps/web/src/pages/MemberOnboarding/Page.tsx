"use client";

import MemberOnboarding from "@/components/member-onboarding";
import { useParams } from "next/navigation";
// import { ErrorBoundary } from "react-error-boundary";

export default function Page() {
  const params = useParams<{
    roomId: string;
  }>()!;

  if (!params) return null; // NOTE: 초기 컴포넌트 로드시 params가 null일 수 있음

  return (
    // TODO: fallback UI 추가
    // <ErrorBoundary fallback={<>유효하지 않은 초대장입니다.</>}>
    <MemberOnboarding roomId={params?.roomId || ""} />
    // </ErrorBoundary>
  );
}
