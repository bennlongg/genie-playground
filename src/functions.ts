export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

export function binarySearch<T>(arr: T[], target: T): number {
  return binarySearchRecursive(arr, target, 0, arr.length - 1);
}

function binarySearchRecursive<T>(arr: T[], target: T, start: number, end: number): number {
  if (start > end) return -1;
  
  const mid = Math.floor((start + end) / 2);
  
  if (arr[mid] === target) return mid;
  if (arr[mid] > target) return binarySearchRecursive(arr, target, start, mid - 1);
  return binarySearchRecursive(arr, target, mid + 1, end);
}

export function bubbleSort<T>(arr: T[]): T[] {
  // Create a copy of the array to avoid modifying the original
  const result = [...arr];
  const length = result.length;
  
  // Edge case: empty array or single element
  if (length <= 1) return result;
  
  // Bubble sort implementation
  for (let i = 0; i < length; i++) {
    // Flag to optimize when array is already sorted
    let swapped = false;
    
    // Last i elements are already in place
    for (let j = 0; j < length - i - 1; j++) {
      // Compare adjacent elements and swap if needed
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
        swapped = true;
      }
    }
    
    // If no swapping occurred in this pass, array is sorted
    if (!swapped) break;
  }
  
  return result;
}
