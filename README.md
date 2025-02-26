# TypeScript Algorithm Collection

## Overview

This repository is a TypeScript project focused on implementing and testing various algorithms and mathematical functions using modern coding patterns. It includes implementations of classic algorithms like binary search and bubble sort, as well as other utilities such as Fibonacci sequence calculation and curried mathematical operations.

The project demonstrates several programming paradigms and techniques:
- Recursive algorithms
- Functional programming concepts (e.g., currying)
- TypeScript's static typing
- Test-driven development using Vitest

## Repository Structure

```
.
├── README.md        # This documentation file
└── src/             # Source code directory
    ├── functions.ts        # Core algorithm implementations
    ├── functions.test.ts   # Unit tests for algorithms
    └── index.ts            # Usage examples
```

### Key Files

- **src/functions.ts**: Contains the implementation of all algorithms and utility functions:
  - `fibonacci`: Calculates the nth Fibonacci number
  - `binarySearch`: Performs binary search on a sorted array
  - `bubbleSort`: Sorts an array using the bubble sort algorithm
  - `curriedMath`: A curried function for arithmetic operations

- **src/functions.test.ts**: Contains comprehensive test cases for all implemented functions using Vitest.

- **src/index.ts**: Provides practical examples demonstrating how to use each function, particularly showcasing the versatility of the curried math function.

## Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd typescript-algorithm-collection
npm install
```

## Running Examples

To run the examples in `src/index.ts`:

```bash
npm start
```

## Testing

This project uses Vitest for unit testing. To run the tests:

```bash
npm test
```

The test suite verifies:
- Fibonacci number calculation
- Binary search functionality with various inputs
- Bubble sort correctness
- Curried math operations

## Contributing

Contributions are welcome! If you'd like to add more algorithms or improve existing ones:

1. Fork the repository
2. Create a feature branch
3. Add your code with appropriate tests
4. Submit a pull request

Please ensure your code is well-documented with JSDoc comments and includes comprehensive test cases.

## License

[MIT License](LICENSE)
