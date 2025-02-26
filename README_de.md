# TypeScript-Algorithmensammlung

## Überblick

Dieses Repository ist ein TypeScript-Projekt, das sich auf die Implementierung und das Testen verschiedener Algorithmen und mathematischer Funktionen mit modernen Programmiermustern konzentriert. Es enthält Implementierungen klassischer Algorithmen wie Binärsuche und Bubble-Sort sowie andere Hilfsprogramme wie die Berechnung der Fibonacci-Folge und Currying-Operationen für mathematische Funktionen.

Das Projekt demonstriert verschiedene Programmierparadigmen und -techniken:
- Rekursive Algorithmen
- Konzepte der funktionalen Programmierung (z.B. Currying)
- Statische Typisierung mit TypeScript
- Testgetriebene Entwicklung mit Vitest

## Repository-Struktur

```
.
├── README.md        # Diese Dokumentationsdatei (englisch)
├── README_de.md     # Diese Dokumentationsdatei (deutsch)
└── src/             # Quellcode-Verzeichnis
    ├── functions.ts        # Kernimplementierungen der Algorithmen
    ├── functions.test.ts   # Unit-Tests für Algorithmen
    └── index.ts            # Verwendungsbeispiele
```

### Wichtige Dateien

- **src/functions.ts**: Enthält die Implementierung aller Algorithmen und Hilfsfunktionen:
  - `fibonacci`: Berechnet die n-te Fibonacci-Zahl
  - `binarySearch`: Führt eine binäre Suche in einem sortierten Array durch
  - `bubbleSort`: Sortiert ein Array mit dem Bubble-Sort-Algorithmus
  - `curriedMath`: Eine Currying-Funktion für arithmetische Operationen

- **src/functions.test.ts**: Enthält umfassende Testfälle für alle implementierten Funktionen mit Vitest.

- **src/index.ts**: Bietet praktische Beispiele, die zeigen, wie jede Funktion verwendet wird, insbesondere die Vielseitigkeit der Currying-Mathematikfunktion.

## Installation

Klonen Sie das Repository und installieren Sie die Abhängigkeiten:

```bash
git clone <repository-url>
cd typescript-algorithm-collection
npm install
```

## Ausführen der Beispiele

Um die Beispiele in `src/index.ts` auszuführen:

```bash
npm start
```

## Testen

Dieses Projekt verwendet Vitest für Unit-Tests. Um die Tests auszuführen:

```bash
npm test
```

Die Test-Suite überprüft:
- Berechnung der Fibonacci-Zahlen
- Funktionalität der binären Suche mit verschiedenen Eingaben
- Korrektheit des Bubble-Sort-Algorithmus
- Currying-Mathematikoperationen

## Beitragen

Beiträge sind willkommen! Wenn Sie weitere Algorithmen hinzufügen oder bestehende verbessern möchten:

1. Forken Sie das Repository
2. Erstellen Sie einen Feature-Branch
3. Fügen Sie Ihren Code mit entsprechenden Tests hinzu
4. Reichen Sie einen Pull-Request ein

Bitte stellen Sie sicher, dass Ihr Code gut mit JSDoc-Kommentaren dokumentiert ist und umfassende Testfälle enthält.

## Lizenz

[MIT-Lizenz](LICENSE)
