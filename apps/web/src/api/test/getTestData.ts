/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Post } from "@/types/test/post.type";

import { buildURL } from "@/utils/buildURL";
import { getRequest } from "@repo/shared/axios";
import { API_URLS } from "@/constants/api";

export const getTestData = async () => {
  const url = buildURL(API_URLS.JSONPLACEHOLDER_POST, {});

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
