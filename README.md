# JavaScript/TypeScript Utility Functions

This repository contains a collection of utility functions implemented in TypeScript.

## Installation

```bash
npm install
```

## Usage

```typescript
import { fibonacci, binarySearch } from './src/functions';

// Use the functions
const fibResult = fibonacci(10);
const searchResult = binarySearch([1, 2, 3, 4, 5], 3);
```

## Available Functions

### Fibonacci Function

Returns the nth number in the Fibonacci sequence.

**Parameters:**
- `n` (number): The position in the Fibonacci sequence (must be non-negative)

**Returns:**
- The Fibonacci number at position n

**Examples:**

```typescript
fibonacci(0); // Returns 0
fibonacci(1); // Returns 1
fibonacci(2); // Returns 1
fibonacci(10); // Returns 55
```

**Error handling:**
- Throws an error if n is negative

### Binary Search Function

Searches for a target value in a sorted array using the binary search algorithm.

**Parameters:**
- `array` (number[]): A sorted array of numbers
- `target` (number): The value to search for

**Returns:**
- The index of the target if found, or -1 if not present in the array

**Examples:**

```typescript
binarySearch([1, 3, 5, 7, 9], 5); // Returns 2
binarySearch([1, 3, 5, 7, 9], 6); // Returns -1
binarySearch([], 5); // Returns -1
```

**Time Complexity:**
- O(log n) where n is the length of the array

## Testing

Run the tests with:

```bash
npm test
```
