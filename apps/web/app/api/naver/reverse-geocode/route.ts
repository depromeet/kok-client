import { NextRequest, NextResponse } from "next/server";
import { getRequest } from "@repo/shared/axios";
import { NaverReverseGeocodeResponse } from "./types";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");

    if (!lat || !lng) {
      return NextResponse.json(
        { error: "위도와 경도 파라미터가 필요합니다" },
        { status: 400 }
      );
    }

    const clientId = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
    const clientSecret = process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
      return NextResponse.json(
        { error: "API 키가 설정되지 않았습니다" },
        { status: 500 }
      );
    }

    const data = await getRequest<NaverReverseGeocodeResponse>({
      url: `https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?coords=${lng},${lat}&output=json&orders=legalcode,admcode,addr,roadaddr`,
      config: {
        headers: {
          "x-ncp-apigw-api-key-id": clientId,
          "x-ncp-apigw-api-key": clientSecret,
        },
      },
    });

    if (data.status?.code !== 0) {
      return NextResponse.json(
        {
          error: `네이버 API 오류: ${data.status?.code} ${data.status?.message}`,
        },
        { status: 400 }
      );
    }

    return NextResponse.json({ fullData: data });
  } catch (error) {
    console.error("서버 오류 상세 정보:", error);
    return NextResponse.json(
      {
        error: "리버스 지오코딩 처리 중 오류가 발생했습니다",
        details: String(error),
      },
      { status: 500 }
    );
  }
}
