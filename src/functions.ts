export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  export function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) return mid;
      target < arr[mid] ? right = mid - 1 : left = mid + 1;
    }
    return -1;
  }
  
  export function bubbleSort(arr: number[]): number[] {
    let swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Swap elements
        swapped = true;
      }
    }
    return swapped ? bubbleSort(arr) : arr; // Recursively sort if swapped
  }
  