var randomArray = [];
var divs = [];

window.onload = function () {
    generateArray(50);
}

async function visualize() {
    if (isRunning("Sort"))
        location.reload();

    showButton("stop", "Sort");
    currentAlgorithm = document.getElementById("sort-algorithm-selected").value;
    switch (currentAlgorithm) {
        case "mergesort":
            let aux = await mergeSort(randomArray, divs);
            finalDraw(aux);
            break;
        case "quicksort":
            await quickSort(randomArray, 0, randomArray.length - 1);
            finalDraw(randomArray);
            break;
        case "heapsort":
            await heapSort(randomArray);
            finalDraw(randomArray);
            break;
        case "bubblesort":
            let res = await bubbleSort(randomArray);
            finalDraw(res);
            break;
        default:
            alert("Select an algorithm !!!");
            showButton("visualize", "Sort");
            break;
    }
}

function generateArray(newSize) {
    if (newSize == 0)
        newSize = document.getElementById("change-size").value;

    clearArray();
    for (i = 0; i < newSize; i++) {
        randomArray.push(Math.floor(Math.random() * 850))
        divArrayItem = document.createElement("div");
        divArrayItem.style.height = randomArray[i] + "px";
        divArrayItem.className = "array-item";
        divArrayItem.id = "div" + i;

        divs[i] = divArrayItem.id;

        document.getElementById("content").appendChild(divArrayItem);
    }
}

function clearArray() {
    document.getElementById("content").innerHTML = "";
    randomArray = [];
}

function finalDraw(array) {
    document.getElementById("content").innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        divArrayItem = document.createElement("div");
        divArrayItem.style.height = array[i] + "px";
        divArrayItem.className = "array-item";
        divArrayItem.id = "div" + i;
        divArrayItem.style.background = '#50C878';

        document.getElementById("content").appendChild(divArrayItem);
    }
    showButton("visualize", "Sort");
}

function draw(array, states) {
    return new Promise(resolve => {
        setTimeout(function () {
            document.getElementById("content").innerHTML = "";
            for (let i = 0; i < array.length; i++) {
                divArrayItem = document.createElement("div");
                divArrayItem.style.height = array[i] + "px";
                divArrayItem.className = "array-item";
                divArrayItem.id = "div" + i;

                if (states[i] == 0)
                    divArrayItem.style.background = '#E0777D';  //red
                else if (states[i] == 1)
                    divArrayItem.style.background = '#D6FFB7';  //yellow
                else if (states[i] == 2)
                    divArrayItem.style.background = '#50C878';  //green

                document.getElementById("content").appendChild(divArrayItem);
            }
            resolve("fin");
        }, 100);
    });
}

async function swap(array, a, b, states) {
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
    await draw(array, states);
}