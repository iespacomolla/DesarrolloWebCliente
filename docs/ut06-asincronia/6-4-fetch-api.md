# 6.4 Usando la API *fetch*

*JavaScript* ofrece la **API** ***Fetch*** para realizar peticiones **AJAX** que directamente devuelvan una promesa. Es decir, ya no se emplea el objeto ***XMLHttpRequest*** el cual no se creó con **AJAX** en mente, sino objetos *promise* y una serie de métodos y objetos diseñados para tal fin. Al emplear promesas el código es más sencillo y limpio evitando los *callbacks* anidados.

Actualmente esta **API** está soportada por [estos navegadores](http://caniuse.com/#search=fetch). La documentación oficial sobre `fetch` se puede consultar [aquí](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch).

El objeto `window` ofrece el método `fetch` con un primer argumento con la **URL** de la petición y un segundo opcional con un objeto que permite configurar la petición:

```javascript
const opciones = {
    method: "GET", // También se puede usar HEAD, POST, PUT\...
};

fetch("./ruta/url", opciones) // URL (obligatorio), opciones (opcional).
.then((respuesta) => {
    // Código cuando se resuelva.
})
.catch((error) => {
    // Código de error.
});
```

El `fetch` realiza una petición al servidor especificado en su primer parámetro ruta/url con las opciones especificadas en el objeto opciones. La respuesta la encapsula en un objeto
`response` que será lo que devuelva, es decir, lo que se le pase al *callback*. En función de la respuesta del servidor ejecutará el código contenido en `.then()` (si ha sido correcto) o en `.catch()` (si algo ha salido mal). A esto es a los que se llama *callbacks*. En cualquier caso, el `fetch` devolverá una ***promise*** que deberá ser consumida.

A este método se le pasa una función *callback* que recibe un parámetro ***response*** es el objeto de respuesta de la petición. Dentro de este `.then()` se ejecutará la lógica que sea necesaria.

Si se ha producido un error en la petición de datos, el código a ejecutar se encuentra especificado en el `.catch()`, como pasa en otros lenguajes de programación.

En el siguiente ejemplo se realiza una petición a la misma *API REST* que en el caso anterior:

```javascript
fetch("<https://swapi.dev/api/planets>", { // Dirección para realizar fetch.
    method: "GET", // Se establece el método GET.
    headers: { // Se indica en las cabeceras cómo es el contenido.
        "Content-type": "application/x-www-form-urlencoded",
    },
    }).then((respuesta) => { // Código a ejecutar al recibir la respuesta.
    if (respuesta.ok) { // Si la respuesta es correcta.
    respuesta.text().then((datos) => { // Si se convierte a texto.
        document.getElementById("feo").innerHTML = datos; // Respuesta en un div.
    });
  }
});