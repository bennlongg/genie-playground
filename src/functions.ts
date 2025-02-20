export function test(): string {
  return "This is a test function";
}

export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

export function bubbleSort(arr: number[]): number[] {
  const copiedArray = arr.slice(); // Copy the array to avoid mutating the original
  for (let i = 0; i < copiedArray.length; i++) {
    for (let j = 0; j < copiedArray.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = copiedArray[j];
        copiedArray[j] = copiedArray[j + 1];
        copiedArray[j + 1] = temp;
      }
    }
  }
  return copiedArray;
}

export function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;

    arr[mid] < target ? (left = mid + 1) : (right = mid - 1);
  }
  return -1;
}

export function curriedMath(
  operation: "add" | "subtract" | "multiply" | "divide"
) {
  if (operation === "add") return (x: number, y: number) => x + y;
  if (operation === "subtract") return (x: number, y: number) => x - y;
  if (operation === "multiply") return (x: number, y: number) => x * y;
  if (operation === "divide") return (x: number, y: number) => x / y;
  throw new Error(`Unsupported operation: ${operation}`);
}

export function isEven(n: number): boolean {
  return n % 2 === 0;
}

export function isOdd(n: number): boolean {
  return n % 2 !== 0;
}