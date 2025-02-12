/**
 * Computes the nth number in the Fibonacci sequence.
 *
 * @param {number} n - The position in the Fibonacci sequence (0-based index).
 * @returns {number} - The nth Fibonacci number.
 * @throws {Error} - If the input is a negative number.
 * @description
 * The Fibonacci sequence is a series of numbers where each number is the sum of
 * the two preceding ones. Starting with 0 and 1, the sequence goes like:
 * 0, 1, 1, 2, 3, 5, 8, 13, ... and so on.
 * This function computes the value of the nth Fibonacci number, using a
 * recursive algorithm. The base cases are for n = 0 and n = 1, where the
 * function returns 0 and 1, respectively. For other values of n, the function
 * recursively computes the sum of the two preceding numbers.
 */
export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }
  
/**
 * Performs a binary search on a sorted array to find the index of a target value.
 *
 * @template T - The type of elements in the array, which must be numbers or strings.
 * @param {T[]} arr - The sorted array in which to search for the target value.
 * @param {T} target - The value to search for within the array.
 * @returns {number} - The index of the target value if found; otherwise, -1.
 * @description
 * This function implements the binary search algorithm, which efficiently finds
 * the position of a target value within a sorted array. It works by repeatedly
 * dividing the search interval in half, comparing the target value to the middle
 * element of the current interval. If the target is equal to the middle element,
 * the function returns its index. If the target is less than the middle element,
 * the function continues the search in the lower half of the interval; otherwise,
 * it searches in the upper half.
 * The function returns -1 if the target value is not found in the array.
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