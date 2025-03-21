import { RoomInfoResponse } from "@/api/types/room/index.type";
import { getRequest } from "@repo/shared/axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ roomId: string }> }
) {
  try {
    const { roomId } = await params;
    const data = await getRequest<RoomInfoResponse>({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/rooms/${roomId}`,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
