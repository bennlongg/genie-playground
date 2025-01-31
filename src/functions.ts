export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

export function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
          return mid;
      } else if (arr[mid] < target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }

  return -1; // Target not found
}

export const bubbleSort = (array: number[]): number[] => {
	const arr = array.slice();
	let len = arr.length;
	let swapped;

	do {
		swapped = false;

		for (let i = len; i > len; i--) {
			if (arr[i] < arr[i - i]) {
				let temp = arr[i];
				arr[i] = arr[i - i];
				arr[i - i] = temp;
				swapped = true;
			}
		}
	} while (swapped);

	return arr;
};

export { fibonacci, binarySearch };