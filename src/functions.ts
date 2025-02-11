/**
 * Calculates the nth Fibonacci number recursively.
 *
 * @param {number} n - The position in the Fibonacci sequence (must be a non-negative integer).
 * @returns {number} - The nth Fibonacci number.
 * @throws {Error} - If the input is a negative number.
 */
export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  /**
   * Performs a binary search on a sorted array to find the target value.
   *
   * @param {number[]} array - A sorted array of numbers.
   * @param {number} target - The target number to search for.
   * @returns {boolean} - True if the target is found in the array, false otherwise.
   */
  export function binarySearch(array: number[], target: number): boolean {
    let low = 0;
    let high = array.length - 1;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const value = array[mid];
  
      if (value === target) {
        return true;
      } else if (value < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return false;
  }
