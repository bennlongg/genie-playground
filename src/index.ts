import { fibonacci, gcd, lcm, isPrime, isEven } from "./functions";

console.log("Hello Genie!");

// Fibonacci example
console.log("10th Fibonacci Number:", fibonacci(10));

// GCD example
console.log("GCD of 12 and 18:", gcd(12, 18));

// LCM example
console.log("LCM of 12 and 18:", lcm(12, 18));

// Prime check example
const numToCheck = 17;
console.log(`Is ${numToCheck} a prime number?`, isPrime(numToCheck));

// Even check example
const anotherNum = 42;
console.log(`Is ${anotherNum} an even number?`, isEven(anotherNum));

// Additional examples with different values
console.log("20th Fibonacci Number:", fibonacci(20));
console.log("GCD of 48 and 180:", gcd(48, 180));
console.log("LCM of 15 and 25:", lcm(15, 25));
console.log(`Is 15 a prime number?`, isPrime(15));
console.log(`Is 15 an even number?`, isEven(15));
