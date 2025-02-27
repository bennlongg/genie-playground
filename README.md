# JavaScript Utility Functions

A collection of useful utility functions implemented in TypeScript.

## Installation

```bash
npm install js-utility-functions
```

## Usage

```typescript
import { fibonacci, binarySearch } from 'js-utility-functions';

// Calculate the 10th Fibonacci number
const fib10 = fibonacci(10); // Returns 55

// Search for a value in a sorted array
const index = binarySearch([1, 2, 3, 4, 5], 3); // Returns 2
```

## Available Functions

### fibonacci(n)

Calculates the nth Fibonacci number.

- **Parameters**: 
  - `n` (number): The position in the Fibonacci sequence (must be non-negative)
- **Returns**: 
  - The nth Fibonacci number
- **Throws**: 
  - Error if n is negative

### binarySearch(arr, target)

Searches for a target value in a sorted array using the binary search algorithm.

- **Parameters**:
  - `arr` (number[]): A sorted array of numbers
  - `target` (number): The value to search for
- **Returns**:
  - The index of the target if found, or -1 if not found
- **Time Complexity**:
  - O(log n) where n is the length of the array

## Development

### Running Tests

```bash
npm test
```

## License

MIT
