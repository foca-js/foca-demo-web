import { Middleware, store, engines } from 'foca';
import { createLogger } from 'redux-logger';
import { todoModel } from '../models/todoModel';
export const rootMiddleWares: Middleware[] = [];

if (import.meta.env.MODE !== 'production') {
  rootMiddleWares.push(
    createLogger({
      collapsed: true,
      diff: true,
      duration: true,
      logErrors: true,
    }),
  );
}

store.init({
  middleware: rootMiddleWares,
  persist: [
    {
      key: 'todo-list',
      version: 1,
      engine: engines.localStorage,
      models: [todoModel],
    },
  ],
});
