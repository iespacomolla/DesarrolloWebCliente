# 2.3 Hoisting

## Hoisting

Una cosa muy interesante de los lenguajes débilmente tipados e interpretados es el concepto de ***hoisting***, el cual eleva las
declaraciones encontradas en un bloque a la primera línea. Esta característica no sólo funciona con variables, sino también con
funciones declaración (como se verá en lo sucesivo).

Si se escribe el siguiente código:

```javascript
"use strict";
var a = "global";
console.log(b); // undefined
var b = 5;
```

La variable `b` no se había declarado y pese a ello, aún usando el modo estricto, el intérprete no lanza ninguna excepción porque la declaración se eleva al principio del bloque, no así la asignación, que permanece en su lugar y por eso no toma el valor `5`, sino `undefined`.
