import { Button } from 'antd';
import { useModel } from 'foca';
import { FC, memo } from 'react';
import { counterModel } from './models/counterModel';
import styles from './Counter.module.scss';

const Counter: FC = () => {
  const count = useModel(counterModel, (state) => state.count);

  return (
    <div className={styles.wrapper}>
      <h1>{count}</h1>
      <div className={styles.buttons}>
        <Button type="primary" onClick={() => counterModel.add(1)}>
          +1
        </Button>
        &nbsp;
        <Button type="primary" onClick={() => counterModel.add(1, 1)}>
          +2
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button type="primary" onClick={() => counterModel.minus(1)}>
          -1
        </Button>
        &nbsp;
        <Button type="primary" onClick={() => counterModel.minus(2)}>
          -2
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button type="primary" onClick={() => counterModel.times(3)}>
          x3
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button onClick={counterModel.reset}>重置</Button>
      </div>
    </div>
  );
};

export default memo(Counter);
