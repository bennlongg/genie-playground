# Vite + VitestThis is a collection of test cases for various JavaScript/TypeScript functions, along with example **Vitest** features like **Mocking** and **Snapshots Testing**.

## Overview

- This repository tests various JavaScript/TypeScript utility functions to demonstrate features like recursion, asynchronous behavior, error handling, and more.
- Vitest is used as the primary testing framework to showcase test cases and their expected outcomes.
- Examples of function implementation include curriedMath, fibonacci, bubbleSort, binarySearch, and more.
- Output messages and comments provide additional context throughout the test suite.
- Future functions/tests can be added to expand coverage.

`functions.ts` implementations with test cases in `functions.test.ts`
Files: `src/functions.ts` and `src/functions.test.ts`
  
- fibonacci function with recursion + error handling
- curriedMath function +  (demo for multiple tests/cases )
- bubbleSort ( sorting )
- binarySearch ( with divide and conquer repeating condition )
- etc 

( You can Add your own functions and test cases )

## cloned from 'Vitest + Vite' template

[ From Vitest](https://vitest.dev/)
[ From Vitejs](https://vitejs.dev/)

### Cloning from Git

```bash
git clone git@github.com:Ahmed12288/vite-vitest-ts-jasmine-mocha-demo.git
```

### install

```bash
pnpm install
```

### build

```bash
vite build
```

### serve on http://127.0.0.1:4173/

```bash
vite preview
```

### test


```bash
vitest run
```

### Test Output explanation

to be added


## orignal README generated with vite v4.1.3 


This is a demo repository showcasing JavaScript/TypeScript functions with test cases using **Vitest**.

**Update Motivations**:
- Added examples like fibonacci and curriedMath to demonstrate various function types.
- Introduced new features such as mocking and snapshot testing in **Vitest**.
- Improved alignment with [Vitest best practices](https://vitest.dev/guide/best-practices.html).



This is a [Vite](https://vitejs.dev) project bootstrapped with `create-vite`.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/)

## Type Support For `.vue` Imports in TS

TypeScript [does not provide support](https://github.com/microsoft/TypeScript/issues/27302) for handling `.vue` imports by default, so it is necessary to include the following type declaration in a project:

```ts
// src/shims-vue.d.ts

/// <reference types="vite/client" />
```

Due to Vite 2 and Vue 3's modular architecture, the default type export for an imported `.vue` file is `Component`, which can be used directly in a TSX component like so:

```tsx
// src/components/HelloWorld.tsx

import { defineComponent } from 'vue'
import { Component } from 'vue-router/types/router'

export default defineComponent({
  components: {
    HelloWorld: Component(() =>
      import('./HelloWorld.vue')
    )
  },
  // ...
})
```

Alternatively, `withDefaultProps` can be used to create a higher-order component with default prop values. This is useful for supplying default props to `HelloWorld` without needing to know its implementation details.

## Platform detection

 The default platform used by **Vitest** is `web`. You can detect platform
 with `import.meta.env.DEV`, `import.meta.env.SSR`, and `import.meta.env.MODE`.

 **Vitest** will replace `import.meta.hot` and `import.meta.env` with empty
 objects. If you want to disable SSR imports detection, set
 `SSR_DETECT` environment variable to `false` or `0`. You can also disable it
 with `import.meta.env.VITE_SSR=false`.