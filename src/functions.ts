/**
 * Returns a simple test string.
 *
 * @returns {string} A test string.
 */
export function test(): string {
  return "This is a test function";
}

/**
 * Calculates the n-th Fibonacci number.
 *
 * @param {number} n - The position in the Fibonacci sequence (must be non-negative).
 * @returns {number} The n-th Fibonacci number.
 * @throws {Error} If n is negative.
 */
export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Sorts an array of numbers in ascending order using the bubble sort algorithm.
 *
 * @param {number[]} arr - The array of numbers to be sorted.
 * @returns {number[]} A new array containing the sorted numbers.
 */
export function bubbleSort(arr: number[]): number[] {
  const copiedArray = arr.slice(); // Copy the array to avoid mutating the original
  for (let i = 0; i < copiedArray.length; i++) {
    for (let j = 0; j < copiedArray.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = copiedArray[j];
        copiedArray[j] = copiedArray[j + 1];
        copiedArray[j + 1] = temp;
      }
    }
  }
  return copiedArray;
}

/**
 * Performs a binary search on a sorted array to find
 * the index of a target value.
 *
 * @param {number[]} arr - The sorted array of numbers to be searched.
 * @param {number} target - The target number to search for in the array.
 * @returns {number} The index of the target value in the array, or -1 if not found.
 */
export function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;

    arr[mid] < target ? (left = mid + 1) : (right = mid - 1);
  }
  return -1;
}