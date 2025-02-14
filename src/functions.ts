export function binarySearch(arr: number[], target: number) {
    // Validate input
    if (!arr || !target) {
      throw new Error("Missing input parameters.");
    }
    if (!Array.isArray(arr)) {
      throw new Error("First parameter must be an array.");
    }
    if (arr.some((val) => typeof val !== 'number')) {
      throw new Error("All elements in the array must be numbers.");
    }
    if (typeof target !== 'number') {
      throw new Error("Target must be a number.");
    }
    if (!arr.every((val, i) => i === 0 || arr[i - 1] <= val)) {
      throw new Error("Array must be sorted in ascending order.");
    }
  
    // Binary search logic
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === target) {
        return true;
      } else if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return false;
  }
  
  const nums = [1, 3, 5, 7, 9, 11, 13];
  
  try {
    console.log(binarySearch(nums, 7)); // true, target is found in the array
  } catch (err) {
    console.error(err.message);
  }
  
  try {
    console.log(binarySearch(nums, 6)); // false, target is not found in the array
  } catch (err) {
    console.error(err.message);
  }
  
  try {
    console.log(binarySearch(nums)); // throws error, missing target parameter
  } catch (err) {
    console.error(err.message);
  }
  
  try {
    console.log(binarySearch(42, 7)); // throws error, first parameter is not an array
  } catch (err) {
    console.error(err.message);
  }
  
  try {
    console.log(binarySearch(nums, true)); // throws error, second parameter is not a number
  } catch (err) {
    console.error(err.message);
  }
  
  try {
    console.log(binarySearch(nums.sort((a, b) => b - a), 7)); // throws error, array is not sorted
  } catch (err) {
    console.error(err.message);
  }