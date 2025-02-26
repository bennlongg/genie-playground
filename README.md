# genie-playground

A collection of utility functions including various sorting algorithms implemented in TypeScript.

## Installation

```bash
npm install genie-playground
```

## Usage

### Importing

```typescript
// Import specific functions
import { bubbleSort, mergeSort, quickSort } from 'genie-playground';

// Or import everything
import * as genie from 'genie-playground';
```

### Sorting Algorithms

This library provides several sorting algorithms, each with different performance characteristics:

#### Bubble Sort

Bubble sort works by repeatedly stepping through the list, comparing adjacent elements, and swapping them if they are in the wrong order.

```typescript
import { bubbleSort } from 'genie-playground';

const unsortedArray = [3, 1, 4, 1, 5, 9, 2];
const sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray); // [1, 1, 2, 3, 4, 5, 9]
```

- Time Complexity: O(n²) in worst and average case
- Space Complexity: O(1)

#### Merge Sort

Merge sort is a divide-and-conquer algorithm that divides the input array into two halves, sorts them, and then merges them.

```typescript
import { mergeSort } from 'genie-playground';

const unsortedArray = [3, 1, 4, 1, 5, 9, 2];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // [1, 1, 2, 3, 4, 5, 9]
```

- Time Complexity: O(n log n) in all cases
- Space Complexity: O(n)

#### Quick Sort

Quick sort is also a divide-and-conquer algorithm that picks a pivot element and partitions the array around it.

```typescript
import { quickSort } from 'genie-playground';

const unsortedArray = [3, 1, 4, 1, 5, 9, 2];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray); // [1, 1, 2, 3, 4, 5, 9]
```

- Time Complexity: O(n log n) average case, O(n²) worst case
- Space Complexity: O(log n)

#### Selection Sort

Selection sort works by repeatedly finding the minimum element from the unsorted part and putting it at the beginning.

```typescript
import { selectionSort } from 'genie-playground';

const unsortedArray = [3, 1, 4, 1, 5, 9, 2];
const sortedArray = selectionSort(unsortedArray);
console.log(sortedArray); // [1, 1, 2, 3, 4, 5, 9]
```

- Time Complexity: O(n²) in all cases
- Space Complexity: O(1)

#### Insertion Sort

Insertion sort builds the final sorted array one item at a time, taking each element and inserting it into its correct position.

```typescript
import { insertionSort } from 'genie-playground';

const unsortedArray = [3, 1, 4, 1, 5, 9, 2];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // [1, 1, 2, 3, 4, 5, 9]
```

- Time Complexity: O(n²) average and worst case, O(n) best case
- Space Complexity: O(1)

#### Shell Sort

Shell sort is an extension of insertion sort that allows the exchange of items that are far apart.

```typescript
import { shellSort } from 'genie-playground';

const unsortedArray = [3, 1, 4, 1, 5, 9, 2];
const sortedArray = shellSort(unsortedArray);
console.log(sortedArray); // [1, 1, 2, 3, 4, 5, 9]
```

- Time Complexity: O(n log² n) average case
- Space Complexity: O(1)

#### Heap Sort

Heap sort uses a binary heap data structure to sort elements.

```typescript
import { heapSort } from 'genie-playground';

const unsortedArray = [3, 1, 4, 1, 5, 9, 2];
const sortedArray = heapSort(unsortedArray);
console.log(sortedArray); // [1, 1, 2, 3, 4, 5, 9]
```

- Time Complexity: O(n log n) in all cases
- Space Complexity: O(1)

## Algorithm Selection Guide

| Algorithm | Best for | Avoid when |
|-----------|----------|------------|
| Bubble Sort | Small datasets, nearly sorted data | Large datasets |
| Merge Sort | Stable sorting, predictable performance | Memory constraints |
| Quick Sort | General purpose, large datasets | Already sorted data |
| Selection Sort | Small datasets, minimizing writes | Large datasets |
| Insertion Sort | Small datasets, online sorting | Large, unsorted datasets |
| Shell Sort | Medium-sized datasets | Highly specific requirements |
| Heap Sort | Limited memory, worst-case guarantees | Need for stability |

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
