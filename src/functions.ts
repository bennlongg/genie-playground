/**
 * Calculates the Fibonacci number at a specified position in the sequence.
 * The Fibonacci sequence starts with 0 and 1, where each subsequent number
 * is the sum of the two preceding ones: 0, 1, 1, 2, 3, 5, 8, 13, ...
 *
 * @param {number} n - The position in the Fibonacci sequence (must be non-negative)
 * @returns {number} The Fibonacci number at position n
 * @throws {Error} If n is negative
 */
export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Performs a binary search on a sorted array to find a target value.
 * Binary search works by repeatedly dividing the search interval in half,
 * which gives it a time complexity of O(log n).
 *
 * @param {number[]} arr - The sorted array to search in
 * @param {number} target - The value to find in the array
 * @returns {boolean} True if the target is found, false otherwise
 */
export function binarySearch(arr: number[], target: number): boolean {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return true;
    }
    
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return false;
}

/**
 * Sorts an array of numbers using the bubble sort algorithm.
 * Bubble sort repeatedly steps through the list, compares adjacent elements,
 * and swaps them if they are in the wrong order. This process is repeated
 * until the list is sorted.
 * Time complexity: O(n²)
 *
 * @param {number[]} arr - The array to sort
 * @returns {number[]} A new sorted array (original array is not modified)
 */
export function bubbleSort(arr: number[]): number[] {
  // Create a copy of the array to avoid modifying the original
  const result = [...arr];
  const length = result.length;
  
  // Iterate through the array
  for (let i = 0; i < length; i++) {
    // Last i elements are already in place
    for (let j = 0; j < length - i - 1; j++) {
      // Compare adjacent elements
      if (result[j] > result[j + 1]) {
        // Swap them if they are in the wrong order
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }
  
  return result;
}

/**
 * Helper function that merges two sorted arrays into a single sorted array.
 * This function is used by the mergeSort algorithm.
 * Time complexity: O(n) where n is the combined length of both arrays.
 *
 * @param {number[]} left - The first sorted array
 * @param {number[]} right - The second sorted array
 * @returns {number[]} A new array containing all elements from both input arrays, sorted
 */
function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from both arrays and add the smaller one to result
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add remaining elements from left array
  return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

/**
 * Sorts an array of numbers using the merge sort algorithm.
 * Merge sort is a divide-and-conquer algorithm that works by recursively dividing
 * the array in half, sorting each half, and then merging the sorted halves.
 * Time complexity: O(n log n)
 *
 * @param {number[]} arr - The array to sort
 * @returns {number[]} A new sorted array (original array is not modified)
 */
export function mergeSort(arr: number[]): number[] {
  // Base case: arrays with 0 or 1 elements are already sorted
  if (arr.length <= 1) {
    return [...arr];
  }

  // Split array into two halves
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Recursively sort both halves and merge them
  return merge(mergeSort(left), mergeSort(right));
}
