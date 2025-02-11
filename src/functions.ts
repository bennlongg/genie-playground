/**
 * Computes the nth Fibonacci number.
 * 
 * @param {number} n - The position of the Fibonacci sequence to compute.
 * @returns {number} - The Fibonacci number at the given position.
 * @throws {Error} - If input is negative.
 */
export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  /**
   * Performs a binary search on a sorted array to find the index of a target element.
   * 
   * @param {number[]} arr - The sorted array in which to search.
   * @param {number} target - The element to search for.
   * @returns {number} - The index of the target element if found, or -1 if not found.
   */
  export function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) return mid;
      target < arr[mid] ? right = mid - 1 : left = mid + 1;
    }
    return -1;
  }
  
  /**
   * Sorts an array using the bubble sort algorithm and returns a new sorted array.
   * 
   * @param {number[]} arr - The array of numbers to be sorted.
   * @returns {number[]} - A new array sorted in ascending order.
   */
  export function bubbleSort(arr: number[]): number[] {
    let swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Swap elements
        swapped = true;
      }
    }
    return swapped ? bubbleSort(arr) : arr; // Recursively sort if swapped
  }
  