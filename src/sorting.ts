/**
 * A collection of sorting algorithms
 */

/**
 * Sorts an array using the bubble sort algorithm.
 * Time Complexity: O(n²) in worst and average case
 * Space Complexity: O(1)
 * @param arr The array to sort
 * @returns A new sorted array
 */
export function bubbleSort(arr: number[]): number[] {
  const result = [...arr];
  const n = result.length;
  
  for (let i = 0; i < n; i++) {
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
 * Sorts an array using the merge sort algorithm.
 * Time Complexity: O(n log n) in all cases
 * Space Complexity: O(n)
 * @param arr The array to sort
 * @returns A new sorted array
 */
export function mergeSort(arr: number[]): number[] {
  const result = [...arr];
  
  if (result.length <= 1) {
    return result;
  }
  
  const mid = Math.floor(result.length / 2);
  const left = mergeSort(result.slice(0, mid));
  const right = mergeSort(result.slice(mid));
  
  return merge(left, right);
}

/**
 * Merges two sorted arrays into one sorted array.
 * @param left First sorted array
 * @param right Second sorted array
 * @returns A new merged sorted array
 */
function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

/**
 * Sorts an array using the quick sort algorithm.
 * Time Complexity: O(n log n) average case, O(n²) worst case
 * Space Complexity: O(log n)
 * @param arr The array to sort
 * @returns A new sorted array
 */
export function quickSort(arr: number[]): number[] {
  const result = [...arr];
  
  if (result.length <= 1) {
    return result;
  }
  
  return quickSortHelper(result, 0, result.length - 1);
}

/**
 * Helper function for quickSort to sort a portion of an array.
 * @param arr The array to sort
 * @param low Starting index
 * @param high Ending index
 * @returns The sorted array
 */
function quickSortHelper(arr: number[], low: number, high: number): number[] {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quickSortHelper(arr, low, pivotIndex - 1);
    quickSortHelper(arr, pivotIndex + 1, high);
  }
  return arr;
}

/**
 * Partitions the array around a pivot element.
 * @param arr The array to partition
 * @param low Starting index
 * @param high Ending index
 * @returns The pivot index
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
 * Sorts an array using the selection sort algorithm.
 * Time Complexity: O(n²) in all cases
 * Space Complexity: O(1)
 * @param arr The array to sort
 * @returns A new sorted array
 */
export function selectionSort(arr: number[]): number[] {
  const result = [...arr];
  const n = result.length;
  
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    
    for (let j = i + 1; j < n; j++) {
      if (result[j] < result[minIndex]) {
        minIndex = j;
      }
    }
    
    if (minIndex !== i) {
      [result[i], result[minIndex]] = [result[minIndex], result[i]];
    }
  }
  
  return result;
}

/**
 * Sorts an array using the insertion sort algorithm.
 * Time Complexity: O(n²) average and worst case, O(n) best case
 * Space Complexity: O(1)
 * @param arr The array to sort
 * @returns A new sorted array
 */
export function insertionSort(arr: number[]): number[] {
  const result = [...arr];
  const n = result.length;
  
  for (let i = 1; i < n; i++) {
    const key = result[i];
    let j = i - 1;
    
    while (j >= 0 && result[j] > key) {
      result[j + 1] = result[j];
      j--;
    }
    
    result[j + 1] = key;
  }
  
  return result;
}

/**
 * Sorts an array using the shell sort algorithm.
 * Time Complexity: O(n log² n) average case
 * Space Complexity: O(1)
 * @param arr The array to sort
 * @returns A new sorted array
 */
export function shellSort(arr: number[]): number[] {
  const result = [...arr];
  const n = result.length;
  
  // Start with a large gap, then reduce the gap
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // Do a gapped insertion sort
    for (let i = gap; i < n; i++) {
      const temp = result[i];
      let j;
      
      // Shift earlier gap-sorted elements up until the correct location for result[i] is found
      for (j = i; j >= gap && result[j - gap] > temp; j -= gap) {
        result[j] = result[j - gap];
      }
      
      // Put temp (the original result[i]) in its correct location
      result[j] = temp;
    }
  }
  
  return result;
}

/**
 * Sorts an array using the heap sort algorithm.
 * Time Complexity: O(n log n) in all cases
 * Space Complexity: O(1)
 * @param arr The array to sort
 * @returns A new sorted array
 */
export function heapSort(arr: number[]): number[] {
  const result = [...arr];
  const n = result.length;
  
  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(result, n, i);
  }
  
  // Extract elements from heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    [result[0], result[i]] = [result[i], result[0]];
    
    // Call max heapify on the reduced heap
    heapify(result, i, 0);
  }
  
  return result;
}

/**
 * Heapifies a subtree rooted with node i which is an index in arr[].
 * @param arr The array to heapify
 * @param n Size of heap
 * @param i Index of the root node
 */
function heapify(arr: number[], n: number, i: number): void {
  let largest = i; // Initialize largest as root
  const left = 2 * i + 1; // left = 2*i + 1
  const right = 2 * i + 2; // right = 2*i + 2
  
  // If left child is larger than root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }
  
  // If right child is larger than largest so far
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }
  
  // If largest is not root
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    
    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}
