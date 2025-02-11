export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

export function bubbleSort(nums: number[]): number[] {
  const arr = [...nums]; // Create a copy to avoid modifying the original input
  let i = 0, j = 0;
  function swap(a: number, b: number) {
    const t = arr[a];
    arr[a] = arr[b];
    arr[b] = t;
  }
  while (i < arr.length) {
    j = 0;
    while (j < arr.length - 1) {
      if (arr[j + 1] < arr[j]) swap(j, j + 1);
      j++;
    }
    i++;
  }
  return arr;
}
