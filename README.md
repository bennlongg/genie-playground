# genie-playground

## Fibonacci Function

The `fibonacci` function calculates the nth Fibonacci number using recursion. It throws an error if a negative number is provided.

### Usage

```typescript
import { fibonacci } from "./functions";

console.log(fibonacci(10)); // Output: 55
```

## Curried Math Function

The `curriedMathFunction` allows you to create curried versions of mathematical operations. Currying is a technique where a function with multiple arguments is transformed into a sequence of functions each taking a single argument.

### Usage

```typescript
import { curriedMathFunction } from "./functions";

const add = (a: number, b: number) => a + b;
const curriedAdd = curriedMathFunction(add);

console.log(curriedAdd(2)(3)); // Output: 5
console.log(curriedAdd(2, 3)); // Output: 5
```

You can use this approach with other operations like subtraction, multiplication, division, or even custom operations with more than two arguments.
