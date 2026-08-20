# 2.9.1 Función declaración

Si al crear una función le asignamos un nombre se conoce como una función declaración.

```javascript
function miFuncion(param1, param2=0) {
    // Instrucciones.
    // Si a param2 no se le asigna valor en la llamada, valdrá 0.
    return variable; // Si no se especifica devuelve undefined.
}
```

Las variables declaradas dentro de la función **no serán visibles desde fuera de la función**. Además, los **parámetros se pasan por copia**, y aquí viene lo bueno, **se pueden pasar funciones como parámetro de una función** y una función puede devolver otra función.

```javascript
function suma(alfa, beta) {
    return alfa + beta;
}

function calculando(gamma, delta, fn) {
    return fn(gamma, delta);
}

var epsilon = calculando(3, 4, suma);
```
