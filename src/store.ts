import { Middleware, store, engines } from 'foca';
import { createLogger } from 'redux-logger';
import { historyModel } from './models/historyModel';
import { npmMarkModel } from './models/npmMarkModel';
import { todoModel } from './models/todoModel';

const middleware: Middleware[] = [];

if (process.env.NODE_ENV !== 'production') {
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
  // compose: process.env.NODE_ENV === 'production' ? void 0 : 'redux-devtools',
  middleware: middleware,
  persist: [
    {
      key: `todo-list-${process.env.NODE_ENV}`,
      version: 1,
      engine: engines.localStorage,
      models: [todoModel, historyModel, npmMarkModel],
    },
  ],
});

if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log('Hot updated: store');
  });
}
