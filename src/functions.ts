export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  export function binarySearch(sortedArray: number[], target: number): number {
    let left = 0;
    let right = sortedArray.length - 1;
    
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (sortedArray[mid] === target) {
        return mid;
      } else if (sortedArray[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1; // Target not found in the array
  }
  
  export function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    const sortedArr = [...arr]; // Create a copy of the input array to sort
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (sortedArr[j] > sortedArr[j + 1]) {
          // Swap adjacent elements if they are in the wrong order
          [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
        }
      }
    }
  
    return sortedArr;
  }
  
  export function curriedMath(operator: "+" | "-" | "*" | "/") {
    return (a: number, b: number): number => {
      switch (operator) {
        case "+":
          return a + b;
        case "-":
          return a - b;
        case "*":
          return a * b;
        case "/":
          return a / b;
        default:
          throw new Error("Unsupported operator");
      }
    };
  }
  
  export function isOdd(num: number): boolean {
    return num % 2 !== 0;
  }
  
  export function isEven(num: number): boolean {
    return num % 2 === 0;
  }
  
  export function getCurrentYear(): number {
    return new Date().getFullYear();
  }
  
  export function isYearOfTheTiger(year: number): boolean {
    if (!Number.isInteger(year)) {
      throw new Error('Invalid input, year must be an integer');
    }
    return year % 12 === 6;
  }
  
  export function isYearOfThePig(year: number): boolean {
    if (!Number.isInteger(year)) {
      throw new Error('Invalid input, year must be an integer');
    }
    return year % 12 === 11
  }
  
  export function isYearOfTheDragon(year: number): boolean {
    if (!Number.isInteger(year)) {
      throw new Error('Invalid input, year must be an integer');
    }
    return year % 12 === 8;
  }

  export function isYearOfTheDog(year: number): boolean {
    if (!Number.isInteger(year)) {
      throw new Error('Invalid input, year must be an integer');
    }
    return year % 12 === 10;
  }