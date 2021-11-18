import { message } from 'antd';
import axios, { AxiosError } from 'axios';
import { enhanceAxios } from 'foca-axios-enhancer';

const instance = axios.create({
  baseURL: 'http://registry.npmmirror.com',
});

instance.interceptors.response.use(undefined, (err: AxiosError) => {
  message.error(err.message);

  return Promise.reject(err);
});

export const http = enhanceAxios(instance, {
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
