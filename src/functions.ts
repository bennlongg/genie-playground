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

/**
 * Sorts an array of numbers using the bubble sort algorithm.
 * @param {number[]} nums - An array of numbers to be sorted.
 * @returns {number[]} A new array with the elements sorted in ascending order.
 */
export function bubbleSort(nums: number[]): number[] {
  const arr = [...nums];
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}
