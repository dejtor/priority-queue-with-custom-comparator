
export type PriorityQueueComparator<T> = (((a: T, b: T) => boolean));

interface PriorityQueueOptions<T> {
    comparator: PriorityQueueComparator<T>;
    initialElements?: T[];
}

export interface  IPriorityQueue<T>{
    size(): number;
    isEmpty(): boolean;
    peek() :T;
    push(value) : void;
    pushMany(values) : void;
    pop() :T;
}

