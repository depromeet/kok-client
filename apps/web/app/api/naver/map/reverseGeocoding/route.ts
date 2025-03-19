import { NaverPlaceSearchResponse } from "@/components/search-place-bottom-sheet/types";
import { getRequest } from "@repo/shared/axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const latitude = searchParams.get("latitude");
    const longitude = searchParams.get("longitude");

    if (!latitude || !longitude) {
      return NextResponse.json(
        { error: "Latitude and longitude are required" },
        { status: 400 }
      );
    }

    const data = await getRequest<NaverPlaceSearchResponse>({
      url: `https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?coords=${longitude},${latitude}&output=json&orders=admcode,roadaddr`,
      config: {
        headers: {
          "X-NCP-APIGW-API-KEY-ID": process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
          "X-NCP-APIGW-API-KEY": process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET,
        },
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Reverse geocoding error:", error);
    return NextResponse.json(
      { error: "Failed to fetch location data" },
      { status: 500 }
    );
  }
}
