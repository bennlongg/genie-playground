export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  export function binarySearch(
    arr: number[],
    target: number,
    start: number = 0
  ): number {
    // If the array is empty, the target is not found
    if (arr.length === 0) return -1;
  
    // Check that the array is sorted
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        throw new Error("Array must be sorted");
      }
    }
  
    // Get index of middle element
    const mid = Math.floor(arr.length / 2);
  
    // If the middle element is the target, return its index
    if (arr[mid] === target) {
      return mid + start;
    }
  
    // If the middle element is greater than the target, call binarySearch on the left half
    if (arr[mid] > target) {
      return binarySearch(arr.slice(0, mid), target, start);
    }
  
    // If the middle element is less than the target, call binarySearch on the right half
    return binarySearch(arr.slice(mid + 1), target, start + mid + 1);
  }