import { PriorityQueue } from '../lib/queue';
import { defaultMaxComparator } from './test.helper';

test('check if needed functions are called', () => {
    const numberPriorityQueue = new PriorityQueue<number>({ comparator: defaultMaxComparator, initialElements: [6] });
    const siftDownFn = jest.spyOn(PriorityQueue.prototype as any, 'siftDown');
    const sizeFn = jest.spyOn(numberPriorityQueue, 'size');
    const isEmptyFn = jest.spyOn(numberPriorityQueue, 'isEmpty');
    const peekFn = jest.spyOn(numberPriorityQueue, 'peek');

    numberPriorityQueue.pop();

    expect(siftDownFn).toBeCalledTimes(1);
    expect(sizeFn).toBeCalled();
    expect(isEmptyFn).toBeCalledTimes(1);
    expect(peekFn).toBeCalledTimes(1);

    jest.clearAllMocks();
});

