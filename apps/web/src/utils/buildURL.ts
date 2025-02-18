/* eslint-disable @typescript-eslint/no-explicit-any */
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
