/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Post, TPost } from "@/api/types/mocks/testData.type";

import { buildURL } from "@/utils/buildURL";
import { deleteRequest, getRequest, postRequest } from "@repo/shared/axios";
import { API_URLS } from "@/constants/api";

class TestDataController {
  private static instance: TestDataController;
  private constructor() {}

  /**
   * 싱글톤 인스턴스를 반환.
   * 인스턴스가 없으면 새로 생성.
   */
  public static getInstance(): TestDataController {
    if (!TestDataController.instance) {
      TestDataController.instance = new TestDataController();
    }
    return TestDataController.instance;
  }

  /**
   * 데이터를 가져옵니다.
   * @param index 데이터의 인덱스
   * @returns Post 객체 또는 undefined
   */
  public async getTestData(index: number) {
    const url = buildURL(API_URLS.JSONPLACEHOLDER_POST, { index });
    try {
      return await getRequest<Post>({
        url,
      });
    } catch (error: any) {
      this.handleError(error);
      return undefined;
    }
  }

  /**
   * 실제 API 데이터를 가져올 때 예시
   */
  public async getTestDataWithRealData(
    index: number
  ): Promise<TPost | undefined> {
    const url = buildURL(API_URLS.JSONPLACEHOLDER_POST, { index });
    try {
      return await getRequest<TPost>({
        url,
      });
    } catch (error: any) {
      this.handleError(error);
      return undefined;
    }
  }

  /**
   * 데이터를 생성합니다.
   * @param data 생성할 Post 데이터
   * @returns 생성된 Post 객체 또는 undefined
   */
  public async postTestData(data: Post): Promise<Post | undefined> {
    try {
      return await postRequest<Post, Post>({
        url: API_URLS.JSONPLACEHOLDER_POST,
        data,
      });
    } catch (error: any) {
      this.handleError(error);
      return undefined;
    }
  }

  /**
   * 데이터를 삭제합니다.
   * @param index 삭제할 데이터의 인덱스
   */
  public async deleteTestData(index: number): Promise<void> {
    const url = buildURL(API_URLS.JSONPLACEHOLDER_POST, { index });
    try {
      await deleteRequest({
        url,
      });
    } catch (error: any) {
      this.handleError(error);
    }
  }

  /**
   * 에러를 처리합니다.
   * @param error 발생한 에러 객체
   */
  private handleError(error: any): void {
    const { status, desc } = error.response?.data || {};

    // 에러 메시지를 설정
    const message =
      desc ||
      (status === 400
        ? "잘못된 매개변수가 제공되었습니다."
        : "예기치 않은 오류가 발생했습니다.");

    // throw new Error(`오류: ${message}`); -> 앱이 죽을것 같아서 그냥 console.error로 변경
    console.error("API 요청 오류 발생:", message);
  }
}

export default TestDataController.getInstance();
