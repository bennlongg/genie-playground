# Genie Playground

A comprehensive collection of utility functions for learning and experimentation. This library provides common algorithmic implementations and utility functions that can be used in various JavaScript and TypeScript projects.

## Features

- **Mathematical Functions**: Including Fibonacci sequence generator
- **Sorting Algorithms**: Implementation of classic sorting methods like Bubble Sort
- **Immutable Operations**: All functions return new data without modifying original inputs
- **TypeScript Support**: Fully typed API for enhanced developer experience
- **Comprehensive Error Handling**: Robust validation for all function inputs

## Installation

### Using npm

```bash
npm install genie-playground
```

### Using yarn

```bash
yarn add genie-playground
```

### Development Setup

To set up the project for development:

```bash
# Clone the repository
git clone https://github.com/yourusername/genie-playground.git
cd genie-playground

# Install dependencies
npm install

# Build the project
npm run build
```

## Usage

### Fibonacci Sequence

Calculate the nth number in the Fibonacci sequence:

```typescript
import { fibonacci } from 'genie-playground';

// Get the 10th Fibonacci number
const result = fibonacci(10);
console.log(result); // Output: 55

// Will throw an error for negative inputs
try {
  fibonacci(-1);
} catch (error) {
  console.error(error.message); // Output: "Negative numbers are not allowed"
}
```

### Bubble Sort

Sort an array of numbers in ascending order:

```typescript
import { bubbleSort } from 'genie-playground';

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(unsortedArray);

console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]

// Original array remains unchanged
console.log(unsortedArray); // Output: [64, 34, 25, 12, 22, 11, 90]
```

## Testing

This project uses Jest for testing. To run the tests:

```bash
# Run all tests
npm test

# Run tests with coverage report
npm run test:coverage

# Run tests in watch mode during development
npm run test:watch
```

## API Documentation

### fibonacci(n: number): number

Returns the nth number in the Fibonacci sequence.

- **Parameters**: `n` - A non-negative integer
- **Returns**: The nth Fibonacci number
- **Throws**: Error if `n` is negative

### bubbleSort(arr: number[]): number[]

Sorts an array of numbers using the bubble sort algorithm.

- **Parameters**: `arr` - An array of numbers to sort
- **Returns**: A new sorted array
- **Note**: Does not modify the original array

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Thanks to all contributors who have helped improve this library
- Inspired by classic algorithm implementations and modern JavaScript practices
