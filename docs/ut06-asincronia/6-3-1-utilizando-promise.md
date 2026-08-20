# 6.3.1 Utilizando promise

Para utilizar una promesa hay que especificar dos métodos que coincidirán con los parámetros resolver y rechazar:

```javascript
promesa.then(correcto => {
    // Devuelve lo especificado en el objeto/función/método resolver.
}).catch(incorrecto => {
    // Devuelve lo especificado en el objeto/función/método rechazar.
});
```

Se crea la promesa con el código que se envía al servidor, en este ejemplo, el que se puede retrasar:

```javascript
const promesa = new Promise((resolver, rechazar) => { // Promesa con "petición al servidor".
    setTimeout(() => {
        feo++;
        console.log(`B. Proceso terminado.`);
        resolver(feo); // Devuelve la variable feo.
    }, 1000); // El proceso se va a retrasar.
});
```

Una vez creada la promesa, el código anterior quedaría ahora del siguiente modo:

```javascript
let feo = 1;
console.log(`A. Se va a sumar uno a la variable feo = '{feo}.`);
promesa.then((resultado) => {
    // Lanza la "solicitud al servidor".
    resolver(`C. El valor de feo es: '{resultado}.`); // Si es correcta recibe resolver.
}).catch((error) => {
    rechazar(`Ha habido un error: '{error}.`);
});
```

Si la respuesta de la promesa **no es la correcta**, el `.catch()` recibiría el código especificado en rechazar, en este ejemplo se ha decidido devolver un texto de error.

Este es un ejemplo muy sencillo de una promise. Hay que realizar uno de estos elementos por cada consulta al servidor para obtener el comportamiento deseado. Además, las promesas se pueden encadenar unas con otras para construir sinergias más complicadas.