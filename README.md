# Genie Playground

A TypeScript utility library providing various algorithmic functions including Fibonacci sequence generation, binary search, and sorting algorithms.

## Installation

```bash
# Install dependencies
npm install

# Build the project
npm run build
```

## Usage

Import the functions you need from the library:

```typescript
import { fibonacci, binarySearch, bubbleSort, mergeSort } from './src/functions';
```

### Examples

#### Fibonacci

Calculate the nth number in the Fibonacci sequence:

```typescript
const result = fibonacci(10); // Returns 55
// Note: The function throws an error for negative inputs
```

#### Binary Search

Search for a value in a sorted array:

```typescript
const sortedArray = [1, 2, 3, 5, 8, 13, 21];
const found = binarySearch(sortedArray, 8); // Returns true
const notFound = binarySearch(sortedArray, 4); // Returns false
```

#### Bubble Sort

Sort an array using the bubble sort algorithm:

```typescript
const unsortedArray = [5, 3, 8, 1, 2];
const sortedArray = bubbleSort(unsortedArray); // Returns [1, 2, 3, 5, 8]
// Original array remains unchanged
```

#### Merge Sort

Sort an array using the merge sort algorithm:

```typescript
const unsortedArray = [5, 3, 8, 1, 2];
const sortedArray = mergeSort(unsortedArray); // Returns [1, 2, 3, 5, 8]
// Original array remains unchanged
```

## Available Functions

| Function | Description | Time Complexity |
|----------|-------------|----------------|
| `fibonacci(n)` | Calculates the nth Fibonacci number | O(2^n) |
| `binarySearch(arr, target)` | Searches for a target value in a sorted array | O(log n) |
| `bubbleSort(arr)` | Sorts an array using bubble sort algorithm | O(n²) |
| `mergeSort(arr)` | Sorts an array using merge sort algorithm | O(n log n) |

## Development

```bash
# Run tests
npm test

# Build the project
npm run build
```

## License

This project is open source and available under the [MIT License](LICENSE).
