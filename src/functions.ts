export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

export function binarySearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === target) {
        return mid; // Target found at index mid
      } else if (arr[mid] < target) {
        low = mid + 1; // Target is in the right half
      } else {
        high = mid - 1; // Target is in the left half
      }
    }
    return -1; // Target not found
  }

  export function bubbleSort(arr: number[]): number[] {
    // Copy the array to avoid modifying the original
    let sortedArr = arr.slice();
  
    // Edge case: check if the array is empty or too short to be sorted
    if (sortedArr.length <= 1) {
      return sortedArr;
    }
  
    let swapped;
    do {
      swapped = false;
      // Iterate through the array
      for (let i = 0; i < sortedArr.length - 1; i++) {
        // Compare adjacent elements and swap if needed
        if (sortedArr[i] > sortedArr[i + 1]) {
          [sortedArr[i], sortedArr[i + 1]] = [sortedArr[i + 1], sortedArr[i]];
          swapped = true;
        }
      }
    } while (swapped); // Continue until no swaps are needed
  
    return sortedArr;
  }
  