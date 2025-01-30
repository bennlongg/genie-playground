/**
 * Calculates the nth Fibonacci number.
 * @param {number} n - The position in the Fibonacci sequence (0-based index).
 * @returns {number} The Fibonacci number at position n.
 * @throws {Error} If n is negative.
 */
export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

/**
 * Performs a binary search on a sorted array to find the target value.
 * @param {number[]} arr - The sorted array of numbers to search within.
 * @param {number} target - The number to find in the array.
 * @returns {number} The index of the target if found; otherwise, -1.
 */
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

/**
 * Sorts an array of numbers using the bubble sort algorithm.
 * @param {number[]} arr - The array of numbers to be sorted.
 * @returns {number[]} The sorted array in ascending order.
 */
export function bubbleSort(arr: number[]): number[] {
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  }

  return arr;
}
