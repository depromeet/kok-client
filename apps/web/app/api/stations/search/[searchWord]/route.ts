import { getRequest } from "@repo/shared/axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ searchWord: string }> }
) {
  try {
    const { searchWord } = await params;
    console.log(searchWord);
    const data = await getRequest({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/stations/search/${searchWord}`,
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
