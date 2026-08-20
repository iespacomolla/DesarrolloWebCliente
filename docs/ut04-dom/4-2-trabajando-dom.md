# 4.2 Trabajando con el DOM

El 99% de las aplicaciones *JavaScript* están orientadas a la web y de ahí su integración con el **DOM**. Permite interactuar con el documento `HTML` y cambiar el contenido y su estructura, los estilos `CSS` y gestionar los eventos mediante *listeners* a través de eventos (que se verán en la siguiente unidad). Se trata de un modelo que representa un documento mediante una jerarquía de objetos en árbol y que facilita su programación mediante métodos y propiedades.

Cada elemento, exceptuando el elemento `<html>`, forma parte de otro elemento que se le conoce como padre (`parent`). Un elemento a su vez puede contener elementos hijos (`child`) y/o hermanos (`sibling`).

Suponiendo el siguiente fragmento de código `HTML`:

```html
<p><strong>Hello</strong> how are you doing?</p>
```

Cada porción de este fragmento se convierte en un nodo **DOM** con punteros a otros nodos que apuntan sus nodos relativos (padres, hijos o hermanos), del siguiente modo:

![image](/images/ut04_1000000000000225000001568F4B4430.png)

Cada objeto **DOM** contiene un conjunto de propiedades para acceder a los nodos con lo que mantiene alguna relación. Por ejemplo, cada nodo tiene una propiedad `parentNode` que referencia a su padre (si tiene). Estos padres, a su vez, contienen enlaces que devuelven la referencia a sus hijos, pero como puede tener más de un hijo se almacenan en un objeto iterable (pseudo-array) denominado `childNodes`.

Para poder realizar algunos ejemplos de manejo de **DOM**, se dispone de este sencillo documento `HTML`:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <title>Ejemplo DOM.</title>
  <meta charset="utf-8" />
  </head>
  <body>
    <h1>Encabezado Feo.</h1>
    <p>Primer párrafo.</p>
    <p>Segundo párrafo.</p>
    <div><p id="tres">Tercer párrafo dentro de un div muy feo.</p></div>
    <script src="dom.js" charset="utf-8"></script>
  </body>
</html>
```

En el documento anterior, `document.body.childNodes` contiene cinco `elementos`: el encabezado `h1`, los dos párrafos, la capa (`div`) y la referencia al *script*. Si el documento `HTML` contiene saltos de línea o tabuladores **DOM** interpreta estos como nodos de texto, con lo que el número de hijos de un nodo puede no ser el esperado.

Los otros enlaces que ofrece un nodo son:

- `firstChild`, primer hijo de un nodo o `null` si no tiene hijos,
- `lastChild`, último hijo de un nodo o `null` si no tiene hijos,
- `nextSibling`, siguiente hermano de un nodo o `null` si no tiene un hermano a continuación (es el último),
- `previousSibling`, anterior hermano de un nodo o `null` si no tiene un hermano previo (es el  primero).

```javascript
let encabezado = document.body.firstChild;
let scriptJS = document.body.lastChild;
let parrafo1 = encabezado.nextSibling;
let capa = scriptJS.previousSibling;
```
