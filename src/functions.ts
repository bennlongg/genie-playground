/**
 * Returns the nth Fibonacci number.
 *
 * @param {number} n - The position of the Fibonacci sequence to retrieve.
 * @return {number} The nth Fibonacci number.
 *
 * @throws {Error} If n is less than 0.
 *
 * @example
 * fibonacci(5); // 5
 */
export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Performs a binary search on a sorted array to find the target element.
 *
 * @param {number[]} arr - A sorted array of numbers.
 * @param {number} target - The number to find in the sorted array.
 * @return {number} The index of the target element in the array, or -1 if not found.
 *
 * @example
 * binarySearch([1, 2, 3, 4, 5], 3); // 2
 * binarySearch([1, 2, 3, 4, 5], 6); // -1
 */
export const binarySearch = (arr: number[], target: number): number => {
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
};