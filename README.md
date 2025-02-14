<!-- Stan was here and thought it would be funny to say: " It is an AIIIIIIII " -->
# genie-playground## Available Functions

### `fibonacci(n: number): number`

Computes the nth Fibonacci number recursively.
- `n`: A non-negative integer representing the position in the Fibonacci sequence.

```typescript
import { fibonacci } from './functions';
console.log(fibonacci(10)); // 55
```

### `binarySearch(arr: number[], target: number): number`

Performs a binary search on a sorted array to find the target number's index.
- `arr`: A sorted array of numbers.
- `target`: The number to find.

```typescript
import { binarySearch } from './functions';
const index = binarySearch([1, 3, 5, 7, 9], 5);
console.log(index); // 2
```