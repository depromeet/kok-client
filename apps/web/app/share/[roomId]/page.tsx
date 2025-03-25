import FindingMidPoint from "@/components/midpoint-result/FindingMidPoint";

export default function ShareRoomPage({
  params,
}: {
  params: { roomId: string };
}) {
  const { roomId } = params;

  return <FindingMidPoint roomId={roomId} />;
}
