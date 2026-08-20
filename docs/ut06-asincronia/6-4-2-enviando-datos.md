# 6.4.2 Enviando datos

Para ello, además de configurar que la petición sea ***POST*** , se asociará en la propiedad `body` un `FormData` creado a partir del identificador del elemento del formulario:

```javascript
fetch("/submit", {
    method: 'POST',
    body: new FormData(document.getElementById('formulario-cliente'))
});
```

Si se envía un objeto **JSON** al servidor se le asocia en el `body`:

```javascript
fetch("/submit-json", {
 method: 'POST',
 body: JSON.stringify({
  email: document.getElementById('email').value,
  comentarios: document.getElementById('comentarios').value
 })
});
```

O si se envía información en formato **URL**:

```javascript
fetch("/submit-urlencoded", {
    method: 'POST',
    headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: "nombre=Feo&apellido=De+Verdad"
});
```