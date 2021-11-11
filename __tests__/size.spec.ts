import PriorityQueue from '../src/queue';
import { defaultMaxComparator } from './test.helper';

test('initial state (created with initialElements) and no elements added', () => {
  const numberPriorityQueue = new PriorityQueue<number>({
    comparator: defaultMaxComparator,
    initialElements: [3, 1],
  });
  expect(numberPriorityQueue.size()).toBe(2);
});

test('initial state (created without initialElements) and no elements added', () => {
  const numberPriorityQueue = new PriorityQueue<number>({
    comparator: defaultMaxComparator,
  });
  expect(numberPriorityQueue.size()).toBe(0);
});

test('initial state (created with initialElements) and some elements added', () => {
  const numberPriorityQueue = new PriorityQueue<number>({
    comparator: defaultMaxComparator,
    initialElements: [3, 1],
  });
  expect(numberPriorityQueue.size()).toBe(2);
  numberPriorityQueue.push(4);
  expect(numberPriorityQueue.size()).toBe(3);
  numberPriorityQueue.pushMany([7, 8]);
  expect(numberPriorityQueue.size()).toBe(5);
});

test('initial state (created without initialElements) and some elements added', () => {
  const numberPriorityQueue = new PriorityQueue<number>({
    comparator: defaultMaxComparator,
  });
  expect(numberPriorityQueue.size()).toBe(0);
  numberPriorityQueue.push(4);
  expect(numberPriorityQueue.size()).toBe(1);
  numberPriorityQueue.pushMany([7, 8]);
  expect(numberPriorityQueue.size()).toBe(3);
});
