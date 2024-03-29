import { Middleware, store } from 'foca';
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
  compose: 'redux-devtools',
  middleware: middleware,
  persist: [
    {
      key: `todo-list-${process.env.NODE_ENV}`,
      version: 1,
      engine: localStorage,
      models: [todoModel, historyModel, npmMarkModel],
    },
  ],
});

if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log('Hot updated: store');
  });
}
