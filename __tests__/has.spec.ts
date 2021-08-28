import PriorityQueue from '../lib/queue';
import { defaultMaxComparator } from './test.helper';

test('initial state (created with initialElements) and none added', () => {
  const numberPriorityQueue = new PriorityQueue<number>({
    comparator: defaultMaxComparator,
    initialElements: [2, 3, 1],
  });

  expect(numberPriorityQueue.has(5)).toBe(false);
  expect(numberPriorityQueue.has(2)).toBe(true);
  expect(numberPriorityQueue.has(3)).toBe(true);
  expect(numberPriorityQueue.has(1)).toBe(true);
  expect(numberPriorityQueue.has(9)).toBe(false);
  expect(numberPriorityQueue.has(0)).toBe(false);
  expect(numberPriorityQueue.has(-1)).toBe(false);
});

test('initial state (created with initialElements) and some added', () => {
  const numberPriorityQueue = new PriorityQueue<number>({
    comparator: defaultMaxComparator,
    initialElements: [2, 3, 1],
  });

  expect(numberPriorityQueue.has(5)).toBe(false);
  expect(numberPriorityQueue.has(2)).toBe(true);
  expect(numberPriorityQueue.has(3)).toBe(true);
  expect(numberPriorityQueue.has(1)).toBe(true);
  expect(numberPriorityQueue.has(9)).toBe(false);
  expect(numberPriorityQueue.has(0)).toBe(false);
  expect(numberPriorityQueue.has(-1)).toBe(false);

  numberPriorityQueue.push(5);

  expect(numberPriorityQueue.has(5)).toBe(true);
  expect(numberPriorityQueue.has(2)).toBe(true);
  expect(numberPriorityQueue.has(3)).toBe(true);
  expect(numberPriorityQueue.has(1)).toBe(true);
  expect(numberPriorityQueue.has(9)).toBe(false);
  expect(numberPriorityQueue.has(0)).toBe(false);
  expect(numberPriorityQueue.has(-1)).toBe(false);
});

test('initial state (created without initialElements) and none added', () => {
  const numberPriorityQueue = new PriorityQueue<number>({ comparator: defaultMaxComparator });

  expect(numberPriorityQueue.has(5)).toBe(false);
  expect(numberPriorityQueue.has(2)).toBe(false);
  expect(numberPriorityQueue.has(3)).toBe(false);
  expect(numberPriorityQueue.has(1)).toBe(false);
  expect(numberPriorityQueue.has(9)).toBe(false);
  expect(numberPriorityQueue.has(0)).toBe(false);
  expect(numberPriorityQueue.has(-1)).toBe(false);
});

test('initial state (created without initialElements) and some added', () => {
  const numberPriorityQueue = new PriorityQueue<number>({ comparator: defaultMaxComparator });

  expect(numberPriorityQueue.has(5)).toBe(false);
  expect(numberPriorityQueue.has(2)).toBe(false);
  expect(numberPriorityQueue.has(3)).toBe(false);
  expect(numberPriorityQueue.has(1)).toBe(false);
  expect(numberPriorityQueue.has(9)).toBe(false);
  expect(numberPriorityQueue.has(0)).toBe(false);
  expect(numberPriorityQueue.has(-1)).toBe(false);

  numberPriorityQueue.push(5);

  expect(numberPriorityQueue.has(5)).toBe(true);
  expect(numberPriorityQueue.has(2)).toBe(false);
  expect(numberPriorityQueue.has(3)).toBe(false);
  expect(numberPriorityQueue.has(1)).toBe(false);
  expect(numberPriorityQueue.has(9)).toBe(false);
  expect(numberPriorityQueue.has(0)).toBe(false);
  expect(numberPriorityQueue.has(-1)).toBe(false);

  numberPriorityQueue.push(-1);

  expect(numberPriorityQueue.has(5)).toBe(true);
  expect(numberPriorityQueue.has(2)).toBe(false);
  expect(numberPriorityQueue.has(3)).toBe(false);
  expect(numberPriorityQueue.has(1)).toBe(false);
  expect(numberPriorityQueue.has(9)).toBe(false);
  expect(numberPriorityQueue.has(0)).toBe(false);
  expect(numberPriorityQueue.has(-1)).toBe(true);
});
