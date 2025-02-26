import {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
  heapSort,
  radixSort
} from './sortingAlgorithms';

// Common test arrays
const emptyArray: number[] = [];
const singleElementArray: number[] = [42];
const sortedArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reversedArray: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const unsortedArray: number[] = [5, 3, 8, 1, 9, 4, 7, 2, 10, 6];
const duplicatesArray: number[] = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
const negativeArray: number[] = [-5, -3, -8, -1, -9, -4, -7, -2, -10, -6];
const mixedArray: number[] = [5, -3, 8, -1, 9, -4, 7, -2, 10, -6];

// Helper function to check if an array is sorted
function isSorted(arr: number[]): boolean {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      return false;
    }
  }
  return true;
}

describe('Sorting Algorithms', () => {
  // Bubble Sort Tests
  describe('bubbleSort', () => {
    test('should return an empty array when sorting an empty array', () => {
      expect(bubbleSort(emptyArray)).toEqual([]);
    });

    test('should return the same array when sorting a single element array', () => {
      expect(bubbleSort(singleElementArray)).toEqual([42]);
    });

    test('should correctly sort an already sorted array', () => {
      const result = bubbleSort(sortedArray);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort a reversed array', () => {
      const result = bubbleSort(reversedArray);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort an unsorted array', () => {
      const result = bubbleSort(unsortedArray);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort an array with duplicate values', () => {
      const result = bubbleSort(duplicatesArray);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort an array with negative values', () => {
      const result = bubbleSort(negativeArray);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort an array with mixed positive and negative values', () => {
      const result = bubbleSort(mixedArray);
      expect(isSorted(result)).toBe(true);
    });
  });

  // Selection Sort Tests
  describe('selectionSort', () => {
    test('should return an empty array when sorting an empty array', () => {
      expect(selectionSort(emptyArray)).toEqual([]);
    });

    test('should return the same array when sorting a single element array', () => {
      expect(selectionSort(singleElementArray)).toEqual([42]);
    });

    test('should correctly sort an already sorted array', () => {
      const result = selectionSort(sortedArray);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort a reversed array', () => {
      const result = selectionSort(reversedArray);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort an unsorted array', () => {
      const result = selectionSort(unsortedArray);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort an array with duplicate values', () => {
      const result = selectionSort(duplicatesArray);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort an array with negative values', () => {
      const result = selectionSort(negativeArray);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort an array with mixed positive and negative values', () => {
      const result = selectionSort(mixedArray);
      expect(isSorted(result)).toBe(true);
    });
  });

  // Insertion Sort Tests
  describe('insertionSort', () => {
    test('should return an empty array when sorting an empty array', () => {
      expect(insertionSort(emptyArray)).toEqual([]);
    });

    test('should return the same array when sorting a single element array', () => {
      expect(insertionSort(singleElementArray)).toEqual([42]);
    });

    test('should correctly sort an already sorted array', () => {
      const result = insertionSort(sortedArray);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort a reversed array', () => {
      const result = insertionSort(reversedArray);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort an unsorted array', () => {
      const result = insertionSort(unsortedArray);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort an array with duplicate values', () => {
      const result = insertionSort(duplicatesArray);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort an array with negative values', () => {
      const result = insertionSort(negativeArray);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort an array with mixed positive and negative values', () => {
      const result = insertionSort(mixedArray);
      expect(isSorted(result)).toBe(true);
    });
  });

  // Merge Sort Tests
  describe('mergeSort', () => {
    test('should return an empty array when sorting an empty array', () => {
      expect(mergeSort(emptyArray)).toEqual([]);
    });

    test('should return the same array when sorting a single element array', () => {
      expect(mergeSort(singleElementArray)).toEqual([42]);
    });

    test('should correctly sort an already sorted array', () => {
      const result = mergeSort(sortedArray);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort a reversed array', () => {
      const result = mergeSort(reversedArray);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort an unsorted array', () => {
      const result = mergeSort(unsortedArray);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort an array with duplicate values', () => {
      const result = mergeSort(duplicatesArray);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort an array with negative values', () => {
      const result = mergeSort(negativeArray);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort an array with mixed positive and negative values', () => {
      const result = mergeSort(mixedArray);
      expect(isSorted(result)).toBe(true);
    });
  });

  // Quick Sort Tests
  describe('quickSort', () => {
    test('should return an empty array when sorting an empty array', () => {
      expect(quickSort(emptyArray)).toEqual([]);
    });

    test('should return the same array when sorting a single element array', () => {
      expect(quickSort(singleElementArray)).toEqual([42]);
    });

    test('should correctly sort an already sorted array', () => {
      const result = quickSort(sortedArray);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort a reversed array', () => {
      const result = quickSort(reversedArray);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort an unsorted array', () => {
      const result = quickSort(unsortedArray);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort an array with duplicate values', () => {
      const result = quickSort(duplicatesArray);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort an array with negative values', () => {
      const result = quickSort(negativeArray);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort an array with mixed positive and negative values', () => {
      const result = quickSort(mixedArray);
      expect(isSorted(result)).toBe(true);
    });
  });

  // Heap Sort Tests
  describe('heapSort', () => {
    test('should return an empty array when sorting an empty array', () => {
      expect(heapSort(emptyArray)).toEqual([]);
    });

    test('should return the same array when sorting a single element array', () => {
      expect(heapSort(singleElementArray)).toEqual([42]);
    });

    test('should correctly sort an already sorted array', () => {
      const result = heapSort(sortedArray);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort a reversed array', () => {
      const result = heapSort(reversedArray);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort an unsorted array', () => {
      const result = heapSort(unsortedArray);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort an array with duplicate values', () => {
      const result = heapSort(duplicatesArray);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort an array with negative values', () => {
      const result = heapSort(negativeArray);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort an array with mixed positive and negative values', () => {
      const result = heapSort(mixedArray);
      expect(isSorted(result)).toBe(true);
    });
  });

  // Radix Sort Tests (only for non-negative integers)
  describe('radixSort', () => {
    test('should return an empty array when sorting an empty array', () => {
      expect(radixSort(emptyArray)).toEqual([]);
    });

    test('should return the same array when sorting a single element array', () => {
      expect(radixSort(singleElementArray)).toEqual([42]);
    });

    test('should correctly sort an already sorted array of non-negative integers', () => {
      const nonNegativeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const result = radixSort(nonNegativeArray);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort a reversed array of non-negative integers', () => {
      const nonNegativeReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
      const result = radixSort(nonNegativeReversed);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort an unsorted array of non-negative integers', () => {
      const nonNegativeUnsorted = [5, 3, 8, 1, 9, 4, 7, 2, 10, 6];
      const result = radixSort(nonNegativeUnsorted);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort an array with duplicate non-negative values', () => {
      const nonNegativeDuplicates = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
      const result = radixSort(nonNegativeDuplicates);
      expect(isSorted(result)).toBe(true);
    });

    test('should correctly sort an array of large non-negative integers', () => {
      const largeValues = [10000, 5000, 1000, 500, 100, 50, 10, 5, 1, 0];
      const result = radixSort(largeValues);
      expect(isSorted(result)).toBe(true);
    });
  });

  // Performance Comparison (optional)
  describe('Performance comparison', () => {
    test('all sorting algorithms should produce the same correct result', () => {
      const testArray = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000));
      
      const bubbleSorted = bubbleSort([...testArray]);
      const selectionSorted = selectionSort([...testArray]);
      const insertionSorted = insertionSort([...testArray]);
      const mergeSorted = mergeSort([...testArray]);
      const quickSorted = quickSort([...testArray]);
      const heapSorted = heapSort([...testArray]);
      const radixSorted = radixSort([...testArray]);
      
      // Manual sort for comparison
      const expectedSorted = [...testArray].sort((a, b) => a - b);
      
      expect(bubbleSorted).toEqual(expectedSorted);
      expect(selectionSorted).toEqual(expectedSorted);
      expect(insertionSorted).toEqual(expectedSorted);
      expect(mergeSorted).toEqual(expectedSorted);
      expect(quickSorted).toEqual(expectedSorted);
      expect(heapSorted).toEqual(expectedSorted);
      expect(radixSorted).toEqual(expectedSorted);
    });
  });
});
