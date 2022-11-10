import { defineModel } from 'foca';

export interface TodoItem {
  id: number;
  title: string;
  content: string;
  finished: boolean;
  createdAt: number;
}

const initialState: {
  list: Record<string, TodoItem>;
  total: number;
} = {
  list: {},
  total: 0,
};

export const todoModel = defineModel('todo', {
  initialState,
  reducers: {
    add(state, title: string, content: string) {
      const id = Date.now();

      ++state.total;
      state.list[id] = {
        id,
        title,
        content,
        finished: false,
        createdAt: Date.now(),
      };
    },
    finished(state, id: number, is: boolean) {
      const data = state.list[id]!;
      data.finished = is;
    },
    delete(state, id: number) {
      delete state.list[id];
      state.total -= 1;
    },
  },
  persist: {
    version: 1,
  },
});
