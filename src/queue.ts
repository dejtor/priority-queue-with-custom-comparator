import { IPriorityQueue, PriorityQueueOptions } from './queue.d';

export class PriorityQueue<T> implements IPriorityQueue<T> {
    private heap: T[];
    private comparator;

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
        return this.heap.length === 0;
    }

    /**
     *
     * @returns top of priority queue in O(1)
     */
    peek() {
        return JSON.parse(JSON.stringify(this.heap[0]));
    }

    clear() {
        this.heap = [];
    };

    has(value) {
        return !!this.heap.find(ele => ele === value);
    }

    values() {
        return JSON.parse(JSON.stringify(this.heap)) as T[];
    }

    private buildHeap(array: T[]) {
        this.heap = array;
        for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
            this.siftDown();
        }
    }

    /**
     *
     * @param value element to be added to heap, adds it in O(log n) operations, n is size of heap
     * @returns size of heap
     */
    push(value) {
        this.heap.push(value);
        this.siftUp();
        return this.size();
    }

    /**
     *
     * @param values elements to be added to heap, adds it in O(k * log n) operations, n is size of heap, k is number of elements added
     * @returns size of heap
     */
    pushMany(values) {
        values.forEach((value) => {
            this.push(value);
        });
        return this.size();
    }

    /**
     *
     * @returns top of priority queue and removes it from priority queue in O(log n)
     */
    pop() {
        const returnValue = this.peek();
        const lastIndex = this.size() - 1;
        if (lastIndex > 0) {
            this.swap(0, lastIndex);
        }
        this.heap.pop();
        this.siftDown();
        return returnValue;
    }

    private getParent(index) {
        return ((index + 1) >>> 1) - 1;
    }

    private getLeftChild(index) {
        return (index << 1) + 1;
    }

    private getRightChild(index) {
        return (index + 1) << 1;
    }

    private compareByIndex(i, j) {
        return this.comparator(this.heap[i], this.heap[j]);
    }

    private swap(i, j) {
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

    private siftDown() {
        let node = 0;
        while (
            (this.getLeftChild(node) < this.size() && this.compareByIndex(this.getLeftChild(node), node)) ||
            (this.getRightChild(node) < this.size() && this.compareByIndex(this.getRightChild(node), node))
        ) {
            const maxChild =
                this.getRightChild(node) < this.size() && this.compareByIndex(this.getRightChild(node), this.getLeftChild(node))
                    ? this.getRightChild(node)
                    : this.getLeftChild(node);
            this.swap(node, maxChild);
            node = maxChild;
        }
    }
}
