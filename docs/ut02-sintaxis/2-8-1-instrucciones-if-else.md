# 2.8.1 Alternatnivas if/else

#### Alternativa `if/else`

Para controlar el flujo de información en los programas *JavaScript* existen una serie de estructuras condicionales y bucles que permiten alterar el orden secuencial de ejecución. Estas son las instrucciones `if` y `else`.

La instrucción `if` permite la ejecución de un bloque de instrucciones u otro en función de una condición.

```javascript
if (condición) {
    // Bloque de instrucciones que se ejecutan si la condición se cumple.
}
else {
    // Bloque de instrucciones que se ejecutan si la condición no se cumple.
}
```

Las llaves pueden omitirse si el bloque de instrucciones contiene una sola línea. De igual modo es posible omitir el punto y coma del final de esa instrucción. Ambas acciones **no son recomendables** ya que , en ocasiones, esto no puede realizarse y puede ocasionar algunos problemas.

Puede existir una instrucción `if` que no contenga la parte `else`.

```javascript
let diaSem;
diaSem=prompt("Introduce el día de la semana ", "");
if (diaSem === "domingo")
{
    console.log("Hoy es festivo");
}
else // Al no tener { }, es un "bloque de una instrucción".
    console.log("Hoy no es domingo, a descansar!!");

let edadAna,edadLuis;
// Se usa parseInt para convertir a entero.
edadAna=parseInt(prompt("Introduce la edad de Ana",""));
edadLuis=parseInt(prompt("Introduce la edad de Luis",""));
if (edadAna < edadLuis){
    console.log("Ana es mayor que Luis.");
    console.log("Ana tiene "+edadAna+" años y Luis "+ edadLuis);
}
else {
    console.log("Ana es menor o de igual edad que Luis.");
    console.log("Ana tiene "+edadAna+" años y Luis "+ edadLuis);
}
```

#### Alternativa **operador ternario**

Es una estructura alternativa simple en una sola línea que se puede utilizar casi cualquier parte. La sintaxis es la siguiente: `condición ? expr1 : expr2` . Si la condición se evalúa a `true` el operador devuelve `expr1`, de lo   contrario retornará `expr2`.

```javascript
let esMayor = 18;
console.log(`El discente es ${esMayor>17  ?  "mayor de edad" : "menor de edad"}`);
```

Más información [Aquí](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator).

#### Alternativa *nullish coalescing operator*

Sirve para comprobar si una elemento tiene valor `null` o `undefined`: `valor ?? expr1`. Si valor es `null` o `undefined` devolverá `expr1`, si no lo es entonces devolverá `valor`.

```javascript
let nombre;
console.log(`Hola, ${nombre} ?? "Desconocido."}`); // Hola, Desconocido.
nombre = "Feo";
console.log(`Hola, ${nombre} ?? "Desconocido."}`); // Hola, Feo.
```
