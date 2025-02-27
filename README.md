# JavaScript Utility Functions

A collection of useful utility functions implemented in TypeScript.

## Installation

```bash
npm install js-utility-functions
```

## Usage

```typescript
import { fibonacci, binarySearch, bubbleSort } from 'js-utility-functions';

// Calculate the 10th Fibonacci number
const fib10 = fibonacci(10); // Returns 55

// Search for a value in a sorted array
const index = binarySearch([1, 2, 3, 4, 5], 3); // Returns 2

// Sort an array of numbers
const sorted = bubbleSort([5, 3, 1, 4, 2]); // Returns [1, 2, 3, 4, 5]
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

### bubbleSort(arr)

Sorts an array of numbers in ascending order using the bubble sort algorithm.

- **Parameters**:
  - `arr` (number[]): An array of numbers to sort
- **Returns**:
  - A new sorted array (does not modify the original array)
- **Time Complexity**:
  - Best case: O(n) when array is already sorted
  - Average/Worst case: O(n²) where n is the length of the array

## Development

### Running Tests

```bash
npm test
```

## License

MIT
