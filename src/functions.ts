import { swap, compare } from './utilities';

export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Performs a binary search on a sorted array to find the specified element.
 * @param arr - The sorted array to search in
 * @param element - The element to search for
 * @returns The index of the element if found, otherwise -1
 */
export function binarySearch<T>(arr: T[], element: T): number {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === element) {
      return mid;
    }
    
    if (arr[mid] < element) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}

/**
 * Sorts an array using the bubble sort algorithm.
 * @param arr - The array to be sorted
 * @returns The sorted array (same reference as input)
 */
export function bubbleSort<T>(arr: T[]): T[] {
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    
    for (let j = 0; j < n - i - 1; j++) {
      if (compare(arr[j], arr[j + 1]) > 0) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    
    // If no swapping occurred in this pass, array is sorted
    if (!swapped) break;
  }
  
  return arr;
}
