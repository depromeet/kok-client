import { CandidateStationResponse } from "@/api/types/stations/index.type";
import { postRequest } from "@repo/shared/axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ roomId: string; stationId: string }> }
) {
  const { roomId, stationId } = await params;
  const data = await postRequest<"", CandidateStationResponse>({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/stations/custom/${roomId}/${stationId}`,
  });

  return NextResponse.json(data);
}
