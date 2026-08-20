# 2.9.3 Funciones flecha (arrow functions)

Una función flecha (arrow function) es una alternativa compacta al uso de funciones declaración y anónimas. En realidad es una reducción de las primeras. Este tipo de funciones tienen sus limitaciones y deben ser utilizadas sólo en algunos contextos donde sean útiles y no son adecuadas para ser utilizadas como métodos.

Soporta varias sintaxis y son utilizados como callbacks o en comunicaciones asíncronas con AJAX, pero en este apartado se tratará para el paso de funciones como parámetro.

```javascript
() => {sentencias} // Sin parámetros.
(parametro1, parametro2, ...) => {sentencias} // Con parámetros.
parámetro => sentencia // Versión simplificada (evitar a toda costa).
```

La función `calculando` del ejemplo del apartado anterior recibe una función como parámetro. JavaScript permite incluir el código de la función parámetro en la llamada:

```javascript
const epsilon = calculando(3, 4, function suma(alfa, beta) {
    return alfa + beta;
});
```

También es posible utilizar funciones anónimas si la función parámetro sólo se utiliza una vez o si está diseñada para esta tarea en concreto:

```javascript
const epsilon = calculando(3, 4, function (alfa, beta) {
    return alfa + beta;
});
```

Para simplificar todo esto, es posible utilizar las funciones flecha compactando el código:

```javascript
const epsilon = calculando(3, 4, (alfa, beta) => { alfa + beta; });
```

Se elimina las palabras reservadas `function` y `return` y además, al ser una única línea, es posible quitar las llaves aunque al igual que con el punto y coma siempre es recomendable dejarlas.

El uso de las funciones flecha se utilizará de forma profusa a medida que se avance en el módulo. Es buena idea familiarizarse con ellas y tener en cuenta varios aspectos:

- para empezar, la sintaxis de las funciones puede resultar más confusa para ciertas personas e incluso hacer que sean más difíciles de leer al estar escritas de forma menos natural,
- ``this`` funciona de un modo diferente: su valor no puede ser modificado dentro de la función (funciones puras),
- **no pueden ser utilizadas como constructores** del mismo modo que el resto de funciones. Si se utiliza la palabra reservada `new` se obtendrá un error. Estas funciones no tienen una propiedad `prototype` u otros métodos internos,
- **no disponen de una variable interna definida como `arguments`** como sí tienen otras funciones. Hay que recordar que `arguments` es un pseudo-array que permite obtener los argumentos de una función, algo útil en caso de que una función tenga un número indeterminado de argumentos.