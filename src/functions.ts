export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

export function binarySearch(arr: number[], target: number): number {
  // Check if array is sorted
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      throw new Error("Array must be sorted in ascending order for binary search");
    }
  }

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

  return -1;
}

export function bubbleSort(arr: number[]): number[] {
  // Validate input is an array
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  // Validate all elements are numbers
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
      throw new Error("All elements must be numbers");
    }
  }

  // Create a copy to avoid mutating the original array
  const result = [...arr];
  
  let swapped: boolean;
  do {
    swapped = false;
    for (let i = 0; i < result.length - 1; i++) {
      if (result[i] > result[i + 1]) {
        // Swap elements
        const temp = result[i];
        result[i] = result[i + 1];
        result[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return result;
}

type MathChain = {
  add: (value: number) => MathChain;
  subtract: (value: number) => MathChain;
  multiply: (value: number) => MathChain;
  divide: (value: number) => MathChain;
  value: () => number;
};

export function curriedMath(initial: number): MathChain {
  // Validate that initial is a number
  if (typeof initial !== 'number' || isNaN(initial)) {
    throw new Error("Initial value must be a number");
  }

  let result = initial;

  return {
    add: (value: number): MathChain => {
      if (typeof value !== 'number' || isNaN(value)) {
        throw new Error("Value must be a number");
      }
      result += value;
      return curriedMath(result);
    },
    subtract: (value: number): MathChain => {
      if (typeof value !== 'number' || isNaN(value)) {
        throw new Error("Value must be a number");
      }
      result -= value;
      return curriedMath(result);
    },
    multiply: (value: number): MathChain => {
      if (typeof value !== 'number' || isNaN(value)) {
        throw new Error("Value must be a number");
      }
      result *= value;
      return curriedMath(result);
    },
    divide: (value: number): MathChain => {
      if (typeof value !== 'number' || isNaN(value)) {
        throw new Error("Value must be a number");
      }
      if (value === 0) {
        throw new Error("Cannot divide by zero");
      }
      result /= value;
      return curriedMath(result);
    },
    value: (): number => {
      return result;
    }
  };
}
