export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  export function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swap elements
        }
      }
    }
    return arr;
  }

  export function binarySearch(arr: number[], num: number, low: number = 0, high: number = arr.length - 1): number {
    if (low > high) return -1;  // check if interval is valid

    const mid: number = Math.floor((low + high) / 2);  // calculate middle index
    if (arr[mid] === num) return mid;  // check if element at middle index is the target number

    // if not, update search range and call function recursively
    return arr[mid] > num ? binarySearch(arr, num, low, mid-1) : binarySearch(arr, num, mid+1, high);
  }