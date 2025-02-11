export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

  export function binarySearch(arr: number[], target: number): number {
    if (!arr.every((value, index, array) => index === 0 || array[index - 1] <= value)) {
      throw new Error("Array must be sorted in ascending order");
    }
  
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
  
    while (leftIndex <= rightIndex) {
      const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
      if (arr[middleIndex] === target) {
        return middleIndex;
      } else if (target < arr[middleIndex]) {
        rightIndex = middleIndex - 1;
      } else {
        leftIndex = middleIndex + 1;
      }
    }
  
    return -1; // Target not found in the array
  }
  
  export const wow = () => {
    return "WOWZERS"
  }