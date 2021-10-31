import { defineModel } from 'foca';

export interface TodoItem {
  id: number;
  title: string;
  content: string;
  finished: boolean;
  createdAt: number;
}

interface State {
  list: Map<number, TodoItem>;
  total: number;
}

export const todoModel = defineModel('todo', {
  state: <State>{
    list: new Map(),
    total: 0,
  },
  actions: {
    add(state, title: string, content: string) {
      const id = Date.now();

      ++state.total;
      state.list.set(id, {
        id,
        title,
        content,
        finished: false,
        createdAt: Date.now(),
      });
    },
    finished(state, id: number, is: boolean) {
      const data = state.list.get(id)!;
      data.finished = is;
      state.list.set(id, data);
    },
    delete(state, id: number) {
      state.list.delete(id);
      state.total -= 1;
    },
  },
});
