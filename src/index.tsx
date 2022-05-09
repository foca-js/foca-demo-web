import './store';

import { FocaProvider } from 'foca';
import ReactDom from 'react-dom/client';
import App from './App';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';

const container = document.getElementById('root')!;
const root = ReactDom.createRoot(container);

root.render(
  <ConfigProvider locale={zhCN}>
    <FocaProvider>
      <App />
    </FocaProvider>
  </ConfigProvider>,
);
