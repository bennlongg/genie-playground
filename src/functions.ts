export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  /**
   * Perform a binary search on a sorted array to find the target value.
   * @param sortedArr - A sorted array of numbers.
   * @param target - The value to search for.
   * @returns The index of the target value if found, else -1.
   */
  export function binarySearch(sortedArr: number[], target: number): number {
    let left = 0;
    let right = sortedArr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (sortedArr[mid] === target) {
        return mid;
      } else if (sortedArr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1;
  }
  
  /**
   * Perform a bubble sort on an array of numbers to sort it in ascending order.
   * @param arr - An array of numbers to be sorted.
   * @returns A new array sorted in ascending order.
   */
  export function bubbleSort(arr: number[]): number[] {
    const sortedArr = [...arr];
    let swapped = true;
  
    while (swapped) {
      swapped = false;
      for (let i = 0; i < sortedArr.length - 1; i++) {
        if (sortedArr[i] > sortedArr[i + 1]) {
          [sortedArr[i], sortedArr[i + 1]] = [sortedArr[i + 1], sortedArr[i]];
          swapped = true;
        }
      }
    }
  
    return sortedArr;
  }
  