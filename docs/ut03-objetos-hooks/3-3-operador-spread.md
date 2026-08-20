# 3.3 Operador spread (...)

Se trata de un operador integrado en **ECMAScript6** y se utiliza para distribuir los elementos de un objeto iterable (cadena de texto, array o cualquier cosa que se pueda recorrer) dentro de otro contenedor (también iterable). Es algo muy práctico ya que permite realizar operaciones sobre objetos iterables sin necesidad de conocer su  prototipo.

Por ejemplo permiten copiar arrays:

```javascript
let animales = ['perro', 'gato', 'feo'];
console.log(animales); // Muestra 'perro', 'gato', 'feo'.
let copiaDeAnimales = [...animales];
console.log(copiaDeAnimales); // Muestra 'perro', 'gato', 'feo'.
Añadir elementos a un objeto:
let persona = {
    nombre: "Feo",  
    apellido1: "De Verdad",
}

let persona2 = { ...persona, 'apellido2': "De la buena"}
console.log(persona2);
```

Concatenar arrays:

```javascript
let numeros = [1, 2, 3];
let meses = ['enero', 'febrero', 'marzo'];
console.log([...numeros, ...meses]);
```

Pasar parámetros a funciones:

```javascript
let numeros = [1, 2, 3];
const sumaNumeros = (a, b, c) => {
    console.log(a + b + c);
}

sumaNumeros(...numeros); // Muestra 6.
```

Conviene familiarizarse con su uso ya que simplificará el código escrito. Amplia la información sobre este operador [aquí](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax).
