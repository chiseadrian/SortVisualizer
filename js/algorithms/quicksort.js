let statesQuick = [];

async function quickSort(array, start, end) {
    if (start >= end)
        return;

    let index = await partition(array, start, end);
    await Promise.all([
        quickSort(array, start, index - 1),
        quickSort(array, index + 1, end),
    ]);
}

async function partition(array, start, end) {
    for (let i = start; i < end; i++)
        statesQuick[i] = 1;

    const pivotValue = array[end];
    let pivotIndex = start;
    statesQuick[pivotIndex] = 0;
    for (let i = start; i < end; i++) {
        if (array[i] < pivotValue) {
            await swap(array, i, pivotIndex, statesQuick);
            statesQuick[pivotIndex] = -1;
            pivotIndex++;
            statesQuick[pivotIndex] = 0;
        }
    }
    statesQuick[pivotIndex] = 2;
    await swap(array, pivotIndex, end, statesQuick);

    return pivotIndex;
};