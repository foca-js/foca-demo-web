import { defineModel } from 'foca';

const initialState: string[] = [];

export const npmMarkModel = defineModel('npmMarks', {
  initialState,
  methods: {
    async toggle(pkg: string, tag: string) {
      await this._sleep();

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
    // 私有方法，只能在内部使用。类型提示安全，运行时安全。
    async _sleep() {
      return new Promise((resolve) => {
        setTimeout(resolve, 2000 * Math.random());
      });
    },
  },
  skipRefresh: true,
  persist: {
    version: 1,
  },
});
