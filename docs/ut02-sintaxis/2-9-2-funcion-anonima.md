# 2.9.2 Función anónima (expresión)

Otra característica de las funciones de *JavaScript* es que una función se considera un valor. De este modo, se puede declarar una función anónima y asignarla a una variable, lo que se conoce como función expresión.

```javascript
const miFuncionExpresion = function (param1, param2) {
    // Instrucciones.
}; // Es una expresión luego tiene que terminar con punto y coma.
```

Así pues, el mismo código del ejemplo anterior quedaría así:

```javascript
const suma = function (alfa, beta) {
    return alfa + beta;
};

const calculando = function (gamma, delta, fn) {
    return fn(gamma, delta);
};

let epsilon = calculando(3, 4, suma);
```

Las funciones expresión se pueden invocar inmediatamente lo que hace que sean muy útiles cuando se tiene un bloque que se va a utilizar una única vez.

```javascript
(function() {
    // Instrucciones.
})(); // Invoca la función inmediatamente.
```

Cabe destacar una diferencia importante entre estos tipos de funciones, y es que las funciones declaración **se cargan antes de cualquier código**, con lo que el motor *JavaScript* permite ejecutar una llamada a esta función incluso si está antes de su declaración. En cambio, con las funciones anónimas, **se cargan a medida que se avanza el script** y no van a permitir realizar una llamada a la función hasta que sea declarada por lo que se deben colocar antes del resto de código que quiera invocar dicha función.

```javascript
cantar();
estribillo(); // TypeError: undefined

function cantar() {
    console.log("¿Qué puedo hacer?");
}

const estribillo = function() {
    console.log("He pasado por tu casa 20 veces.");
};
```
