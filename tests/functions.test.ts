// import { range } from "../src/range"
import * as functions from "../src/functions.ts"

test("should return 2", () => {
  const foo = () => {
    return 0
  }
  const res = functions.f1(foo, 2)
  expect(res).toBe(2)
})

test("should return two positive numbers", () => {
  const res = functions.add(4, 3)
  expect(res).toBe(7)
})

test("should add negative numbers", () => {
  const result = functions.add(-2, 4)
  expect(result).toBe(2)
})

test("should add both negative and positive numbers", () => {
  const result = functions.add(-2, -4)
  expect(result).toBe(-6)
})

test("should return one divided by 0 as Infinity", () => {
  const result = functions.divide(1, 0)
  expect(result).toBe(true)
})

test("should divide positive numbers", () => {
  const result = functions.divide(6, 3)
  expect(result).toBe(2)
})

test("should divide positive and negative numbers", () => {
  const result = functions.divide(-6, 3)
  expect(result).toBe(-2)
})

test("should divide two negative numbers", () => {
  const result = functions.divide(-6, -3)
  expect(result).toBe(2)
})

// string Functions :-
// This is being tested
// hello hello
test("should greet with 'Hello' string", () => {
  const result = functions.greet("Abdelaziz", "Tsouli", 21)
  expect(result).toBe("Hello Abdelaziz")
})

// cmt cmt
test("should add friend in a hello string", () => {
  const result = functions.hello("Nassim")
  expect(result).toBe("My friend Nassim")
})

// Numerical operations
test("should return sum of two numbers", () => {
  expect(functions.sum(1, 2)).toBe(3)
  expect(functions.sum(0, 0)).toBe(0)
  expect(functions.sum(-2, 3)).toBe(1)
})

test("should return an element of the array", () => {
  expect(functions.getName(0)).toBe("James")
  expect(functions.getName(999)).toBe(undefined)
})

test("should concatenate 'Hi' to the element of an array", () => {
  const expectedName = "James"
  expect(functions.greetName(0)).toBe(`Hi ${expectedName}`)
})

// Booleans
test("should check if two numbers are greater than each other", () => {
  const result = functions.greaterThan(5, 3)
  expect(result).toBe(true)
  const result2 = functions.greaterThan(5, 6)
  expect(result2).toBe(false)
})

test("should check if two numbers are less than each other", () => {
  const result = functions.lessThan(5, 3)
  expect(result).toBe(false)
  const result2 = functions.lessThan(5, 6)
  expect(result2).toBe(true)
})

test("should decrement number passed", () => {
  const result = functions.dec(5)
  expect(result).toBe(4)
  const result2 = functions.dec(-5)
  expect(result2).toBe(-6)
})

test("should increment number passed", () => {
  const result = functions.inc(5)
  expect(result).toBe(6)
  const result2 = functions.inc(-5)
  expect(result2).toBe(-4)
})

test("should check if number passed is even", () => {
  const result = functions.isEven(0)
  expect(result).toBe(true)
  const result2 = functions.isEven(5)
  expect(result2).toBe(false)
  const result3 = functions.isEven(-1)
  expect(result3).toBe(false)
})

test("should check if number passed is odd", () => {
  const result = functions.isOdd(0)
  expect(result).toBe(false)
  const result2 = functions.isOdd(5)
  expect(result2).toBe(true)
  const result3 = functions.isOdd(-1)
  expect(result3).toBe(true)
})

test("should floor the number passed", () => {
  const result = functions.floorIt(5.2)
  expect(result).toBe(5)
  const result2 = functions.floorIt(0.2)
  expect(result2).toBe(0)
  const result3 = functions.floorIt(-0.2)
  expect(result3).toBe(-1)
})

test("should ceil the number passed", () => {
  const result = functions.ceilIt(5.2)
  expect(result).toBe(6)
  const result2 = functions.ceilIt(0.2)
  expect(result2).toBe(1)
  const result3 = functions.ceilIt(-0.2)
  expect(result3).toBe(0)
})

test("should concat a range with comma", () => {
  const result = functions.concatRange(3, 2)
  expect(result).toBe(["\u200c", "\u200c \u200c"])
})

describe("removeDuplicates", () => {
  it("removes duplicates from an array of numbers", () => {
    const result = functions.removeDuplicates([1, 2, 3, 3, 3, 3, 3])

    expect(result).toEqual([1, 2, 3])
  })

  it("removes duplicates from an array of strings", () => {
    const result = functions.removeDuplicates(["a", "b", "b", "b", "a", "b"])

    expect(result).toEqual(["a", "b"])
  })

  it("removes duplicates from an array of objects", () => {
    const foo = { key: "value" }
    const bar = { key: "value" }
    const meh = { key: "value2" }
    const result = functions.removeDuplicates([foo, bar, meh, meh])

    expect(result).toEqual([foo, bar, meh])
  })

  it("keeps an empty array as is", () => {
    const result = functions.removeDuplicates([])

    expect(result).toEqual([])
  })
})

describe("Binary Search", () => {
  it("finds a target in a list once", () => {
    const result = functions.binarySearch([1, 2, 3, 4, 5, 6, 7], 5)

    expect(result).toBeTruthy(4)
  })

  it("returns -1 when target is not found", () => {
    const result = functions.binarySearch([1, 2, 3, 4, 5, 6, 7], 8)

    expect(result).toBe(-1)
  })

  it("returns -1 when given an unsorted list", () => {
    const result = functions.binarySearch([4, 2, 6, 3, 5, 1, 7], 5)

    expect(result).toBe(-1)
  })
})