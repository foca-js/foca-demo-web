import { useModel } from 'foca';
import { Alert, Button, Empty, Form, Input, message, Tooltip } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { FC, memo, MouseEvent, useCallback } from 'react';
import { TodoItem, todoModel } from '../models/todoModel';
import styles from './App.module.scss';

const App: FC = () => {
  const { list, total } = useModel(todoModel, (state) => ({
    list: Array.from(state.list.entries()).reverse(),
    total: state.total,
  }));

  const handleSubmit = useCallback(
    (values: Pick<TodoItem, 'title' | 'content'>) => {
      todoModel.add(values.title, values.content);
    },
    [],
  );

  const handleChangeStatus = (id: number, finished: boolean) => {
    todoModel.finished(id, finished);
    message.success('状态变更', 0.5);
  };

  const handleDelete = (e: MouseEvent, id: number) => {
    e.stopPropagation();
    todoModel.delete(id);
    message.success('待办已删除', 0.5);
  };

  return (
    <>
      <Alert message={`当前${total}条数据，刷新后数据不会丢失`} />
      <div className={styles.wrapper}>
        <div className={styles.body}>
          {list.map(([id, todo]) => {
            return (
              <div
                key={id}
                className={`${styles.item} ${
                  todo.finished ? styles.finished : ''
                }`}
                onClick={() => handleChangeStatus(id, !todo.finished)}
              >
                <p className={styles.title}>{todo.title}</p>
                <p>{todo.content}</p>
                <p className={styles.time}>
                  {new Date(todo.createdAt).toLocaleString()}
                  <Tooltip title="删除待办">
                    <DeleteOutlined
                      className={styles.delete}
                      onClick={(e) => handleDelete(e, id)}
                    />
                  </Tooltip>
                </p>
              </div>
            );
          })}
          {!list.length && <Empty description="从右侧表单增加待办信息" />}
        </div>
        <div className={styles.form}>
          <Form layout="vertical" onFinish={handleSubmit} key={total}>
            <Form.Item name="title" label="标题" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="content" label="内容" rules={[{ required: true }]}>
              <Input.TextArea autoSize={{ minRows: 5 }} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                保存待办
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default memo(App);
