import { fibonacci, binarySearch } from "./functions";

const parameterType = process.argv[2];
const n = Number(process.argv[3]);

if (!parameterType) {
  console.error("[ERROR]: Missing type");
  process.exit(1);
}

if (isNaN(n)) {
  console.error(`[ERROR]: Invalid input (expected a number, got ${process.argv[3]}`);
  process.exit(1);
}

if (parameterType === "fibonacci") {
  const result = fibonacci(n);
  console.log(`The ${n}th number in the Fibonacci sequence is ${result}`);
} else if (parameterType === "search") {
  const sortedArray = [
    Number(process.argv[3]),
    Number(process.argv[4]),
    Number(process.argv[5]),
    Number(process.argv[6]),
    Number(process.argv[7]),
  ];
  const target = Number(process.argv[8]);

  if (!target) {
    console.error("[ERROR]: Missing target");
    process.exit(1);
  }

  const index = binarySearch(sortedArray, target);
  if (index !== -1) {
    console.log(`Target ${target} found at index ${index}`);
  } else {
    console.log(`Target ${target} not found in the sorted array`);
  }
}