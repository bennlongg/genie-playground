export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  export function binarySearch(
    arr: number[],
    target: number,
    compareFn: (a: number, b: number) => number = (a, b) => a - b
  ): number {
    if (arr.some((v, i, a) => i > 0 && compareFn(a[i - 1], v) > 0)) {
      throw new Error("Input array must be sorted in ascending order");
    }
  
    let low = 0;
    let high = arr.length - 1;
  
    while (low <= high) {
      const mid = low + Math.floor((high - low) / 2);
      const compareResult = compareFn(arr[mid], target);
  
      if (compareResult === 0) {
        return mid;
      } else if (compareResult < 0) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return -1;
  }
  