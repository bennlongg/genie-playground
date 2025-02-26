/**
 * A collection of sorting algorithm utility functions.
 */

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
export function insertionSort(arr: number[]): number[] {
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
export function quickSort(arr: number[]): number[] {
  const result = [...arr];
  
  if (result.length <= 1) {
    return result;
  }
  
  quickSortRecursive(result, 0, result.length - 1);
  return result;
}

/**
 * Merges two sorted arrays into a single sorted array.
 * 
 * @param left - The left sorted array
 * @param right - The right sorted array
 * @returns A merged sorted array
 */
function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  // Compare elements from both arrays and add the smaller one to the result
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  
  // Add remaining elements
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

/**
 * Sorts an array using the merge sort algorithm.
 * 
 * @param arr - The array to sort
 * @returns A new sorted array
 */
export function mergeSort(arr: number[]): number[] {
  const result = [...arr];
  
  // Base case
  if (result.length <= 1) {
    return result;
  }
  
  // Split the array in half
  const middle = Math.floor(result.length / 2);
  const left = result.slice(0, middle);
  const right = result.slice(middle);
  
  // Recursively sort both halves and merge them
  return merge(mergeSort(left), mergeSort(right));
}

/**
 * Sorts an array using the selection sort algorithm.
 * 
 * @param arr - The array to sort
 * @returns A new sorted array
 */
export function selectionSort(arr: number[]): number[] {
  const result = [...arr];
  const length = result.length;
  
  for (let i = 0; i < length; i++) {
    let minIndex = i;
    
    // Find the minimum element in the unsorted part
    for (let j = i + 1; j < length; j++) {
      if (result[j] < result[minIndex]) {
        minIndex = j;
      }
    }
    
    // Swap the found minimum element with the element at index i
    if (minIndex !== i) {
      [result[i], result[minIndex]] = [result[minIndex], result[i]];
    }
  }
  
  return result;
}
