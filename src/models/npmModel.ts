import { defineModel } from 'foca';
import { http } from '../libs/http';
import { historyModel } from './historyModel';

interface NpmItem {
  'name': string;
  'homepage': string;
  'license': string;
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
      this.dispatch((state) => {
        Reflect.deleteProperty(result, 'versions');
        state[result.name] = result;
      });
    },
  },
});
