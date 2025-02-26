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
