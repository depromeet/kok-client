import {
  LocationsResponse,
  LocationsRequestProps,
} from "@/api/types/locations/index.types";
import { postRequest } from "@repo/shared/axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const data = await postRequest<LocationsResponse, LocationsRequestProps>({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/locations`,
    data: body,
  });

  return NextResponse.json(data);
}
