/**
 * Computes the nth number in the Fibonacci sequence.
 *
 * @param {number} n - The position in the sequence (0-based index).
 * @returns {number} - The nth Fibonacci number.
 * @throws {Error} - If a negative number is provided.
 */
export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }
  
/**
 * Performs a binary search on a sorted array to find the index of a target value.
 *
 * @template T - Elements must be numbers or strings.
 * @param {T[]} arr - The sorted array to search through.
 * @param {T} target - The value to search for in the array.
 * @returns {number} - Index of the target if found; otherwise, -1.
 */
export function binarySearch<T extends number | string>(arr: T[], target: T): number {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const element = arr[mid];

    if (element < target) {
      low = mid + 1;
    } else if (element > target) {
      high = mid - 1;
    } else {
      return mid; // Target found, return the index
    }
  }

  return -1; // Target not found, return -1
}