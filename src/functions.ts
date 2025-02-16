export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

  /**
 * The bubbles sort is the straightforward sorting algorithm that works by compare each pair of adjacent elements and sapping them if they are in the wrong order
 * @param array - Unordered array
 * @returns Copy of sorted array
 */
export function bubbleSort(array: number[]): number[] {
  if (!Array.isArray(array)) throw new Error('Passed argument is not a array');

  // Create copy to maintain immutability of the passed array
  const sortedArray = [...array];

  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = 0; j < sortedArray.length - i - 1; j++) {
      if (sortedArray[j+1] < sortedArray[j]) {
        [sortedArray[j+1], sortedArray[j]] = [sortedArray[j], sortedArray[j+1]];
      }
    }
  }

  return sortedArray;
}