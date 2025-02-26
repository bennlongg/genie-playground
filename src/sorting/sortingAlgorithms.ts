/**
 * A collection of sorting algorithms implemented in TypeScript.
 */

/**
 * Bubble Sort - O(n²) time complexity
 * Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.
 * @param arr - The array to be sorted
 * @returns The sorted array
 */
export function bubbleSort<T>(arr: T[]): T[] {
  const result = [...arr];
  const n = result.length;
  
  for (let i = 0; i < n; i++) {
    // Flag to optimize if array is already sorted
    let swapped = false;
    
    for (let j = 0; j < n - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        // Swap elements
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
        swapped = true;
      }
    }
    
    // If no swapping occurred in this pass, array is sorted
    if (!swapped) break;
  }
  
  return result;
}

/**
 * Selection Sort - O(n²) time complexity
 * Finds the minimum element from the unsorted part and puts it at the beginning.
 * @param arr - The array to be sorted
 * @returns The sorted array
 */
export function selectionSort<T>(arr: T[]): T[] {
  const result = [...arr];
  const n = result.length;
  
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    
    for (let j = i + 1; j < n; j++) {
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

/**
 * Insertion Sort - O(n²) time complexity
 * Builds the sorted array one element at a time by inserting each element into its correct position.
 * @param arr - The array to be sorted
 * @returns The sorted array
 */
export function insertionSort<T>(arr: T[]): T[] {
  const result = [...arr];
  const n = result.length;
  
  for (let i = 1; i < n; i++) {
    const key = result[i];
    let j = i - 1;
    
    // Move elements that are greater than key to one position ahead
    while (j >= 0 && result[j] > key) {
      result[j + 1] = result[j];
      j--;
    }
    
    result[j + 1] = key;
  }
  
  return result;
}

/**
 * Merge Sort - O(n log n) time complexity
 * Divide and conquer algorithm that divides the input array into two halves,
 * recursively sorts them, and then merges the sorted halves.
 * @param arr - The array to be sorted
 * @returns The sorted array
 */
export function mergeSort<T>(arr: T[]): T[] {
  if (arr.length <= 1) {
    return arr;
  }
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

/**
 * Helper function for merge sort
 * Merges two sorted arrays into a single sorted array
 * @param left - First sorted array
 * @param right - Second sorted array
 * @returns Merged sorted array
 */
function merge<T>(left: T[], right: T[]): T[] {
  const result: T[] = [];
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
  
  // Add any remaining elements
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

/**
 * Quick Sort - O(n log n) average time complexity, O(n²) worst case
 * Divide and conquer algorithm that picks a 'pivot' element and partitions
 * the array around the pivot.
 * @param arr - The array to be sorted
 * @returns The sorted array
 */
export function quickSort<T>(arr: T[]): T[] {
  const result = [...arr];
  
  if (result.length <= 1) {
    return result;
  }
  
  quickSortHelper(result, 0, result.length - 1);
  return result;
}

/**
 * Helper function for quick sort
 * @param arr - The array being sorted
 * @param low - Lower index
 * @param high - Higher index
 */
function quickSortHelper<T>(arr: T[], low: number, high: number): void {
  if (low < high) {
    // Partition the array and get the pivot index
    const pivotIndex = partition(arr, low, high);
    
    // Recursively sort the sub-arrays
    quickSortHelper(arr, low, pivotIndex - 1);
    quickSortHelper(arr, pivotIndex + 1, high);
  }
}

/**
 * Partition helper for quick sort
 * @param arr - The array being partitioned
 * @param low - Lower index
 * @param high - Higher index
 * @returns The pivot index
 */
function partition<T>(arr: T[], low: number, high: number): number {
  // Use the last element as the pivot
  const pivot = arr[high];
  let i = low - 1;
  
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  // Place the pivot in its final sorted position
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

/**
 * Heap Sort - O(n log n) time complexity
 * Creates a max heap from the array and repeatedly extracts the maximum element.
 * @param arr - The array to be sorted
 * @returns The sorted array
 */
export function heapSort<T>(arr: T[]): T[] {
  const result = [...arr];
  const n = result.length;
  
  // Build a max heap
  buildMaxHeap(result);
  
  // Extract elements from the heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Move current root (maximum) to the end
    [result[0], result[i]] = [result[i], result[0]];
    
    // Call heapify on the reduced heap
    heapify(result, i, 0);
  }
  
  return result;
}

/**
 * Builds a max heap from the array
 * @param arr - The array to build the heap from
 */
function buildMaxHeap<T>(arr: T[]): void {
  const n = arr.length;
  
  // Start from the last non-leaf node and heapify each node
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
}

/**
 * Heapifies a subtree with root at given index
 * @param arr - The array being heapified
 * @param n - Size of the heap
 * @param i - Index of the root of the subtree
 */
function heapify<T>(arr: T[], n: number, i: number): void {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  
  // Check if left child is larger than root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }
  
  // Check if right child is larger than root or left child
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }
  
  // If largest is not the root
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    
    // Recursively heapify the affected subtree
    heapify(arr, n, largest);
  }
}

/**
 * Radix Sort - O(nk) time complexity where k is the number of digits
 * Non-comparative integer sorting algorithm that sorts data with integer keys
 * by grouping keys by individual digits.
 * Note: This implementation works for non-negative integers only.
 * @param arr - The array of non-negative integers to be sorted
 * @returns The sorted array
 */
export function radixSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return [...arr];
  }
  
  const result = [...arr];
  
  // Find the maximum number to know the number of digits
  const max = Math.max(...result);
  
  // Do counting sort for every digit
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSortByDigit(result, exp);
  }
  
  return result;
}

/**
 * Helper function for radix sort
 * Performs counting sort based on the digit at the given position
 * @param arr - The array being sorted
 * @param exp - The current digit position (1, 10, 100, etc.)
 */
function countingSortByDigit(arr: number[], exp: number): void {
  const n = arr.length;
  const output = new Array(n).fill(0);
  const count = new Array(10).fill(0);
  
  // Count occurrences of each digit
  for (let i = 0; i < n; i++) {
    const digit = Math.floor(arr[i] / exp) % 10;
    count[digit]++;
  }
  
  // Change count[i] so that it contains the position of this digit in output
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }
  
  // Build the output array
  for (let i = n - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }
  
  // Copy the output array to arr
  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}
