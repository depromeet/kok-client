/* eslint-disable @typescript-eslint/no-explicit-any */
export const buildURL = (baseURL: string, params: Record<string, any>) => {
  const queryString = new URLSearchParams(params).toString();
  return `${baseURL}?${queryString}`;
};
