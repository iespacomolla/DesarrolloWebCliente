# 5.3.1 localStorage

Las funciones a utilizar son tres: setItem, getItem y removeItem.

```javascript
localStorage.setItem("nombre", "Feo");
console.log(localStorage.getItem("nombre")); // Feo
localStorage.removeItem("nombre");
console.log(localStorage.getItem("nombre")); // null
```

Para vaciar por completo (es decir, eliminar todas las entradas) de ***localStorage*** se usa `clear()`.

```javascript
localStorage.clear();
```

## JSON y localStorage

*localStorage* permite almacenar texto, por lo que si se convierten objetos a una cadena de texto es posible almacenar y recuperar objetos. Para este propósito se utiliza `JSON.stringify` para convertir un objeto a texto y `JSON.parse` para convertir texto de nuevo a un objeto.

```javascript
let miArray=[1,2,3]
let miArray2;
// Se guarda el array como cadena JSON.
localStorage.setItem("valorArray",JSON.stringify(miArray));
// Se recupera el array.
miArray2 = JSON.parse(localStorage.getItem("valorArray"));
```
