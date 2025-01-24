export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

export function bubbleSort(arr: number[]): number[] {
  let n = arr.length;
  let swapped: boolean;
  
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Swap elements
        swapped = true;
      }
    }
    n--; // Reduce the range of comparison
  } while (swapped);
  
  return arr;
}
