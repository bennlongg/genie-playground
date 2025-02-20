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

## joke

What's the object oriented way to become wealthy? Inheritance

Another joke for fun? How do you comfort a JavaScript bug? You console it