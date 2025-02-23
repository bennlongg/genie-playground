

export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

export function binarySearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === target) {
        return mid; // Target found at index mid
      } else if (arr[mid] < target) {
        low = mid + 1; // Target is in the right half
      } else {
        high = mid - 1; // Target is in the left half
      }
    }
    return -1; // Target not found
  }


export function bubbleSort(arr: number[]): number[] {
    // Copy the array to avoid modifying the original
    let sortedArr = arr.slice();
  
    // Edge case: check if the array is empty or too short to be sorted
    if (sortedArr.length <= 1) {
      return sortedArr;
    }
  
    let swapped;
    do {
      swapped = false;
      // Iterate through the array
      for (let i = 0; i < sortedArr.length - 1; i++) {
        // Compare adjacent elements and swap if needed
        if (sortedArr[i] > sortedArr[i + 1]) {
          [sortedArr[i], sortedArr[i + 1]] = [sortedArr[i + 1], sortedArr[i]];
          swapped = true;
        }
      }
    } while (swapped); // Continue until no swaps are needed
  
    return sortedArr;
  }



export function curriedMath(operation: (a: number, b: number) => number): (...args: number[]) => number {
    return function(...args: number[]): number {
        return args.reduce((acc, curr) => operation(acc, curr), 0);
    };
}

// Define specific curried math functions using the generic curriedMath function
export const curriedAdd = curriedMath((a, b) => add(a, b));
export const curriedSubtract = curriedMath((a, b) => subtract(a, b));
export const curriedMultiply = curriedMath((a, b) => multiply(a, b));
export const curriedDivide = curriedMath((a, b) => {
    if (b === 0) {
        throw new Error("Division by zero is not allowed!");
    }
    return divide(a, b);
});


export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}

export function multiply(a: number, b: number): number {
    return a * b;
}

export function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division by zero is not allowed!");
    }
    return a / b;
}  