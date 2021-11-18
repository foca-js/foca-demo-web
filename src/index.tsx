import './store';

import { FocaProvider } from 'foca';
import ReactDOM from 'react-dom';
import App from './App';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <FocaProvider>
      <App />
    </FocaProvider>
  </ConfigProvider>,
  document.getElementById('root'),
);
