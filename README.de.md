# genie-playground

## Ein kleiner Programmierwitz

Warum benutzen Programmierer keine Brillen? Sie können CSS nicht sehen!

---

Warum bevorzugen Programmierer den dunklen Modus? Weil Licht Bugs anzieht!

Dieses Repository enthält verschiedene Hilfsfunktionen, die in TypeScript implementiert sind:

- Fibonacci-Sequenzgenerator
- Binärer Suchalgorithmus
- Bubble-Sort-Implementierung
- Curried-Mathematikfunktionen für verkettete Operationen

## Verwendung

Importieren Sie die benötigten Funktionen aus der Bibliothek und verwenden Sie sie in Ihrem Code.

```typescript
import { fibonacci, binarySearch, bubbleSort, curriedMath } from './functions';

// Fibonacci-Zahl berechnen
const fib10 = fibonacci(10); // 55

// Nach einem Wert in einem sortierten Array suchen
const index = binarySearch([1, 2, 3, 4, 5], 3); // 2

// Ein Array mit Bubble-Sort sortieren
const sorted = bubbleSort([5, 3, 1, 4, 2]); // [1, 2, 3, 4, 5]

// Verwenden von Curried-Mathematik für verkettete Operationen
const result = curriedMath(5).add(3).multiply(2).value(); // 16
```

## Beitragen

Wir begrüßen Beiträge zum genie-playground Projekt! Ob Sie Fehler beheben, die Dokumentation verbessern oder neue Funktionen hinzufügen, Ihre Hilfe wird geschätzt.

Bitte lesen Sie unsere [Beitragsrichtlinien](CONTRIBUTING.md) für detaillierte Informationen zur Einrichtung der Entwicklungsumgebung, zu Codierungsstandards, Testverfahren und zum Prozess für die Einreichung von Pull-Requests.

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert - siehe die [LICENSE](LICENSE)-Datei für Details.

## Kontakt

Wenn Sie Fragen oder Vorschläge haben, können Sie gerne:
- Ein Issue auf GitHub eröffnen
- Das Wartungsteam unter [email@example.com](mailto:email@example.com) kontaktieren

## Übersetzungen

Dieses Dokument ist verfügbar in:
- [English (Englisch)](README.md)
- [Español (Spanisch)](README.es.md)
- Deutsch (aktuell)
