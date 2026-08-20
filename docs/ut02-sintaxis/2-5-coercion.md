# 2.5 Coerción


## Coerción

JavaScript es un lenguaje de tipado blando, es decir, al declarar una variable no se le asigna un tipo aunque internamente sí maneje tipos de datos.

En determinados momentos resulta necesario convertir un valor de un tipo a otro. Esto en JavaScript se llama coerción y puede ocurrir de forma **implícita** o podemos forzarlo de forma **explícita**.

```javascript
*let numero = 5;*
console.log(numero);
```

En este código ocurre una coerción implícita de número (que es de tipo number) a un tipo string, de modo que puede ser impreso por consola. Se podría realizar la conversión de forma explícita de la siguiente forma:

```javascript
console.log(numero.toString());
```

Las coerciones implícitas ocurren muy a menudo en JavaScript aunque muchas veces no se sea conscientes de ello. Resulta muy importante entender cómo funcionan para poder deducir cuál será el resultado de una comparación.

```javascript
let a = "2", b = 5;
console.log( typeof a + " " + typeof b); // string number
console.log( a + b ); // Muestra 25.
```

En los lenguajes de tipado duro (como Java) se prohíbe realizar operaciones entre distintos tipos de datos. Sin embargo, *JavaScript* lo permite siguiendo una serie de reglas:

- tiene el operador `===` y `!==` para realizar comparaciones estrictas (identidad), pero no posee esos operadores para desigualdades (`<`, `>`, `<=`, `>=`),
- si es posible, *JavaScript* prefiere hacer coerciones a tipo number por encima de otros tipos básicos. Por ejemplo, la expresión `"15" > 100` se resolverá como `true` porque cambiará `15` de tipo `string` por `15` de tipo `number`. Si se convierte `15` a `string`, al compararlo con `100` la expresión se resolvería como `false`,
- a la hora de hacer coerción a `boolean` los siguientes valores se convertirán en `false`: `undefined`, `null`, `0`, cadena vacía y `NaN`. El resto de valores se convertirán en `true`.

Ejemplo donde no se hace coerción:

```javascript
var x = "10";
var y = "9";
console.log(x > y);  // true, los dos son String y los compara como cadena.
```

Ejemplo de coerción con undefined:

```javascript
let altura; // Variable no definida.
console.log(altura ? true : false); // Al no estar definido, false.
```

Al realizar comparaciones, si se usa `==` o `!=` para comparar los datos, *JavaScript* realiza coerción. Si se quiere que la comparación no convierta tipos y sólo sea cierta si son del mismo tipo, se debe usar `===` o `!==`. Esta es una buena práctica muy recomendada para que estas conversiones no jueguen malas pasadas.
