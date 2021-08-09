import { PriorityQueue } from "../lib/queue";
import { defaultMaxComparator } from "./test.helper";

test('initial state (created with initialElements) and none added', () => {
    const numberPriorityQueue = new PriorityQueue<number>({ comparator: defaultMaxComparator, initialElements: [2, 3, 1] });

    expect(numberPriorityQueue.values().toString()).toBe([3, 2, 1].toString());
});

test('initial state (created with initialElements) and some added', () => {
    const numberPriorityQueue = new PriorityQueue<number>({ comparator: defaultMaxComparator, initialElements: [2, 3, 1] });

    numberPriorityQueue.pushMany([5, 6, 7]);

    expect(numberPriorityQueue.values().toString()).toBe([7, 5, 6, 2, 3, 1].toString());
});

test('initial state (created without initialElements) and none added', () => {
    const numberPriorityQueue = new PriorityQueue<number>({ comparator: defaultMaxComparator });


    expect(numberPriorityQueue.values().toString()).toBe([].toString());
});


test('initial state (created without initialElements) and some added', () => {
    const numberPriorityQueue = new PriorityQueue<number>({ comparator: defaultMaxComparator });

    numberPriorityQueue.pushMany([5, 6, 7]);

    expect(numberPriorityQueue.values().toString()).toBe([7, 5, 6].toString());
});

