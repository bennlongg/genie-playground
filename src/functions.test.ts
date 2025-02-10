import { binarySearch, sum, fibonacci, reverseString, isPalindrome, capitalizeWords, flattenArray } from './functions';

// Binary Search function
describe('binarySearch', () => {
  test('should return the correct index for existing targets', () => {
    const arr = [1, 3, 5, 7, 9];
    expect(binarySearch(arr, 3)).toBe(1);
    expect(binarySearch(arr, 7)).toBe(3);
  });

  test('should return -1 for non-existent targets', () => {
    const arr = [1, 3, 5, 7, 9];
    expect(binarySearch(arr, 6)).toBe(-1);
    expect(binarySearch(arr, 0)).toBe(-1);
  });

  test('should handle empty arrays and return -1', () => {
    const emptyArr: number[] = [];
    expect(binarySearch(emptyArr, 4)).toBe(-1);
  });

  test('should handle arrays of varying lengths', () => {
    const arr = [1];
    expect(binarySearch(arr, 1)).toBe(0);
    expect(binarySearch(arr, 2)).toBe(-1);
  });

  test('should handle negative and positive numbers', () => {
    const arr = [-10, -5, 0, 5, 10];
    expect(binarySearch(arr, -5)).toBe(1);
    expect(binarySearch(arr, 5)).toBe(3);
  });

  test('should assume the array is sorted and return correct indices', () => {
    const arr = [1, 2, 3, 4];
    expect(binarySearch(arr, 3)).toBe(2);
  });

  test('should handle cases where there are duplicate elements in the array', () => {
    const arr = [1, 2, 2, 2, 3];
    expect(binarySearch(arr, 2)).toBeGreaterThanOrEqual(1);
    expect(binarySearch(arr, 2)).toBeLessThanOrEqual(3);
  });

  test('should handle edge cases like searching for values at the start or end', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(binarySearch(arr, 1)).toBe(0);
    expect(binarySearch(arr, 5)).toBe(4);
  });

  test('should handle unsorted arrays but still provide a valid index', () => {
    const arr = [4, 2, 8, 3];
    expect(binarySearch(arr, 8)).toBe(2);
  });

  test('should handle arrays with non-number elements and return correct values', () => {
    const arr: any[] = [1, "three", 3];
    expect(binarySearch(arr as number[], 3)).toBe(1);
  });
});

describe('sum', () => {
  test('should correctly sum two positive numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  test('should correctly sum a positive and a negative number', () => {
    expect(sum(5, -3)).toBe(2);
  });

  test('should correctly sum two negative numbers', () => {
    expect(sum(-4, -6)).toBe(-10);
  });

  test('should correctly sum non-integer numbers', () => {
    expect(sum(2.5, 3.5)).toBe(6);
  });

  test('should return the same number when adding zero', () => {
    expect(sum(7, 0)).toBe(7);
  });

  test('should correctly handle mixed number types', () => {
    expect(sum(5, '5' as unknown as number)).toBe(10);
  });

  test('should return 0 for empty input (non-curried)', () => {
    expect(sum()).toBe(0);
  });

  test('should sum multiple arguments correctly (non-curried)', () => {
    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  test('should handle decimal precision issues', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3, 9);
  });
});

describe('fibonacci', () => {
  test('should return the correct Fibonacci sequence value', () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(7)).toBe(13);
  });

  test('should throw an error for negative inputs', () => {
    expect(() => fibonacci(-2)).toThrow('Negative numbers are not allowed');
  });

  test('should correctly handle edge cases', () => {
    expect(fibonacci(10)).toBe(55);
  });
});

describe('reverseString', () => {
  test('should reverse a regular string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('should return an empty string when given an empty string', () => {
    expect(reverseString('')).toBe('');
  });

  test('should correctly handle strings with special characters', () => {
    expect(reverseString('hello!')).toBe('!olleh');
  });

  test('should preserve whitespace and casing', () => {
    expect(reverseString('Hello World')).toBe('dlroW olleH');
  });

  test('should correctly handle numeric strings', () => {
    expect(reverseString('12345')).toBe('54321');
  });

  test('should handle single-character strings', () => {
    expect(reverseString('a')).toBe('a');
  });

  test('should correctly handle palindrome strings', () => {
    expect(reverseString('madam')).toBe('madam');
  });

  test('should not modify the original input string', () => {
    const input = 'immutable';
    reverseString(input);
    expect(input).toBe('immutable');
  });
});

describe('isPalindrome', () => {
  test('should return true for simple palindromes', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('should return false for non-palindromes', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  test('should return true for single-character strings', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  test('should return true for multi-word palindromes with spaces', () => {
    expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
  });

  test('should return true for strings with special characters', () => {
    expect(isPalindrome('Able, was I ere I saw Elba!')).toBe(true);
  });

  test('should return true for empty string input', () => {
    expect(isPalindrome('')).toBe(true);
  });

  test('should be case-insensitive', () => {
    expect(isPalindrome('Madam')).toBe(true);
  });

  test('should handle strings with numbers', () => {
    expect(isPalindrome('12321')).toBe(true);
  });
});

describe('capitalizeWords', () => {
  test('should be defined', () => {
    expect(capitalizeWords).toBeDefined();
  });

  test('should handle empty input gracefully', () => {
    const result = capitalizeWords('');
    expect(result).toBe('');
  });

  test('should correctly capitalize single-word input', () => {
    const result = capitalizeWords('hello');
    expect(result).toBe('Hello');
  });

  test('should handle mixed-case words correctly', () => {
    const result = capitalizeWords('heLLo wOrLD');
    expect(result).toBe('Hello World');
  });

  test('should handle leading/trailing/multiple spaces', () => {
    const result = capitalizeWords('    hello world   ');
    expect(result).toBe('Hello World');
  });

  test('should preserve numbers and special characters', () => {
    const result = capitalizeWords('hello world 123!@#');
    expect(result).toBe('Hello World 123!@#');
  });

  test('should handle non-alphabetic characters gracefully', () => {
    const result = capitalizeWords('123 456 $%^&');
    expect(result).toBe('123 456 $%^&');
  });

  test('should correctly capitalize multi-word strings', () => {
    const result = capitalizeWords('hello world');
    expect(result).toBe('Hello World');
  });
});

describe('flattenArray function', () => {
  test('should flatten a nested array of non-object values', () => {
    expect(flattenArray([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4]);
  });

  test('should flatten a nested array of object values', () => {
    expect(flattenArray([{ a: 1 }, [{ b: 2 }, [{ c: 3 }]]])).toEqual([{ a: 1 }, { b: 2 }, { c: 3 }]);
  });

  test('returns an empty array when given an empty array', () => {
    expect(flattenArray([])).toEqual([]);
  });

  test('should return the same array if there are no nested arrays', () => {
    expect(flattenArray([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('should flatten deeply nested arrays', () => {
    expect(flattenArray([1, [2, [3, [4, [5, [6]]]]]])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should correctly handle empty nested arrays', () => {
    expect(flattenArray([1, [], 3, [4, []]])).toEqual([1, 3, 4]);
  });

  test('should handle arrays with mixed data types', () => {
    expect(flattenArray([1, ['two', [true, [{ key: 'value' }]]]])).toEqual([1, 'two', true, { key: 'value' }]);
  });
});
