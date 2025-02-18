/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Post } from "@/types/test/post.type";

import { buildURL } from "@/utils/buildURL";
import { getRequest } from "@repo/shared/axios";
import { API_URLS } from "@/constants/api";

export const getTestData = async (index: number) => {
  // index를 받아와서 해당 index의 test post 데이터를 가져오는 함수
  const url = buildURL(API_URLS.JSONPLACEHOLDER_POST, {
    index,
  });

  try {
    const result = await getRequest<Post>(url);
    return result;
  } catch (error: any) {
    const { status, desc } = error.response?.data || {};
    if (status === 400) {
      throw new Error(`Bad Request: ${desc || "Invalid parameters provided."}`);
    } else {
      throw new Error(`Error: ${desc || "An unexpected error occurred."}`);
    }
  }
};
