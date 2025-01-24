import { fibonacci } from "./functions";
import { bubbleSort } from "./functions";

describe("fibonacci", () => {
  it("should return correct fibonacci number", () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
  });
});

describe("bubbleSort", () => {
  it("should return correct sorted array", () => {
      expect(bubbleSort([])).toEqual([]);
      expect(bubbleSort([1])).toEqual([1]);
      expect(bubbleSort([1,2])).toEqual([1,2]);
      expect(bubbleSort([2,1])).toEqual([1,2]);
      expect(bubbleSort([3,2,1])).toEqual([1,2,3]);
      expect(bubbleSort([3,3])).toEqual([3,3]);
      expect(bubbleSort([3,3,3])).toEqual([3,3,3]);
      expect(bubbleSort([5,-5])).toEqual([-5,5]);
      expect(bubbleSort([-5,-5])).toEqual([-5,-5]);
      expect(bubbleSort([-5,-5,-5])).toEqual([-5,-5,-5]);
      expect(bubbleSort([-5,-6,-7])).toEqual([-7,-6,-5]);
      expect(bubbleSort([-7,-6,-5])).toEqual([-7,-6,-5]);
      expect(bubbleSort([-7,-6,-6])).toEqual([-7,-6,-6]);
      expect(bubbleSort([-7,-7,-6])).toEqual([-7,-7,-6]);
      expect(bubbleSort([-7,-7,-7])).toEqual([-7,-7,-7]);
      expect(bubbleSort([0])).toEqual([0]);
      expect(bubbleSort([0,0])).toEqual([0,0]);
      expect(bubbleSort([0,0,0])).toEqual([0,0,0]);
      expect(bubbleSort([0.00000000000000000000000000000001])).toEqual([0.00000000000000000000000000000001]);
      expect(bubbleSort([0.00000000000000000000000000000001,
                         0.000000000000000000000000000001,
                         0.000000001,
                         100,
                         Number.MAX_SAFE_INTEGER,
                         Number.MAX_VALUE,
                         Number.MIN_SAFE_INTEGER,
                         Number.MIN_VALUE,
                         Number.NEGATIVE_INFINITY,
                         Number.POSITIVE_INFINITY,
                         NaN
                        ])).toEqual([
                          NaN,
                          Number.NEGATIVE_INFINITY,
                          Number.MIN_SAFE_INTEGER,
                          Number.MIN_VALUE,
                          0.000000001,
                          0.000000000000000000000000000001,
                          0.00000000000000000
                          00
                          00
                          00
                          00
                          00
                          00
                          00
                          00
                          00
                          .00
                          .00
                          .00
                          .00
                          .00
                          .00
                          .00
                          .01,
                          Number.MAX_SAFE_INTEGER,
                          Number.MAX_VALUE,
                          Number.POSITIVE_INFINITY,
                        ]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    
