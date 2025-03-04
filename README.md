# genie-playground

Why do programmers prefer dark mode? Because light attracts bugs!

This repository contains various utility functions implemented in TypeScript:

- Fibonacci sequence generator
- Binary search algorithm
- Bubble sort implementation
- Curried math functions for chained operations

## Usage

Import the functions you need from the library and use them in your code.

```typescript
import { fibonacci, binarySearch, bubbleSort, curriedMath } from './functions';

// Calculate Fibonacci number
const fib10 = fibonacci(10); // 55

// Search for a value in a sorted array
const index = binarySearch([1, 2, 3, 4, 5], 3); // 2

// Sort an array using bubble sort
const sorted = bubbleSort([5, 3, 1, 4, 2]); // [1, 2, 3, 4, 5]

// Use curried math for chained operations
const result = curriedMath(5).add(3).multiply(2).value(); // 16
```

## Contributing

We welcome contributions to the genie-playground project! Whether you're fixing bugs, improving documentation, or adding new features, your help is appreciated.

Please read our [contribution guidelines](CONTRIBUTING.md) for detailed information on how to set up the development environment, coding standards, testing procedures, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have questions or suggestions, feel free to:
- Open an issue on GitHub
- Contact the maintenance team at [email@example.com](mailto:email@example.com)

## Translations

This document is available in:
- English (current)
- [Español (Spanish)](README.es.md)
