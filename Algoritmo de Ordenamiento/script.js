// Generar 10,000 números aleatorios y guardarlos en un array
const arr = new Array(10000);
for (let i = 0; i < 10000; i++) {
    arr[i] = Math.floor(Math.random() * 10001); // números entre 0 y 10000
}

// Implementar los algoritmos de ordenamiento

// Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Selection Sort
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
    }
}
let temp = arr[minIndex];
arr[minIndex] = arr[i];
arr[i] = temp;
}
return arr;
}

// Insertion Sort
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// Merge Sort
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result.concat(left).concat(right);
}

// Quick Sort
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[0];
    let less = [];
    let greater = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= pivot) {
            less.push(arr[i]);
        } else {
            greater.push(arr[i]);
        }
    }
    return quickSort(less).concat([pivot], quickSort(greater));
}

// Comparar los algoritmos de ordenamiento y determinar cuál es el más rápido
console.log("Ordenando el array con 10,000 elementos...");

let times = {};

arrCopy = [...arr]; // copia del array original
const start = performance.now();
bubbleSort(arrCopy);
const end = performance.now();
times["Bubble Sort"] = end - start;
console.log(`Bubble sort tardó ${end - start} ms.`);

arrCopy = [...arr]; // copia del array original
const start2 = performance.now();
selectionSort(arrCopy);
const end2 = performance.now();
times["Selection Sort"] = end2 - start2;
console.log(`Selection sort tardó ${end2 - start2} ms.`);

arrCopy = [...arr]; // copia del array original
const start3 = performance.now();
insertionSort(arrCopy);
const end3 = performance.now();
times["Insertion Sort"] = end3 - start3;
console.log(`Insertion sort tardó ${end3 - start3} ms.`);

arrCopy = [...arr]; // copia del array original
const start4 = performance.now();
mergeSort(arrCopy);
const end4 = performance.now();
times["Merge Sort"] = end4 - start4;
console.log(`Merge sort tardó ${end4 - start4} ms.`);

arrCopy = [...arr]; // copia del array original
const start5 = performance.now();
quickSort(arrCopy);
const end5 = performance.now();
times["Quick Sort"] = end5 - start5;
console.log(`Quick sort tardó ${end5 - start5} ms.`);

let fastest = Object.keys(times).reduce((a, b) => times[a] < times[b]? a : b);
console.log(`El algoritmo más rápido es ${fastest} con un tiempo de ${times[fastest]} segundos.`);