# Jest Setup TypeScript

This Fix comes from this [issue](https://github.com/facebook/jest/issues/9771#issuecomment-803334274) on `facebook/jest` github repo.

## Note about coverageThreshold

If you get this error after having setup jest with typescript

```js
Test suite failed to run

    TypeError: Cannot read property 'errors' of undefined
```

You have to include every `ts` files **not tested** in your 'src' folder like this

```js
"collectCoverageFrom": [
      "<rootDir>/src/**/*.ts",
      "!<rootDir>/src/file1.ts",
      "!<rootDir>/src/file2.ts",
      "!<rootDir>/src/folder/**/*.ts",
    ]
```

## Unit tests

Install all the dependencies:

```sh
npm install
```

Run the tests:

```sh
npm run tests
```

## Joke Time 🤣

What's the object oriented way to become wealthy? Inheritance

How do you comfort a JavaScript bug? You console it

Why did the functional programmer get thrown out of school? He refused to take classes

Why do Java developers wear glasses? Because they can't C#

Why did the JavaScript developer leave? Because she didn't get arrays

How many software engineers does it take to change a light bulb? None, it's a hardware problem

A SQL query goes into a bar, walks up to two tables and asks, "May I join you?"

Why do programmers prefer dark mode? Because light attracts bugs

What do you call a programmer from Finland? Nerdic