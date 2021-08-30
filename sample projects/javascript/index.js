import PriorityQueue from 'priority-queue-with-custom-comparator'


const q = new PriorityQueue.default({ comparator: (a, b) => { return a - b < 0; } });
q.pushMany([-1, 4, 8, -9]);
q.push(2);