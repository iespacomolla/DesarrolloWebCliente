# 6.4.1 Petición

Para poder configurar toda la información que representa una petición se emplea el objeto `request`, cuyas propiedades más importantes son:

- `method`, que puede ser ***GET***, ***POST***, ***PUT*** o ***DELETE***,
- `url` , dirección de la petición,
- `headers`, objeto `Headers` con las cabeceras asociadas y
- `body`, datos a enviar con la petición.

Con estos parámetros una petición puede quedar así:

```javascript
var peticion = new Request("<https://swapi.dev/api/planets>", {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'text/plain'})
});

fetch(peticion).then(function() {
    // Código de respuesta.
});
```

En realidad el método `fetch` recibe una **URL** a la que se envía una petición y un objeto literal con la configuración de la petición, por lo que el código queda mejor y más directo sin usar un objeto `Request` del siguiente modo:

```javascript
fetch("<https://swapi.dev/api/planets>", { 
    method: 'GET',
    mode: 'cors',
    headers: new Headers({ 'Content-Type': 'text/plain'})
}).then(function() {
    // Código de respuesta.
});
```
