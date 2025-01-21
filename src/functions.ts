export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

export const curriedMath = (initialNumber: number) => {
  return (operator: string, secondNumber: number) => {
    switch (operator) {
      case "+":
        return initialNumber + secondNumber;
      case "-":
        return initialNumber - secondNumber;
      case "*":
        return initialNumber * secondNumber;
      case "/":
        if (secondNumber === 0) {
          throw new Error("Division by zero is not allowed");
        }
        return initialNumber / secondNumber;
      default:
        throw new Error("Invalid operator");
    }
  };
};
