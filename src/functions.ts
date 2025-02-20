export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  export function binarySearch(
    arr: number[],
    target: number,
    start?: number,
    end?: number
  ): number {
    start = start ?? 0;
    end = end ?? arr.length - 1;
  
    if (start > end) return -1;
  
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) return binarySearch(arr, target, mid + 1, end);
  
    return binarySearch(arr, target, start, mid - 1);
  }