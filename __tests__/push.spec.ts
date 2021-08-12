import { PriorityQueue } from '../lib/queue';
import { defaultMaxComparator } from './test.helper';

test('initial state (created without initialElements) and some added', () => {
  const numberPriorityQueue = new PriorityQueue<number>({ comparator: defaultMaxComparator });

  expect(numberPriorityQueue.has(5)).toBe(false);
  expect(numberPriorityQueue.has(2)).toBe(false);
  expect(numberPriorityQueue.has(0)).toBe(false);
  expect(numberPriorityQueue.has(-1)).toBe(false);
  expect(numberPriorityQueue.values().toString()).toBe([].toString());
  expect(numberPriorityQueue.size()).toBe(0);

  numberPriorityQueue.push(5);

  expect(numberPriorityQueue.has(5)).toBe(true);
  expect(numberPriorityQueue.has(2)).toBe(false);
  expect(numberPriorityQueue.has(0)).toBe(false);
  expect(numberPriorityQueue.has(-1)).toBe(false);
  expect(numberPriorityQueue.values().toString()).toBe([5].toString());
  expect(numberPriorityQueue.size()).toBe(1);

  numberPriorityQueue.push(-1);

  expect(numberPriorityQueue.has(5)).toBe(true);
  expect(numberPriorityQueue.has(2)).toBe(false);
  expect(numberPriorityQueue.has(0)).toBe(false);
  expect(numberPriorityQueue.has(-1)).toBe(true);
  expect(numberPriorityQueue.values().toString()).toBe([5, -1].toString());
  expect(numberPriorityQueue.size()).toBe(2);

  numberPriorityQueue.push(2);

  expect(numberPriorityQueue.has(5)).toBe(true);
  expect(numberPriorityQueue.has(2)).toBe(true);
  expect(numberPriorityQueue.has(0)).toBe(false);
  expect(numberPriorityQueue.has(-1)).toBe(true);
  expect(numberPriorityQueue.values().toString()).toBe([5, -1, 2].toString());
  expect(numberPriorityQueue.size()).toBe(3);
});
