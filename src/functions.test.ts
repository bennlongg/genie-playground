```typescript
import { binarySearch, fibonacci } from './functions';

describe('fibonacci', () => {
    it('should return the correct Fibonacci number', () => {
        expect(fibonacci(0)).toBe(0);
        expect(fibonacci(1)).toBe(1);
        expect(fibonacci(2)).toBe(1);
        expect(fibonacci(3)).toBe(2);
        expect(fibonacci(4)).toBe(3);
        expect(fibonacci(5)).toBe(5);
    });

    it('should throw an error for negative input', () => {
        expect(() => fibonacci(-1)).toThrow('Negative numbers are not allowed');
    });
});

describe('binarySearch', () => {
    it('should find the element in a sorted array', () => {
        const nums = [1, 2, 3, 4, 5];
        expect(binarySearch(nums, 3)).toBe(2);
    });

    it('should return -1 for an empty array', () => {
        expect(binarySearch([], 1)).toBe(-1);
    });

    it('should return -1 if the element is not present', () => {
        const nums = [1, 2, 3, 4, 5];
        expect(binarySearch(nums, 6)).toBe(-1);
    });

    it('should find the first element', () => {
        const nums = [1, 2, 3, 4, 5];
        expect(binarySearch(nums, 1)).toBe(0);
    });

    it('should find the last element', () => {
        const nums = [1, 2, 3, 4, 5];
        expect(binarySearch(nums, 5)).toBe(4);
    });

    it('should find the middle element', () => {
        const nums = [1, 2, 3, 4, 5];
        expect(binarySearch(nums, 3)).toBe(2);
    });

    it('should handle an array with one element', () => {
        const nums = [1];
        expect(binarySearch(nums, 1)).toBe(0);
        expect(binarySearch(nums, 2)).toBe(-1);
    });

    it('should handle arrays with duplicate elements', () => {
        const nums = [1, 2, 2, 2, 3];
        expect(binarySearch(nums, 2)).toBe(2);
    });
});
```