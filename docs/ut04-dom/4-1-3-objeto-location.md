# 4.1.3 Objeto location

Es uno de los objetos más útiles del `BOM`. Debido a la falta de  estandarización, `location` es una propiedad tanto del objeto `window` como del objeto `document` y representa la **URL** de la página `HTML` que se muestra en la ventana del navegador. Proporciona varias propiedades útiles para su manejo:

- `href`, cadena que representa la **URL** completa,
- `protocol`, protocolo de la **URL**,
- `host`, nombre del `host`,
- `pathname`, trayectoria del recurso,
- `search`, parte que contiene los parámetros, incluido el símbolo ?.

Suponiendo que se accede a la siguiente a la **URL**:

```html
http://localhost:63342/Pruebas/bom/location.html?alfa=beta&gama=delta
```

```javascript
console.log("href:" + location.href); // Muestra toda la dirección.
console.log("protocol:" + location.protocol); // Muestra http:.
console.log("host:" + location.host); // Muestra localhost:63342.
console.log("pathname:" + location.pathname); // Muestra /Pruebas/bom/location.html. 
console.log("search:" + location.search); // Muestra ?alfa=beta&gama=delta.
```

Si a `location.href` se le asigna una nueva **URL** el navegador realizará una petición a dicha **URL** y el navegador cargará el nuevo documento.
