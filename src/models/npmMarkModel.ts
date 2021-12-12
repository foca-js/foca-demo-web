import { defineModel } from 'foca';
import sleep from 'sleep-promise';

const initialState: string[] = [];

export const npmMarkModel = defineModel('npmMarks', {
  initialState,
  effects: {
    async toggle(pkg: string, tag: string) {
      await sleep(2000 * Math.random());
      this.setState((state) => {
        const key = this.combineKey(pkg, tag);

        if (state.includes(key)) {
          return state.filter((item) => item !== key);
        }

        return void state.push(key);
      });
    },
    combineKey(pkg: string, tag: string) {
      return `${pkg}|${tag}`;
    },
  },
  skipRefresh: true,
  persist: {
    version: 1,
  },
});
