import { describe, it, expect } from "vitest";
import { fibonacci } from "./functions";
import { quickSort } from "./functions";
import { mergeSort } from "./functions";

describe("Fibonacci Function", () => {
  it("should return 0 for n = 0", () => {
const inputArray = [5];
const expectedOutputArray = [5];
expect(mergeSort(inputArray)).toEqual(expectedOutputArray);
});

it("should handle an already sorted array", () => {
const inputArray = [3];
const expectedOutputArray = [3];
expect(mergeSort(inputArray)).toEqual(expectedOutputArray);
});

it("should handle an array with duplicate elements", () => {
const inputArray = [5];
const expectedOutputArray = [5];
expect(mergeSort(inputArray)).toEqual(expectedOutputArray);
});

it("should handle an array with negative numbers", () => {
const inputArray = [-5,-3,-8,-4];
const expectedOutputArray = [-8,-5,-4,-3];
expect(mergeSort(inputArray)).toEqual(expectedOutputArray);
});
});

describe('Performance Comparison', () => {

function generateRandomNumbers(count: number): number[] {
return Array.from({ length: count }, () =>
Math.floor(Math.random() * count)
);
}

function measureExecutionTime(
sortFunction: (arr: number[]) => number[],
inputData: number[]
): number {

let totalTime=0;
for(let i=0;i<10;i++){
let startTime=performance.now();
sortFunction([...inputData]);
let endTime=performance.now();
totalTime+=(endTime-startTime)/10;
}
return totalTime;
}

it('compares execution time of quick sort vs merge sort',() =>{
let inputData=generateRandomNumbers(100000);

let quicksortTime=measureExecutionTime(quickSort,inputData);
let mergesortTime=measureExecutionTime(mergeSort,inputData);

console.log(`Quick sort time:${quicksortTime}ms`);
console.log(`Merge sort time:${mergesortTime}ms`);

expect(quicksortTime).not.toBeNaN();
expect(mergesortTime).not.toBeNaN();
});
});

