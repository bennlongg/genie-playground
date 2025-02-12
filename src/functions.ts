/**
 * Calculates the Fibonacci number for a given non-negative integer n.
 * @param n - The input non-negative integer.
 * @returns The Fibonacci number for the given n.
 * @throws {Error} If n is negative, throws an error with the message "Negative numbers are not allowed".
 */
export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  /**
   * Performs a binary search on a sorted array of numbers to find the target value.
   * @param arr - The sorted array of numbers to search.
   * @param target - The number to search for.
   * @returns The index of the target value if found, or -1 if not found.
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
  
    return -1; // target not found
  }