/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * API 요청을 보낼 때 URL을 생성하는 util 함수입니다.
 * baseURL과 params를 받아 URL을 생성합니다.
 * usePathParam이 true이면 path parameter로 사용하고,
 * false이면 query parameter로 사용합니다.
 */

export const buildURL = (
  baseURL: string,
  params: Record<string, any>,
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
  } else {
    const queryString = new URLSearchParams(params).toString();
    return `${baseURL}?${queryString}`;
  }
};
