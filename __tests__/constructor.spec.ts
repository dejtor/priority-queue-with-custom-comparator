import PriorityQueue from '../src/queue';
import { defaultMaxComparator } from './test.helper';

afterEach(() => {
  jest.clearAllMocks();
});

test('initial state (created with initialElements)', () => {
  const numberPriorityQueue = new PriorityQueue<number>({
    comparator: defaultMaxComparator,
    initialElements: [2, 6, 7],
  });
  expect(numberPriorityQueue.values().toString()).toBe([7, 6, 2].toString());
});

test('initial state (created without initialElements)', () => {
  const numberPriorityQueue = new PriorityQueue<number>({
    comparator: defaultMaxComparator,
  });
  expect(numberPriorityQueue.values().toString()).toBe([].toString());
});
