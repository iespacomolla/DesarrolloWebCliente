# 3.2.1 Conversión

Para convertir un objeto a texto siguiendo el formato `JSON` se utiliza:

```javascript
textoJSON = JSON.stringify(objeto);
```

Y para convertir una cadena de texto en JSON a un objeto (operación inversa a la anterior):

```javascript
let objeto = JSON.parse(textoJSON);
```

Por ejemplo:

```javascript
let miObjeto = {
    nombre: "Feo",
    apellido1: "De Verdad",
    apellido2: "De la buena",
}

let textoJSON = JSON.stringify(miArray);
let objetoReconstruido = JSON.parse(textoJSON);
console.log(miObjeto); // Objeto original.
console.log(textoJSON); // Una cadena de texto en formato JSON.
console.log(objetoReconstruido); // Objeto reconstruido.
```
