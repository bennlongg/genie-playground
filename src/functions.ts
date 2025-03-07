export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

export function bubbleSort(arr: number[]): number[] {
  // Create a copy of the array to avoid modifying the original
  const sortedArray = [...arr];
  let swapped: boolean;
  
  do {
    swapped = false;
    for (let i = 0; i < sortedArray.length - 1; i++) {
      if (sortedArray[i] > sortedArray[i + 1]) {
        // Swap elements
        const temp = sortedArray[i];
        sortedArray[i] = sortedArray[i + 1];
        sortedArray[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  
  return sortedArray;
}
