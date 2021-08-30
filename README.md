Priority queue implemented using heap.

example:

```
const q = new PriorityQueue<number>({
    comparator: (a, b) => {
      return a - b < 0;
    },
  });
  q.pushMany([-1, 4, 8, -9]);
  q.push(2);
```

functions:

```
    /**
     *
     * @param options
     * options.comparator: function used to compare elements;
     * options.initialElements: elements to be put in priority queue initially in O(n) time
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
    private buildHeap;
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
