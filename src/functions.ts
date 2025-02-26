/**
 * A collection of utility functions.
 */

/**
 * Calculates the nth Fibonacci number.
 * 
 * @param n - The position in the Fibonacci sequence
 * @returns The nth Fibonacci number
 */
export function fibonacci(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  
  let a = 0;
  let b = 1;
  let result = 0;
  
  for (let i = 2; i <= n; i++) {
    result = a + b;
    a = b;
    b = result;
  }
  
  return result;
}

/**
 * Performs a binary search on a sorted array.
 * 
 * @param arr - The sorted array to search in
 * @param target - The value to search for
 * @returns The index of the target if found, otherwise -1
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
  
  return -1;
}

/**
 * Sorts an array using the bubble sort algorithm.
 * 
 * @param arr - The array to sort
 * @returns A new sorted array
 */
export function bubbleSort(arr: number[]): number[] {
  // Create a copy of the array to avoid modifying the original
  const result = [...arr];
  const length = result.length;
  
  // Early return for empty or single-element arrays
  if (length <= 1) return result;
  
  for (let i = 0; i < length; i++) {
    // Flag to optimize the algorithm by breaking early if no swaps occur
    let swapped = false;
    
    for (let j = 0; j < length - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        // Swap elements
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
        swapped = true;
      }
    }
    
    // If no swaps occurred in this pass, the array is sorted
    if (!swapped) break;
  }
  
  return result;
}
