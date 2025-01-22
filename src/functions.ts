export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

export function binarySearch(
  arr: number[],
  target: number,
  compareFn?: (a: number, b: number) => number
): number {
  const defaultCompareFn = (a: number, b: number) => {
    return a < b ? -1 : a > b ? 1 : 0;
  };

  const compare = compareFn || defaultCompareFn;

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const comparison = compare(arr[mid], target);

    if (comparison === 0) {
      return mid;
    } else if (comparison < 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Target not found
}

export const curriedMath =
(operator: "+" | "-" | "*" | "/") =>
(a: number, b: number): number => {
switch (operator) {
case "+":
return a + b;
case "-":
return a - b;
case "*":
return a * b;
case "/":
if (b === 0) throw new Error("Division by zero is not allowed");
return a / b;
default:
throw new Error("Invalid operator");
}
};
