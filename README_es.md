# Colección de Algoritmos en TypeScript

## Descripción General

Este repositorio es un proyecto en TypeScript enfocado en la implementación y prueba de varios algoritmos y funciones matemáticas utilizando patrones de codificación modernos. Incluye implementaciones de algoritmos clásicos como búsqueda binaria y ordenamiento burbuja, así como otras utilidades como el cálculo de la secuencia de Fibonacci y operaciones matemáticas mediante currying.

El proyecto demuestra varios paradigmas y técnicas de programación:
- Algoritmos recursivos
- Conceptos de programación funcional (por ejemplo, currying)
- Tipado estático de TypeScript
- Desarrollo dirigido por pruebas usando Vitest

## Estructura del Repositorio

```
.
├── README.md        # Archivo de documentación (inglés)
├── README_de.md     # Archivo de documentación (alemán)
├── README_es.md     # Este archivo de documentación (español)
└── src/             # Directorio de código fuente
    ├── functions.ts        # Implementaciones principales de algoritmos
    ├── functions.test.ts   # Pruebas unitarias para los algoritmos
    └── index.ts            # Ejemplos de uso
```

### Archivos Principales

- **src/functions.ts**: Contiene la implementación de todos los algoritmos y funciones de utilidad:
  - `fibonacci`: Calcula el n-ésimo número de Fibonacci
  - `binarySearch`: Realiza una búsqueda binaria en un array ordenado
  - `bubbleSort`: Ordena un array utilizando el algoritmo de ordenamiento burbuja
  - `curriedMath`: Una función currificada para operaciones aritméticas

- **src/functions.test.ts**: Contiene casos de prueba completos para todas las funciones implementadas usando Vitest.

- **src/index.ts**: Proporciona ejemplos prácticos que demuestran cómo usar cada función, destacando especialmente la versatilidad de la función matemática currificada.

## Instalación

Clone el repositorio e instale las dependencias:

```bash
git clone <repository-url>
cd typescript-algorithm-collection
npm install
```

## Ejecutando los Ejemplos

Para ejecutar los ejemplos en `src/index.ts`:

```bash
npm start
```

## Pruebas

Este proyecto utiliza Vitest para pruebas unitarias. Para ejecutar las pruebas:

```bash
npm test
```

El conjunto de pruebas verifica:
- Cálculo de números de Fibonacci
- Funcionalidad de búsqueda binaria con varias entradas
- Corrección del ordenamiento burbuja
- Operaciones matemáticas currificadas

## Contribuir

¡Las contribuciones son bienvenidas! Si desea agregar más algoritmos o mejorar los existentes:

1. Haga un fork del repositorio
2. Cree una rama de características
3. Agregue su código con las pruebas apropiadas
4. Envíe una solicitud de pull

Por favor, asegúrese de que su código esté bien documentado con comentarios JSDoc e incluya casos de prueba completos.

## Licencia

[Licencia MIT](LICENSE)
