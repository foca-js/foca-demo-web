import { Tabs } from 'antd';
import { FC, memo } from 'react';
import Counter from './Counter';
import SearchNpm from './SearchNpm';
import Todo from './Todo';

const App: FC = () => {
  return (
    <Tabs animated type="card">
      <Tabs.TabPane key="counter" tab="计数器">
        <Counter />
      </Tabs.TabPane>
      <Tabs.TabPane key="todo" tab="待办面板">
        <Todo />
      </Tabs.TabPane>
      <Tabs.TabPane key="request" tab="搜索npm包">
        <SearchNpm />
      </Tabs.TabPane>
    </Tabs>
  );
};

export default memo(App);
