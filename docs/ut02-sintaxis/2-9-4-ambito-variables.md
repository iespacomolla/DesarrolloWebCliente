# 2.9.4 Ámbito de variables (let y var)

Anteriormente se ha hablado de la diferencia entre `var` y `let`, aunque no se ha profundizado mucho en ella. Ya se sabe que limita el alcance de una variable al bloque que lo contiene, es decir, una zona del código encerrada entre llaves { }. Sin embargo, es posible que el siguiente comportamiento todavía cause confusión:

```javascript
function saluda() {
    var nombre = "Feo";
    let apellido = "Mucho";
    console.log(saludo, nombre, apellido); // Hola Feo Mucho
}
let saludo = "Hola";
saluda();
console.log(nombre); // Uncaught ReferenceError: nombre is not defined
```

¿Por qué no puede acceder a la variable nombre si se ha declarado con `var`? ¿Y ahora?:

```javascript
let saludo = "Hola";
if(true) {
    var nombre = "Feo";
    let apellido = "Mucho";
    console.log(saludo, nombre, apellido); // Hola Feo Mucho
}

console.log(nombre); // Feo
console.log(apellido); // Uncaught ReferenceError: apellido is not defined
```

Ahora sí que se puede acceder a la variable nombre, pero no se puede acceder a la variable apellido. Es posible pensar que no todos los bloques se comportan igual en *JavaScript*, pero la realidad es que en el primer ejemplo entra en juego otro concepto muy importante para entender el ámbito: el **contexto de ejecución**, es decir, en qué función se está ejecutando el código actual. El código que no está dentro de ninguna función se encuentra en el **contexto de ejecución global**. Cada vez que se ejecuta una función se genera un nuevo contexto de ejecución creando, a su vez, un nuevo ámbito.

Para entenderlo mejor es útil pensar en los ámbitos como cajas que dentro pueden contener dos cosas: variables y otras cajas. Cada caja puede acceder a sus variables sin problemas. Además, también puede acceder a las variables de las cajas más grandes, las que la contienen, pero nunca puede acceder a las variables que hay en cajas más pequeñas,
las que contiene.

En el siguiente ejemplo, el contexto de ejecución es global, por lo que en todos los bloques es posible acceder a la variable declarada con `var` en el bloque más interno, esto no sería posible con `let` ya que quedaría adscrito al bloque que la definió:

```javascript
{
    {
        {
            var nombre = "Feo";
            console.log(nombre);
        }
        console.log(nombre);
    }
    console.log(nombre);
}
console.log(nombre);
```

En resumen, se dice que las variables declaradas con `var` tienen ámbito de función (*function scoped*) mientras que las variables declaradas con `let` tienen ámbito de bloque (*block scoped*).

Cuando el motor de ejecución se encuentra con una variable primero mira si existe en el ámbito (en la caja) actual. Si no la encuentra, la intenta buscar en el ámbito superior y así hasta que llega al ámbito global. Si aún así no lo encuentra, actúa en consecuencia dependiendo de si se está utilizando la variable como fuente de datos (aquí dará error) o como destino de una asignación (aquí creará una nueva variable global si no está activado el modo estricto o dará error si está activado).
