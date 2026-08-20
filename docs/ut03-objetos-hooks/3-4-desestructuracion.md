# 3.4 Desestructuración

Es otra de las novedades de **ECMAScript6** que facilita la escritura de código es que es posible asignar los valores de un objeto a variables de un modo rápido.

Por ejemplo:

```javascript
let persona = {
    nombre: "Feo",  
    apellido1: "De Verdad",
    apellido2: "De La Buena"
}

let {nombre, apellido1} = persona;
console.log(nombre) // Muestra Feo.
console.log(apellido1); // Muestra De Verdad.
```

De este modo no es necesario usar la nomenclatura de punto para el acceso a valores de un objeto iterable (ni tampoco los corchetes) y siempre funcionará si las variables de destino se llaman igual que las propiedades del objeto iterable. Si es necesario cambiar el nombre a los contenedores de destino es posible realizarlo de este modo:

```javascript
let {nombre: nom, apellido1: cognom1, malnom = "Ninguno"} = persona;
console.log(nom) // Muestra Feo.
console.log(cognom1); // Muestra De Verdad.
console.log(malnom); // Muestra Ninguno.
```

Además, permite utilizar la definición de parámetros por defecto. En este caso la variable malnom no existe en el objeto por lo que se le asigna el valor "Ninguno". Si el objeto tuviera una propiedad con ese nombre le asignaría su valor y no el especificado por
defecto.

Todo esto también funciona con arrays, aunque la asignación a los contenedores de destino se realizará de forma posicional:

```javascript
let sorpresa = ["Luke", "yo" , "soy", "tu", "padre"];
let [nombre, pronombre, verbo] = sorpresa;
console.log(nombre); // Muestra Luke.
console.log(pronombre); // Muestra yo.
console.log(verbo); // Muestra soy.
```

Se puede asignar el resto del array a otro objeto iterable de destino:

```javascript
let sorpresa = ["Luke", "yo" , "soy", "tu", "padre"];
let [nombre, ...resto] = sorpresa;
console.log(nombre); // Muestra Luke.
console.log(resto); // Muestra yo soy tu padre.
```

Al igual que en el caso anterior, la desestructuración resulta muy útil y su manejo simplifica el código, y eso es siempre una buena idea.

Más información [aquí](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).
