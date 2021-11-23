import { defineModel } from 'foca';

const initialState = {
  count: 0,
};

export const counterModel = defineModel('counter', {
  initialState,
  actions: {
    add(state, step: number, more: number = 0) {
      state.count += step + more;
    },
    minus(state, step: number) {
      state.count -= step;
    },
    times(state, step: number) {
      state.count *= step;
    },
    reset() {
      return this.initialState;
    },
  },
});
