export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

export function binarySearch(arr: number[], target: number): number {
    if (!arr || arr.length == 0) {
      return -1;
    }
    let low = 0;
    let high = arr.length - 1;
    while (high >= low) {
      let mid = Math.floor((high + low) / 2);
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return -1;
  }