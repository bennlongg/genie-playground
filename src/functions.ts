/**
 * Calculates the nth Fibonacci number.
 *
 * @param {number} n - The index in the Fibonacci sequence.
 * @returns {number} The nth Fibonacci number.
 * @throws Will throw an error if the input is a negative number.
 */
export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Performs a binary search on a sorted array to find the index of the target value.
 *
 * @param {number[]} arr - A sorted array of numbers.
 * @param {number} target - The target number to search for.
 * @returns {number} The index of the target if found, or -1 if not present in the array.
 */
export function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midValue = arr[mid];

        if (midValue === target) {
            return mid;
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

/**
 * Sorts an array of numbers using the bubble sort algorithm.
 *
 * @param {number[]} arr - An array of numbers to be sorted.
 * @returns {number[]} The sorted array.
 */
export function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap elements
            }
        }
    }
    return arr;
}
