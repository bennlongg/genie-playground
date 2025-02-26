# Collection d'Algorithmes en TypeScript

## Vue d'ensemble

Ce dépôt est un projet TypeScript axé sur l'implémentation et le test de divers algorithmes et fonctions mathématiques utilisant des modèles de codage modernes. Il comprend des implémentations d'algorithmes classiques comme la recherche binaire et le tri à bulles, ainsi que d'autres utilitaires tels que le calcul de la séquence de Fibonacci et des opérations mathématiques currifiées.

Le projet démontre plusieurs paradigmes et techniques de programmation :
- Algorithmes récursifs
- Concepts de programmation fonctionnelle (par exemple, le currying)
- Typage statique de TypeScript
- Développement piloté par les tests avec Vitest

## Structure du Dépôt

```
.
├── README.md        # Fichier de documentation (anglais)
├── README_de.md     # Fichier de documentation (allemand)
├── README_es.md     # Fichier de documentation (espagnol)
├── README_fr.md     # Ce fichier de documentation (français)
└── src/             # Répertoire du code source
    ├── functions.ts        # Implémentations principales des algorithmes
    ├── functions.test.ts   # Tests unitaires pour les algorithmes
    └── index.ts            # Exemples d'utilisation
```

### Fichiers Clés

- **src/functions.ts** : Contient l'implémentation de tous les algorithmes et fonctions utilitaires :
  - `fibonacci` : Calcule le n-ième nombre de Fibonacci
  - `binarySearch` : Effectue une recherche binaire sur un tableau trié
  - `bubbleSort` : Trie un tableau en utilisant l'algorithme de tri à bulles
  - `curriedMath` : Une fonction currifiée pour les opérations arithmétiques

- **src/functions.test.ts** : Contient des cas de test complets pour toutes les fonctions implémentées en utilisant Vitest.

- **src/index.ts** : Fournit des exemples pratiques démontrant comment utiliser chaque fonction, mettant particulièrement en évidence la polyvalence de la fonction mathématique currifiée.

## Installation

Clonez le dépôt et installez les dépendances :

```bash
git clone <repository-url>
cd typescript-algorithm-collection
npm install
```

## Exécution des Exemples

Pour exécuter les exemples dans `src/index.ts` :

```bash
npm start
```

## Tests

Ce projet utilise Vitest pour les tests unitaires. Pour exécuter les tests :

```bash
npm test
```

La suite de tests vérifie :
- Le calcul des nombres de Fibonacci
- La fonctionnalité de recherche binaire avec diverses entrées
- L'exactitude du tri à bulles
- Les opérations mathématiques currifiées

## Contribuer

Les contributions sont les bienvenues ! Si vous souhaitez ajouter d'autres algorithmes ou améliorer ceux existants :

1. Forkez le dépôt
2. Créez une branche de fonctionnalité
3. Ajoutez votre code avec les tests appropriés
4. Soumettez une pull request

Veuillez vous assurer que votre code est bien documenté avec des commentaires JSDoc et inclut des cas de test complets.

## Licence

[Licence MIT](LICENSE)
