export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

export function bubbleSort(arr: number[]): number[] {
  // Create a shallow copy of the input array to avoid modifying the original array
  const sortedArr = [...arr];
  let swapOccurred = true;

  // Continue looping until no swaps are made in a full pass through the array
  while (swapOccurred) {
    swapOccurred = false;

    // Iterate through each element in the array (except for the last one already sorted)
    for (let i = 1; i < sortedArr.length; i++) {
      // If current element is greater than next element, swap them
      if (sortedArr[i - 1] > sortedArr[i]) {
        const temp = sortedArr[i];
        sortedArr[i] = sortedArr[i - 1];
        sortedArr[i - 1] = temp;
        swapOccurred = true; // Indicate that a swap occurred
      }
    }
  }

  return sortedArr; // Return the sorted array
}
