#### fizzbuzz-pairs

# fizzbuzz_pairs

Fizzbuzz-pairs is a multi-threaded application that counts upward from 1 to max_value (default=50) and 'throws' a shared stock image of a tennis ball between 3 buzzers.

Fizzbuzz-pairs have 3 buzzers, each displaying an image of a tennis ball along with a `count` integer placed over it. Whilst the `count %15 == 0`, all buzzers contain an image of a tennis ball and an `OUT` label is displayed on all buzzers a long with a vibrating sound.

### Getting Started

Download the release package and run the executable. 

**Developers** 

```go
git clone <this repository>
go mod tidy
go run .
```

Why can't a programmer master tennis? They keep looping indefinitely in a `while loop`!

```
var rootID = "buzzer-container"
```

#### Fibonacci Function

This package contains a Fibonacci function that calculates the nth Fibonacci number.

**Usage:**

```typescript
import { fibonacci } from "./functions";

console.log(fibonacci(10)); // Outputs: 55
```

#### Binary Search Function

This package contains a Binary Search function that searches for a target value in a sorted array of numbers.

**Usage:**

```typescript
import { binarySearch } from "./binarySearch";

const arr = [1, 2, 3, 4, 5, 6, 7];
const target = 5;

console.log(binarySearch(arr, target)); // Outputs: 4
```

#### Bubble Sort Function

This package contains a Bubble Sort function that sorts an array of numbers in ascending order.

**Usage:**

```typescript
import { bubbleSort } from "./bubbleSort";

const arr = [5, 3, 8, 4, 2];
console.log(bubbleSort(arr)); // Outputs: [2, 3, 4, 5, 8]
```

#### A* Search Function

This package contains an A* search function that finds the shortest path in a grid from a start node to an end node, given a heuristic function.

**Usage:**

```typescript
import { aStar } from "./aStar";

const grid = [
  [0, 0, 0, 0],
  [1, 1, 0, 1],
  [0, 0, 0, 0]
];
const start = { x: 0, y: 0 };
const end = { x: 2, y: 3 };
const heuristic = (a: Node, b: Node) => Math.abs(a.x - b.x) + Math.abs(a.y - b.y);

console.log(aStar(grid, heuristic, start, end)); 
// Outputs: { path: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 2, y: 3 }], distance: 5 }
```

#### A Little Humor

**Buzzer 1**: Why did the JavaScript developer keep their gym membership?

**Buzzer 2**: I don't know, why?

**Buzzer 1**: Because they wanted to stay in shape and avoid getting 'jQuery'!

**Buzzer 3**: Haha, good one. But you know what's even more fun?

**Buzzer 1 & 2**: What?

**Buzzer 3**: Throwing a tennis ball while counting, of course!

**Buzzer 4**: Yes! And don't forget the vibrating sound at 15!