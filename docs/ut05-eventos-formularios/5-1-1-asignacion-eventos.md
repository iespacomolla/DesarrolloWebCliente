# 5.1.1 Asignación de eventos

La **primera forma**, y también la más sencilla, aunque **menos práctica** y **prohibida** a partir de ahora, de indicar que hay un evento asociado a un elemento `HTML` es indicándolo en la propia etiqueta del elemento:

```html
<input type="button" value="Boton Hola Feo" onClick="alert('Hola Feo');alert('Adios Feo');" />
```

Otra opción es llamar a una función declaración (también **prohibida**):

```html
<input type="button" value="Botón miFuncion" onClick="miFuncion('parametroFeo');" />*
```

Cuando se ejecuta código dentro de un evento, se puede utilizar el objeto `this`. Este objeto es una referencia al elemento **DOM** donde se ha producido el evento, es decir, si el evento se ha producido al hacer clic a una imagen con `id="imagenFea"`, el objeto `this` referencia a esa imagen. Es equivalente a referenciar el objeto usando `document.getElementById("imagenFea")`:

```html
<div id="cont" onMouseOver="document.getElementById('cont').style.borderColor='black';" onMouseOut="document.getElementById('cont').style.borderColor='red';">
    Contenidos.
</div>
```

Equivalente con `this`:

```html
<div id="cont" onMouseOver="this.style.borderColor='black';" onMouseOut="this.style.borderColor='red';">
    Contenidos
</div>
```

La **segunda forma** de asignación, más **eficiente,** es modificar mediante código el manejador de un evento predefinido en un documento `HTML`:

```javascript
let elemento = document.getElementById("feo");  //Selección del elemento por su id.

elemento.onClick = () => {  

this.style.backgroundColor = "red";

}; // Se asigna una función anónima.
```

También es posible asignar una **función declaración** o una **función flecha** del mismo modo. La ventaja de este método es evidente: es posible seleccionar un conjunto de elementos y asignarles métodos de forma simultánea. Ante el mismo evento, un objeto puede tener **sólo un manejador**, pero **varios** listeners (objetos que esperan la ejecución del evento). Hay que **tener cuidado** con la asignación de una función declaración:

```javascript
function Saludar (x){
    console.log(`¡¡¡Hola \${x}!!!`);
};

let elemento = document.getElementById("feo");
elemento.onClick = "Saludar"; // Asigna la función Saludar como respuesta.
elemento.onClick = "Saludar()"; // Asigna el resultado de la función Saludar.
```

La **tercera forma** de hacerlo es a través del método `addEvenListener(evento, función, flujoEvento, opciones)`. El parámetro `flujoEvento` puede tomar los valores `true` para aplicar el modelo de **captura de eventos** o `false` para *event bubbling* (recomendado). El parámetro `opciones` es un objeto que permite añadir particularidades a ese evento. Una interesante es la opción `once` que limita la ejecución del *callback* a una sola vez.

```javascript
let cambioClase = function() {  
    let clase = this.innerHTML.toLowerCase();
    document.body.className = clase; // Cambia la clase CSS por el nombre del botón.
};

let botones = document.getElementsByTagName("button"); // Todos los botones.

for (let i=0, len=botones.length; i<len; i=i+1) {
  botones\[i\].addEventListener("click", botonClick, false); // A cada botón.
};
```

Si se añade la opción once al evento, sólo se ejecutará una vez:

```javascript
botones[i].addEventListener("click", botonClick, false, {once:true});
```

Para borrar un evento se usa su método contrario `removeEventListener(evento, función, flujoEvento)`. Cabe destacar que la función a eliminar debe ser la misma que la utilizada al añadir el evento, por lo que no podemos usar funciones anónimas.

```javascript
botones[i].removeEventListener("click", cambioClase, false);
```
