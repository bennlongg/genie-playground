# genie-playground

## Functions

### fibonacci

The `fibonacci` function calculates the Fibonacci number for a given non-negative integer `n`. The Fibonacci sequence is defined as:
- `fibonacci(0) = 0`
- `fibonacci(1) = 1`
- `fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 2)` for `n >= 2`

Negative input values are not allowed, and the function will throw an error if a negative value is provided.

### binarySearch

The `binarySearch` function performs a binary search on a sorted array of numbers (`arr`) to find the index of the target value (`target`). It returns the index of the target if it is present in the array, or -1 if the target is not found. The array must be sorted in ascending order for the binary search to work correctly.