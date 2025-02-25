# JavaScript/TypeScript Hilfsfunktionen

Dieses Repository enthält eine Sammlung von Hilfsfunktionen, die in TypeScript implementiert wurden.

## Installation

```bash
npm install
```

## Verwendung

```typescript
import { fibonacci, binarySearch } from './src/functions';

// Funktionen verwenden
const fibResult = fibonacci(10);
const searchResult = binarySearch([1, 2, 3, 4, 5], 3);
```

## Verfügbare Funktionen

### Fibonacci-Funktion

Gibt die n-te Zahl in der Fibonacci-Folge zurück.

**Parameter:**
- `n` (number): Die Position in der Fibonacci-Folge (muss nicht-negativ sein)

**Rückgabewert:**
- Die Fibonacci-Zahl an Position n

**Beispiele:**

```typescript
fibonacci(0); // Gibt 0 zurück
fibonacci(1); // Gibt 1 zurück
fibonacci(2); // Gibt 1 zurück
fibonacci(10); // Gibt 55 zurück
```

**Fehlerbehandlung:**
- Wirft einen Fehler, wenn n negativ ist

### Binäre Suche Funktion

Sucht nach einem Zielwert in einem sortierten Array mit dem Algorithmus der binären Suche.

**Parameter:**
- `array` (number[]): Ein sortiertes Array von Zahlen
- `target` (number): Der zu suchende Wert

**Rückgabewert:**
- Der Index des Zielwerts, wenn gefunden, oder -1, wenn nicht im Array vorhanden

**Beispiele:**

```typescript
binarySearch([1, 3, 5, 7, 9], 5); // Gibt 2 zurück
binarySearch([1, 3, 5, 7, 9], 6); // Gibt -1 zurück
binarySearch([], 5); // Gibt -1 zurück
```

**Zeitkomplexität:**
- O(log n), wobei n die Länge des Arrays ist

## Tests

Führen Sie die Tests mit folgendem Befehl aus:

```bash
npm test
```
