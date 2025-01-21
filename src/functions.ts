export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

export const curriedMath = (initialNumber: number) => {
  let result = initialNumber;

  return {
    add: (num: number) => {
      result += num;
      return this;
    },
    subtract: (num: number) => {
      result -= num;
      return this;
    },
    multiply: (num: number) => {
      result *= num;
      return this;
    },
    divide: (num: number) => {
      if (num === 0) throw new Error("Division by zero is not allowed");
      result /= num;
      return this;
    },
    getResult: () => result,
  };
};
