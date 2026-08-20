# 5.3.3 Cookies

Es información enviada por un sitio web (y asociada a ese dominio) que el navegador se encarga de almacenar. Generalmente se guardan en ficheros de texto aunque *JavaScript* dispone de comandos que abstraen de cómo son almacenadas.

Por ejemplo, la página `midominiofeo.com` crea una *cookie* que contiene una variable usuario y su contenido es Feo. Esta *cookie* sólo es accesible por el navegador desde `midominiofeo.com`. Una página como `pepe.com` no podría modificarla ni leerla y si creara una **cookie** con la variable usuario, sería independiente.

## Formato de cookies

Para crearlas se usa `document.cookie` junto a un *string* con el siguiente formato:

```javascript
"variable=valor;expires=fecha_expiración;path=/"
```

Donde `variable` es la variable a establecer, `valor` su contenido, `expires` es la fecha de expiración (la forma de borrarla es establecer la fecha de expiración a una ya pasada) y `path` el lugar del dominio donde son válidas.

```javascript
document.cookie = "nombre=Feo;expires=Thu Dec 31 2050 00:00:00 GMT +0100 (CET);path=/";
```

Para eliminarla hay que poner el atributo `expires` con una fecha del pasado y no pasar ningún valor a la variable establecida:

```javascript
document.cookie = "nombre=; expires=Thu Jan 01 1970 00:00:00 GMT+0100 (CET)";
```

La principal ventaja de usarlas es que tanto el servidor como el navegador pueden acceder a la información almacenada. Pero también tiene sus inconvenientes, ya que:

- sólo pueden almacenar hasta 4 KiB (guardan una clave hash que las identifica),
- se envían y vuelven a recibir con cada petición y
- caducan.

Una explicación más detallada [aquí](https://developer.mozilla.org/es/docs/Web/API/Document/cookie).

Si se va a operar con *cookies*, se recomienda la creación de funciones personalizadas para su uso:

- `setCookie`, que la crea indicando variable, valor y días para la expiración,
- `getCookie`, recibe el nombre de la variable y devuelve su valor,
- `deleteCookie`, que la elimina.

Por ejemplo, estas tres funciones para el manejo de *cookies*:

```javascript
function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCookie(cname) {
    document.cookie = cname+'=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
}
```

Aunque, como ya se ha recomendado en varias ocasiones, su uso no está recomendado en favor de otros sistemas como **Supabase** o **Firebase** que funcionan directamente con formato **JSON**.
