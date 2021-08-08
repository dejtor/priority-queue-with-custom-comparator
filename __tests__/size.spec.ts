import { PriorityQueue } from "../lib/queue";

const defaultMaxComparator = (a: number, b: number) => a > b;

test('initial state (created with initialElements)', () => {
    const numberPriorityQueue = new PriorityQueue<number>({ comparator: defaultMaxComparator, initialElements: [3, 1] });
    expect(numberPriorityQueue.size()).toBe(2);
});

test('initial state (created without initialElements)', () => {
    const numberPriorityQueue = new PriorityQueue<number>({ comparator: defaultMaxComparator });
    expect(numberPriorityQueue.size()).toBe(0);
});

