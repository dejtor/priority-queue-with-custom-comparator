# priority-queue-with-custom-comparator

![npm](https://img.shields.io/npm/v/priority-queue-with-custom-comparator) [![npm](https://img.shields.io/npm/dm/priority-queue-with-custom-comparator.svg)](https://www.npmjs.com/package/priority-queue-with-custom-comparator) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/priority-queue-with-custom-comparator) ![GitHub repo size](https://img.shields.io/github/repo-size/dejtor/priority-queue-with-custom-comparator) ![NPM](https://img.shields.io/npm/l/priority-queue-with-custom-comparator) ![GitHub last commit](https://img.shields.io/github/last-commit/dejtor/priority-queue-with-custom-comparator)

<img src="https://user-images.githubusercontent.com/6517308/121813242-859a9700-cc6b-11eb-99c0-49e5bb63005b.jpg">

Priority queue implemented using Heap data structure, allows using custom comparator function.

# Contents

- [Example](#Example)
  - [TS](#TS)
  - [JS](#JS)
- [Functions](#Functions)

## Example:

### TS

```
import PriorityQueue from 'priority-queue-with-custom-comparator';

class Rand {
    num: number;
}

  const numberPriorityQueue = new PriorityQueue<number>({
    comparator: (a, b) => {
      return a - b < 0;
    },
    initialElements: [3, 1],
  });
  numberPriorityQueue.pushMany([-1, 4, 8, -9]);
  numberPriorityQueue.push(2);

  console.log('top of queue', numberPriorityQueue.pop());
  console.log('top of queue', numberPriorityQueue.peek());
  console.log(
    'size after inserting 1, 2 and 3',
    numberPriorityQueue.pushMany([1, 2, 3]),
  );

  const classPriorityQueue = new PriorityQueue<Rand>({
    comparator: (a, b) => a.num > b.num,
  });

  classPriorityQueue.pushMany([
    { num: 5 },
    { num: 1 },
    { num: -9 },
    { num: 11 },
    { num: 15 },
    { num: 51 },
    { num: 155 },
  ]);

  console.log('classPriorityQueue: ', classPriorityQueue.values());

  const stringPriorityQueue = new PriorityQueue<string>({
    comparator: (a, b) => a.length > b.length,
  });

  stringPriorityQueue.pushMany(['abcd', 'a', 'abcdeef', 'string']);

  console.log('stringPriorityQueue: ', stringPriorityQueue.values());
```

### JS

```
import PriorityQueue from 'priority-queue-with-custom-comparator'

class Rand {
    num;
}

const numberPriorityQueue = new PriorityQueue.default({
    comparator: (a, b) => {
        return a - b < 0;
    },
    initialElements: [3, 1],
});
numberPriorityQueue.pushMany([-1, 4, 8, -9]);
numberPriorityQueue.push(2);

console.log('top of queue', numberPriorityQueue.pop());
console.log('top of queue', numberPriorityQueue.peek());
console.log('size after inserting 1, 2 and 3', numberPriorityQueue.pushMany([1, 2, 3]));

const classPriorityQueue = new PriorityQueue.default({ comparator: (a, b) => a.num > b.num });

classPriorityQueue.pushMany([
    { num: 5 },
    { num: 1 },
    { num: -9 },
    { num: 11 },
    { num: 15 },
    { num: 51 },
    { num: 155 },
]);

console.log('classPriorityQueue: ', classPriorityQueue.values());

const stringPriorityQueue = new PriorityQueue.default({ comparator: (a, b) => a.length > b.length });

stringPriorityQueue.pushMany(['abcd', 'a', 'abcdeef', 'string']);

console.log('stringPriorityQueue: ', stringPriorityQueue.values());
```

## Functions:

```
    /**
     *
     * @param options
     * options.comparator: function used to compare elements;
     * options.initialElements: (optional) elements to be put in priority queue initially in O(n) time
     */
    constructor(options: PriorityQueueOptions<T>);
    /**
     *
     * @returns size of priority queue in O(1)
     */
    size(): number;
    /**
     *
     * @returns is priority queue empty in O(1)
     */
    isEmpty(): boolean;
    /**
     *
     * @returns top of priority queue in O(1), if priority queue is empty returns undefined
     */
    peek(): T;
    /**
     * clears priority queue in O(1)
     */
    clear(): void;
    /**
     * checks if value exists in priority queue in O(n)
     */
    has(value: T): boolean;
    /**
     *
     * @returns all values of priority queue in O(n)
     */
    values(): T[];
    /**
     *
     * @param value element to be added to heap, adds it in O(log n) operations, n is size of heap
     * @returns size of heap
     */
    push(value: T): number;
    /**
     *
     * @param values elements to be added to heap, adds it in O(k * log n) operations, n is size of heap, k is number of elements added
     * @returns size of heap
     */
    pushMany(values: T[]): number;
    /**
     *
     * @returns top of priority queue and removes it from priority queue in O(log n), if priority queue is empty returns undefined
     */
    pop(): T;
```
