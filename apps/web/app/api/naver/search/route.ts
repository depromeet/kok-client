import { NaverPlaceSearchResponse } from "@/components/SearchPlaceBottomSheet/types";
import { getRequest } from "@repo/shared/axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  const data = await getRequest<NaverPlaceSearchResponse>({
    url: `https://openapi.naver.com/v1/search/local.json?query=${query}&display=8`,
    config: {
      headers: {
        "X-Naver-Client-Id": process.env.NEXT_PUBLIC_NAVER_SEARCH_CLIENT_ID,
        "X-Naver-Client-Secret": process.env.NEXT_PUBLIC_NAVER_SEARCH_SECRET,
      },
    },
  });

  return NextResponse.json(data);
}
