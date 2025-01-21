export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

export const curriedMath = (a: number) => {
  return (...b: number[]) => {
    if (b.length === 0) {
      return a;
    }
    const sum = b.reduce((acc, curr) => acc + curr, 0);
    return curriedMath(a + sum);
  };
};
