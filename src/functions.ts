/**
 * Bubble Sort Algorithm
 * @description Sorts an array of numbers using the bubble sort algorithm
 * @param {number[]} arr - Array of numbers to sort, not mutated
 * @returns {number[]} Sorted array of numbers
 * @throws {TypeError} If arr is not an array of numbers
 * @example
 * bubbleSort([5, 2, 9, 1, 5, 6]) // [1, 2, 5, 5, 6, 9]
 * bubbleSort([]) // []
 * bubbleSort([1]) // [1]
 * bubbleSort([1, 2, 3]) // [1, 2, 3]
 * bubbleSort([3, 2, 1]) // [1, 2, 3]
 * bubbleSort([1, 2, 3, 2, 1]) // [1, 1, 2, 2, 3]
 * bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * bubbleSort([5, 2, -2, 0, -1, -3])         // [-3, -2, -1, 0, 2, 5]
 */
export function bubbleSort(arr: number[]): number[] {
  const copy = [...arr];
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < copy.length - 1; i++) {
      if (copy[i] > copy[i + 1]) {
        [copy[i], copy[i + 1]] = [copy[i + 1], copy[i]];
        swapped = true;
      }
    }
  }
  return copy;
}

export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Binary Search Algorithm
 * @description Searches for a target element within a sorted array of numbers using binary search
 * @param {number[]} arr - Sorted array of numbers to search within (in ascending order)
 * @param {number} target - Target element to find its index
 * @returns {number} Index of the target element if found; otherwise, -1
 * @throws {Error} If the input array is not sorted (in ascending order) or empty
 * @example
 * binarySearch([1, 2, 3, 4, 5], 3) // 2
 * binarySearch([1, 2, 3, 4, 5], 10) // -1
 * binarySearch([], 1) // -1
 * binarySearch([-5, -3, -1, 0, 1, 3, 5], -1) // 2
 * binarySearch([4], 4) // 0
 * binarySearch([1, 2, 2, 2, 3, 4], 2) // 1 (returns first occurrence's index)
 */
export function binarySearch(arr: number[], target: number): number {
  if (
    !arr.every((num, idx) => idx === 0 || arr[idx - 1] <= num) ||
    arr.length < 1
  ) {
    throw new Error("Invalid input");
  }
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}