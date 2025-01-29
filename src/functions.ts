export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

export function binarySearch(arr: number[], target: number): number {
let left = 0;
let right = arr.length - 1;

while (left <= right) {
const mid = Math.floor((left + right) / 2);

if (arr[mid] === target) {
return mid;
} else if (arr[mid] < target) {
left = mid + 1;
} else {
right = mid - 1;
}
}
return -1; // Target not found
}

export function bubbleSort(arr: number[]): number[] {
// Create a copy of the input array so we don't modify the original
const sortedArr = [...arr];
const n = sortedArr.length;

for (let i = 0; i < n; i++) {
// Flag to check if any swaps were made during this pass
let swapped = false;

for (let j = 0; j < n - i - 1; j++) {
// Compare adjacent elements and swap if they are out of order
if (sortedArr[j] > sortedArr[j + 1]) {
// Swap elements using destructuring assignment
[sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
swapped = true;
}
}

// If no swaps were made during this pass,
// then the list is already sorted
if (!swapped) break;
}

return sortedArr;
}

