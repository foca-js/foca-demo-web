import { Middleware, store, engines } from 'foca';
import { createLogger } from 'redux-logger';
import { historyModel } from './models/historyModel';
import { todoModel } from './models/todoModel';

const middleware: Middleware[] = [];

if (import.meta.env.MODE !== 'production') {
  middleware.push(
    createLogger({
      collapsed: true,
      diff: true,
      duration: true,
      logErrors: true,
    }),
  );
}

store.init({
  middleware: middleware,
  persist: [
    {
      key: `todo-list-${process.env.NODE_ENV}`,
      version: 1,
      engine: engines.localStorage,
      models: [todoModel, historyModel],
    },
  ],
});
