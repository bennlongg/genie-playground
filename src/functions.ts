/**
 * Calculates the n-th Fibonacci number.
 * @param {number} n - The position in the Fibonacci sequence.
 * @returns {number} The n-th Fibonacci number.
 * @throws Will throw an error if n is negative.
 */
export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Performs a binary search on a sorted array of numbers.
 * @param {number[]} nums - A sorted array of numbers to search within.
 * @param {number} target - The number to search for.
 * @returns {number} The index of the target if found, otherwise -1.
 */
export function binarySearch(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
