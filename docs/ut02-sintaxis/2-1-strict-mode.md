# 2.1 Strict mode

## Strict mode

El modo estricto elimina características del lenguaje, lo que simplifica los programas y reduce la cantidad de errores que pueden contener. Por ejemplo, usar variables que no se han declarado previamente, declarar funciones donde algún parámetro está repetido, un objeto donde dos propiedades tengan el mismo nombre, etcétera. De este modo se pueden evitar ciertas características que han sido muy criticadas para este lenguaje.

Para activar el modo estricto hay que introducir la cadena ***use strict*** como primera línea del ámbito que necesite esta característica. Si ese ámbito es el global habrá que incluirlo en la primera línea del fichero que contiene el código.

Por ejemplo, si sólo es necesario activar el modo dentro de una función se escribirá:

```javascript
function modoEstricto() {
    "use strict";
    // resto de la función
}
```

Esto significa que el código interno de la función se ejecutará con el subconjunto estricto del lenguaje, mientras que otras funciones puede que hagan uso del conjunto completo.

El objetivo es que en el futuro sólo se soportará el modo estricto, con lo que ES5 fue una versión transicional en la que se anima (pero no obliga) a escribir código en modo estricto.
