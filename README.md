# JavaScript Utilities Library

A collection of useful JavaScript/TypeScript utilities including sorting algorithms and color manipulation functions.

## Features

- **Sorting Algorithms**: Various sorting implementations with O(n²) to O(n log n) time complexities
  - Bubble Sort
  - Selection Sort
  - Insertion Sort
  - Merge Sort
  - Quick Sort
  - Heap Sort
  - Radix Sort (for non-negative integers)
- **Color Utilities**: Functions for manipulating and generating color variations
  - Generate multiple shades from a hex color
- **Interactive UI**: Color picker with live shade generation

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/javascript-utilities.git
   cd javascript-utilities
   ```

2. Install dependencies:
   ```bash
   npm install
   # or with yarn
   yarn install
   ```

### Running the Project

To start the development server:

```bash
npm start
# or with yarn
yarn start
```

This will launch the application in your default browser. If it doesn't open automatically, visit `http://localhost:3000`.

### Running Tests

To run the test suite:

```bash
npm test
# or with yarn
yarn test
```

## Usage

### Sorting Algorithms

```typescript
import { 
  bubbleSort, 
  mergeSort, 
  quickSort 
} from './src/sorting/sortingAlgorithms';

const unsortedArray = [5, 3, 8, 1, 9, 4];

// Use bubble sort (O(n²))
const bubbleSorted = bubbleSort(unsortedArray);
console.log(bubbleSorted); // [1, 3, 4, 5, 8, 9]

// Use merge sort (O(n log n))
const mergeSorted = mergeSort(unsortedArray);
console.log(mergeSorted); // [1, 3, 4, 5, 8, 9]

// Use quick sort (O(n log n) average case)
const quickSorted = quickSort(unsortedArray);
console.log(quickSorted); // [1, 3, 4, 5, 8, 9]
```

### Color Utilities

```typescript
import { generateShadesFromHex } from './src/utils/colorUtils';

// Generate 5 shades (default)
const blueShades = generateShadesFromHex('#3498db');
console.log(blueShades);
// Output: ['#152a45', '#214673', '#3498db', '#7cbce8', '#c5dff4']

// Generate custom number of shades
const redShades = generateShadesFromHex('#ff0000', 7);
console.log(redShades);
// Output: ['#330000', '#660000', '#990000', '#ff0000', '#ff6666', '#ffb3b3', '#ffffff']
```

### Color Picker UI

To use the color picker UI in your application:

```typescript
import { createColorPickerUI } from './src/ui/colorPickerUI';

// Add a container to your HTML
// <div id="color-picker-container"></div>

// Initialize the color picker
const cleanupFunction = createColorPickerUI('color-picker-container', '#3498db', 7);

// Call cleanup when component unmounts (if using a framework)
// cleanupFunction();
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
