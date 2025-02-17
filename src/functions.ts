export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

export function binarySearch(arr: number[], target: number): number {
  let low = 0;
  let high = arr.length - 1;
  if (arr.length === 0) {
    return -1; // Return -1 if the input array is empty
  }
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid; // Return the index of the target element if found
    } else if (arr[mid] < target) {
      low = mid + 1; // Adjust the low pointer to search the right half of the array
    } else {
      high = mid - 1; // Adjust the high pointer to search the left half of the array
    }
  }

  return -1; // Return -1 if the target element is not found in the array
}