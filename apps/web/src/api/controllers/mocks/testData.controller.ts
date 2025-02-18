/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Post } from "@/api/types/mocks/testData.type";

import { buildURL } from "@/utils/buildURL";
import { deleteRequest, getRequest, postRequest } from "@repo/shared/axios";
import { API_URLS } from "@/constants/api";

class TestDataController {
  private static instance: TestDataController;
  private constructor() {}

  public static getInstance(): TestDataController {
    if (!TestDataController.instance) {
      TestDataController.instance = new TestDataController();
    }
    return TestDataController.instance;
  }

  // 데이터 가져오기
  public async getTestData(index: number): Promise<Post | undefined> {
    const url = buildURL(API_URLS.JSONPLACEHOLDER_POST, { index });
    try {
      return await getRequest<Post>(url);
    } catch (error: any) {
      this.handleError(error);
      return undefined;
    }
  }

  // 데이터 생성
  public async postTestData(data: Post): Promise<Post | undefined> {
    try {
      return await postRequest<Post, Post>(API_URLS.JSONPLACEHOLDER_POST, data);
    } catch (error: any) {
      this.handleError(error);
      return undefined;
    }
  }

  // 데이터 삭제
  public async deleteTestData(index: number): Promise<void> {
    const url = buildURL(API_URLS.JSONPLACEHOLDER_POST, { index });
    try {
      await deleteRequest(url);
    } catch (error: any) {
      this.handleError(error);
    }
  }

  // 에러 처리
  private handleError(error: any): void {
    const { status, desc } = error.response?.data || {};
    const message =
      desc ||
      (status === 400
        ? "Invalid parameters provided."
        : "An unexpected error occurred.");
    throw new Error(`Error: ${message}`);
  }
}

export default TestDataController.getInstance();
