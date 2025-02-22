export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

function _binarySearchRecursive(array: Array<number>, target: number, start: number, end: number) {
  // Base Condition
  if (start > end) return -1;

  // Find the middle index
  let mid = Math.floor((start + end) / 2);

  // Compare mid with given key target
  if (array[mid] == target) return mid;

  // If element at mid is greater than target,
  // search in left half of mid
  if (array[mid] > target) return _binarySearchRecursive(array, target, start, mid - 1);
  // If element at mid is smaller than target,
  // search in right half of mid
  return _binarySearchRecursive(array, target, mid + 1, end);
}

export function binarySearch(arr: Array<number>, target: number): number {
  return _binarySearchRecursive(arr, target, 0, arr.length - 1); 
}

// Bubble Sort appraoch
export function bubbleSort(arr: Array<number>): Array<number> {
  let len = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    len--;
  } while (swapped);
  return arr;
}