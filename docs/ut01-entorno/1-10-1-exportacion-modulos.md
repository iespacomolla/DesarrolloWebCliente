# 1.10.1 Exportación de módulos

### Exportación de módulos

Un fichero *JavaScript* no tiene módulo de exportación si no se usa un `export`. Existen varias formas de exportar datos a través de esta palabra reservada:

- `export { feo }`, crea el módulo de exportación (si es la primera vez que se ejecuta el código) y añade el elemento *feo*,
- `export { feo1, feo2, feo3 }`, añade los elementos ***feo1*** , ***feo2*** y ***feo3*** al módulo de exportación,
- `export * from './feos.js'`, añade todos los elementos del módulo existente en ese fichero al módulo de exportación.

Resulta más intuitivo exportar módulos al final del fichero. Un ejemplo:

```javascript
// También se puede usar export function sumar.
const sumar = (x, y) => {
  return x + y;
};

const restar = (x, y) => {
  return x - y;
};
export { sumar };
export { restar };
export { sumar as add }; // Se añade el nombre add a la funcion sumar.
```
