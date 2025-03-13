/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 주어진 baseURL과 params를 이용하여 요청할 URL을 생성하는 유틸 함수입니다.
 *
 * @param {string} baseURL - 기본 요청 URL
 * @param {Record<string, any>} params - URL에 추가할 파라미터 객체
 * @param {boolean} [usePathParam=true] - true이면 `index` 값을 경로 파라미터로 사용하고,
 *                                       false이면 모든 값을 쿼리 파라미터로 추가합니다.
 * @returns {string} 생성된 URL 문자열
 */

export const buildURL = (
  baseURL: string,
  params: Record<string, any> = {},
  usePathParam = true
) => {
  if (usePathParam) {
    const { index, ...queryParams } = params;
    let url = baseURL;
    if (index !== undefined) {
      url += `/${index}`;
    }
    const queryString = new URLSearchParams(queryParams).toString();
    return queryString ? `${url}?${queryString}` : url;
  }

  const queryString = new URLSearchParams(params).toString();
  return queryString ? `${baseURL}?${queryString}` : baseURL;
};
