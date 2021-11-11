import PriorityQueue from '../lib/queue';
import { defaultMaxComparator } from './test.helper';

afterEach(() => {
  jest.clearAllMocks();
});

test('initial state (created with initialElements)', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const buildHeapFn = jest.spyOn(PriorityQueue.prototype as any, 'buildHeap');
  const numberPriorityQueue = new PriorityQueue<number>({
    comparator: defaultMaxComparator,
    initialElements: [2, 6, 7],
  });
  expect(buildHeapFn).toBeCalledTimes(1);
  expect(numberPriorityQueue.values().toString()).toBe([7, 6, 2].toString());
});

test('initial state (created without initialElements)', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const buildHeapFn = jest.spyOn(PriorityQueue.prototype as any, 'buildHeap');
  const numberPriorityQueue = new PriorityQueue<number>({
    comparator: defaultMaxComparator,
  });
  expect(buildHeapFn).toBeCalledTimes(0);
  expect(numberPriorityQueue.values().toString()).toBe([].toString());
});
