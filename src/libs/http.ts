import { message } from 'antd';
import axios, { AxiosError } from 'axios';
import { enhance } from 'foca-axios';

const instance = axios.create({
  // codesandbox里需要使用https，否则请求出错
  baseURL: 'https://registry.npmmirror.com',
});

instance.interceptors.response.use(undefined, (err: AxiosError) => {
  message.error(err.message);

  return Promise.reject(err);
});

export const http = enhance(instance, {
  cache: {
    enable: false,
  },
  throttle: {
    enable: true,
  },
  retry: {
    enable: true,
  },
});
