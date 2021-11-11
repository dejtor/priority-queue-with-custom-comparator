import PriorityQueue from '../src/queue';
import { defaultMaxComparator } from './test.helper';

test('initial state (created without initialElements) and some added', () => {
  const numberPriorityQueue = new PriorityQueue<number>({
    comparator: defaultMaxComparator,
  });

  expect(numberPriorityQueue.has(5)).toBe(false);
  expect(numberPriorityQueue.has(2)).toBe(false);
  expect(numberPriorityQueue.has(0)).toBe(false);
  expect(numberPriorityQueue.has(-1)).toBe(false);
  expect(numberPriorityQueue.has(6)).toBe(false);
  expect(numberPriorityQueue.has(-2)).toBe(false);
  expect(numberPriorityQueue.has(-9)).toBe(false);
  expect(numberPriorityQueue.has(58)).toBe(false);
  expect(numberPriorityQueue.values().toString()).toBe([].toString());
  expect(numberPriorityQueue.size()).toBe(0);

  numberPriorityQueue.push(5);

  expect(numberPriorityQueue.has(5)).toBe(true);
  expect(numberPriorityQueue.has(2)).toBe(false);
  expect(numberPriorityQueue.has(0)).toBe(false);
  expect(numberPriorityQueue.has(-1)).toBe(false);
  expect(numberPriorityQueue.has(6)).toBe(false);
  expect(numberPriorityQueue.has(-2)).toBe(false);
  expect(numberPriorityQueue.has(-9)).toBe(false);
  expect(numberPriorityQueue.has(58)).toBe(false);
  expect(numberPriorityQueue.has(185)).toBe(false);
  expect(numberPriorityQueue.has(201)).toBe(false);
  expect(numberPriorityQueue.values().toString()).toBe([5].toString());
  expect(numberPriorityQueue.size()).toBe(1);

  numberPriorityQueue.push(-1);

  expect(numberPriorityQueue.has(5)).toBe(true);
  expect(numberPriorityQueue.has(2)).toBe(false);
  expect(numberPriorityQueue.has(0)).toBe(false);
  expect(numberPriorityQueue.has(-1)).toBe(true);
  expect(numberPriorityQueue.has(6)).toBe(false);
  expect(numberPriorityQueue.has(-2)).toBe(false);
  expect(numberPriorityQueue.has(-9)).toBe(false);
  expect(numberPriorityQueue.has(58)).toBe(false);
  expect(numberPriorityQueue.has(185)).toBe(false);
  expect(numberPriorityQueue.has(201)).toBe(false);
  expect(numberPriorityQueue.values().toString()).toBe([5, -1].toString());
  expect(numberPriorityQueue.size()).toBe(2);

  numberPriorityQueue.push(2);

  expect(numberPriorityQueue.has(5)).toBe(true);
  expect(numberPriorityQueue.has(2)).toBe(true);
  expect(numberPriorityQueue.has(0)).toBe(false);
  expect(numberPriorityQueue.has(-1)).toBe(true);
  expect(numberPriorityQueue.has(6)).toBe(false);
  expect(numberPriorityQueue.has(-2)).toBe(false);
  expect(numberPriorityQueue.has(-9)).toBe(false);
  expect(numberPriorityQueue.has(58)).toBe(false);
  expect(numberPriorityQueue.has(185)).toBe(false);
  expect(numberPriorityQueue.has(201)).toBe(false);
  expect(numberPriorityQueue.values().toString()).toBe([5, -1, 2].toString());
  expect(numberPriorityQueue.size()).toBe(3);

  numberPriorityQueue.push(6);

  expect(numberPriorityQueue.has(5)).toBe(true);
  expect(numberPriorityQueue.has(2)).toBe(true);
  expect(numberPriorityQueue.has(0)).toBe(false);
  expect(numberPriorityQueue.has(-1)).toBe(true);
  expect(numberPriorityQueue.has(6)).toBe(true);
  expect(numberPriorityQueue.has(-2)).toBe(false);
  expect(numberPriorityQueue.has(-9)).toBe(false);
  expect(numberPriorityQueue.has(58)).toBe(false);
  expect(numberPriorityQueue.has(185)).toBe(false);
  expect(numberPriorityQueue.has(201)).toBe(false);
  expect(numberPriorityQueue.values().toString()).toBe(
    [6, 5, 2, -1].toString(),
  );
  expect(numberPriorityQueue.size()).toBe(4);

  numberPriorityQueue.push(6);

  expect(numberPriorityQueue.has(5)).toBe(true);
  expect(numberPriorityQueue.has(2)).toBe(true);
  expect(numberPriorityQueue.has(0)).toBe(false);
  expect(numberPriorityQueue.has(-1)).toBe(true);
  expect(numberPriorityQueue.has(6)).toBe(true);
  expect(numberPriorityQueue.has(-2)).toBe(false);
  expect(numberPriorityQueue.has(-9)).toBe(false);
  expect(numberPriorityQueue.has(58)).toBe(false);
  expect(numberPriorityQueue.has(185)).toBe(false);
  expect(numberPriorityQueue.has(201)).toBe(false);
  expect(numberPriorityQueue.values().toString()).toBe(
    [6, 6, 2, -1, 5].toString(),
  );
  expect(numberPriorityQueue.size()).toBe(5);

  numberPriorityQueue.push(-2);

  expect(numberPriorityQueue.has(5)).toBe(true);
  expect(numberPriorityQueue.has(2)).toBe(true);
  expect(numberPriorityQueue.has(0)).toBe(false);
  expect(numberPriorityQueue.has(-1)).toBe(true);
  expect(numberPriorityQueue.has(6)).toBe(true);
  expect(numberPriorityQueue.has(-2)).toBe(true);
  expect(numberPriorityQueue.has(-9)).toBe(false);
  expect(numberPriorityQueue.has(58)).toBe(false);
  expect(numberPriorityQueue.has(185)).toBe(false);
  expect(numberPriorityQueue.has(201)).toBe(false);
  expect(numberPriorityQueue.values().toString()).toBe(
    [6, 6, 2, -1, 5, -2].toString(),
  );
  expect(numberPriorityQueue.size()).toBe(6);

  numberPriorityQueue.push(-9);

  expect(numberPriorityQueue.has(5)).toBe(true);
  expect(numberPriorityQueue.has(2)).toBe(true);
  expect(numberPriorityQueue.has(0)).toBe(false);
  expect(numberPriorityQueue.has(-1)).toBe(true);
  expect(numberPriorityQueue.has(6)).toBe(true);
  expect(numberPriorityQueue.has(-2)).toBe(true);
  expect(numberPriorityQueue.has(-9)).toBe(true);
  expect(numberPriorityQueue.has(58)).toBe(false);
  expect(numberPriorityQueue.has(185)).toBe(false);
  expect(numberPriorityQueue.has(201)).toBe(false);
  expect(numberPriorityQueue.values().toString()).toBe(
    [6, 6, 2, -1, 5, -2, -9].toString(),
  );
  expect(numberPriorityQueue.size()).toBe(7);

  numberPriorityQueue.push(58);

  expect(numberPriorityQueue.has(5)).toBe(true);
  expect(numberPriorityQueue.has(2)).toBe(true);
  expect(numberPriorityQueue.has(0)).toBe(false);
  expect(numberPriorityQueue.has(-1)).toBe(true);
  expect(numberPriorityQueue.has(6)).toBe(true);
  expect(numberPriorityQueue.has(-2)).toBe(true);
  expect(numberPriorityQueue.has(-9)).toBe(true);
  expect(numberPriorityQueue.has(58)).toBe(true);
  expect(numberPriorityQueue.has(185)).toBe(false);
  expect(numberPriorityQueue.has(201)).toBe(false);
  expect(numberPriorityQueue.values().toString()).toBe(
    [58, 6, 2, 6, 5, -2, -9, -1].toString(),
  );
  expect(numberPriorityQueue.size()).toBe(8);

  numberPriorityQueue.push(185);

  expect(numberPriorityQueue.has(5)).toBe(true);
  expect(numberPriorityQueue.has(2)).toBe(true);
  expect(numberPriorityQueue.has(0)).toBe(false);
  expect(numberPriorityQueue.has(-1)).toBe(true);
  expect(numberPriorityQueue.has(6)).toBe(true);
  expect(numberPriorityQueue.has(-2)).toBe(true);
  expect(numberPriorityQueue.has(-9)).toBe(true);
  expect(numberPriorityQueue.has(58)).toBe(true);
  expect(numberPriorityQueue.has(185)).toBe(true);
  expect(numberPriorityQueue.has(201)).toBe(false);
  expect(numberPriorityQueue.values().toString()).toBe(
    [185, 58, 2, 6, 5, -2, -9, -1, 6].toString(),
  );
  expect(numberPriorityQueue.size()).toBe(9);

  numberPriorityQueue.push(201);

  expect(numberPriorityQueue.has(5)).toBe(true);
  expect(numberPriorityQueue.has(2)).toBe(true);
  expect(numberPriorityQueue.has(0)).toBe(false);
  expect(numberPriorityQueue.has(-1)).toBe(true);
  expect(numberPriorityQueue.has(6)).toBe(true);
  expect(numberPriorityQueue.has(-2)).toBe(true);
  expect(numberPriorityQueue.has(-9)).toBe(true);
  expect(numberPriorityQueue.has(58)).toBe(true);
  expect(numberPriorityQueue.has(185)).toBe(true);
  expect(numberPriorityQueue.has(201)).toBe(true);
  expect(numberPriorityQueue.values().toString()).toBe(
    [201, 185, 2, 6, 58, -2, -9, -1, 6, 5].toString(),
  );
  expect(numberPriorityQueue.size()).toBe(10);
});
