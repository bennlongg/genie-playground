/**
 * Returns a simple test string.
 *
 * @returns {string} A test string.
 */
export function test(): string {
  return "This is a test function";
}

/**
 * Calculates the n-th Fibonacci number.
 *
 * @param {number} n - The position in the Fibonacci sequence (must be non-negative).
 * @returns {number} The n-th Fibonacci number.
 * @throws {Error} If n is negative.
 */
export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Performs a binary search on a sorted array to find the target value.
 *
 * @param {number[]} arr - The sorted array of numbers.
 * @param {number} target - The number to search for in the array.
 * @param {number} [start=0] - The starting index for the search range.
 * @param {number} [end=arr.length-1] - The ending index for the search range.
 * @returns {number} The index of the target in the array, or -1 if not found.
 */
export function binarySearch(
  arr: number[],
  target: number,
  start?: number,
  end?: number
): number {
  start = start ?? 0;
  end = end ?? arr.length - 1;

  if (start > end) return -1;

  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] < target) return binarySearch(arr, target, mid + 1, end);

  return binarySearch(arr, target, start, mid - 1);
}