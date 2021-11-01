import { Middleware, store, engines } from 'foca';
import { createLogger } from 'redux-logger';
import { todoModel } from '../models/todoModel';

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
  compose: process.env.NODE_ENV === 'production' ? void 0 : 'redux-devtools',
  persist: [
    {
      key: `todo-list-${process.env.NODE_ENV}`,
      version: 1,
      engine: engines.localStorage,
      models: [todoModel],
    },
  ],
});
