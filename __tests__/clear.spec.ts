import { PriorityQueue } from '../lib/queue';
import { defaultMaxComparator } from './test.helper';

test('initial state (created with initialElements)', () => {
  const numberPriorityQueue = new PriorityQueue<number>({
    comparator: defaultMaxComparator,
    initialElements: [2, 3, 1],
  });

  expect(numberPriorityQueue.size()).toBe(3);

  numberPriorityQueue.clear();

  expect(numberPriorityQueue.size()).toBe(0);
});

test('initial state (created without initialElements)', () => {
  const numberPriorityQueue = new PriorityQueue<number>({ comparator: defaultMaxComparator });

  expect(numberPriorityQueue.size()).toBe(0);

  numberPriorityQueue.clear();

  expect(numberPriorityQueue.size()).toBe(0);
});
