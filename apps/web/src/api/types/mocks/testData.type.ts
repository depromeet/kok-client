/**
 * Type: test Post 데이터 타입 정의
 */

import { ICommon } from "../common/common.type";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

/**
 * BE 팀과 논의한 API 응답 데이터 타입 정의 했을 때의 예시 타입
 */

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type TPost = ICommon<IPost>; // 예시 - data가 배열로 감싸지지 않고 하나의 객체 형태로 올 때
export type TPost2 = ICommon<IPost[]>; // 예시 - data가 배열로 감싸져서 올 때
