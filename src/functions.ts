/**
 * Calculates the nth Fibonacci number.
 * 
 * @param n - The position in the Fibonacci sequence (must be non-negative)
 * @returns The nth Fibonacci number
 * @throws {Error} If n is negative
 * 
 * @example
 * // Returns 55
 * fibonacci(10);
 */
export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Searches for a target value in a sorted array using the binary search algorithm.
 * 
 * @param arr - A sorted array of numbers to search in
 * @param target - The value to search for
 * @returns The index of the target if found, or -1 if not found
 * 
 * @example
 * // Returns 2
 * binarySearch([1, 2, 3, 4, 5], 3);
 * 
 * @example
 * // Returns -1
 * binarySearch([1, 2, 3, 4, 5], 6);
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
 * Sorts an array of numbers in ascending order using the bubble sort algorithm.
 * This function does not modify the original array.
 * 
 * @param arr - An array of numbers to sort
 * @returns A new sorted array
 * 
 * @example
 * // Returns [1, 2, 3, 4, 5]
 * bubbleSort([5, 3, 1, 4, 2]);
 * 
 * @example
 * // Original array remains unchanged
 * const array = [5, 3, 1, 4, 2];
 * const sorted = bubbleSort(array);
 * // array is still [5, 3, 1, 4, 2]
 * // sorted is [1, 2, 3, 4, 5]
 */
export function bubbleSort(arr: number[]): number[] {
  // Create a copy of the array to avoid mutating the original
  const result = [...arr];
  const n = result.length;
  
  // Early return for empty or single-element arrays
  if (n <= 1) return result;
  
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    
    for (let j = 0; j < n - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        // Swap elements
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
        swapped = true;
      }
    }
    
    // If no swapping occurred in this pass, array is already sorted
    if (!swapped) break;
  }
  
  return result;
}
