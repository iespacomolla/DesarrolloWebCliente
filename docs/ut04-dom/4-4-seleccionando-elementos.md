# 4.4 Seleccionando elementos

Mediante el **DOM** se pueden usar dos métodos para seleccionar un determinado elemento. Para seleccionar un conjunto de elementos, por ejemplo todos los párrafos del documento, es necesario utilizar el método `document.getElementsByTagName(nombreDeTag)`. En cambio, si se accede a un elemento por su `id` (que debería ser único), se usará el método `document.getElementById(nombreDeId)`.

```javascript
let pElements = document.getElementsByTagName("p"); // NodeList

console.log(pElements.length); // 3

console.log(pElements\[0\]); // Primer párrafo

let divpElement = document.getElementById("tres");

console.log(divpElement); // "<p id="tres"></p>Tercer párrafo dentro de un div </p>"
```

Destacar que si se necesita un único elemento se selecciona mediante su `id`, mientras que si se necesita más de un elemento se selecciona mediante su etiqueta (`tag`). Con la segunda opción se obtiene un `NodeList` que es un elemento iterable y corresponde con la representación de los elementos del **DOM** seleccionados.

El método de `getElementsByTagName`es antiguo y no se suele utilizar. En el año 2013 se definió el Selector API que define los métodos `querySelectorAll` y `querySelector`. Conviene señalar que `getElementById` es casi cinco veces más rápido que `querySelector`. Estos selectores permiten obtener elementos mediante consultas `CSS` que ofrecen mayor flexibilidad:

```javascript
let pElements = document.querySelectorAll("p");
let divpElement = document.querySelector("div p");
let tresElement = document.querySelector("#tres");
```
