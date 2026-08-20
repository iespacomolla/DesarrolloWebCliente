# 2.9.6 El pseudoarray arguments

Además de los parámetros declarados, cada función recibe siempre dos parámetros adiciones: `this` y `arguments`. El parámetro `this` será tratado con detalle en unidades posteriores.

El parámetro adicional `arguments` da acceso a todos los argumentos recibidos mediante la invocación de la función, incluso los argumentos que sobraron y no se asignaron a parámetros. Esto permite escribir funciones que tratan un número indeterminado de parámetros.

Estos datos se almacenan en una estructura similar a un array, aunque realmente no lo sea. Pese a ello, sí que tiene la propiedad `length` para obtener el número de parámetros y podemos acceder a cada elemento mediante la notación `arguments[x]`, pero carece del resto de métodos que ofrecen los arrays.

Por ejemplo, se puede crear una función que sume un número indeterminado de parámetros:

```javascript
var suma = function() {
    var i, s=0;
    for (i=0; i < arguments.length; i+=1) {
        s += arguments[i];
    }
    return s;
};

console.log(suma(1, 2, 3, 4, 5)); // 15
```
