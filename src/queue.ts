import { IPriorityQueue, PriorityQueueComparator, PriorityQueueOptions } from './queueInterfaces';

export class PriorityQueue<T> implements IPriorityQueue<T> {
  private heap: T[];
  private comparator: PriorityQueueComparator<T>;

  /**
   *
   * @param options
   * options.comparator: function used to compare elements;
   * options.initialElements: elements to be put in priority queue initially in O(n) time
   */
  constructor(options: PriorityQueueOptions<T>) {
    this.heap = [];
    this.comparator = options.comparator;
    if (options.initialElements) this.buildHeap(options.initialElements);
  }

  /**
   *
   * @returns size of priority queue in O(1)
   */
  size() {
    return this.heap.length;
  }

  /**
   *
   * @returns is priority queue empty in O(1)
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   *
   * @returns top of priority queue in O(1), if priority queue is empty returns undefined
   */
  peek(): T {
    return this.heap[0] ? JSON.parse(JSON.stringify(this.heap[0])) : undefined;
  }

  /**
   * clears priority queue in O(1)
   */
  clear(): void {
    this.heap = [];
  }

  /**
   * checks if value exists in priority queue in O(n)
   */
  has(value: T) {
    return !!this.heap.find((ele) => ele === value);
  }

  /**
   *
   * @returns all values of priority queue in O(n)
   */
  values() {
    return JSON.parse(JSON.stringify(this.heap)) as T[];
  }

  private buildHeap(array: T[]) {
    this.heap = JSON.parse(JSON.stringify(array)) as T[];
    for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
      this.siftDown(i);
    }
  }

  /**
   *
   * @param value element to be added to heap, adds it in O(log n) operations, n is size of heap
   * @returns size of heap
   */
  push(value: T) {
    this.heap.push(value);
    this.siftUp();
    return this.size();
  }

  /**
   *
   * @param values elements to be added to heap, adds it in O(k * log n) operations, n is size of heap, k is number of elements added
   * @returns size of heap
   */
  pushMany(values: T[]) {
    values.forEach((value) => {
      this.push(value);
    });
    return this.size();
  }

  /**
   *
   * @returns top of priority queue and removes it from priority queue in O(log n), if priority queue is empty returns undefined
   */
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    const returnValue = this.peek();
    const lastIndexOfHeapArray = this.size() - 1;
    if (lastIndexOfHeapArray > 0) {
      this.swap(0, lastIndexOfHeapArray);
    }
    this.heap.pop();
    this.siftDown();
    return returnValue;
  }

  private getParent(index: number) {
    return ((index + 1) >>> 1) - 1;
  }

  private getLeftChild(index: number) {
    return (index << 1) + 1;
  }

  private getRightChild(index: number) {
    return (index + 1) << 1;
  }

  private compareByIndex(i: number, j: number) {
    return this.comparator(this.heap[i], this.heap[j]);
  }

  private swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  private siftUp() {
    let node = this.size() - 1;
    while (node > 0 && this.compareByIndex(node, this.getParent(node))) {
      const parentNode = this.getParent(node);
      this.swap(node, parentNode);
      node = parentNode;
    }
  }

  private siftDown(node = 0) {
    let leftChild = this.getLeftChild(node);
    let rightChild = this.getRightChild(node);
    while (
      (leftChild < this.size() && this.compareByIndex(leftChild, node)) ||
      (rightChild < this.size() && this.compareByIndex(rightChild, node))
    ) {
      const maxChild = rightChild < this.size() && this.compareByIndex(rightChild, leftChild) ? rightChild : leftChild;

      this.swap(node, maxChild);

      node = maxChild;
      leftChild = this.getLeftChild(node);
      rightChild = this.getRightChild(node);
    }
  }
}
