import PriorityQueue from '../lib/queue';
import { defaultMaxComparator } from './test.helper';

afterEach(() => {
    jest.clearAllMocks();
});

test('initial state (created without initialElements) and some added', () => {
    const numberPriorityQueue = new PriorityQueue<number>({ comparator: defaultMaxComparator });

    const pushFn = jest.spyOn(numberPriorityQueue, 'push');

    expect(numberPriorityQueue.has(5)).toBe(false);
    expect(numberPriorityQueue.has(2)).toBe(false);
    expect(numberPriorityQueue.has(0)).toBe(false);
    expect(numberPriorityQueue.has(-1)).toBe(false);
    expect(numberPriorityQueue.values().toString()).toBe([].toString());
    expect(numberPriorityQueue.size()).toBe(0);

    numberPriorityQueue.pushMany([5, 2, -1]);

    expect(pushFn).toBeCalledTimes(3);

    expect(numberPriorityQueue.has(5)).toBe(true);
    expect(numberPriorityQueue.has(2)).toBe(true);
    expect(numberPriorityQueue.has(0)).toBe(false);
    expect(numberPriorityQueue.has(-1)).toBe(true);
    expect(numberPriorityQueue.values().toString()).toBe([5, 2, -1].toString());
    expect(numberPriorityQueue.size()).toBe(3);
});
