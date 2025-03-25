import FindingMidPoint from "@/components/midpoint-result/FindingMidPoint";

export default function ShareRoomPage({
  params,
  searchParams,
}: {
  params: { roomId: string };
  searchParams?: { role?: string };
}) {
  const { roomId } = params;
  const isLeader = searchParams?.role === "leader";

  return <FindingMidPoint roomId={roomId} isLeader={isLeader} />;
}
