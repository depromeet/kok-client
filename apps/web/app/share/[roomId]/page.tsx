import FindingMidPoint from "@/components/midpoint-result/FindingMidPoint";

export default async function ShareRoomPage({
  params,
  searchParams,
}: {
  params: Promise<{ roomId: string }>;
  searchParams?: Promise<{ role?: string }>;
}) {
  const { roomId } = await params;
  const isLeader = (await searchParams)?.role === "leader";

  return <FindingMidPoint roomId={roomId} isLeader={isLeader} />;
}
