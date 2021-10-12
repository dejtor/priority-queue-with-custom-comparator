export type PriorityQueueComparator<T> = (a: T, b: T) => boolean;

export interface IPriorityQueueOptions<T> {
  comparator: PriorityQueueComparator<T>;
  initialElements?: T[];
}

export interface IPriorityQueue<T> {
  size(): number;
  isEmpty(): boolean;
  peek(): T;
  push(value: T): void;
  pushMany(values: T[]): void;
  pop(): T;
  clear(): void;
  has(value: T): boolean;
  values(): T[];
}
