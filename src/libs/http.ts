import { message } from 'antd';
import { axios, AxiosError } from 'foca-axios';

export const http = axios.create({
  // codesandbox里需要使用https，否则请求出错
  baseURL: 'https://registry.npmmirror.com',
  cache: false,
  throttle: true,
  retry: true,
});

http.interceptors.response.use(undefined, (err: AxiosError) => {
  message.error(err.message);
  return Promise.reject(err);
});
