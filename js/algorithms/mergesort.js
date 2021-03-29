async function mergeSort(arr, divs) {
    if (arr.length < 2)
        return arr;

    let mid = Math.floor(arr.length / 2);
    await drawDiv(divs[mid], "#E0777D", 0);

    return merge(
        await mergeSort(arr.slice(0, mid), divs.slice(0, mid)),
        await mergeSort(arr.slice(mid), divs.slice(mid)),
        divs.slice(0, mid),
        divs.slice(mid)
    );
}

async function merge(left, right, divsLeft, divsRight) {
    let sorted = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sorted.push(left[i++])
            await drawDiv(divsLeft[i], "#D6FFB7", left[i]);
        } else {
            sorted.push(right[j++]);
            await drawDiv(divsRight[j], "#D6FFB7", right[j]);
        }
    }

    let aux = sorted.concat(left.slice(i)).concat(right.slice(j));
    for (i = 0; i < aux.length; i++) {
        await drawDiv("div" + i, "#D6FFB7", aux[i]);
    }

    return aux;
}

function drawDiv(id, color, height) {
    return new Promise(resolve => {
        setTimeout(function () {
            let div = document.getElementById(id);
            if (div != null) {
                div.style.backgroundColor = color;
                if (height != 0)
                    div.style.height = height;
            }
            resolve("fin");
        }, 25);
    });
}