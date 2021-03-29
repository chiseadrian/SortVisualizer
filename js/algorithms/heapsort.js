let array_length;
let statesHeap = [];

async function heapSort(array) {
    array_length = array.length;
    for (let i = Math.floor(array_length / 2); i >= 0; i -= 1)
        await heapify(array, i);

    for (i = array.length - 1; i > 0; i--) {
        statesHeap[i] = 2;
        await swap(array, 0, i, statesHeap);
        array_length--;
        await heapify(array, 0);
    }
}
async function heapify(array, i) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let max = i;

    if (left < array_length && array[left] > array[max])
        max = left;

    if (right < array_length && array[right] > array[max])
        max = right;

    if (max != i) {
        statesHeap[i] = 0;
        await swap(array, i, max, statesHeap);
        statesHeap[i] = 1;
        statesHeap[max] = 1;
        await heapify(array, max);
    }
}