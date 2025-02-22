import { fibonacci, binarySearch } from "./functions";

document.addEventListener("DOMContentLoaded", () => {
  // Fibonacci function
  const fibonacciButton = document.getElementById("fibonacci-button");
  fibonacciButton.addEventListener("click", () => {
    const n = parseInt(document.getElementById("fibonacci-n").value, 10);
    const result = fibonacci(n);
    document.getElementById("results").innerText = `Fibonacci of ${n}: ${result}`;
  });

  // Binary search function
  const binarySearchButton = document.getElementById("binary-search-button");
  binarySearchButton.addEventListener("click", () => {
    const arrInput = document.getElementById("binary-search-arr").value;
    const arr = arrInput.split(",").map(Number);
    const target = parseInt(document.getElementById("binary-search-target").value, 10);
    const result = binarySearch(arr, target);
    document.getElementById("results").innerText = `Binary search result: ${result}`;
  });
});
