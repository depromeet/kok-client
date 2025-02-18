import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosError,
  AxiosResponse,
  AxiosRequestConfig,
} from "axios";

export const instance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  timeout: 3000,
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    return config;
  },
  (error: AxiosError | Error): Promise<AxiosError> => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error: AxiosError | Error): Promise<never> => {
    if (axios.isAxiosError(error) && error.config) {
      const { message } = error;
      const { method, url } = error.config as InternalAxiosRequestConfig;
      const { status, statusText } = error.response as AxiosResponse;

      console.log(
        `🚨 [API] ${method?.toUpperCase()} ${url} | Error ${status} ${statusText} | ${message}`
      );
    }
    return Promise.reject(error);
  }
);

/* get 요청 */
export const getRequest = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await instance.get<T>(
    url,
    config as InternalAxiosRequestConfig
  );
  return response.data;
};

/* post 요청 */
export const postRequest = async <T, D>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await instance.post<T>(
    url,
    data,
    config as InternalAxiosRequestConfig
  );
  return response.data;
};

/* delete 요청 */
export const deleteRequest = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await instance.delete<T>(
    url,
    config as InternalAxiosRequestConfig
  );
  return response.data;
};

/* put 요청 */
export const putRequest = async <T, D>(
  url: string,
  data: D,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await instance.put<T>(
    url,
    data,
    config as InternalAxiosRequestConfig
  );
  return response.data;
};

/* patch 요청 */
export const patchRequest = async <T, D>(
  url: string,
  data: D,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await instance.patch<T>(
    url,
    data,
    config as InternalAxiosRequestConfig
  );
  return response.data;
};
