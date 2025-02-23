/**
 * Calculates the nth Fibonacci number.
 * 
 * @param {number} n - The index of the Fibonacci sequence to calculate.
 * @returns {number} - The nth Fibonacci number.
 * @throws {Error} - Throws an error if the input is a negative number.
 */
export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Performs a binary search to find the index of a target element in a sorted array.
 * 
 * @param {number[]} arr - The sorted array of numbers to search in.
 * @param {number} target - The target number to find.
 * @returns {number} - The index of the target in the array if found, otherwise -1.
 */
export function binarySearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === target) {
        return mid; // Target found at index mid
      } else if (arr[mid] < target) {
        low = mid + 1; // Target is in the right half
      } else {
        high = mid - 1; // Target is in the left half
      }
    }
    return -1; // Target not found
  }

/**
 * Sorts an array of numbers using the Bubble Sort algorithm.
 * 
 * @param {number[]} arr - The array of numbers to sort.
 * @returns {number[]} - The sorted array in ascending order.
 */
export function bubbleSort(arr: number[]): number[] {
    // Copy the array to avoid modifying the original
    let sortedArr = arr.slice();
  
    // Edge case: check if the array is empty or too short to be sorted
    if (sortedArr.length <= 1) {
      return sortedArr;
    }
  
    let swapped;
    do {
      swapped = false;
      // Iterate through the array
      for (let i = 0; i < sortedArr.length - 1; i++) {
        // Compare adjacent elements and swap if needed
        if (sortedArr[i] > sortedArr[i + 1]) {
          [sortedArr[i], sortedArr[i + 1]] = [sortedArr[i + 1], sortedArr[i]];
          swapped = true;
        }
      }
    } while (swapped); // Continue until no swaps are needed
  
    return sortedArr;
  }
  