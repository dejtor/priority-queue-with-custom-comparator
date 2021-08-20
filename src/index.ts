import { PriorityQueue } from './queue';

const numberPriorityQueue = new PriorityQueue<number>({ comparator: (a, b) => a > b, initialElements: [3, 1] });

class Rand {
  num: number;
}

const classPriorityQueue = new PriorityQueue<Rand>({ comparator: (a, b) => a.num > b.num });

const stringPriorityQueue = new PriorityQueue<string>({ comparator: (a, b) => a.length > b.length });

console.log('size of queue after inserting 5', numberPriorityQueue.push(5));
console.log('size of queue after inserting 3', numberPriorityQueue.push(3));
console.log('size of queue after inserting 8', numberPriorityQueue.push(8));

console.log('top of queue', numberPriorityQueue.peek()); // 8
console.log('top of queue', numberPriorityQueue.pop()); // 8
console.log('size after inserting 1, 2 and 3', numberPriorityQueue.pushMany([1, 2, 3]));

