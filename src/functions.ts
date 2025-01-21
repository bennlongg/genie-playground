export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

export function factorial(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
  
    let result = 1;
  
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
  
    return result;
}

export function factorial2(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
  
    if (n === 0) {
      return 1;
    }
  
    return n * factorial2(n - 1);
}

export const curriedMath = (operation: string) => {
  return (a: number, b: number): number => {
    switch (operation) {
      case "add":
        return a + b;
      case "subtract":
        return a - b;
      case "multiply":
        return a * b;
      case "divide":
        if (b === 0) throw new Error("Division by zero is not allowed");
        return a / b;
      default:
        throw new Error("Invalid operation");
    }
  };
};
