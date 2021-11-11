import PriorityQueue from '../lib/queue';
import { defaultMaxComparator } from './test.helper';

test('check if needed functions are called', () => {
  const numberPriorityQueue = new PriorityQueue<number>({
    comparator: defaultMaxComparator,
    initialElements: [6],
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const siftDownFn = jest.spyOn(PriorityQueue.prototype as any, 'siftDown');
  const sizeFn = jest.spyOn(numberPriorityQueue, 'size');
  const isEmptyFn = jest.spyOn(numberPriorityQueue, 'isEmpty');
  const peekFn = jest.spyOn(numberPriorityQueue, 'peek');

  numberPriorityQueue.pop();

  expect(siftDownFn).toBeCalledTimes(1);
  expect(sizeFn).toBeCalled();
  expect(isEmptyFn).toBeCalledTimes(1);
  expect(peekFn).toBeCalledTimes(1);

  jest.clearAllMocks();
});

test('initial state (created without initialElements) and some added', () => {
  const numberPriorityQueue = new PriorityQueue<number>({
    comparator: defaultMaxComparator,
    initialElements: [185, 2, 6, 58, -2, 201, -9, -1, 6, 5],
  });

  let topOfQueue: number;

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
    [201, 58, 185, 6, 5, 6, -9, -1, 2, -2].toString(),
  );
  expect(numberPriorityQueue.size()).toBe(10);

  topOfQueue = numberPriorityQueue.pop();

  expect(topOfQueue).toBe(201);

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
    [185, 58, 6, 6, 5, -2, -9, -1, 2].toString(),
  );
  expect(numberPriorityQueue.size()).toBe(9);

  topOfQueue = numberPriorityQueue.pop();

  expect(topOfQueue).toBe(185);

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
    [58, 6, 6, 2, 5, -2, -9, -1].toString(),
  );
  expect(numberPriorityQueue.size()).toBe(8);

  topOfQueue = numberPriorityQueue.pop();

  expect(topOfQueue).toBe(58);

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
    [6, 5, 6, 2, -1, -2, -9].toString(),
  );
  expect(numberPriorityQueue.size()).toBe(7);

  topOfQueue = numberPriorityQueue.pop();

  expect(topOfQueue).toBe(6);

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
    [6, 5, -2, 2, -1, -9].toString(),
  );
  expect(numberPriorityQueue.size()).toBe(6);

  topOfQueue = numberPriorityQueue.pop();

  expect(topOfQueue).toBe(6);

  expect(numberPriorityQueue.has(5)).toBe(true);
  expect(numberPriorityQueue.has(2)).toBe(true);
  expect(numberPriorityQueue.has(0)).toBe(false);
  expect(numberPriorityQueue.has(-1)).toBe(true);
  expect(numberPriorityQueue.has(6)).toBe(false);
  expect(numberPriorityQueue.has(-2)).toBe(true);
  expect(numberPriorityQueue.has(-9)).toBe(true);
  expect(numberPriorityQueue.has(58)).toBe(false);
  expect(numberPriorityQueue.has(185)).toBe(false);
  expect(numberPriorityQueue.has(201)).toBe(false);
  expect(numberPriorityQueue.values().toString()).toBe(
    [5, 2, -2, -9, -1].toString(),
  );
  expect(numberPriorityQueue.size()).toBe(5);

  topOfQueue = numberPriorityQueue.pop();

  expect(topOfQueue).toBe(5);

  expect(numberPriorityQueue.has(5)).toBe(false);
  expect(numberPriorityQueue.has(2)).toBe(true);
  expect(numberPriorityQueue.has(0)).toBe(false);
  expect(numberPriorityQueue.has(-1)).toBe(true);
  expect(numberPriorityQueue.has(6)).toBe(false);
  expect(numberPriorityQueue.has(-2)).toBe(true);
  expect(numberPriorityQueue.has(-9)).toBe(true);
  expect(numberPriorityQueue.has(58)).toBe(false);
  expect(numberPriorityQueue.has(185)).toBe(false);
  expect(numberPriorityQueue.has(201)).toBe(false);
  expect(numberPriorityQueue.values().toString()).toBe(
    [2, -1, -2, -9].toString(),
  );
  expect(numberPriorityQueue.size()).toBe(4);

  topOfQueue = numberPriorityQueue.pop();

  expect(topOfQueue).toBe(2);

  expect(numberPriorityQueue.has(5)).toBe(false);
  expect(numberPriorityQueue.has(2)).toBe(false);
  expect(numberPriorityQueue.has(0)).toBe(false);
  expect(numberPriorityQueue.has(-1)).toBe(true);
  expect(numberPriorityQueue.has(6)).toBe(false);
  expect(numberPriorityQueue.has(-2)).toBe(true);
  expect(numberPriorityQueue.has(-9)).toBe(true);
  expect(numberPriorityQueue.has(58)).toBe(false);
  expect(numberPriorityQueue.has(185)).toBe(false);
  expect(numberPriorityQueue.has(201)).toBe(false);
  expect(numberPriorityQueue.values().toString()).toBe([-1, -9, -2].toString());
  expect(numberPriorityQueue.size()).toBe(3);

  topOfQueue = numberPriorityQueue.pop();

  expect(topOfQueue).toBe(-1);

  expect(numberPriorityQueue.has(5)).toBe(false);
  expect(numberPriorityQueue.has(2)).toBe(false);
  expect(numberPriorityQueue.has(0)).toBe(false);
  expect(numberPriorityQueue.has(-1)).toBe(false);
  expect(numberPriorityQueue.has(6)).toBe(false);
  expect(numberPriorityQueue.has(-2)).toBe(true);
  expect(numberPriorityQueue.has(-9)).toBe(true);
  expect(numberPriorityQueue.has(58)).toBe(false);
  expect(numberPriorityQueue.has(185)).toBe(false);
  expect(numberPriorityQueue.has(201)).toBe(false);
  expect(numberPriorityQueue.values().toString()).toBe([-2, -9].toString());
  expect(numberPriorityQueue.size()).toBe(2);

  topOfQueue = numberPriorityQueue.pop();

  expect(topOfQueue).toBe(-2);

  expect(numberPriorityQueue.has(5)).toBe(false);
  expect(numberPriorityQueue.has(2)).toBe(false);
  expect(numberPriorityQueue.has(0)).toBe(false);
  expect(numberPriorityQueue.has(-1)).toBe(false);
  expect(numberPriorityQueue.has(6)).toBe(false);
  expect(numberPriorityQueue.has(-2)).toBe(false);
  expect(numberPriorityQueue.has(-9)).toBe(true);
  expect(numberPriorityQueue.has(58)).toBe(false);
  expect(numberPriorityQueue.has(185)).toBe(false);
  expect(numberPriorityQueue.has(201)).toBe(false);
  expect(numberPriorityQueue.values().toString()).toBe([-9].toString());
  expect(numberPriorityQueue.size()).toBe(1);

  topOfQueue = numberPriorityQueue.pop();

  expect(topOfQueue).toBe(-9);

  expect(numberPriorityQueue.has(5)).toBe(false);
  expect(numberPriorityQueue.has(2)).toBe(false);
  expect(numberPriorityQueue.has(0)).toBe(false);
  expect(numberPriorityQueue.has(-1)).toBe(false);
  expect(numberPriorityQueue.has(6)).toBe(false);
  expect(numberPriorityQueue.has(-2)).toBe(false);
  expect(numberPriorityQueue.has(-9)).toBe(false);
  expect(numberPriorityQueue.has(58)).toBe(false);
  expect(numberPriorityQueue.has(185)).toBe(false);
  expect(numberPriorityQueue.has(201)).toBe(false);
  expect(numberPriorityQueue.values().toString()).toBe([].toString());
  expect(numberPriorityQueue.size()).toBe(0);

  topOfQueue = numberPriorityQueue.pop();

  expect(topOfQueue).toBeUndefined();

  expect(numberPriorityQueue.has(5)).toBe(false);
  expect(numberPriorityQueue.has(2)).toBe(false);
  expect(numberPriorityQueue.has(0)).toBe(false);
  expect(numberPriorityQueue.has(-1)).toBe(false);
  expect(numberPriorityQueue.has(6)).toBe(false);
  expect(numberPriorityQueue.has(-2)).toBe(false);
  expect(numberPriorityQueue.has(-9)).toBe(false);
  expect(numberPriorityQueue.has(58)).toBe(false);
  expect(numberPriorityQueue.has(185)).toBe(false);
  expect(numberPriorityQueue.has(201)).toBe(false);
  expect(numberPriorityQueue.values().toString()).toBe([].toString());
  expect(numberPriorityQueue.size()).toBe(0);
});
