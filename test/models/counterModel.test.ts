import { store } from 'foca';
import { counterModel } from '../../src/models/counterModel';

beforeEach(() => {
  store.init();
});

afterEach(() => {
  store.unmount();
});

test('initialState', () => {
  expect(counterModel.state.count).toBe(0);
});

test('counterModel.add', () => {
  counterModel.add(1);
  expect(counterModel.state.count).toBe(1);
  counterModel.add(76);
  expect(counterModel.state.count).toBe(77);
});

test('counterModel.minus', () => {
  counterModel.minus(1);
  expect(counterModel.state.count).toBe(-1);
  counterModel.minus(15);
  expect(counterModel.state.count).toBe(-16);
});

test('reset', () => {
  counterModel.add(20);
  expect(counterModel.state.count).toBe(20);
  counterModel.reset();
  expect(counterModel.state.count).toBe(0);
});
