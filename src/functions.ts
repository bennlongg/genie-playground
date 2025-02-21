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


/**
 *
 * @param arr Array to get the largest value from🚧
 * @returns Largest value
 */
const getLargestValue = (arr: number[]) => {
  return arr.reduce((max, item) => (max > item ? max : item), arr[0])
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

/**
 *
 * @param arr An array of numbers
 * @returns A sorted array
 */
const bubbleSort = (arr: number[]): number[] => {
  let swapped
  do {
    swapped = false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        let tmp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = tmp
        swapped = true
      }
    }
  } while (swapped)
  return arr
}

const removeDuplicates = (arr: unknown[]) => {
  const result: unknown[] = []

  arr.forEach((item) => {
    if (result.indexOf(item) === -1) {
      result.push(item)
    }
  })

  return result
}

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
  addOnlyNums,
  getFoo,
  FOO,
  Webstack,
  getLargestValue,
  bubbleSort,
  removeDuplicates,
  reverseString,
  binarySearch
}