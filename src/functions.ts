export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

  export function binarySearch(sortedArray: number[], targetValue: number): number {
    let left = 0;  // Left pointer starts at the beginning of the array
    let right = sortedArray.length - 1;  // Right pointer starts at the end of the array

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);  // Calculate the middle index
      const midValue = sortedArray[mid];  // Value at the middle index

      if (midValue === targetValue) {  // If midValue matches targetValue
        return mid;  // We've found the target, return its index
      } else if (midValue < targetValue) {  // If midValue is less than targetValue 
        left = mid + 1;  // Move the left pointer to narrow down search range
      } else {  // If midValue is greater than targetValue
        right = mid - 1;  // Move the right pointer to narrow down search range
      }
    }

    return -1;  // If we exit the loop, targetValue is not in array
  }
