import FindingMidPoint from "@/components/midpoint-result/templates/FindingMidPoint";

export default async function ShareRoomPage({
  params,
  searchParams,
}: {
  params: Promise<{ roomId: string }>;
  searchParams?: Promise<{ role?: string; memberId?: string }>;
}) {
  const { roomId } = await params;
  const resolvedSearchParams = await searchParams;
  const isLeader = resolvedSearchParams?.role === "leader";
  const memberId = resolvedSearchParams?.memberId || "";

  return (
    <FindingMidPoint roomId={roomId} isLeader={isLeader} memberId={memberId} />
  );
}
