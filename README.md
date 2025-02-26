# genie-playground

A collection of utility functions and algorithms implemented in TypeScript.

## Description

This repository contains various utility functions including:
- Fibonacci sequence calculator
- Binary search implementation
- Multiple sorting algorithms (bubble sort, insertion sort, quick sort, merge sort, selection sort)
- Random sort selector

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/genie-playground.git
cd genie-playground
npm install
```

## Usage

Import the functions you need in your TypeScript code:

```typescript
import { fibonacci, binarySearch, bubbleSort, randomSort } from './src/functions';

// Calculate the 10th Fibonacci number
const fibResult = fibonacci(10); // Returns 55

// Search for a value in a sorted array
const index = binarySearch([1, 2, 3, 4, 5], 3); // Returns 2

// Sort an array using bubble sort
const sortedArray = bubbleSort([5, 3, 8, 1, 2]); // Returns [1, 2, 3, 5, 8]

// Sort an array using a randomly selected algorithm
const randomlySorted = randomSort([5, 3, 8, 1, 2]); // Returns [1, 2, 3, 5, 8]
```

## Testing

Run the tests to ensure everything is working correctly:

```bash
npm test
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to this project.

## Fun Facts

Why do programmers prefer dark mode?

Because light attracts bugs! 🐛

Why was the function feeling cold?

Because someone left it outside its scope! ❄️

Why do programmers need a coffee pot on their desk?

Because it helps them with their Java script! ☕
