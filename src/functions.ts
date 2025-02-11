export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  export function bubbleSort(array: number[]): number[] {
    const newArray = array.slice();
    let swapped;
    let n = newArray.length;
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (newArray[i] > newArray[i + 1]) {
          const temp = newArray[i];
          newArray[i] = newArray[i + 1];
          newArray[i + 1] = temp;
          swapped = true;
        }
      }
      n--;
    } while (swapped);
    return newArray;
  }
  
