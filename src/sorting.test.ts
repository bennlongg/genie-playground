import {
  bubbleSort,
  mergeSort,
  quickSort,
  selectionSort,
  insertionSort,
  shellSort,
  heapSort
} from './sorting';

describe('Sorting Algorithms', () => {
  // Test data
  const emptyArray: number[] = [];
  const singleElementArray: number[] = [1];
  const sortedArray: number[] = [1, 2, 3, 4, 5];
  const reversedArray: number[] = [5, 4, 3, 2, 1];
  const unsortedArray: number[] = [3, 1, 4, 1, 5, 9, 2, 6, 5];
  const duplicateArray: number[] = [3, 1, 3, 1, 5, 5, 2];
  const negativeArray: number[] = [-3, -1, -4, -1, -5];
  const mixedArray: number[] = [-3, 1, 0, -1, 5];

  // Expected results after sorting
  const expectedEmptyArray: number[] = [];
  const expectedSingleElementArray: number[] = [1];
  const expectedSortedArray: number[] = [1, 2, 3, 4, 5];
  const expectedReversedArray: number[] = [1, 2, 3, 4, 5];
  const expectedUnsortedArray: number[] = [1, 1, 2, 3, 4, 5, 5, 6, 9];
  const expectedDuplicateArray: number[] = [1, 1, 2, 3, 3, 5, 5];
  const expectedNegativeArray: number[] = [-5, -4, -3, -1, -1];
  const expectedMixedArray: number[] = [-3, -1, 0, 1, 5];

  // Helper function to test a sorting algorithm with all test cases
  const testSortingAlgorithm = (
    sortFunction: (arr: number[]) => number[],
    functionName: string
  ) => {
    describe(functionName, () => {
      it('should handle empty arrays', () => {
        expect(sortFunction([...emptyArray])).toEqual(expectedEmptyArray);
      });

      it('should handle arrays with a single element', () => {
        expect(sortFunction([...singleElementArray])).toEqual(expectedSingleElementArray);
      });

      it('should not change already sorted arrays', () => {
        expect(sortFunction([...sortedArray])).toEqual(expectedSortedArray);
      });

      it('should sort reversed arrays', () => {
        expect(sortFunction([...reversedArray])).toEqual(expectedReversedArray);
      });

      it('should sort unsorted arrays', () => {
        expect(sortFunction([...unsortedArray])).toEqual(expectedUnsortedArray);
      });

      it('should handle arrays with duplicate elements', () => {
        expect(sortFunction([...duplicateArray])).toEqual(expectedDuplicateArray);
      });

      it('should sort arrays with negative numbers', () => {
        expect(sortFunction([...negativeArray])).toEqual(expectedNegativeArray);
      });

      it('should sort arrays with mixed positive and negative numbers', () => {
        expect(sortFunction([...mixedArray])).toEqual(expectedMixedArray);
      });

      it('should return a new array and not modify the original', () => {
        const original = [...unsortedArray];
        const sorted = sortFunction(original);
        expect(sorted).toEqual(expectedUnsortedArray);
        expect(original).toEqual(unsortedArray);
      });
    });
  };

  // Test each sorting algorithm
  testSortingAlgorithm(bubbleSort, 'Bubble Sort');
  testSortingAlgorithm(mergeSort, 'Merge Sort');
  testSortingAlgorithm(quickSort, 'Quick Sort');
  testSortingAlgorithm(selectionSort, 'Selection Sort');
  testSortingAlgorithm(insertionSort, 'Insertion Sort');
  testSortingAlgorithm(shellSort, 'Shell Sort');
  testSortingAlgorithm(heapSort, 'Heap Sort');

  describe('Performance Comparison', () => {
    it('should handle large arrays', () => {
      // This test is more about ensuring algorithms can handle larger datasets
      // than about actual performance measurements
      const largeArray = Array.from({ length: 1000 }, () => 
        Math.floor(Math.random() * 1000)
      );
      const sortedLargeArray = [...largeArray].sort((a, b) => a - b);
      
      expect(bubbleSort([...largeArray])).toEqual(sortedLargeArray);
      expect(mergeSort([...largeArray])).toEqual(sortedLargeArray);
      expect(quickSort([...largeArray])).toEqual(sortedLargeArray);
      expect(selectionSort([...largeArray])).toEqual(sortedLargeArray);
      expect(insertionSort([...largeArray])).toEqual(sortedLargeArray);
      expect(shellSort([...largeArray])).toEqual(sortedLargeArray);
      expect(heapSort([...largeArray])).toEqual(sortedLargeArray);
    });
  });
});
