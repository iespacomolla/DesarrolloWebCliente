# 2.2 Datos y variables

## Datos y variables

Durante el desarrollo de este manual se utilizará el estilo ***lowerCamelCase*** para identificar a las variables. Más información [aquí](https://es.wikipedia.org/wiki/Camel_case).

Para declarar las variables en JavaScript se puede utilizar `let` o `var`, según el ámbito donde deba ser accesible:

- `let` permite declarar una variable que sea accesible   únicamente dentro del bloque donde se ha declarado (llamamos bloque al espacio delimitado por **{ }**).
- `var` permite declarar una variable que sea accesible por todos los lugares de la función donde ha sido declarada. Si una variable con `var` se declara fuera de cualquier función el ámbito de esta son todas las funciones del código.
- sin declarar, *JavaScript* permite usar variables no declaradas. Si ocurre esto, será equivalente a declararlas con ****var**** fuera del código, es decir, serán variables accesibles por cualquier función. Esto no es posible si se está utilizando ***strict mode***.

Y como ejemplo el siguiente código:

```javascript
function ejemplo(){
    ejemploFeo=3; // Equivale a declararla fuera de la función como var.
    if (ejemploFeo === 3){
        var variable1 = 1;
        let variable2 = 2;
    }
    console.log(variable1); // variable1 existe en este lugar.
    console.log(variable2); // variable2 no existe en este lugar.
}
```

Los ámbitos ya no funcionan como en las primeras versiones de *JavaScript*. Hay que tener en cuanta que un **bloque** es cualquier grupo de sentencias encerradas entre llaves **{ }** que se ejecutan como una unidad. Por ejemplo, el cuerpo de una función, la ejecución de un bucle `for` o `if` o un bloque explícito creado con llaves para agrupar sentencias. Por otro lado, el **ámbito** (*scope*) define la accesibilidad de las variables en el código. A partir de ES6, el **ámbito de bloque** permite que las variables declaradas con `let` o `const` sólo sean accesibles dentro del bloque específico donde se declararon, mejorando la organización y la prevención de errores.

Antes de ES6 las variables declaradas con `var` tenían ámbito de función, lo que significa que eran accesibles en toda la función, incluso si se declaraban dentro de un bucle o una condición. Esto podía generar confusión y errores, ya que las variables podían utilizarse fuera del bloque donde se pretendía usarlas.

Desde ES6 (con `let` y `const`) tienen ámbito de bloque y sólo es accesible dentro del bloque en el que fue definida. Si se intenta acceder a una variable de ámbito de bloque fuera del bloque donde fue declarada se obtendrá un error.

Con este cambio se obtiene un código más limpio y organizado ya que las variables se declaran cerca de donde se usan lo que mejora su legibilidad. También se evitan errores con el uso accidental o no deseado de variables fuera de su contexto previsto. Por último, y no menos importante, se utiliza la memoria de una forma más eficiente ya que al limitar la vida útil de una variable a un bloque hace que se libere memoria más rápidamente cuando el bloque ya no es necesario.
