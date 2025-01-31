export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

export const bubbleSort = (array: number[]): number[] => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
};

export const binarySearch = (
  arr: number[],
  x: number,
  comparator = (a: number, b: number) => a - b
): number => {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (comparator(arr[mid], x) === 0) return mid;
    else if (comparator(arr[mid], x) < 0) start = mid + 1;
    else end = mid - 1;
  }

  return -1;
};
