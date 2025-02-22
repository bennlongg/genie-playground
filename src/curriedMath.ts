/**
 * A curried math function that performs basic operations: addition, subtraction, multiplication, and division.
 * @param operation - The mathematical operation to perform ("add", "subtract", "multiply", "divide").
 * @returns A curried function that takes two numbers and returns the result of the specified operation.
 * @throws {Error} If an unsupported operation is provided.
 * @example
 * const add = curriedMath("add");
 * const result = add(2, 3); // Output: 5
 */
export function curriedMath(
    operation: "add" | "subtract" | "multiply" | "divide"
  ): (a: number, b: number) => number | undefined {
    switch (operation) {
      case "add":
        return (a: number, b: number) => a + b;
      case "subtract":
        return (a: number, b: number) => a - b;
      case "multiply":
        return (a: number, b: number) => a * b;
      case "divide":
        return (a: number, b: number) => {
          if (b === 0) {
            console.error("Division by zero is not allowed.");
            return undefined; // Handle division by zero gracefully
          }
          return a / b;
        };
      default:
        throw new Error("Unsupported operation");
    }
  }
  