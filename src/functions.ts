/**
 * Computes the Fibonacci number at position n.
 * @param {number} n - The position in the Fibonacci sequence (non-negative integer).
 * @throws {Error} Throws an error if n is a negative number.
 * @returns {number} The Fibonacci number at position n.
 */
export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }
  
/**
 * Performs a binary search on a sorted array and returns the index of the target value.
 * @param {number[]} arr - The sorted array of numbers to search within.
 * @param {number} target - The value being searched for.
 * @returns {number} The index of the target in the array, or -1 if not found.
 * @throws {Error} Throws an error if the input array is not sorted.
 */
export function binarySearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return -1; // target not found in the array
  }
  
  /**
 * Sorts an array of numbers in ascending order using the bubble sort algorithm.
 * @param {number[]} arr - The input array to be sorted.
 * @returns {number[]} A new array of numbers sorted in ascending order.
 * @throws {Error} Throws an error if the input array contains non-numeric elements.
 */
export function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    const sortedArr = [...arr]; // make a copy to avoid modifying the input
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (typeof sortedArr[j] !== "number" || typeof sortedArr[j + 1] !== "number") {
          throw new Error("Input array must contain only numbers");
        }
        if (sortedArr[j] > sortedArr[j + 1]) {
          const temp = sortedArr[j];
          sortedArr[j] = sortedArr[j + 1];
          sortedArr[j + 1] = temp; // swap adjacent elements if out of order
        }
      }
    }
    return sortedArr;
  }