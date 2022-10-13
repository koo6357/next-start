import axios, { AxiosRequestConfig } from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 6000,
});

export const httpClient = async (config: AxiosRequestConfig) => {
  try {
    const { data } = await axiosInstance(config);
    if (!data?.Result) {
      new Error(data?.ResultMsg);
      return;
    }
    return data;
  } catch (err) {
    // 에러가 났을 경우 mock 데이터를 리턴해준다
    // todo: 공통 에러 처리 필요
  }
};
