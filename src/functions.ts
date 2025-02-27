export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

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

// Helper function to merge two sorted arrays
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
