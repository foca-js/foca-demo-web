import { defineModel } from 'foca';
import sleep from 'sleep-promise';

const initialState = new Set<string>();

export const npmMarkModel = defineModel('npmMarks', {
  initialState,
  effects: {
    async toggle(pkg: string, tag: string) {
      await sleep(2000 * Math.random());
      this.dispatch((state) => {
        const key = this.combineKey(pkg, tag);

        if (state.has(key)) {
          state.delete(key);
        } else {
          state.add(key);
        }
      });
    },
    combineKey(pkg: string, tag: string) {
      return `${pkg}|${tag}`;
    },
  },
  skipRefresh: true,
});
