# 6.4.3 Respuesta

Una vez realizada la petición, dentro del manejador se recibirá un objeto `response` con las siguientes **propiedades** más importantes:

- `status`, código de estado (en número),
- `ok`, boleano que indica si la respuesta fue exitosa (en el rango 200-299 de estado),
- `statusText`, código de estado (en texto) y
- `headers`, objeto `Header` asociado a la respuesta.

y los siguientes **métodos**:

- `clone()`, clona el objeto `response`,
- `error()`, devuelve un nuevo objeto `response` asociado con el error,
- `redirect()`, crea una nueva respuesta con una **URL** diferente,
- `arrayBuffer()`, devuelve una promesa que se resuelve con un `arrayBuffer`,
- `blob()`, devuelve una promesa que se resuelve con un **Blob**,
- `formData()`, devuelve una promesa que se resuelve con un objeto **FormData**,
- `json()`, devuelve una promesa que se resuelve con un objeto **JSON** y
- `text()`, devuelve una promesa que se resuelve con un texto.

El estándar es emplear el formato ***JSON*** para las respuestas. En vez de utilizar `JSON.parse(cadena)` para transformar la cadena de respuesta en un objeto, se puede utilizar el método `json()`:

```javascript
fetch("<https://swapi.dev/api/planets>")
  .then((response) => {
    return response.json(); // Se devuelve el objeto en formato JSON.
  })
  .then((datos) => {
    console.log(datos); // La variable datos es un objeto JSON.
});
```

Si la información viene en texto plano o como documento **HTML**, se emplea `text()`:

```javascript
fetch("<https://swapi.dev/api/planets>")
  .then((response) => {
    return response.text();
  })
  .then((texto) => {
    console.log(texto);
});
```

Finalmente, si se recibe una imagen o archivo en binario se emplea `blob()`:

```javascript
fetch("paisaje.jpg")
  .then((response) => {
    return response.blob();
  })
    .then((blobImagen) => {
    document.querySelector('img').src = URL.createObjectURL(blobImagen);
});
```

Para revisar información más completa sobre fetch [aquí](https://desarrolloweb.com/articulos/fetch-ajax-javascript.html) y cómo enviar datos a una API [aquí](https://gomakethings.com/how-to-send-data-to-an-api-with-the-vanilla-js-fetch-method/).
