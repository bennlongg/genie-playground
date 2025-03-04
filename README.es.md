# genie-playground

¿Por qué los programadores prefieren el modo oscuro? ¡Porque la luz atrae a los bugs!

Este repositorio contiene varias funciones de utilidad implementadas en TypeScript:

- Generador de secuencia de Fibonacci
- Algoritmo de búsqueda binaria
- Implementación de ordenamiento burbuja
- Funciones matemáticas currificadas para operaciones encadenadas

## Uso

Importa las funciones que necesites desde la biblioteca y úsalas en tu código.

```typescript
import { fibonacci, binarySearch, bubbleSort, curriedMath } from './functions';

// Calcular número de Fibonacci
const fib10 = fibonacci(10); // 55

// Buscar un valor en un array ordenado
const index = binarySearch([1, 2, 3, 4, 5], 3); // 2

// Ordenar un array usando bubble sort
const sorted = bubbleSort([5, 3, 1, 4, 2]); // [1, 2, 3, 4, 5]

// Usar matemáticas currificadas para operaciones encadenadas
const result = curriedMath(5).add(3).multiply(2).value(); // 16
```

## Contribuir

Si deseas contribuir a este proyecto, por favor lee nuestra [guía de contribución](CONTRIBUTING.md) para obtener información detallada sobre cómo configurar el entorno de desarrollo, nuestros estándares de codificación, y el proceso para enviar solicitudes de cambios.

Apreciamos todas las contribuciones, desde correcciones de errores y mejoras en la documentación hasta nuevas funcionalidades.

## Licencia

Este proyecto está licenciado bajo la licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles.

## Contacto

Si tienes preguntas o sugerencias, no dudes en:
- Abrir un issue en GitHub
- Contactar al equipo de mantenimiento en [email@example.com](mailto:email@example.com)

## Traducciones

Este documento está disponible en:
- [English (Inglés)](README.md)
- Español (actual)
