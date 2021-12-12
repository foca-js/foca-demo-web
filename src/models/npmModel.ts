import { defineModel } from 'foca';
import { http } from '../libs/http';
import { historyModel } from './historyModel';

interface NpmItem {
  'name': string;
  'homepage': string;
  'license': string | { type: string; url: string };
  'dist-tags': Record<string, string>;
}

const initialState: Partial<Record<string, NpmItem>> = {};

export const npmModel = defineModel('npms', {
  initialState,
  effects: {
    async search(packageName: string) {
      historyModel.append(packageName);

      const result = await http.get<NpmItem>(`/${packageName}`, {
        cache: true,
      });
      this.setState((state) => {
        state[result.name] = result;
      });
    },
  },
});
