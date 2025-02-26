/**
 * A collection of utility functions.
 */

/**
 * Calculates the nth Fibonacci number.
 * 
 * @param n - The position in the Fibonacci sequence
 * @returns The nth Fibonacci number
 */
export function fibonacci(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  
  let a = 0;
  let b = 1;
  let result = 0;
  
  for (let i = 2; i <= n; i++) {
    result = a + b;
    a = b;
    b = result;
  }
  
  return result;
}

/**
 * Performs a binary search on a sorted array.
 * 
 * @param arr - The sorted array to search in
 * @param target - The value to search for
 * @returns The index of the target if found, otherwise -1
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
 * 
 * @param arr - The array to sort
 * @returns A new sorted array
 */
export function bubbleSort(arr: number[]): number[] {
  // Create a copy of the array to avoid modifying the original
  const result = [...arr];
  const length = result.length;
  
  // Early return for empty or single-element arrays
  if (length <= 1) return result;
  
  for (let i = 0; i < length; i++) {
    // Flag to optimize the algorithm by breaking early if no swaps occur
    let swapped = false;
    
    for (let j = 0; j < length - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        // Swap elements
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
        swapped = true;
      }
    }
    
    // If no swaps occurred in this pass, the array is sorted
    if (!swapped) break;
  }
  
  return result;
}

/**
 * Sorts an array using the insertion sort algorithm.
 * 
 * @param arr - The array to sort
 * @returns A new sorted array
 */
function insertionSort(arr: number[]): number[] {
  const result = [...arr];
  const length = result.length;
  
  for (let i = 1; i < length; i++) {
    const current = result[i];
    let j = i - 1;
    
    while (j >= 0 && result[j] > current) {
      result[j + 1] = result[j];
      j--;
    }
    
    result[j + 1] = current;
  }
  
  return result;
}

/**
 * Partition function for quicksort algorithm.
 * 
 * @param arr - The array to partition
 * @param low - The starting index
 * @param high - The ending index
 * @returns The partition index
 */
function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[high];
  let i = low - 1;
  
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

/**
 * Recursive implementation of quicksort algorithm.
 * 
 * @param arr - The array to sort
 * @param low - The starting index
 * @param high - The ending index
 */
function quickSortRecursive(arr: number[], low: number, high: number): void {
  if (low < high) {
    const partitionIndex = partition(arr, low, high);
    
    quickSortRecursive(arr, low, partitionIndex - 1);
    quickSortRecursive(arr, partitionIndex + 1, high);
  }
}

/**
 * Sorts an array using the quicksort algorithm.
 * 
 * @param arr - The array to sort
 * @returns A new sorted array
 */
function quickSort(arr: number[]): number[] {
  const result = [...arr];
  
  if (result.length <= 1) {
    return result;
  }
  
  quickSortRecursive(result, 0, result.length - 1);
  return result;
}

/**
 * Sorts an array using a randomly chosen sorting algorithm.
 * 
 * @param arr - The array to sort
 * @returns A new sorted array
 */
export function randomSort(arr: number[]): number[] {
  // Array of sorting functions
  const sortingAlgorithms = [
    bubbleSort,
    insertionSort,
    quickSort
  ];
  
  // Select a random sorting algorithm
  const randomIndex = Math.floor(Math.random() * sortingAlgorithms.length);
  const selectedAlgorithm = sortingAlgorithms[randomIndex];
  
  // Apply the selected algorithm
  return selectedAlgorithm(arr);
}
