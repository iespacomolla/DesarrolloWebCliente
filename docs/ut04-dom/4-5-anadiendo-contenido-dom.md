# 4.5 Añadiendo contenido al DOM

Si se necesita añadir un párrafo al documento del ejemplo, primero hay que crear el contenido y luego decidir donde colocarlo. Para ello se usa el método `createElement` para crear el elemento y posteriormente añadir el contenido (por ejemplo, mediante `appendChild`).

```javascript
let elem = document.createElement("p");
texto="<strong>Nuevo párrafo creado dinámicamente.</strong>";
contenido=  document.createTextNode(texto);
elem.appendChild(contenido);
elem.id = "conAppendChild";
document.body.appendChild(elem); // Lo añade como el último nodo detrás de script.
```

En este código las etiquetas `<strong>` no se han transformado y en lugar de mostrar el texto en negrita se muestra el código de la etiqueta. Además, no es posible ver el contenido creado dinámicamente y será necesario utilizar las herramientas de desarrollador que ofrecen los navegadores web.

Los métodos para añadir contenidos son:

- `appendChild(nuevoElemento)`, el nuevo nodo se incluye inmediatamente después de los hijos ya existentes (si hay alguno),
- `insertBefore(nuevoElemento, elementoExistente)`, permiten elegir un nodo existente del documento e incluir otro antes que él,  
- `replaceChild(nuevoElemento, elementoExistente)`, reemplazar un nodo por otro,
- `removeChild(nodoABorrar)`, elimina un nodo,
- `cloneNode()`, permite clonar un nodo.

Un ejemplo en funcionamiento:

```javascript
let doc = document,  
elem = doc.createElement("p"),
contenido = doc.createTextNode("<strong>Nuevo párrafo creado
dinámicamente.</strong>"),
pTres = doc.getElementById("tres");
elem.appendChild(contenido);
elem.id = "conAppendChild";
pTres.parentNode.appendChild(elem);
```

En el código anterior:

- se guarda en **doc** la referencia a document para evitar   tener que salir del alcance y subir al alcance global con cada referencia. Se trata de una pequeña mejora que aumenta la eficiencia del código,
- se genera el nuevo elemento `<p>` y su contenido,
- se crea una referencia al nodo que contiene el párrafo a través de su `id` con `getElementById`,
- se añade el contenido al nuevo nodo,
- se inserta un hijo al padre de `#tres`, lo que lo convierte en su hermano.

Otra forma de añadir contenido es mediante la propiedad `innerHTML`, la cual sí que va a transformar el código incluido en etiquetas reales. Para ello, en vez de crear un elemento y añadirle contenido, el contenido se puede añadir como una propiedad del elemento.

```javascript
let doc = document,
elem = doc.createElement("p"),
pTres = doc.getElementById("tres");
elem.innerHTML = "<strong>Nuevo párrafo reemplazado dinámicamente.</strong>";
elem.id = "conInner";
pTres.parentNode.replaceChild(elem, pTres);
```

Mientras que `innerHTML` interpreta la cadena como `HTML`, `nodeValue` la interpreta como texto plano, por lo que los símbolos de `<` y `>` no aportan significado al contenido. Pese a que el método `document.write(txt)` permite añadir contenido a un documento, hay que tener mucho cuidado porque, al ejecutarlo en el **DOM**, ya ha cargado el texto y sustituirá todo el contenido que había previamente. Por lo tanto, si se añade contenido, es mejor hacerlo mediante `innerHtml`.

El problema de `innerHTML` es que reemplaza el contenido del nodo con uno nuevo. Para evitar esto se dispone de `insertAdjacentHTML` que no tan sólo respeta la información previa, sino que además ofrece la posibilidad de colocarla en diferentes partes del nodo:

```html
<!-- beforebegin -->
<p id="feo">
  <!-- afterbegin -->
    Párrafo muy feo.
  <!-- beforeend -->
</p>
<!-- afterend -->
```

Por tanto, el siguiente código introduce un nuevo elemento después del párrafo con `id="feo"`:

```javascript
let objeto_one = document.getElementById('one');
objeto_one.insertAdjacentHTML('afterend', '<div id="two">two</div>');
```

Otro dato a tener muy en cuenta es que las referencias con `getElementsBy` están vivas y **siempre contienen el estado actual del documento**, mientras que con `querySelector` obtenemos las referencias **existentes en el momento de ejecución** sin que cambios posteriores en el **DOM** afecten a las  referencias obtenidas.

```javascript
let getElements = document.getElementsByTagName("p"),
queryElements = document.querySelectorAll("p");
console.log("Antes con getElements:" + getElements.length); // 3
console.log("Antes con querySelector:" + queryElements.length); // 3
let elem = document.createElement("p");
elem.innerHTML = "getElements vs querySelector";
document.body.appendChild(elem);
console.log("Después con getElements:" + getElements.length); // 4
console.log("Después con querySelector:" + queryElements.length); // 3
```
