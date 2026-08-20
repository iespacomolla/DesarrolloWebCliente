# 1.10.2 Importación de módulos

### Importación de módulos

La palabra clave `import` permite cargar un módulo de exportación desde otro fichero para utilizar dichos elementos en el código. Existen varias formas de importar código:

- `import { feo } from \'./feos.js'`, importa el elemento `nombre` de `feos.js`
- `import { feo1, feo2, feo3 } from './feos.js'`, importa los elementos indicados desde
  `feos.js`,
- `import * as objetoFeo from './feos.js'`, importa todos los elementos de `feos.js` en el objeto `objetoFeo`,
- `import './feos.js'`, no importa elementos sólo ejecuta el código de `feos.js`.

Es posible renombrar elementos con `import` utilizando `as` seguido del nuevo nombre, como ocurría en `export`.

Tras la importación será posible el uso de las funciones, objetos, clases o valores como si se hubieran declarado en el mismo fichero.
