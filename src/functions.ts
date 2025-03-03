export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Performs binary search on a sorted array of numbers.
 * @param arr - The sorted array to search in
 * @param target - The value to search for
 * @returns The index of the target if found, -1 otherwise
 */
export function binarySearch(arr: number[], target: number): number {
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
}

/**
 * Sorts an array using the bubble sort algorithm.
 * @param arr - The array to sort
 * @returns A new sorted array in ascending order
 */
export function bubbleSort(arr: number[]): number[] {
  // Create a copy to avoid mutating the original array
  const result = [...arr];
  const n = result.length;
  
  // Early return for empty or single-element arrays
  if (n <= 1) return result;
  
  for (let i = 0; i < n; i++) {
    // Flag to optimize the algorithm by breaking early if no swaps occur
    let swapped = false;
    
    for (let j = 0; j < n - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        // Swap elements
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
        swapped = true;
      }
    }
    
    // If no swapping occurred in this pass, the array is already sorted
    if (!swapped) break;
  }
  
  return result;
}
