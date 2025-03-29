import MidPointResult from "@/components/midpoint-result/MidPointResult";

export default async function FinalPage({
  params,
  searchParams,
}: {
  params: Promise<{ roomId: string }>;
  searchParams?: Promise<{ memberId?: string }>;
}) {
  const { roomId } = await params;
  const memberId = (await searchParams)?.memberId || "";

  return <MidPointResult roomId={roomId} memberId={memberId} />;
}
