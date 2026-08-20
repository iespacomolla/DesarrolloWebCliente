# 2.7.4 Operadores lógicos

Los operadores lógicos se utilizan para el procesamiento de los valores booleanos. A su vez el valor que devuelven también es booleano: `true` o `false`.

  Operador | Descripción
  -- | --
  `&&` | Y lógica. El valor de devolución es `true` cuando ambos operandos son verdaderos.
  `\|\|` | O lógica. El valor de devolución es `true` cuando alguno de los operandos es verdadero o lo son los dos.
  `!` | No lógico. Si el valor es `true`, devuelve `false` y si el valor es `false`, devuelve `true`.

Se muestra el resultado de distintas operaciones realizadas con operadores lógicos.

```javascript
console.log("El resultado de la expresión 'false&&false' es igual a "+(false&&false)); 
console.log("El resultado de la expresión 'false&&true' es igual a "+(false&&true));
console.log("El resultado de la expresión 'true&&false' es igual a "+(true&&false));
console.log("El resultado de la expresión 'true&&true' es igual a "+(true&&true));
console.log("El resultado de la expresión 'false||false' es igual a "+(false||false));
console.log("El resultado de la expresión 'false||true' es igual a "+(false||true));
console.log("El resultado de la expresión 'true||false' es igual a "+(true||false));
console.log("El resultado de la expresión 'true||true' es igual a "+(true||true));
console.log("El resultado de la expresión '!false' es igual a "+(!false));
```

Más información sobre comparadores y expresiones [aquí](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators).
