# 4.3 Tipos de nodo

Cada uno de los elementos que conforman el **DOM** se conoce como nodo, que pueden ser de los siguientes tipos:

- `element`, nodo que contiene una etiqueta `HTML`,
- `attr`, nodo que forma parte de un elemento `HTML`,
- `text`, nodo que contiene texto y que no puede tener hijos.

Si se observa el código de la capa:

```html
<div>
  <p id="tres">
    Tercer párrafo dentro de un div muy feo.
  </p>
</div>
```

La capa `<div>` es un nodo de tipo `element`, el atributo id es un nodo de tipo `attr` y el contenido del párrafo es un nodo de tipo `text`. Es posible comprobar el tipo de un nodo a través de su propiedad `nodeType`, que devolverá un número: `1` si es un elemento (nodo `HTML`), `2` si es un atributo y `3` si es de texto. Existen hasta **doce** tipos de nodo, pero los más usados son estos tres.

Así pues, esta función averigua si es un nodo de texto:

```javascript
function esNodoTexto(nodo) {
  return nodo.nodeType == document.TEXT_NODE; // 3
}

esNodoTexto(document.body); // false
esNodoTexto(document.body.firstChild.firstChild); // true
```

Los elementos contienen la propiedad nodeName que indica el tipo de etiqueta HTML que representa (siempre en mayúsculas). Los nodos de texto, en cambio, contienen nodeValue que obtiene el texto contenido.

```javascript
document.body.firstChild.nodeName; // H1
document.body.firstChild.firstChild.nodeValue; // Encabezado Feo
```
