# Utility Functions Library

A JavaScript/TypeScript library providing common utility functions including Fibonacci sequence calculator, binary search, bubble sort, and more.

## Installation

```bash
npm install
```

## Usage

```typescript
import { fibonacci, binarySearch, bubbleSort, wow } from './src/functions';

// Calculate Fibonacci number
const fib10 = fibonacci(10);  // Returns 55

// Perform binary search
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const index = binarySearch(arr, 7);  // Returns 6

// Sort an array
const unsortedArray = [5, 3, 8, 4, 2];
const sortedArray = bubbleSort(unsortedArray);  // Returns [2, 3, 4, 5, 8]

// Use the wow function
wow();  // Logs 'wow' to the console
```

## Available Functions

- **fibonacci(n)**: Returns the nth number in the Fibonacci sequence
- **binarySearch(arr, target)**: Performs binary search on a sorted array and returns the index of the target, or -1 if not found
- **bubbleSort(arr)**: Sorts an array using the bubble sort algorithm and returns a new sorted array
- **wow()**: A simple utility function that logs 'wow' to the console

## Testing

Tests for all functions are available in the `src/functions.test.ts` file. Run the tests using:

```bash
npm test
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Joke

Why do programmers prefer dark mode?

Because light attracts bugs!
