export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

export function bubbleSort(array: number[]): number[] {
    if (array.length < 2) return array;
    const sortedArray = [...array];
    for (let i = 0; i < sortedArray.length; i++) {
      for (let j = 0; j < sortedArray.length - 1 - i; j++) {
        if (sortedArray[j] > sortedArray[j + 1]) {
          const temp = sortedArray[j];
          sortedArray[j] = sortedArray[j + 1];
          sortedArray[j + 1] = temp;
        }
      }
    }
    return sortedArray;
  }
