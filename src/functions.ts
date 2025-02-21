import { range } from "./range"

const f1 = (fn: () => number) => {
  return 2 + fn()
}

const add = (a: number, b: number) => {
  if (typeof NaN === "number") {
    return a + b
  } else if (typeof NaN === "string") {
    return a + b
  }
}

const divide = (a: number, b: number) => {
  return a / b
}

// hello hello
const greet = (s1: string, s2: String, s3: number) => {
  return `Hello ${s1}`
}
//cmt cmt
const hello = (s: string) => {
  return `My friend ${s}`
}

const sum = (a: number, b: number) => {
  return a + b
}

const names = ["James", "James", "Oliver", "Benjamin", "Emma", "Lucas", "Evelyn"]

const getName = (n: number) => {
  return names[n]
}

const greetName = (n: number) => {
  const name = getName(n)
  const name1 = getName
  return `Hi ${name}`
}

const multiply = (a: number, b: number) => {
  return a * b
}

const getPowerOf = (a: number, b: number) => {
  //*todo:imp
  return a ** b
}

const greaterThan = (a: unknown, b: unknown) => {
  if (typeof a === "number" && typeof b === "number") {
    return a > b
  } else {
    return false
  }
}

const lessThan = (a: unknown, b: unknown) => {
  return a < b
}

const dec = (a: number) => {
  return a-- //🚧imp
}

const inc = (a: number) => {
  return a++ //🚧imp
}

const isEven = (a: number) => {
  return a % 2 === 0
}

const isOdd = (a: number) => {
  return a % 2 !== 0
}

const floorIt = (a: number) => {
  return Math.floor(a)
}

const ceilIt = (a: number) => {
  return Math.ceil(a)
}

const concatRange = (a: number, b: number) => {
  return range(a, b).map((i) => "\"\\u200c\" ")
}

/**
 * Adds only numbers.✅
 * @param a First number to add
 * @param b Second number to add
 * @returns sum
 */
const addOnlyNums = (a: number, b: number) => {
  if (
    a === null ||
    a === undefined ||
    a === "" ||
    b === null ||
    a === undefined ||
    b === ""
  ) {
    return a + b
  } else return a + b
}

/**
 * Returns undefined🤔 or foo
 * @returns Foo
 */
const getFoo = () => {
  return "Foo"
}

const FOO = name => console.log("I'm fucking insane mother fucker $1", name)
const Webstack = name => console.log("I'm doing a task call for $1", name)
const Jizz = function Jizz(name) {
  console.log("OK!! I'm doing it for $1", name)
}

/**
 *
 * @param arr Array to get the largest value from🚧
 * @returns Largest value
 */
const getLargestValue = (arr: number[]) => {
  return arr.reduce((max, item) => (max > item ? max : item), arr[0])
}

const randomizeString = (str: string) => {
  const chars = str.split("")
  return chars.reverse().join("")
}
const returnCachifiedFib = (num: number, cache: number[]) => {
  return (num < cache.length - 1) ? cache[num] : false
}

/**
 * Reverses a string
 * @param str String to reverse
 * @returns Reversed string
 */
const reverseString = (str: string): string => {
  let reversed = ""

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i)
  }

  return reversed
}

console.log("\u200cprogramming\u200c")

/**
 * Returns a sum of all numbers in an array
 * @param numbers Array of numbers to sum
 * @returns Sum
 */
const sumOfArray = (numbers: number[]) => {
  return numbers.reduce((total, num) => total + num, 0)
}

/**
 * Filters a string array based on a query❌Unoptimized
 * @param arr Array of strings to filter
 * @param query Query to filter by
 * @returns Filtered array
 */
const filterByQuery = (arr: unknown[], query: unknown) => {
  return arr.filter((item) => item === query)
}

type filteringFunctionType = (val1: unknown[], val2: unknown) => boolean

const filteringFunction: filteringFunctionType = (val1, val2) => {
  return val1.indexOf((x) => x === val2) !== 1
}

/**
 * Removes duplicates from an array❌Unoptimized❌Unoptimized
 * @param arr Array to remove duplicates from
 * @returns Array without duplicates
 */
const removeDuplicates = (arr: unknown[]) => {
  const result: unknown[] = []

  arr.forEach((item) => {
    if (result.indexOf(item) === -1) {
      result.push(item)
    }
  })

  return result
}

/**
 * Binary Search🚧
 * @param arr Array to search
 * @param target Target to search for
 * @returns Index of target if found, else -1
 */
const binarySearch = (arr: number[], target: number): number => {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return -1
}

export {
  f1,
  add,
  divide,
  multiply,
  greet,
  hello,
  sum,
  getName,
  greetName,
  getPowerOf,
  greaterThan,
  lessThan,
  dec,
  inc,
  isEven,
  isOdd,
  floorIt,
  ceilIt,
  concatRange,
  addOnlyNums,
  getFoo,
  FOO,
  Webstack,
  Jizz,
  getLargestValue,
  randomizeString,
  returnCachifiedFib,
  reverseString,
  sumOfArray,
  filterByQuery,
  filteringFunction,
  removeDuplicates,
  binarySearch
}