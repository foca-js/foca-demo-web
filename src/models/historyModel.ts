import { defineModel } from 'foca';

const initialState: string[] = ['react', 'vue'];

export const historyModel = defineModel('history', {
  initialState,
  actions: {
    append(state, packageName: string) {
      const index = state.indexOf(packageName);

      index >= 0 && state.splice(index, 1);
      state.unshift(packageName);
    },
    clear() {
      return this.initialState;
    },
  },
  persist: {
    version: 1,
  },
});
