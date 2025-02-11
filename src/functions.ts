/**
 * Calculates the nth Fibonacci number.
 * @param n - A non-negative integer representing the nth position in the Fibonacci sequence.
 * @returns The nth Fibonacci number.
 * @throws If n is negative, an error is thrown because negative numbers are not allowed.
 */
export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

/**
 * Performs a binary search on a sorted array of numbers to find the target number.
 * @param arr - A sorted array of numbers in ascending order.
 * @param target - The number to search for in the array.
 * @returns The index of the target number if found, or -1 if not found.
 */
  export function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid;
      }
  
      if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1; // If the target is not found in the array
  }
  

