# 3.1.5 Objeto predefinido Array

Es un tipo predefinido que, a diferencia de otros lenguajes, es un objeto. Del mismo modo que los tipos básicos, se puede crear de la siguiente manera:

```javascript
let cosas = new Array();
let tresTipos = new Array(11, "Feo", true);
let tresTiposDos = [11, "hola", true];
let longitud = tresTipos.length; // 3
let once = tresTipos[0];
```

Se observa que en *JavaScript* los arrays pueden **contener tipos diferentes**, que el **primer elemento es el cero** y que se obtiene su longitud mediante la propiedad **length** .

Se pueden añadir elementos en la posiciones que se necesite, aunque se recomienda añadir los elementos en posiciones secuenciales. Si se accede a un elemento que no contiene ningún dato se obtendrá `undefined`.

```javascript
tresTipos[3] = 15;
tresTipos[tresTipos.length] = "Bruce";
let longitud2 = tresTipos.length; // 5
tresTipos[8] = "Wayne";
let longitud3 = tresTipos.length; // 9
let nada = tresTipos[7]; // undefined
```

Al trabajar con una cadena de texto una operación que se utiliza mucho es dividirla en trozos a partir de un separador. Al utilizar el método `String.split(separador)` devolverá un array de cadenas con cada uno de los trozos.

```javascript
let frase = "Yo soy Batman.";
let arrayPalabras = frase.split(" ");
let yo = arrayPalabras[0];
let soy = arrayPalabras[1];
let Batman = arrayPalabras[2];
```

Algunos de los métodos más importantes del objeto array:

- `join([separador])`, devuelve una cadena con todos los elementos del array separados por el texto que se incluya en separador,
- `push(elemento)`, añade al final del array elemento,
- `pop()`, devuelve y elimina el último elemento del array,
- `reverse()`, invierte el orden de los elementos de un array,
- `sort()`, ordena los elementos de un array alfabéticamente,
- `slice(inicio, [final])`, devuelve los elementos de un array comprendidos entre inicio y final. Si no
  se indica final, se toma hasta el último elemento del array,
  - `find()`, devuelve la primera coincidencia del elemento que se busca.

En este enlace se encuentra una guía completa de todos los métodos de su prototipo: [aquí](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array).

#### Recorrer un `Array`

*JavaScript* ofrece métodos para recorrer un array de forma rápida y sencilla. Los siguientes métodos aceptan una función *callback* como primer argumento e invocan dicha función para cada elemento del array. La función que se le pasa a los métodos reciben siempre tres parámetros:

- el **valor** del elemento del array,
- el **índice** del elemento y
- el propio **array**.

La mayoría de las veces sólo es necesario utilizar el valor. Los métodos más utilizados son:

- `forEach(función)`, ejecuta la función para cada elemento del array,
- `map(función)`, ejecuta la función para cada elemento del array, y el nuevo valor se inserta como un elemento del nuevo array que devuelve,
- `every(función)`, `true` si la función se cumple para todos los valores, `false` en caso contrario,
- `some(función)`, `true` si la función se cumple para al menos un valor, `false` si no se cumple para ninguno de los elementos,
- `filter(función)`, devuelve un nuevo array con los elementos que cumplen la función,
- `reduce(función)`, ejecuta la función para un acumulador y cada valor del array (de inicio a fin) se reduce a un único valor.

Por ejemplo, un uso de `map()`:

```javascript
let heroes = ["Batman", "Superman", "Ironman", "Thor"];
function mayus(valor, indice, array) {
  return valor.toUpperCase();
}
let heroesMayus = heroes.map(mayus);
  console.log(heroesMayus); // ["BATMAN", "SUPERMAN", "IRONMAN", "THOR"]
```

Mostrar todos los elementos del array con `forEach()`:

```javascript
let heroes = ["Batman", "Superman", "Ironman", "Thor"];
heroes.forEach(function (valor, indice) {
  console.log("[", indice, "]=", valor);
});
```

Comprobar si todos los elementos de un array son cadenas con el método `every()`. Para ello se crea una función `esCadena` que se usará como *callback*:

```javascript
function esCadena(valor, indice, array) {
  return typeof valor === "string";
}
console.log(frutas.every(esCadena)); // true
```

Para un array con datos mezclados con textos y números, es posible filtrar los elementos que son cadenas con `filter()`:

```javascript
let mezcladillo = [1, "dos", 3, "cuatro", 5, "seis"];
console.log(mezcladillo.filter(esCadena)); // ["dos", "cuatro", "seis"]
```

Finalmente, mediante el método `reduce()` se puede realizar un cálculo sobre los elementos del array. Por ejemplo, contar cuantas veces aparece una ocurrencia dentro de un array o sumar sus elementos. Para ello la función recibe un parámetro extra que funciona a modo de acumulador, además de los parámetros valor, indice y array de costumbre:

```javascript
let numeros = [1, 3, 5, 7, 9];
let suma = numeros.reduce((acumulador, valor, indice, array) => {
  return acumulador + valor;
});
```

En el primer paso, como no hay valor inicial, se pasan el primer y el segundo elemento del array (los valores 1 y 3). En siguientes iteraciones, el valor acumulador es lo que devuelve el código, y valor es el siguiente elemento del array. De este modo, estamos cogiendo el valor actual y sumándoselo al valor anterior (el total acumulado).

Aunque parezcan el mismo método, `forEach()` y `map()` tienen una diferencia fundamental y es que el segundo devuelve un valor tras la ejecución de su *callback* pero no así el primero:

```javascript
let feo = [1, 2, 3, 4];
nuevo = [];
nuevo = feo.forEach((valor) => valor * 5);
console.log(nuevo); //undefined
nuevo = feo.map((valor) => valor * 5);
console.log(nuevo); // [5, 10, 15, 20]
```

#### Uso de array en programación reactiva

Cuando se trabaja con **React** hay que tener presente que los componentes y los estados (que se verá en lo sucesivo) deben trabajar como funciones puras: no deben modificar directamente los parámetros recibidos. Por
eso, en **React**, es habitual clonar los parámetros para poder modificarlos y devolverlos una vez producido el cambio. Hay que tener muy presente este hecho.

```javascript
const feos = ["Rodrigo", "Juan", "Artura", "Javier"];

// Recorrer un objeto (no se modifica pero hay que utilizar map).
const feos2 = feos.map((feo) => {
console.log(feo);
  return feo;
});

console.log(feos2);

// Añadir un nuevo valor al objeto (uso de spread operator).
const nuevoFeo = "Juan Carlos";
const feos3 = [...feos, nuevoFeo];
console.log(feos3);

// Eliminar un elemento del objeto (filter).
const feos4 = feos3.filter((feo) => {
  return feo !== nuevoFeo;
});

console.log(feos4);

// Actualizar un elemento del objeto.
const nuevoValor = "Arturo";
const valorCambiar = "Artura";
const feos5 = feos.map((feo) => {
  if (feo === valorCambiar) {
    return nuevoValor;
  } else {
    return feo;
  }
});

console.log(feos5);
```
