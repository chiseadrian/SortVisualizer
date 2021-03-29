let statesBubble = [];

async function bubbleSort(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                statesBubble[j] = 1;
                statesBubble[j + 1] = 0;
                await draw(array, statesBubble);
                statesBubble[j] = -1;
                statesBubble[j + 1] = -1;
                if (j == array.length - i - 2)
                    statesBubble[j + 1] = 2;
            }
        }
    }

    return array;
}