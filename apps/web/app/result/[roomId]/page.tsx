import MidPointResult from "@/components/midpoint-result/MidPointResult";

export default async function FinalPage({
  params,
}: {
  params: Promise<{ roomId: string }>;
}) {
  const { roomId } = await params;

  return <MidPointResult roomId={roomId} />;
}
