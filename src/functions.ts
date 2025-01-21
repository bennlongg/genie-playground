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

