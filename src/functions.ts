/**
 * The function calculates the nth Fibonacci number using a recursive approach.
 * In the Fibonacci sequence, each number is the sum of2 previous ones
 * @param n - The position in the Fibonacci sequence (must be a non-negative integer)
 * @returns The nth Fibonacci number in the sequence
 * @throws Error if a negative integer is provided as input
 */
export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * The bubbles sort is the straightforward sorting algorithm that works by compare each pair of adjacent elements and sapping them if they are in the wrong order
 * @param array - Unordered array
 * @returns Copy of sorted array
 */
export function bubbleSort(array: number[]): number[] {
  if (!Array.isArray(array)) throw new Error('Passed argument is not a array');

  // Create copy to maintain immutability of the passed array
  const sortedArray = [...array];

  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = 0; j < sortedArray.length - i - 1; j++) {
      if (sortedArray[j+1] < sortedArray[j]) {
        [sortedArray[j+1], sortedArray[j]] = [sortedArray[j], sortedArray[j+1]];
      }
    }
  }

  return sortedArray;
}

/**
 * Binary search is an efficient algorithm for finding an item from a sorted list of items.
 * @param array array to search through
 * @param target searched target
 * @returns target value index or -1
 */
export function binarySearch(array: number[], target: number): number {
  if (!Array.isArray(array)) throw new Error('Passed argument is not a array');

  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}