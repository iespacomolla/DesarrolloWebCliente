# 📝 Prácticas y Ejercicios - UT05: Eventos y Hooks. Formularios

> En esta sección se recogen todas las prácticas, ejercicios de evaluación, autoevaluaciones y actividades guiadas correspondientes a la **UT05: Eventos y Hooks. Formularios**.

---

## 📄 Práctica 4.01 Eventos (autoevaluable)

*Ubicación original:* `Ejercicio_old/Práctica 4.01 Eventos (autoevaluable).odt`


## PRÁCTICA 4.01 Eventos


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
todo el código debe estar situado dentro del evento window.onload = () => {}; o a través del evento document.addEventListener("DOMContentLoaded", () => {}); ,
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
```javascript
para la asignación de eventos se utilizará addEventListener() indicando sus tres parámetros en su definición,
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal).
```

- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
```javascript
la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
```

- Saludar

Realiza un programa con dos botones Comenzar Saludos y Parar saludos. Al hacer clic en el primero lanza un setInterval para que cada dos segundos genere un &lt;h1&gt; con el texto ¡Hola Feo!. El botón Parar saludos parará la secuencia.

- Colorines
```javascript
Haz un programa que al hacer doble clic en la pantalla del navegador cambie el fondo a un color aleatorio. Puedes generar los colores bien en hexadecimal #5a6f12 o en RGB rgb(255,255,255).
```


Deberás crear una función que genere un color aleatorio válido. Si eliges colores en hexadecimal utiliza este array:

```javascript
var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
```

- Localizador
```javascript
Haz un programa que, mediante eventos y el uso del objeto event, muestre en todo momento la posición actual del ratón en pantalla. Para mostrar la posición, modificaremos de forma dinámica un elemento HTML (por ejemplo un <p>) que muestre la posición actual del ratón (coordenadas x e y). Como siempre, la salida debe estar debidamente formateada.
```


---

## 📄 Práctica 4.02 Más eventos

*Ubicación original:* `Ejercicio_old/Práctica 4.02 Más eventos.odt`


![](/images/ut05_practica-4_10000000000002FC000000C06D681F44.png)


## PRÁCTICA 4.01 Eventos


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
todo el código debe estar situado dentro del evento window.onload = () => {}; o a través del evento document.addEventListener("DOMContentLoaded", () => {}); ,
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
```javascript
para la asignación de eventos se utilizará addEventListener() indicando sus tres parámetros en su definición,
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal).
```

- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
```javascript
la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
```

- Acordeón

Crea un acordeón compuesto por seis elementos que al hacer clic sobre los impares se muestre la información que está situada en el elemento par inmediatamente inferior a él. Al volver a hacer clic, si el elemento par que contiene la información se ve en pantalla deberá ocultarse. No se podrá utilizar el atributo id de los elementos HTML.


![](/images/ut05_practica-4_10000000000002FC000000C06D681F44.png)


> 📸 *Figura 1: Esquema del acordeón.*

- Pestañas

Realiza un sistema de pestañas compuesto por dos &lt;div&gt;:

- el primero contendrá las pestañas (mínimo tres) que mostrarán un nombre (elige la etiqueta HTML que prefieras para ello),
- el segundo contendrá la información de cada pestaña (elige la etiqueta HTML que prefieras para esta tarea).

Al pulsar sobre cada pestaña del primer &lt;div&gt; se mostrará la información relacionada del segundo &lt;div&gt;. Su relación será secuencial: la primera pestaña mostrará el primer contenido, la segunda pestaña el segundo contenido… No se podrá utilizar el atributo id de los elementos HTML.


Aplica un poco de tu estilo a las pestañas a través de CSS.


---

## 📄 Práctica 4.03 Pintarajea cambios

*Ubicación original:* `Ejercicio_old/Práctica 4.03 Pintarajea cambios.txt`

```text

Cambiar el evento click del lienzo por mouseDown pada dibujar mientras se mantiene el botón del ratón pulsado.

```

---

## 📄 Práctica 4.03 Pintarajea corrección

*Ubicación original:* `Ejercicio_old/Práctica 4.03 Pintarajea corrección.txt`

```text

Uso de imports.
Declaración de funciones en el principal.
Delegación de eventos.
addEventListeners dentro de funciones.
Uso operador identidad al comprobar tagName.
Mensajes por consola.

```

---

## 📄 Práctica 4.03 Pintarajea

*Ubicación original:* `Ejercicio_old/Práctica 4.03 Pintarajea.odt`


![](/images/ut05_practica-4_10000000000003C1000002E759D3671B.png)


## PRÁCTICA 4.03 Pintarrajea


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
todo el código debe estar situado dentro del evento window.onload = () => {}; o a través del evento document.addEventListener("DOMContentLoaded", () => {}); ,
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
```javascript
para la asignación de eventos se utilizará addEventListener() indicando sus tres parámetros en su definición,
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal).
```

- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
  - la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.

# Pintarrajea


![](/images/ut05_practica-4_10000000000003C1000002E759D3671B.png)


Te han encargado una pequeña aplicación para dibujar llamada Pintarrajea. Con ella se podrá diseñar logotipos básicos eligiendo colores y haciendo clic sobre celdas de una tabla. Deberá hacer lo siguiente:

  - en el &lt;body&gt; habrá dos &lt;div&gt;,
  - en el primero (superior) habrá una tabla con un selector de colores (puedes hacerlo con HTML). Contendrá dos filas:
    - la primera contendrá una serie de celdas (mínimo seis) con un color que podrá elegir el usuario para comenzar a pintar (uno de ellos debe ser el blanco),
    - la segunda indicará con un texto el color seleccionado en la primera fila.
  - en el segundo (inferior), de manera automática se generará una tabla de sesenta celdas de largo por cincuenta de ancho. Cada una de ellas con un tamaño de 10 por 10 px,
  - en la parte inferior habrá un botón que permitirá reiniciar la tabla a color blanco,
  - crear el fichero de estilos CSS necesario para que los elementos tengan el formato parecido a un cuadernillo de Rubio (si no sabes a qué me refiero, haz arqueología en Internet).

Funcionamiento del programa:

  - Se pulsa una celda de color de la tabla superior para elegir un color con el que pintar.
  - Se pulsará sobre uno de los cuadros de la segunda tabla que cambiará de color al color seleccionado.
  - Seguidamente, si el ratón se mueve sobre otras celdas (sin hacer clic) se irán pintando con el color seleccionado previamente.
  - Cuando se vuelve a hacer clic sobre otra celda dejará de pintar.
  - Es posible repetir el proceso con otros colores sobre celdas pintadas o sin pintar.
  - Si es necesario borrar colores, se pulsará sobre el color blanco del selector.

![](/images/ut05_practica-4_10000000000003C1000002E759D3671B.png)


El aspecto podría ser similar al siguiente:


---

## 📄 Práctica 4.04 Rompecabezas - correción

*Ubicación original:* `Ejercicio_old/Práctica 4.04 Rompecabezas - correción.txt`

```text

usa imports (20)
regreso de las piezas (10)
delcaración de funciones en el principal (10)
funciones con addEventListener (20)
usa dataTransfer (10-20)
recarga la página (10)

```

---

## 📄 Práctica 4.04 Rompecabezas

*Ubicación original:* `Ejercicio_old/Práctica 4.04 Rompecabezas.odt`


![](/images/ut05_practica-4_10000000000003F000000394221E60ECFAFCC9D6.png)


## PRÁCTICA 4.02 Rompecabezas


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
todo el código debe estar situado dentro del evento window.onload = () => {}; o a través del evento document.addEventListener("DOMContentLoaded", () => {}); ,
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
```javascript
para la asignación de eventos se utilizará addEventListener() indicando sus tres parámetros en su definición,
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal).
```

- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
  - la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.

# Rompecabezas


Crea un pequeño juego para resolver un rompecabezas con nueve piezas. Las imágenes podrás encontrarlas en Alues. Sigue estas indicaciones para crear el juego:

  - en el &lt;body&gt; habrá dos &lt;div&gt; uno encima del otro,
  - en el primero (superior) contendrá las piezas del rompecabezas mostradas de forma aleatoria en cada carga de la página.
```html
en el segundo (inferior), se situará el panel de juego dividido en una grilla de tres por tres elementos. Esta grilla contendrá las piezas del <div> superior a medida que el usuario las vaya colocando.
en la parte inferior del <div> inferior habrá un botón que permitirá reiniciar la partida,
```

  - crear el fichero de estilos CSS necesario para que quede bonito,
  - si no te parece apropiada la imagen del ejercicio puedes seleccionar una diferente. Utiliza esta web https://pinetools.com/es/partir-imagenes para cortarla en nueve piezas (tres en la vertical y tres en la horizontal).

Funcionamiento del programa:

  - Se arrastra una pieza del &lt;div&gt; superior a una de las casillas del &lt;div&gt; inferior y se coloca en ella. Si ya existe una pieza en esa casilla, no realizará ninguna acción.
  - Este movimiento se puede realizar en sentido inverso para quitar piezas del &lt;div&gt; inferior.
  - Cuando se coloque la última (la novena) se comprobará si la solución es correcta.
  - Seguidamente, si es correcta informará al usuario. Si no lo es, no realizará ninguna acción.

![](/images/ut05_practica-4_10000000000003F000000394221E60ECFAFCC9D6.png)


> 📸 *Figura 1: Aspecto general de la aplicación.El aspecto podría ser similar al siguiente:*


---

## 📄 Práctica 4.05 Gestor de tareas II (opcional)

*Ubicación original:* `Ejercicio_old/Práctica 4.05 Gestor de tareas II (opcional).odt`


![](/images/ut05_practica-4_10000000000002B90000035FBBC9BE28.png)


PRÁCTICA 4.05 Gestor de tareas II


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
todo el código debe estar situado dentro del evento window.onload = () => {}; o a través del evento document.addEventListener("DOMContentLoaded", () => {}); ,
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
```javascript
para la asignación de eventos se utilizará addEventListener() indicando sus tres parámetros en su definición,
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal).
```

- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
```javascript
la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
```

- Gestor de tareas II

En el programa de Gestor de tareas realizado con anterioridad se habilitarán los siguientes cambios:

```javascript
un mecanismo arrastrar y soltar para permitir cambiar las tareas entre PENDIENTES y ACABADAS en ambos sentidos. Utiliza los eventos dragenter, dragleave y dragend además de los necesarios para hacer el efecto de arrastrar y soltar.
otro que permita cambiar el orden de las tareas dentro de las PENDIENTES. Cuando una tarea se suelte encima de otra la soltada tomará la posición de la tarea sobre la que se ha soltado desplazándola debajo (recuerda que se hiciste una función que hace esto insertAfter).
```


![](/images/ut05_practica-4_10000000000002B90000035FBBC9BE28.png)


---

## 📄 Práctica 4.05 Parejas (opcional)

*Ubicación original:* `Ejercicio_old/Práctica 4.05 Parejas (opcional).odt`


## PRÁCTICA 4.05 Parejas


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
todo el código debe estar situado dentro del evento window.onload = () => {}; o a través del evento document.addEventListener("DOMContentLoaded", () => {}); ,
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
```javascript
para la asignación de eventos se utilizará addEventListener() indicando sus tres parámetros en su definición,
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal).
```

- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
  - la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
- Parejas

Diseña un juego que consiste en encontrar parejas en doce cartas con seis parejas de los personajes de una serie que odies (no va a ser todo lo que te gusta). El juego consistirá en lo siguiente:

- la aplicación deberá tener una tabla (no uses la etiqueta &lt;table&gt;) con tres filas y cuatro columnas de un color. Además, habrá un cuadro de texto con el valor cero y no modificable,
- mostrará el tiempo transcurrido de juego a través de un temporizador como el que diseñaste con anterioridad,
- cuando el usuario haga clic sobre una celda, se mostrará la imagen que esconde,
- cuando el usuario haga clic sobre otra celda, se mostrará la imagen que se oculta tras ella,
```html
si las dos imágenes son iguales, se dejará visible la imagen y se incrementará en uno los intentos. En ese momento, si se hace clic sobre estas imágenes se le informará al idiota del usuario que esa tarjeta ya ha sido destapada (habilita una zona de mensajes con un <div>, no usar alert),
si las dos imágenes son diferentes, se ocultarán mostrando nuevamente el color inicial (utiliza algún efecto dinámico sobre las imágenes realizado con JavaScript) y se incrementará en uno los intentos,
cuando se consigan las seis parejas el temporizador se detendrá y mostrará un mensaje con el tiempo total y el número de intentos empleado (no usar alert).
```


---

## 📄 Práctica 4.06 Formularios y eventos

*Ubicación original:* `Ejercicio_old/Práctica 4.06 Formularios y eventos.odt`


## PRÁCTICA 4.06 Formularios y eventos


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
todo el código debe estar situado dentro del evento window.onload = () => {}; o a través del evento document.addEventListener("DOMContentLoaded", () => {}); ,
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
```javascript
para la asignación de eventos se utilizará addEventListener() indicando sus tres parámetros en su definición,
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal).
```

- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
  - la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
- Más números

Haz un programa que cree cien elementos &lt;checkbox&gt; con números aleatorios entre el 100 y el 1.000. Además, la página tendrá un botón Marcar todos los pares y un botón Desmarcar todos que realizarán las acciones que describen su texto.

- Creador párrafos

Crea un formulario que tenga un &lt;textarea&gt; , un &lt;select&gt; con tres tipos de formato (invéntate tres estilos de texto en clases CSS) y un botón con el texto Crear párrafo. Cuando el usuario haga clic sobre el botón se creará un nuevo párrafo &lt;p&gt; dentro de un &lt;div id=”resultado”&gt; situado debajo del formulario. Este nuevo &lt;p&gt; contendrá el texto del &lt;textarea&gt; con el estilo CSS elegido en el &lt;select&gt;. En caso de que cualquiera de los dos campos esté vacío, mostrará un mensaje de error insultando informando al usuario y no creará ningún párrafo.

- Discos

Prepara un formulario diseñado para almacenar los discos con los datos listados a continuación:

- nombre del disco,
- grupo de música o intérprete,
- año de publicación,
- tipo de música (podrá ser “rock”, “progressive”, “punk” o “trash”),
- localización, almacenará un número de estantería (inventado pero que contiene números y letras),
```javascript
prestado, almacenará un valor booleano. Por defecto será false.
Tendrá un botón Guardar que añadirá el disco a un listado almacenado en un objeto (que tendrás que diseñar) JSON y otro Mostrar que mostrará el listado de discos debidamente formateado (usa CSS).
```

- Pueblos
```javascript
Realiza un formulario con dos elementos <select> (provincia y población). Al cambiar el primero se actualizará el segundo. Al enviar el formulario (evento submit) se comprobará que ambos han sido marcados a una opción válida. Cuando no tengan ninguna selección previa los campos mostrarán No seleccionado que será la situación inicial. Los valores del primer campo serán Alicante, Castellón y Valencia. Los valores para el segundo campo son:
```

  - cuando el primer campo sea Alicante: Alicante, Elche y Petrer,
  - cuando el primer campo sea Castellón: Castellón, Oropesa y Vinaroz,
  - cuando el primer campo sea Valencia: Valencia, Xàtiva y Torrent.
- Discos II

A partir del formulario creado en la actividad Discos, realiza las funciones necesarias para validarlo teniendo en cuenta:

- nombre del disco al menos cinco caracteres y obligatorio
- grupo de música o intérprete al menos cinco caracteres y obligatorio
- año de publicación cuatro caracteres numéricos
- tipo de música comprobará si se ha seleccionado alguno
- localización formato ES-001AA donde 001 es el número de la estantería y AA la balda (combinación de dos letras mayúsculas)
- prestado no tiene comprobación
```javascript
La validación se asignará al formulario mediante un addEventListener y los campos nombre del disco y grupo de música se validarán en la misma función.
```


En caso de que se produzca un error en la validación, el campo implicado tendrá el borde rojo de tamaño 3 px y la etiqueta que lo acompaña también aparezca de color rojo. Crea las clases CSS que estimes oportuno en un fichero aparte. Si se corrigen los datos una vez cambiado el estilo del &lt;input&gt; deberá volver a su color habitual.


---

## 📄 Práctica 4.06 Formularios y eventos

*Ubicación original:* `Ejercicio_old/Práctica 4.06 Formularios y eventos.txt`

```text
Cambios en el ejercicio de formularios.
	-> Añadir la comprobación de campos vacíos y expresiones regulares.
	-> Poner en último lugar.
```

---

## 📄 Práctica 4.07 Generador de formularios (opcional)

*Ubicación original:* `Ejercicio_old/Práctica 4.07 Generador de formularios (opcional).odt`


## PRÁCTICA 4.07 Generador de formularios


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
todo el código debe estar situado dentro del evento window.onload = () => {}; o a través del evento document.addEventListener("DOMContentLoaded", () => {}); ,
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
```javascript
para la asignación de eventos se utilizará addEventListener() indicando sus tres parámetros en su definición,
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal).
```

- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
  - la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
- Generador de formularios

Crea una aplicación que te permitirá generar formularios de manera dinámica. Para ello necesitarás un formulario que realice las siguientes acciones:

```javascript
crear un <input> de tipo texto. Le preguntará al usuario mediante un prompt qué nombre (atributo id) tiene el <input>
crear un <input> de tipo contraseña. Le preguntará al usuario mediante un prompt qué nombre (atributo id) tiene el <input>
crear un <textarea>. Le preguntará al usuario el nombre (atributo id) y generará automáticamente uno de cuarenta columnas y cinco filas
crear un <label>. Preguntará al usuario a qué <input> va referido (atributo for) y cuál es el texto. La función debe comprobar si ese elemento existe en el formulario actual
crear una imagen. Preguntará al usuario qué ruta tiene la imagen (atributo src) y su nombre (atributo id)
crear un <checkbox>. Preguntará al usuario el nombre y el valor (atributos name y value)
crear un <radio>. Preguntará al usuario el nombre y el valor (atributos name y value)
crear un botón (submit). Preguntará al usuario el nombre y el valor (atributos id y value)
```


El programa debe comprobar que ni el nombre ni el id elegidos por el usuario esté en uso en el formulario actual. De ser así, debe informar debidamente al idiota usuario.


---

## 📄 Práctica 4.08 Estados en React

*Ubicación original:* `Ejercicio_old/Práctica 4.08 Estados en React.odt`


## PRÁCTICA 4.08 Estados en React


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
```

  - los ejercicios deben realizarse usando JavaScript ES6. No se podrá utilizar ninguna biblioteca (si no se especifica lo contrario en el enunciado),
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula,
  - el estilo que afecte a un componente debe estar contenido en un fichero CSS junto a ese componente y con su mismo nombre.
- En cuanto a la entrega de los archivos que componen los ejercicios de React:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
```javascript
los componentes creados deben estar separados en carpetas (los creados en el Ejercicio1 dentro de una carpeta denominada Ejercicio1),
```

  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con los ficheros package.json y package-lock.json en un fichero ZIP , y
```

  - sube a Aules el fichero comprimido.
- Estado con array
```html
Crea el componente <Listado> con un párrafo y dos botones: Generar y Eliminar (y algo de estilo CSS). Al pulsar Generar se generará un número aleatorio entre 1 y 100 (no repetido) que será almacenado en el estado del componente (que será un array). El listado de números debe mostrarse dentro del párrafo creado con una lista con <ul> (<ul><li></li></ul>) cada vez que se actualice el estado.
```


Al pulsar el botón Eliminar se borrarán todos los elementos del estado.

- Discentes con estado
```javascript
Crea el componente <Matricula> y los componentes que estimes necesarios para mostrar un listado de discentes que se encuentran en el fichero matriculados.json). Además, deben existir botones que realicen las siguinetes acciones:
```

- mostrar sólo los discentes del curso 2DAW,
- mostrar los discentes de primer curso (da igual el ciclo),
- mostrar los discentes del ciclo DAW (da igual el curso),
```javascript
mostrar los discentes a los que le guste la lectura (contenga lectura en aficiones),
```

- ordenar el listado actual (sea cual sea) por apellidos de forma ascendente o descendente (al pulsar el botón se cambiará el orden de los discentes),
- reiniciar el listado (poner el listado con los valores iniciales).
- por último, añade el código necesario para que al pulsar sobre el nombre de un/una discente a través de un botón Desmatricular, desaparezca del listado (recuerda utilizar la delegación de eventos).

Recuerda que los discentes deben mostrarse debidamente formateados.


---

## 📄 Práctica 4.08 Estados en React

*Ubicación original:* `Ejercicio_old/Práctica 4.08 Estados en React.txt`

```text


	-> carga del JSON en APP
	-> Dos estados (mínimo): discentes y filtrado
	-> seis botones para filtros/ordenación
	-> que filtra
	-> que ordena
	-> división en componentes
	-> 
	
```

---

## 📄 Práctica 4.09 useEffect en React

*Ubicación original:* `Ejercicio_old/Práctica 4.09 useEffect en React.odt`

```javascript
PRÁCTICA 4.09 useEffect en React
```


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
```

  - los ejercicios deben realizarse usando JavaScript ES6. No se podrá utilizar ninguna biblioteca (si no se especifica lo contrario en el enunciado),
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula,
  - el estilo que afecte a un componente debe estar contenido en un fichero CSS junto a ese componente y con su mismo nombre.
- En cuanto a la entrega de los archivos que componen los ejercicios de React:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
```javascript
los componentes creados deben estar separados en carpetas (los creados en el Ejercicio1 dentro de una carpeta denominada Ejercicio1),
```

  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con los ficheros package.json y package-lock.json en un fichero ZIP , y
```

  - sube a Aules el fichero comprimido.
- Localizador en React
```javascript
Recupera el ejercicio “Localizador” de la UT04 y mígralo a React en un componente denominado <Localizador>. Recuerda que era un programa que mostraba en todo momento la posición actual del ratón en la pantalla (coordenadas x e y). Para ello, se modificaba de forma dinámica un elemento HTML (por ejemplo un <p>). En React se simplificará ya que se dispone de estados. Recuerda añadir una función de limpieza.
Para comprobar si la función de limpieza funciona, crea un estado en <App> para controlar el montaje/desmontaje de ese componente. Ese estado se controlará a través de un botón.
```


Como siempre, la salida debe estar debidamente formateada.

- Colorines en React
```javascript
Del mismo modo que en el ejercicio anterior, migra el ejercicio “Colorines” a un componente de React homónimo. Recuerda que la pantalla del navegador cambiaba el fondo a un color aleatorio cuando se hacía doble clic en cualquier parte del documento. Se generaban los colores bien en hexadecimal #5a6f12 o en RGB rgb(255,255,255), pero siempre de forma aleatoria. Recupera las funciones de aquel ejercicio y añade una función de limpieza al componente creado.
Del mismo modo que en el caso anterior, crea un estado en <App> para controlar el montaje/desmontaje de ese componente que será controlado a través de un botón.
Contador de clics en React
Crea el componente <Contador> que se encargará de mostrar el número de clics que se hace sobre cualquier parte del documento. La información será mostrada tan sólo cada cinco clics empezando desde cero. Por ejemplo: Estimado usuario/a, has pulsado 0 veces el ratón. Este mensaje sólo se actualizará cuando se alcancen cinco clics y se volverá actualizar a los diez, después a los quince...
```


La salida de datos debe estar debidamente formateada y debe existir una fucnión de limpieza.

- Cronómetro en React

Crea un cronómetro en un componente con las siguientes características:

- iniciará a contar desde el mismo momento que se monta el componente,
- debe mostrar segundos y centésimas (o milésimas si te parece mejor),
- contiene dos botones: Parar y Reiniciar que no es necesario aclarar para qué es cada uno,
- como siempre, la salida debe estar debidamente formateada.
```javascript
Recuerda que si se usa setInterval, setTimeout o addEventListener en el objeto window o document siempre se debe utilizar una función de limpieza en useEffect.
```


---

## 📄 Práctica 4.09 useEffect en React

*Ubicación original:* `Ejercicio_old/Práctica 4.09 useEffect en React.txt`

```text

return en useEffect si se añade eventos.
removeListener con funciones declaración.
useEffect con eventos se ejecutan una vez ([]).
Estructura/nomenclatura de componentes.
```

---

## 📄 Práctica 4.10 Formularios controlados en React (lista compra)

*Ubicación original:* `Ejercicio_old/Práctica 4.10 Formularios controlados en React (lista compra).odt`


## PRÁCTICA 4.10 Formularios controlados en React


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
```

  - los ejercicios deben realizarse usando JavaScript ES6. No se podrá utilizar ninguna biblioteca (si no se especifica lo contrario en el enunciado),
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula.
  - todos los formularios en React deben ser del tipo controlados (a través del estado). En caso contrario debe ser debidamente justificado.
- En cuanto a la entrega de los archivos que componen los ejercicios de React:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
```javascript
los componentes creados deben estar separados en carpetas (los creados en el Ejercicio1 dentro de una carpeta denominada Ejercicio1),
```

  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con los ficheros package.json y package-lock.json en un fichero ZIP , y
```

  - sube a Aules el fichero comprimido.
- Lista de la compra con React

Crea una aplicación que lleve el registro de una lista de la compra con las siguientes características:

```javascript
los datos estarán almacenados en un objeto JSON (situado en una variable). Diseña su estructura para que permita almacenar un identificador de producto, su nombre, su descripción, su precio, las unidades que hay que comprar y el subtotal (total por línea de producto),
crea un formulario que permita añadir productos a la lista de la compra. Dispondrá de un botón que, antes de realizar la inserción en el objeto JSON, comprobará si los campos poseen un valor válido,
```

- el listado de productos debe mostrarse en tiempo real. Reserva una parte de la aplicación para mostrar este listado de productos como ya sabes: debidamente formateado. Si la lista está vacía mostrará un mensaje indicando que no hay productos en la lista todavía,
- se debe mostrar el total de carrito (debidamente formateado) y actualizarse en cada cambio en la lista de la compra,
- al hacer clic sobre un producto de la lista se eliminará de ella previa confirmación del usuario,
- añade un botón que permita eliminar todo el listado.

---

## 📄 Práctica 4.10 Formularios controlados en React

*Ubicación original:* `Ejercicio_old/Práctica 4.10 Formularios controlados en React.odt`


## PRÁCTICA 4.10 Formularios controlados en React


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
```

  - los ejercicios deben realizarse usando JavaScript ES6. No se podrá utilizar ninguna biblioteca (si no se especifica lo contrario en el enunciado),
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula.
  - todos los formularios en React deben ser del tipo controlados (a través del estado). En caso contrario debe ser debidamente justificado.
- En cuanto a la entrega de los archivos que componen los ejercicios de React:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
```javascript
los componentes creados deben estar separados en carpetas (los creados en el Ejercicio1 dentro de una carpeta denominada Ejercicio1),
```

  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con los ficheros package.json y package-lock.json en un fichero ZIP , y
```

  - sube a Aules el fichero comprimido.
- Colección de discos con React

Traspasa el formulario del ejercicio Discos a React transformándolo en un formulario controlado con un estado.

- Comprobación de discos con React

A partir del formulario creado en la actividad anterior, realiza las funciones necesarias para validarlo teniendo en cuenta:

- nombre del disco al menos cinco caracteres y obligatorio
- grupo de música o intérprete al menos cinco caracteres y obligatorio
- año de publicación cuatro caracteres numéricos
- tipo de música comprobará si se ha seleccionado alguno
- localización formato ES-001AA donde 001 es el número de la estantería y AA la balda (combinación de dos letras mayúsculas)
- prestado no tiene comprobación
```javascript
En caso de que se produzca un error en la validación, el campo implicado tendrá el borde rojo de tamaño 2px y se mostrarán los errores en un componente diseñado a tal efecto. Crea las clases CSS que estimes oportuno en un fichero aparte. Si se corrigen los datos una vez cambiado el estilo del <input> deberá volver a su color habitual.
```


---

## 📄 Práctica 4.10 Formularios controlados en React

*Ubicación original:* `Ejercicio_old/Práctica 4.10 Formularios controlados en React.txt`

```text

Añadir un select, un checkbox y un radio para la próxima.

Corrección:
	subtotal es campo calculado
	comprobar campos
	borrar con confirmación
	división de componentes
	inicialización de estados
	número de estados
	comprobar el map
	formato de salida (id, previsualización del estado, estilo...)
	alert, confirm...
	formulario controlado

```

---

## 📄 Práctica 4.11 Calculadora controlada (opcional)

*Ubicación original:* `Ejercicio_old/Práctica 4.11 Calculadora controlada (opcional).odt`


## PRÁCTICA 4.11 Calculadora controlada


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
```

  - los ejercicios deben realizarse usando JavaScript ES6. No se podrá utilizar ninguna biblioteca (si no se especifica lo contrario en el enunciado),
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula,
  - el estilo que afecte a un componente debe estar contenido en un fichero CSS junto a ese componente y con su mismo nombre.
  - todos los formularios en React deben ser del tipo controlados (a través del estado). En caso contrario debe ser debidamente justificado.
- En cuanto a la entrega de los archivos que componen los ejercicios de React:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
```javascript
los componentes creados deben estar separados en carpetas (los creados en el Ejercicio1 dentro de una carpeta denominada Ejercicio1),
```

  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con los ficheros package.json y package-lock.json en un fichero ZIP , y
```

  - sube a Aules el fichero comprimido.
- Calculadora con estado

Con anterioridad diseñaste una calculadora que utilizaba componentes de formulario de una forma no controlada. Es hora de mejorar este componente y actualizarlo para que utilice un formulario controlado por el estado.


Crea un nuevo componente para sustituir a la vieja calculadora que sea posea un estado y un formulario controlado por ese estado.


---

## 📄 Práctica 4.12 Cronómetro en React (opcional)

*Ubicación original:* `Ejercicio_old/Práctica 4.12 Cronómetro en React (opcional).odt`

```javascript
PRÁCTICA 4.12 Cronómetro en React
```


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
```

  - los ejercicios deben realizarse usando JavaScript ES6. No se podrá utilizar ninguna biblioteca (si no se especifica lo contrario en el enunciado),
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula,
  - el estilo que afecte a un componente debe estar contenido en un fichero CSS junto a ese componente y con su mismo nombre.
- En cuanto a la entrega de los archivos que componen los ejercicios de React:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
```javascript
los componentes creados deben estar separados en carpetas (los creados en el Ejercicio1 dentro de una carpeta denominada Ejercicio1),
```

  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con los ficheros package.json y package-lock.json en un fichero ZIP , y
```

  - sube a Aules el fichero comprimido.
- Cronómetro en React

Crea un cronómetro en un componente con las siguientes características:

- debe mostrar segundos y centésimas (o milésimas si te parece mejor),
- contiene tres botones: empezar, pausar y reiniciar que no es necesario aclarar para qué es cada uno,
- como siempre, la salida debe estar debidamente formateada.
```javascript
Recuerda que si se usa setInterval, setTimeout o addEventListener en el objeto window siempre se debe utilizar una función de clean up en useEffect.
```


---

## 📄 Evaluacion_UT05

*Ubicación original:* `Evaluacion_UT05.md`

```markdown
# PRUEBA DE EVALUACIÓN - UNIDAD 05
## Eventos, Validación de Formularios, Almacenamiento Web y Hooks (useEffect)

**Módulo:** Desarrollo Web en Entorno Cliente (2º DAW)  
**Estructura:** Dividida en dos sesiones de 2 horas (Presencial, sin conexión a Internet)  
**Puntuación total:** 100 puntos (50 pts Sesión 1 + 50 pts Sesión 2)

---

### Normas de entrega y directrices técnicas

#### En cuanto al código:
- **Presentación interna:** Importan los comentarios explicativos, modularidad y significación de nombres; el programa debe ser autodocumentado.
- **Sintaxis y estándares:** Código en **JavaScript ES6** con modo estricto (`"use strict";`).
- **Asignación de eventos:** Todo evento en Vanilla JS debe asignarse mediante `addEventListener(evento, funcion, useCapture)` indicando siempre sus tres parámetros.
- **Validación:** Se deben emplear **Expresiones Regulares (RegExp)** rigurosas y mensajes de error específicos para cada campo.
- **Límite de contenidos:** Contenidos de **UT01 a UT05** (Eventos, flujo, delegación, Drag & Drop, validación Regex, `localStorage`, `sessionStorage`, y en React `useState`, `useEffect` y formularios controlados). No se permite el uso de promesas remotas con `fetch` (UT06).

---

## SESIÓN 1 (2 HORAS): Eventos, Drag & Drop, Formularios y Persistencia en Vanilla JS

### Ejercicio 1: Formulario de Alta con Validación Regex y Persistencia (25 puntos)
Crea una página de registro con los siguientes requisitos:
1. **Campos requeridos:**
   - **Nombre completo:** Mínimo dos palabras, solo letras y espacios.
   - **IBAN bancario español:** Formato `"ES"` seguido de 22 dígitos (ej. `ES1234567890123456789012`).
   - **Fecha de nacimiento:** Formato `AAAA-MM-DD` y debe verificar que el usuario sea mayor de 18 años utilizando el objeto `Date`.
2. **Comportamiento:**
   - Si algún campo no cumple la validación, muestra un mensaje de error personalizado debajo del campo y no envía el formulario.
   - Si todo es correcto, guarda el objeto en `localStorage` (como array serializado en JSON) y renderiza la tabla de altas en tiempo real.

### Ejercicio 2: Tablero Kanban Interactivo con Drag & Drop (25 puntos)
Desarrolla un tablero con tres columnas: "Por Hacer", "En Proceso" y "Finalizado":
1. Permite arrastrar tarjetas entre las columnas mediante la API **HTML5 Drag and Drop** (`dragstart`, `dragover`, `drop`, `dragleave`).
2. Al soltar una tarjeta en una columna, actualiza automáticamente el estado en `localStorage` para que la posición de las tarjetas persista al recargar la página.

---

## SESIÓN 2 (2 HORAS): React - useEffect, Formularios Controlados y Sincronización

### Ejercicio 3: Monitor de Sesión y Temporizador con useEffect (25 puntos)
Crea el componente React `<MonitorSesion>`:
1. Registra el tiempo que el usuario lleva activo en la pestaña mediante `useEffect` con un intervalo de 1 segundo.
2. Alerta cuando el usuario lleva más de 5 minutos inactivo o cambia de pestaña (evento `visibilitychange` o movimiento de ratón suscrito con `useEffect` y debidamente desuscrito en la función de limpieza `return () => {}`).
3. Muestra los minutos y segundos transcurridos con formato digital `MM:SS`.

### Ejercicio 4: Gestor de Presupuestos y Gastos Controlado en React (25 puntos)
Crea el componente React `<GestorPresupuesto>`:
1. **Formulario controlado:** Inputs controlados para concepto (texto), cantidad (número positivo) y categoría (select: Alimentación, Transporte, Ocio, Servicios).
2. **Cálculos reactivos:** Muestra el total gastado, desglose por categoría y alerta visual si el gasto supera el presupuesto límite fijado en el estado.
3. **Persistencia:** Guarda y recupera la lista de gastos en `localStorage` mediante `useEffect`.

```

---

## 📄 Práctica 5.01 Eventos (autoevaluable)

*Ubicación original:* `Práctica 5.01 Eventos (autoevaluable).odt`


## PRÁCTICA 5.01 Eventos


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
todo el código debe estar situado dentro del evento window.onload = () => {}; o a través del evento document.addEventListener("DOMContentLoaded", () => {}); ,
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
```javascript
para la asignación de eventos se utilizará addEventListener() indicando sus tres parámetros en su definición,
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal).
```

- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
```javascript
la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
```

- Saludar

Realiza un programa con dos botones Comenzar Saludos y Parar saludos. Al hacer clic en el primero lanza un setInterval para que cada dos segundos genere un &lt;h1&gt; con el texto ¡Hola Feo!. El botón Parar saludos parará la secuencia.

- Colorines
```javascript
Haz un programa que al hacer doble clic en la pantalla del navegador cambie el fondo a un color aleatorio. Puedes generar los colores bien en hexadecimal #5a6f12 o en RGB rgb(255,255,255).
```


Deberás crear una función que genere un color aleatorio válido. Si eliges colores en hexadecimal utiliza este array:

```javascript
var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
```

- Localizador
```javascript
Haz un programa que, mediante eventos y el uso del objeto event, muestre en todo momento la posición actual del ratón en pantalla. Para mostrar la posición, modificaremos de forma dinámica un elemento HTML (por ejemplo un <p>) que muestre la posición actual del ratón (coordenadas x e y). Como siempre, la salida debe estar debidamente formateada.
```


---

## 📄 Práctica 5.02 Más eventos

*Ubicación original:* `Práctica 5.02 Más eventos.odt`


![](/images/ut05_practica-5_10000000000002FC000000C06D681F44.png)


## PRÁCTICA 5.02 Eventos


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
todo el código debe estar situado dentro del evento window.onload = () => {}; o a través del evento document.addEventListener("DOMContentLoaded", () => {}); ,
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
```javascript
para la asignación de eventos se utilizará addEventListener() indicando sus tres parámetros en su definición,
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal).
```

- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
```javascript
la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
```

- Acordeón

Crea un acordeón compuesto por seis elementos que al hacer clic sobre los impares se muestre la información que está situada en el elemento par inmediatamente inferior a él. Al volver a hacer clic, si el elemento par que contiene la información se ve en pantalla deberá ocultarse. No se podrá utilizar el atributo id de los elementos HTML.


![](/images/ut05_practica-5_10000000000002FC000000C06D681F44.png)


> 📸 *Figura 1: Esquema del acordeón.*

- Pestañas

Realiza un sistema de pestañas compuesto por dos &lt;div&gt;:

- el primero contendrá las pestañas (mínimo tres) que mostrarán un nombre (elige la etiqueta HTML que prefieras para ello),
- el segundo contendrá la información de cada pestaña (elige la etiqueta HTML que prefieras para esta tarea).

Al pulsar sobre cada pestaña del primer &lt;div&gt; se mostrará la información relacionada del segundo &lt;div&gt;. Su relación será secuencial: la primera pestaña mostrará el primer contenido, la segunda pestaña el segundo contenido… No se podrá utilizar el atributo id de los elementos HTML.


Aplica un poco de tu estilo a las pestañas a través de CSS.


---

## 📄 Práctica 5.03 Pintarajea cambios

*Ubicación original:* `Práctica 5.03 Pintarajea cambios.txt`

```text

Dar dos opciones para hacer la práctica:
	-> clic para pintar
	-> mouseDown/Up para pintar
	

Que programen la estructura del proyecto y que amplien la funcionalidad a través de la IA.

Mirar la práctica de Eloy.
Añadir lo del selector de color.
Cambiar el fondo.
Cambiar el tamaño del lienzo.
Ver cuadrícula.

```

---

## 📄 Práctica 5.03 Pintarajea corrección

*Ubicación original:* `Práctica 5.03 Pintarajea corrección.txt`

```text

Uso de imports.
Declaración de funciones en el principal.
Delegación de eventos.
addEventListeners dentro de funciones.
Uso operador identidad al comprobar tagName.
Mensajes por consola.

```

---

## 📄 Práctica 5.03 Pintarajea

*Ubicación original:* `Práctica 5.03 Pintarajea.odt`


![](/images/ut05_practica-5_10000000000003C1000002E759D3671B.png)


## PRÁCTICA 5.03 Pintarrajea


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
todo el código debe estar situado dentro del evento window.onload = () => {}; o a través del evento document.addEventListener("DOMContentLoaded", () => {}); ,
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
```javascript
para la asignación de eventos se utilizará addEventListener() indicando sus tres parámetros en su definición,
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal).
```

- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
  - la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.

# Pintarrajea


![](/images/ut05_practica-5_10000000000003C1000002E759D3671B.png)


Te han encargado una pequeña aplicación para dibujar llamada Pintarrajea. Con ella se podrá diseñar logotipos básicos eligiendo colores y haciendo clic sobre celdas de una tabla. Deberá hacer lo siguiente:

  - en el &lt;body&gt; habrá dos &lt;div&gt;,
  - en el primero (superior) habrá un selector de colores que debe mostrar le siguiente información:
    - contendrá una serie de colores (mínimo seis) que se podrán elegir para comenzar a pintar (uno de ellos debe ser el blanco) haciendo clic sobre ellos,
    - habilita una zona para indicar con un texto el color seleccionado.

Puedes utilizar las etiquetas que quieras para esta sección: un &lt;table&gt; con dos &lt;tr&gt;, un &lt;ul&gt; con &lt;li&gt; o hacerla con &lt;div&gt;.

  - en el segundo (inferior), de manera automática se generará una tabla cuadrada de sesenta celdas de largo. Cada una de ellas con un tamaño de 10 por 10 px. Esta tabla actuará como lienzo en blanco para dibujar,
  - en la parte inferior de la aplicación habrá un botón que permitirá reiniciar la tabla a color blanco,
  - crear el fichero de estilos CSS necesario para que los elementos tengan el formato parecido a un cuadernillo de Rubio (si no sabes a qué me refiero, haz arqueología en Internet).

Funcionamiento del programa:

  - Se pulsa una celda de color de la tabla superior para elegir uno con el que pintar,
  - se sitúa el cursor encima del lienzo y se pulsa el botón izquierdo del ratón,
  - mientras el botón esté pulsado, cuando el ratón se mueve sobre las celdas (sin hacer clic) se irán pintando con el color seleccionado previamente,
  - cuando se deje de pulsar el botón izquierdo del ratón dejará de pintar,
  - es posible repetir el proceso con otros colores sobre celdas pintadas o sin pintar,
  - si es necesario borrar colores, se pulsará sobre el color blanco del selector.

![](/images/ut05_practica-5_10000000000003C1000002E759D3671B.png)


El aspecto podría ser similar al siguiente:


---

## 📄 Práctica 5.04 Rompecabezas - correción

*Ubicación original:* `Práctica 5.04 Rompecabezas - correción.txt`

```text

usa imports (20)
regreso de las piezas (10)
delcaración de funciones en el principal (10)
funciones con addEventListener (20)
usa dataTransfer (10-20)
recarga la página (10)

```

---

## 📄 Práctica 5.04 Rompecabezas

*Ubicación original:* `Práctica 5.04 Rompecabezas.odt`


![](/images/ut05_practica-5_10000000000003F000000394DCB7D511.png)


## PRÁCTICA 5.04 Rompecabezas


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
todo el código debe estar situado dentro del evento window.onload = () => {}; o a través del evento document.addEventListener("DOMContentLoaded", () => {}); ,
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
```javascript
para la asignación de eventos se utilizará addEventListener() indicando sus tres parámetros en su definición,
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal).
```

- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
  - la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.

# Rompecabezas


Crea un pequeño juego para resolver un rompecabezas con nueve piezas. Las imágenes podrás encontrarlas en Alues.


Sigue estas indicaciones para crear el juego:

  - en el &lt;body&gt; habrá tres &lt;div&gt; uno encima del otro,
  - en el primero (superior) contendrá las piezas del rompecabezas mostradas de forma aleatoria en cada carga de la página.
```html
en el segundo (medio), se situará el panel de juego dividido en una grilla de tres por tres elementos. Esta grilla contendrá las piezas del <div> superior a medida que el usuario las vaya colocando.
```

  - en el tercero (inferior) habrá un botón que permitirá reiniciar la partida,
  - crear el fichero de estilos CSS necesario para que quede bonito,
  - si no te parece apropiada la imagen del ejercicio puedes seleccionar una diferente. Utiliza esta web https://pinetools.com/es/partir-imagenes para cortarla en nueve piezas (tres en la vertical y tres en la horizontal).

Funcionamiento del programa:

  - Se arrastra una pieza del &lt;div&gt; superior a una de las casillas del &lt;div&gt; medio y se coloca en ella. Si ya existe una pieza en esa casilla, no realizará ninguna acción,
  - este movimiento se puede realizar en sentido inverso para quitar piezas del &lt;div&gt; medio,
  - cuando se coloque la última pieza (la novena) se comprobará si la solución es correcta,
  - seguidamente, si es correcta informará al usuario. Si no lo es, no realizará ninguna acción.

![](/images/ut05_practica-5_10000000000003F000000394DCB7D511.png)


> 📸 *Figura 1: Aspecto general de la aplicación.El aspecto podría ser similar al siguiente:*


---

## 📄 Práctica 5.05 Formularios y persistencia de datos

*Ubicación original:* `Práctica 5.05 Formularios y persistencia de datos.odt`


## PRÁCTICA 5.05 Formularios y persistencia de datos


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
todo el código debe estar situado dentro del evento window.onload = () => {}; o a través del evento document.addEventListener("DOMContentLoaded", () => {}); ,
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
```javascript
para la asignación de eventos se utilizará addEventListener() indicando sus tres parámetros en su definición,
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal).
```

- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
  - la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
- Mi colección de discos
- Prepara un formulario diseñado para almacenar los discos con los datos listados a continuación:
- nombre del disco,
- carátula del disco (su URL),
- grupo de música o intérprete,
- año de publicación,
- género de música mínimo cuatro),
- localización que guardará un código (inventado pero que contiene números y letras),
```javascript
prestado que almacenará un valor booleano (por defecto será false).
Tendrá un botón Guardar que añadirá el disco a un listado almacenado en un objeto JSON (que tendrás que diseñar) y otro Mostrar que mostrará el listado de discos debidamente formateado (usa CSS).
Antes de añadir el disco al objeto JSON debe ser comprobado. Crea las funciones necesarias para validarlo teniendo en cuenta:
```

- nombre del disco tiene, al menos, cinco caracteres y es obligatorio,
- grupo de música o intérprete posee, al menos, cinco caracteres y es obligatorio,
- año de publicación dispone de cuatro caracteres numéricos,
- tipo de música comprobará si se ha seleccionado alguno,
- localización tiene el formato ES-001AA donde 001 es el número de la estantería y AA la balda (combinación de dos letras mayúsculas),
- prestado y carátula no tienen comprobación.

En caso de que se produzca un error en la validación, el campo del formulario implicado será destacado con un estilo CSS adecuado. En cuanto ese campo contenga un valor válido, volverá a su estilo original.


Además existe un contenedor de información que, si se ha producido un error, mostrará un mensaje informando de qué campo (o campos) es el incorrecto y cómo solucionarlo (los insultos son opcionales). Ubícalo donde estimes oportuno y añádele el formato CSS que necesites.

- Añade un input texto y un botón Buscar que permita filtrar los discos según el texto introducido por el usuario. Junto a él existirá otro denominado Limpiar que volverá el listado a su formato original.
- Crea un sistema que permita eliminar un disco de la colección. Para ello añade un botón para eliminar (un icono puede ser una buen idea) en cada uno de ellos que permita quitar ese disco del listado. Se debe confirmar la acción de borrado.
```javascript
Da persistencia a los datos del listado utilizando localStorage. Los datos se cargarán en un objeto JSON en la carga de la página y se guardarán cada vez que se modifique el listado (se añada o se elimine un disco).
```


---

## 📄 Práctica 5.05

*Ubicación original:* `Práctica 5.05.txt`

```text

Aligerar un poco los contenidos de esta práctica. Queda un poco larga.
```

---

## 📄 Práctica 5.06 Formularios persistentes en React

*Ubicación original:* `Práctica 5.06 Formularios persistentes en React.odt`


## PRÁCTICA 5.06 Formularios persistentes en React


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
```

  - los ejercicios deben realizarse usando JavaScript ES6. No se podrá utilizar ninguna biblioteca (si no se especifica lo contrario en el enunciado),
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula.
  - todos los formularios en React deben ser del tipo controlados (a través del estado). En caso contrario debe ser debidamente justificado.
- En cuanto a la entrega de los archivos que componen los ejercicios:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
```javascript
los componentes creados deben estar separados en carpetas (los creados en el Ejercicio1 dentro de una carpeta denominada Ejercicio1),
```

  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con el fichero package.json en un fichero ZIP , y
```

  - sube a Aules el fichero comprimido.
- Mi colección de discos (pero esta vez bien)
- Construye la aplicación (crea un proyecto de React nuevo) para gestionar tu colección de discos. Su estructura debe contener, como mínimo, una cabecera, un menú (con inicio, insertar disco y listar disco), un contenido (parte principal) y un pie de página (estático). Por supuesto, puedes/debes reutilizar componentes de los que tienes disponibles.
- El contenido de cada sección será:
- inicio, una página con la presentación de la aplicación,
- insertar disco, con un formulario para insertar discos en la aplicación (tras cada inserción debe mostrar un mensaje de confirmación o error),
- listar disco, con un listado simple (imagen de portada en pequeño, nombre del disco, nombre del grupo y género) que al pulsar sobre cada uno de ellos aparezca la información completa del disco.
- En la página de insertar disco, prepara un formulario controlado diseñado para almacenar los discos con los datos listados a continuación (puedes/debes reutilizar código):
- nombre del disco,
- carátula del disco (su URL),
- grupo de música o intérprete,
- año de publicación,
- género de música mínimo cuatro),
- localización que guardará un código (inventado pero que contiene números y letras),
```javascript
prestado que almacenará un valor booleano (por defecto será false).
Tendrá un botón Guardar que añadirá el disco a un listado almacenado en un objeto JSON (que puedes/debes reutilizar).
Antes de añadir el disco al objeto JSON debe ser comprobado (reutiliza código). Crea las funciones necesarias para validarlo teniendo en cuenta:
```

- nombre del disco tiene, al menos, cinco caracteres y es obligatorio,
- grupo de música o intérprete posee, al menos, cinco caracteres y es obligatorio,
- año de publicación dispone de cuatro caracteres numéricos,
- tipo de música comprobará si se ha seleccionado alguno,
- localización tiene el formato ES-001AA donde 001 es el número de la estantería y AA la balda (combinación de dos letras mayúsculas),
- prestado y carátula no tienen comprobación.

En caso de que se produzca un error en la validación, el campo del formulario implicado será destacado con un estilo CSS adecuado. En cuanto ese campo contenga un valor válido, volverá a su estilo original.

```javascript
Además, existe un componente que actúa como contenedor de información que, si se ha producido un error, mostrará un mensaje informando de qué campo (o campos) es el incorrecto y cómo solucionarlo (los insultos son opcionales). Ubícalo donde estimes oportuno.
```

- En la sección listar disco, añade algún sistema que permita filtrar los discos según el texto introducido por el usuario en un input. Junto a él existirá otro denominado Limpiar que volverá el listado a su contenido original (reutiliza código).
- Crea un sistema que permita eliminar un disco de la colección. Para ello añade un botón para eliminar (un icono puede ser una buen idea) en cada uno de ellos, que permita quitar ese disco del listado. Se debe confirmar la acción de borrado.
```javascript
Otorga persistencia a los datos del listado utilizando localStorage. Los datos se cargarán en un objeto JSON en la carga de la página y se guardarán cada vez que se modifique el listado (se añada o se elimine un disco). Para ello se deberá:
cargar los datos desde localStorage al inicio de la aplicación y
actualizar los datos en localStorage cada vez que sean modificados (efectos secundarios).
```


---

## 📄 Práctica 5.07 Generador de formularios (opcional)

*Ubicación original:* `Práctica 5.07 Generador de formularios (opcional).odt`


## PRÁCTICA 5.07 Generador de formularios


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
todo el código debe estar situado dentro del evento window.onload = () => {}; o a través del evento document.addEventListener("DOMContentLoaded", () => {}); ,
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
```javascript
para la asignación de eventos se utilizará addEventListener() indicando sus tres parámetros en su definición,
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal).
```

- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
  - la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
- Generador de formularios

Crea una aplicación que te permitirá generar formularios de manera dinámica. Para ello necesitarás un formulario que realice las siguientes acciones:

```javascript
crear un <input> de tipo texto. Le preguntará al usuario mediante un prompt qué nombre (atributo id) tiene el <input>
crear un <input> de tipo contraseña. Le preguntará al usuario mediante un prompt qué nombre (atributo id) tiene el <input>
crear un <textarea>. Le preguntará al usuario el nombre (atributo id) y generará automáticamente uno de cuarenta columnas y cinco filas
crear un <label>. Preguntará al usuario a qué <input> va referido (atributo for) y cuál es el texto. La función debe comprobar si ese elemento existe en el formulario actual
crear una imagen. Preguntará al usuario qué ruta tiene la imagen (atributo src) y su nombre (atributo id)
crear un <checkbox>. Preguntará al usuario el nombre y el valor (atributos name y value)
crear un <radio>. Preguntará al usuario el nombre y el valor (atributos name y value)
crear un botón (submit). Preguntará al usuario el nombre y el valor (atributos id y value)
```


El programa debe comprobar que ni el nombre ni el id elegidos por el usuario esté en uso en el formulario actual. De ser así, debe informar debidamente al idiota usuario.


---

## 📄 Práctica 5.09 useEffect en React

*Ubicación original:* `Práctica 5.09 useEffect en React.odt`

```javascript
PRÁCTICA 5.09 useEffect en React
```


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
```

  - los ejercicios deben realizarse usando JavaScript ES6. No se podrá utilizar ninguna biblioteca (si no se especifica lo contrario en el enunciado),
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula,
  - el estilo que afecte a un componente debe estar contenido en un fichero CSS junto a ese componente y con su mismo nombre.
- En cuanto a la entrega de los archivos que componen los ejercicios de React:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
```javascript
los componentes creados deben estar separados en carpetas (los creados en el Ejercicio1 dentro de una carpeta denominada Ejercicio1),
```

  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con los ficheros package.json y package-lock.json en un fichero ZIP , y
```

  - sube a Aules el fichero comprimido.
- Localizador en React
```javascript
Recupera el ejercicio “Localizador” de la UT04 y mígralo a React en un componente denominado <Localizador>. Recuerda que era un programa que mostraba en todo momento la posición actual del ratón en la pantalla (coordenadas x e y). Para ello, se modificaba de forma dinámica un elemento HTML (por ejemplo un <p>). En React se simplificará ya que se dispone de estados. Recuerda añadir una función de limpieza.
Para comprobar si la función de limpieza funciona, crea un estado en <App> para controlar el montaje/desmontaje de ese componente. Ese estado se controlará a través de un botón.
```


Como siempre, la salida debe estar debidamente formateada.

- Colorines en React
```javascript
Del mismo modo que en el ejercicio anterior, migra el ejercicio “Colorines” a un componente de React homónimo. Recuerda que la pantalla del navegador cambiaba el fondo a un color aleatorio cuando se hacía doble clic en cualquier parte del documento. Se generaban los colores bien en hexadecimal #5a6f12 o en RGB rgb(255,255,255), pero siempre de forma aleatoria. Recupera las funciones de aquel ejercicio y añade una función de limpieza al componente creado.
Del mismo modo que en el caso anterior, crea un estado en <App> para controlar el montaje/desmontaje de ese componente que será controlado a través de un botón.
Contador de clics en React
Crea el componente <Contador> que se encargará de mostrar el número de clics que se hace sobre cualquier parte del documento. La información será mostrada tan sólo cada cinco clics empezando desde cero. Por ejemplo: Estimado/a usuario/a, has pulsado 0 veces el ratón. Este mensaje sólo se actualizará cuando se alcancen cinco clics y se volverá actualizar a los diez, después a los quince...
```


La salida de datos debe estar debidamente formateada y debe existir una función de limpieza.

- Cronómetro en React

Crea un cronómetro en un componente con las siguientes características:

- iniciará a contar desde el mismo momento que se monta el componente,
- debe mostrar segundos y centésimas (o milésimas si te parece mejor),
- contiene dos botones: Parar y Reiniciar que no es necesario aclarar para qué es cada uno,
- como siempre, la salida debe estar debidamente formateada.
```javascript
Recuerda que si se usa setInterval, setTimeout o addEventListener en el objeto window o document siempre se debe utilizar una función de limpieza en useEffect.
```


---

## 📄 Práctica 5.09 useEffect en React

*Ubicación original:* `Práctica 5.09 useEffect en React.txt`

```text

return en useEffect si se añade eventos.
removeListener con funciones declaración.
useEffect con eventos se ejecutan una vez ([]).
Estructura/nomenclatura de componentes.
```

---

## 📄 Práctica 5.10 Formularios controlados en React (lista compra)

*Ubicación original:* `Práctica 5.10 Formularios controlados en React (lista compra).odt`


## PRÁCTICA 5.10 Formularios controlados en React


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
```

  - los ejercicios deben realizarse usando JavaScript ES6. No se podrá utilizar ninguna biblioteca (si no se especifica lo contrario en el enunciado),
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula.
  - todos los formularios en React deben ser del tipo controlados (a través del estado). En caso contrario debe ser debidamente justificado.
- En cuanto a la entrega de los archivos que componen los ejercicios de React:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
```javascript
los componentes creados deben estar separados en carpetas (los creados en el Ejercicio1 dentro de una carpeta denominada Ejercicio1),
```

  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con el fichero package.json en un fichero ZIP , y
```

  - sube a Aules el fichero comprimido.
- Lista de la compra con React

Crea una aplicación que lleve el registro de una lista de la compra con las siguientes características:

```javascript
los datos estarán almacenados en un objeto JSON (situado en una variable). Diseña su estructura para que permita almacenar un identificador de producto, su nombre, su descripción, su precio, las unidades que hay que comprar y el subtotal (total por línea de producto),
crea un formulario que permita añadir productos a la lista de la compra. Dispondrá de un botón que, antes de realizar la inserción en el objeto JSON, comprobará si los campos poseen un valor válido,
```

- el listado de productos debe mostrarse en tiempo real. Reserva una parte de la aplicación para mostrar este listado de productos como ya sabes: debidamente formateado. Si la lista está vacía mostrará un mensaje indicando que no hay productos en la lista todavía,
- se debe mostrar el total de carrito (debidamente formateado) y actualizarse en cada cambio en la lista de la compra,
- al hacer clic sobre un producto de la lista se eliminará de ella previa confirmación del usuario,
- añade un botón que permita eliminar todo el listado.

---

## 📄 Práctica 5.10 Formularios controlados en React - Copy

*Ubicación original:* `Práctica 5.10 Formularios controlados en React - Copy.odt`


## PRÁCTICA 5.10 Formularios controlados en React


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
```

  - los ejercicios deben realizarse usando JavaScript ES6. No se podrá utilizar ninguna biblioteca (si no se especifica lo contrario en el enunciado),
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula.
  - todos los formularios en React deben ser del tipo controlados (a través del estado). En caso contrario debe ser debidamente justificado.
- En cuanto a la entrega de los archivos que componen los ejercicios de React:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
```javascript
los componentes creados deben estar separados en carpetas (los creados en el Ejercicio1 dentro de una carpeta denominada Ejercicio1),
```

  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con los ficheros package.json y package-lock.json en un fichero ZIP , y
```

  - sube a Aules el fichero comprimido.
- Colección de discos con React

Traspasa el formulario del ejercicio Discos a React transformándolo en un formulario controlado con un estado.

- Comprobación de discos con React

A partir del formulario creado en la actividad anterior, realiza las funciones necesarias para validarlo teniendo en cuenta:

- nombre del disco al menos cinco caracteres y obligatorio
- grupo de música o intérprete al menos cinco caracteres y obligatorio
- año de publicación cuatro caracteres numéricos
- tipo de música comprobará si se ha seleccionado alguno
- localización formato ES-001AA donde 001 es el número de la estantería y AA la balda (combinación de dos letras mayúsculas)
- prestado no tiene comprobación

En caso de que se produzca un error en la validación, el campo implicado tendrá el borde rojo de tamaño 2px y se mostrarán los errores en un componente diseñado a tal efecto. Crea las clases CSS que estimes oportuno en un fichero aparte. Si se corrigen los datos una vez cambiado el estilo del &lt;input&gt; deberá volver a su color habitual.


---

## 📄 Práctica 5.10 Formularios controlados en React

*Ubicación original:* `Práctica 5.10 Formularios controlados en React.odt`


## PRÁCTICA 5.10 Formularios controlados en React


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
```

  - los ejercicios deben realizarse usando JavaScript ES6. No se podrá utilizar ninguna biblioteca (si no se especifica lo contrario en el enunciado),
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula.
  - todos los formularios en React deben ser del tipo controlados (a través del estado). En caso contrario debe ser debidamente justificado.
- En cuanto a la entrega de los archivos que componen los ejercicios de React:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
```javascript
los componentes creados deben estar separados en carpetas (los creados en el Ejercicio1 dentro de una carpeta denominada Ejercicio1),
```

  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con los ficheros package.json y package-lock.json en un fichero ZIP , y
```

  - sube a Aules el fichero comprimido.
- Colección de discos con React

Traspasa el formulario del ejercicio Discos a React transformándolo en un formulario controlado con un estado.

- Comprobación de discos con React

A partir del formulario creado en la actividad anterior, realiza las funciones necesarias para validarlo teniendo en cuenta:

- nombre del disco al menos cinco caracteres y obligatorio
- grupo de música o intérprete al menos cinco caracteres y obligatorio
- año de publicación cuatro caracteres numéricos
- tipo de música comprobará si se ha seleccionado alguno
- localización formato ES-001AA donde 001 es el número de la estantería y AA la balda (combinación de dos letras mayúsculas)
- prestado no tiene comprobación

En caso de que se produzca un error en la validación, el campo implicado tendrá el borde rojo de tamaño 2px y se mostrarán los errores en un componente diseñado a tal efecto. Crea las clases CSS que estimes oportuno en un fichero aparte. Si se corrigen los datos una vez cambiado el estilo del &lt;input&gt; deberá volver a su color habitual.


---

## 📄 Práctica 5.10 Formularios controlados en React

*Ubicación original:* `Práctica 5.10 Formularios controlados en React.txt`

```text

Añadir un select, un checkbox y un radio para la próxima.

Corrección:
	subtotal es campo calculado
	comprobar campos
	borrar con confirmación
	división de componentes
	inicialización de estados
	número de estados
	comprobar el map
	formato de salida (id, previsualización del estado, estilo...)
	alert, confirm...
	formulario controlado

```

---

## 📄 Práctica 5.11 Calculadora controlada (opcional)

*Ubicación original:* `Práctica 5.11 Calculadora controlada (opcional).odt`


## PRÁCTICA 5.11 Calculadora controlada


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
```

  - los ejercicios deben realizarse usando JavaScript ES6. No se podrá utilizar ninguna biblioteca (si no se especifica lo contrario en el enunciado),
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula,
  - el estilo que afecte a un componente debe estar contenido en un fichero CSS junto a ese componente y con su mismo nombre.
  - todos los formularios en React deben ser del tipo controlados (a través del estado). En caso contrario debe ser debidamente justificado.
- En cuanto a la entrega de los archivos que componen los ejercicios de React:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
```javascript
los componentes creados deben estar separados en carpetas (los creados en el Ejercicio1 dentro de una carpeta denominada Ejercicio1),
```

  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con los ficheros package.json y package-lock.json en un fichero ZIP , y
```

  - sube a Aules el fichero comprimido.
- Calculadora con estado

Con anterioridad diseñaste una calculadora que utilizaba componentes de formulario de una forma no controlada. Es hora de mejorar este componente y actualizarlo para que utilice un formulario controlado por el estado.


Crea un nuevo componente para sustituir a la vieja calculadora que sea posea un estado y un formulario controlado por ese estado.


---

## 📄 Práctica 5.12 Cronómetro en React (opcional)

*Ubicación original:* `Práctica 5.12 Cronómetro en React (opcional).odt`


# PRÁCTICA 5.12 Cronómetro en React


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
```

  - los ejercicios deben realizarse usando JavaScript ES6. No se podrá utilizar ninguna biblioteca (si no se especifica lo contrario en el enunciado),
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula,
  - el estilo que afecte a un componente debe estar contenido en un fichero CSS junto a ese componente y con su mismo nombre.
- En cuanto a la entrega de los archivos que componen los ejercicios de React:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
```javascript
los componentes creados deben estar separados en carpetas (los creados en el Ejercicio1 dentro de una carpeta denominada Ejercicio1),
```

  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con los ficheros package.json y package-lock.json en un fichero ZIP , y
```

  - sube a Aules el fichero comprimido.
- Cronómetro en React

Crea un cronómetro en un componente con las siguientes características:

- debe mostrar segundos y centésimas (o milésimas si te parece mejor),
- contiene tres botones: empezar, pausar y reiniciar que no es necesario aclarar para qué es cada uno,
- como siempre, la salida debe estar debidamente formateada.
```javascript
Recuerda que si se usa setInterval, setTimeout o addEventListener en el objeto window siempre se debe utilizar una función de clean up en useEffect.
```


---

## 📄 Práctica 5.XX Agenda con storage (opcional)

*Ubicación original:* `Práctica 5.XX Agenda con storage (opcional).odt`

```javascript
PRÁCTICA 5.0X Almacenamiento con storage
```


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
todo el código debe estar situado dentro del evento window.onload = () => {}; o a través del evento document.addEventListener("DOMContentLoaded", () => {}); ,
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
```javascript
para la asignación de eventos se utilizará addEventListener() indicando sus tres parámetros en su definición,
```

  - debes dividir tu código en bibliotecas temáticas de funciones y/o clases a partir de este ejercicio,
```javascript
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas a partir de esta práctica,
```

  - todo el código que sea susceptible de retrasar su ejecución debe escribirse de forma asíncrona.
- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
```javascript
la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
Agenda con localStorage
Construye una aplicación web que permita el mantenimiento de un pequeño listado con el nombre, apellidos, dirección y teléfono de varias personas. Toda la información que contiene debe ser persistente y guardarse en localStorage. La agenda se maneja a través de un pequeño menú que debe incluir (al menos) las siguientes opciones:
```

- añadir, añade un registro a la agenda
- buscar, buscar entradas por nombre, apellido o teléfono
- listar, visualiza todas las entradas de la agenda
- ordenar, ordena los registros alfabéticamente por apellido o nombre
- borrar, borra la entrada seleccionada (esta opción puede no estar en el menú).
```javascript
Toda la gestión de los contactos debe ser manejada a través de un objeto JSON. Ten en cuenta que se trata de un Array, por lo que será necesario utilizar sus métodos push, map, filter, sort y splice, entre otros.
```


Recuerda crear un estilo apropiado, separar el código en ficheros de forma ordenada y situar los ficheros de la aplicación web en carpetas separadas.


---

## 📄 Práctica 5.XX Formularios y persistencia (ampliado)

*Ubicación original:* `Práctica 5.XX Formularios y persistencia (ampliado).odt`


## PRÁCTICA 5.06 Formularios y eventos


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
todo el código debe estar situado dentro del evento window.onload = () => {}; o a través del evento document.addEventListener("DOMContentLoaded", () => {}); ,
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
```javascript
para la asignación de eventos se utilizará addEventListener() indicando sus tres parámetros en su definición,
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal).
```

- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
  - la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
- Más números

Haz un programa que cree cien elementos &lt;checkbox&gt; con números aleatorios entre el 100 y el 1.000. Además, la página tendrá un botón Marcar todos los pares y un botón Desmarcar todos que realizarán las acciones que describen su texto.

- Creador párrafos

Crea un formulario que tenga un &lt;textarea&gt; , un &lt;select&gt; con tres tipos de formato (invéntate tres estilos de texto en clases CSS) y un botón con el texto Crear párrafo. Cuando el usuario haga clic sobre el botón se creará un nuevo párrafo &lt;p&gt; dentro de un &lt;div id=”resultado”&gt; situado debajo del formulario. Este nuevo &lt;p&gt; contendrá el texto del &lt;textarea&gt; con el estilo CSS elegido en el &lt;select&gt;. En caso de que cualquiera de los dos campos esté vacío, mostrará un mensaje de error insultando informando al usuario y no creará ningún párrafo.

- Pueblos
```javascript
Realiza un formulario con dos elementos <select> (provincia y población). Al cambiar el primero se actualizará el segundo. Al enviar el formulario (evento submit) se comprobará que ambos han sido marcados a una opción válida. Cuando no tengan ninguna selección previa los campos mostrarán No seleccionado que será la situación inicial. Los valores del primer campo serán Alicante, Castellón y Valencia. Los valores para el segundo campo son:
```

  - cuando el primer campo sea Alicante: Alicante, Elche y Petrer,
  - cuando el primer campo sea Castellón: Castellón, Oropesa y Vinaroz,
  - cuando el primer campo sea Valencia: Valencia, Xàtiva y Torrent.
- Mi colección de discos
- Prepara un formulario diseñado para almacenar los discos con los datos listados a continuación:
- nombre del disco,
- carátula del disco (su URL),
- grupo de música o intérprete,
- año de publicación,
- género de música mínimo cuatro),
- localización que guardará un código (inventado pero que contiene números y letras),
```javascript
prestado que almacenará un valor booleano (por defecto será false).
Tendrá un botón Guardar que añadirá el disco a un listado almacenado en un objeto JSON (que tendrás que diseñar) y otro Mostrar que mostrará el listado de discos debidamente formateado (usa CSS).
Antes de añadir el disco al objeto JSON debe ser comprobado. Crea las funciones necesarias para validarlo teniendo en cuenta:
```

- nombre del disco tiene, al menos, cinco caracteres y es obligatorio,
- grupo de música o intérprete posee, al menos, cinco caracteres y es obligatorio,
- año de publicación dispone de cuatro caracteres numéricos,
- tipo de música comprobará si se ha seleccionado alguno,
- localización tiene el formato ES-001AA donde 001 es el número de la estantería y AA la balda (combinación de dos letras mayúsculas),
- prestado y carátula no tienen comprobación.

En caso de que se produzca un error en la validación, el campo del formulario implicado será destacado con un estilo CSS adecuado. En cuanto ese campo contenga un valor válido, volverá a su estilo original.


Además existe un contenedor de información que, si se ha producido un error, mostrará un mensaje informando de qué campo (o campos) es el incorrecto y cómo solucionarlo (los insultos son opcionales). Ubícalo donde estimes oportuno y añádele el formato CSS que necesites.

- Añade un input texto y un botón Buscar que permita filtrar los discos según el texto introducido por el usuario. Junto a él existirá otro denominado Limpiar que volverá el listado a su formato original.
- Crea un sistema que permita eliminar un disco de la colección. Para ello añade un botón para eliminar (un icono puede ser una buen idea) en cada uno de ellos que permita quitar ese disco del listado. Se debe confirmar la acción de borrado.
```javascript
Da persistencia a los datos del listado utilizando localStorage. Los datos se cargarán en un objeto JSON en la carga de la página y se guardarán cada vez que se modifique el listado (se añada o se elimine un disco).
```


---

## 📄 Práctica 5.XX Gestor de tareas II (opcional)

*Ubicación original:* `Práctica 5.XX Gestor de tareas II (opcional).odt`


![](/images/ut05_practica-5_10000000000002B90000035FBBC9BE28.png)


PRÁCTICA 5.05 Gestor de tareas II


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
todo el código debe estar situado dentro del evento window.onload = () => {}; o a través del evento document.addEventListener("DOMContentLoaded", () => {}); ,
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
```javascript
para la asignación de eventos se utilizará addEventListener() indicando sus tres parámetros en su definición,
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal).
```

- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
```javascript
la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
```

- Gestor de tareas II

En el programa de Gestor de tareas realizado con anterioridad se habilitarán los siguientes cambios:

```javascript
un mecanismo arrastrar y soltar para permitir cambiar las tareas entre PENDIENTES y ACABADAS en ambos sentidos. Utiliza los eventos dragenter, dragleave y dragend además de los necesarios para hacer el efecto de arrastrar y soltar.
otro que permita cambiar el orden de las tareas dentro de las PENDIENTES. Cuando una tarea se suelte encima de otra la soltada tomará la posición de la tarea sobre la que se ha soltado desplazándola debajo (recuerda que se hiciste una función que hace esto insertAfter).
```


![](/images/ut05_practica-5_10000000000002B90000035FBBC9BE28.png)


---

## 📄 Práctica 5.XX Gestor de tareas con storage (opcional)

*Ubicación original:* `Práctica 5.XX Gestor de tareas con storage (opcional).odt`

```javascript
PRÁCTICA 5.0X Almacenamiento con storage
```


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
todo el código debe estar situado dentro del evento window.onload = () => {}; o a través del evento document.addEventListener("DOMContentLoaded", () => {}); ,
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
```javascript
para la asignación de eventos se utilizará addEventListener() indicando sus tres parámetros en su definición,
```

  - debes dividir tu código en bibliotecas temáticas de funciones y/o clases a partir de este ejercicio,
```javascript
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas a partir de esta práctica,
```

  - todo el código que sea susceptible de retrasar su ejecución debe escribirse de forma asíncrona.
- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
```javascript
la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
Gestor de tareas con localStorage
Recupera el gestor de tareas que se construyó con anterioridad para añadirle persistencia a las tareas con un sistema de almacenamiento, en esta ocasión localStorage.
Crea las funcionalidades para que los datos se almacenen cuando se produzcan los eventos de arrastrar y soltar de las tareas y en los clic de botones de los que se dispone. Toda la gestión de las tareas debe ser manejada a través de un objeto JSON. Ten en cuenta que se tratará de un Array, por lo que será necesario utilizar el spread operator (...) de JavaScript en lugar de sus métodos (salvo para recorrerlo que se debe utilizar map).
```


Recuerda crear un estilo apropiado, separar el código en ficheros de forma ordenada y situar los ficheros de la aplicación web en carpetas separadas.


---

## 📄 Práctica 5.XX Parejas (opcional)

*Ubicación original:* `Práctica 5.XX Parejas (opcional).odt`


## PRÁCTICA 5.06 Parejas


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
todo el código debe estar situado dentro del evento window.onload = () => {}; o a través del evento document.addEventListener("DOMContentLoaded", () => {}); ,
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
```javascript
para la asignación de eventos se utilizará addEventListener() indicando sus tres parámetros en su definición,
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal).
```

- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
  - la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
- Parejas

Diseña un juego que consiste en encontrar parejas en doce cartas con seis parejas de los personajes de una serie que odies (no va a ser todo lo que te gusta). El juego consistirá en lo siguiente:

- la aplicación deberá tener una tabla (no uses la etiqueta &lt;table&gt;) con tres filas y cuatro columnas de un color. Además, habrá un cuadro de texto con el valor cero y no modificable,
- mostrará el tiempo transcurrido de juego a través de un temporizador como el que diseñaste con anterioridad,
- cuando el usuario haga clic sobre una celda, se mostrará la imagen que esconde,
- cuando el usuario haga clic sobre otra celda, se mostrará la imagen que se oculta tras ella,
```html
si las dos imágenes son iguales, se dejará visible la imagen y se incrementará en uno los intentos. En ese momento, si se hace clic sobre estas imágenes se le informará al idiota del usuario que esa tarjeta ya ha sido destapada (habilita una zona de mensajes con un <div>, no usar alert),
si las dos imágenes son diferentes, se ocultarán mostrando nuevamente el color inicial (utiliza algún efecto dinámico sobre las imágenes realizado con JavaScript) y se incrementará en uno los intentos,
cuando se consigan las seis parejas el temporizador se detendrá y mostrará un mensaje con el tiempo total y el número de intentos empleado (no usar alert).
```


---

## 📄 cambios

*Ubicación original:* `cambios.txt`

```text

Dar una semana más de tiempo.
	- primera semana eventos y delegación.
	- segunda (mitad) formularios (semana entera si hay festivo por el medio).
	- tercera semana (useEffect y useState).


Ejercicio 1 El que está (auto) 
Ejercicio 2 Acordeón y pestañas
Ejercicio 3 Pintarrajea
Ejercicio 4 Drag and drop puzzle (hacer en clase la papelera de reciclaje)
Ejercicio 5 Gestor de tareas (opcional)
Ejercicio 6 Parejas (no proponer en 2024)
Ejercicio X Formualrios y eventos (auto)
Ejercicio X Discos
Ejercicio 7 Estados en react (añadir mostrar un disco esp
Ejercicio 8 Formularios controlados
Ejercicio
	
```

---

## 📄 useEffect ChatGPT

*Ubicación original:* `useEffect ChatGPT.odt`


![](/images/ut05_useeffect-_100000000000007800000078883378299443C71A.png)

```javascript
¡Claro! El useEffect es un hook fundamental en React que se utiliza para realizar efectos secundarios en componentes funcionales. Estos efectos secundarios pueden ser, por ejemplo, la manipulación del DOM, la suscripción a servicios externos, la gestión de temporizadores, etc.
Aquí hay una explicación exhaustiva sobre el useEffect:
```


### ¿Qué es useEffect?

```javascript
useEffect es un hook de React que permite realizar efectos secundarios en componentes funcionales. Estos efectos secundarios pueden ocurrir después de que el componente se monte (componentDidMount en las clases), se actualice (componentDidUpdate en las clases), o antes de que se desmonte (componentWillUnmount en las clases).
```


### ¿Cómo funciona?

```css
useEffect toma dos argumentos: una función que contiene el código del efecto secundario y una lista de dependencias que determina cuándo se debe ejecutar el efecto. La función se ejecuta después de cada renderizado si hay cambios en las dependencias.
javascript
useEffect(() => {
// Código del efecto secundario
}, [dependencia1, dependencia2]);
```


### ¿Para qué se usa?

- Efectos después del renderizado: Puedes realizar operaciones después de que el componente se renderice.
```javascript
javascript
useEffect(() => {
// Código que se ejecutará después de cada renderizado
});
```

- Efectos con dependencias: Puedes condicionar la ejecución del efecto basándote en cambios específicos de estado o propiedades.
```javascript
javascript
useEffect(() => {
// Código que se ejecutará cuando dependencia1 o dependencia2 cambien
}, [dependencia1, dependencia2]);
```

- Limpieza de efectos: Puedes realizar operaciones de limpieza cuando el componente se desmonte o cuando haya cambios específicos.
```javascript
javascript
useEffect(() => {
// Código que se ejecutará al montar el componente
return () => {
// Código de limpieza que se ejecutará al desmontar el componente
};
}, [dependencia]);
```


### Ejemplos:

- Efecto simple después del renderizado:
```javascript
javascript
useEffect(() => {
console.log("El componente se renderizó");
});
```

- Efecto condicional con dependencia:
```javascript
javascript
const MiComponente = ({ usuarioId }) => {
useEffect(() => {
// Cargar datos del usuario cuando cambie el usuarioId
cargarDatosUsuario(usuarioId);
}, [usuarioId]);
// Resto del componente...
};
```

- Limpieza de efectos:
```javascript
javascript
useEffect(() => {
// Configuración inicial
return () => {
// Código de limpieza que se ejecutará al desmontar el componente
limpiarConfiguracion();
};
}, []);
Espero que esta explicación y estos ejemplos te ayuden a entender el uso y la importancia del useEffect en React. Si tienes más preguntas, no dudes en preguntar.
```


![](/images/ut05_useeffect-_100000000000007800000078883378299443C71A.png)


User


¿Podrías ampliar la respuesta anterior, por favor?


ChatGPT

```javascript
¡Por supuesto! Vamos a profundizar un poco más en algunos aspectos del useEffect en React.
```


### Detalles Adicionales sobre useEffect:


#### 1. Efectos Asíncronos:

```javascript
Si necesitas realizar operaciones asíncronas dentro de un efecto, puedes hacerlo utilizando una función asíncrona dentro de useEffect.
javascript
useEffect(() => {
const fetchData = async () => {
try {
const result = await fetchDataFromApi();
// Hacer algo con los datos
} catch (error) {
// Manejar errores
}
};
fetchData();
}, [dependencia]);
```


#### 2. Ejecución en el Montaje y Desmontaje:


Si no especificas una lista de dependencias, el efecto se ejecutará después de cada renderizado y en el desmontaje del componente.

```javascript
javascript
useEffect(() => {
console.log("Se ejecuta en el montaje y en cada actualización");
return () => {
console.log("Se ejecuta en el desmontaje");
};
});
```


#### 3. Ejecución Única al Montar:


Si pasas un array vacío como la lista de dependencias, el efecto solo se ejecutará una vez después del montaje del componente.

```javascript
javascript
useEffect(() => {
console.log("Se ejecuta solo en el montaje");
return () => {
console.log("Se ejecuta solo en el desmontaje");
};
}, []);
```


#### 4. Evitar Efectos en Cada Actualización:


A veces, solo deseas que el efecto se ejecute cuando ciertas dependencias cambien. Esto ayuda a evitar ejecuciones innecesarias.

```javascript
javascript
useEffect(() => {
// Este efecto se ejecutará solo cuando dependencia1 cambie
}, [dependencia1]);
```


#### 5. Efectos Síncronos y Limpieza:

```javascript
Si el código dentro del useEffect devuelve una función, esa función se ejecutará como limpieza cuando el componente se desmonte.
javascript
useEffect(() => {
// Código del efecto
return () => {
// Código de limpieza al desmontar
};
}, [dependencia]);
Estos son algunos detalles adicionales que pueden ayudarte a utilizar useEffect de manera más efectiva en tu aplicación React. Recuerda que la clave es entender cuándo y cómo ejecutar tus efectos para garantizar un comportamiento consistente y eficiente en tu aplicación.
```


Casos de uso

```javascript
¡Claro! Aquí tienes cinco ejemplos de uso de useEffect en React con código:
```


### 1. Efecto Simple Después del Renderizado:


Este ejemplo muestra cómo realizar una acción simple después de que el componente se ha renderizado.

```html
jsx
import React, { useEffect } from 'react';
function Componente() {
useEffect(() => {
console.log("El componente se ha renderizado");
});
return (
<div>
{/* Contenido del componente */}
</div>
);
}
```


### 2. Carga de Datos Asíncrona con Dependencias:

```html
En este ejemplo, se utiliza useEffect para cargar datos de una API cuando la dependencia usuarioId cambia.
jsx
import React, { useState, useEffect } from 'react';
function PerfilUsuario({ usuarioId }) {
const [usuario, setUsuario] = useState(null);
useEffect(() => {
const fetchUsuario = async () => {
try {
const response = await fetch(`https://api.example.com/usuarios/${usuarioId}`);
const data = await response.json();
setUsuario(data);
} catch (error) {
console.error('Error al cargar el usuario', error);
}
};
fetchUsuario();
}, [usuarioId]);
return (
<div>
{usuario ? (
<div>
<h2>{usuario.nombre}</h2>
{/* Otros detalles del usuario */}
</div>
) : (
<p>Cargando usuario...</p>
)}
</div>
);
}
```


### 3. Efecto con Limpieza:


En este ejemplo, se utiliza un efecto con limpieza para suscribirse y luego desuscribirse de un servicio.

```html
jsx
import React, { useEffect } from 'react';
function ComponenteConSuscripcion() {
useEffect(() => {
// Suscripción al servicio
console.log('Se ha suscrito al servicio');
// Función de limpieza (se ejecuta al desmontar el componente)
return () => {
console.log('Se ha desuscripto del servicio');
};
}, []);
return (
<div>
{/* Contenido del componente */}
</div>
);
}
```


### 4. Ejecución Única al Montar:

```html
En este ejemplo, se utiliza useEffect con una lista de dependencias vacía para que el efecto se ejecute solo una vez después del montaje.
jsx
import React, { useEffect } from 'react';
function ComponenteUnaVez() {
useEffect(() => {
console.log('Este efecto se ejecuta solo una vez al montar el componente');
}, []);
return (
<div>
{/* Contenido del componente */}
</div>
);
}
```


### 5. Efecto para Limpiar Recursos:

```html
En este ejemplo, se utiliza useEffect para cargar un recurso y limpiarlo cuando el componente se desmonta.
jsx
import React, { useState, useEffect } from 'react';
function ComponenteConRecurso() {
const [recurso, setRecurso] = useState(null);
useEffect(() => {
// Cargar el recurso
const recursoCargado = cargarRecurso();
// Actualizar el estado cuando se carga el recurso
setRecurso(recursoCargado);
// Función de limpieza (se ejecuta al desmontar el componente)
return () => {
// Limpiar el recurso
limpiarRecurso(recursoCargado);
};
}, []);
return (
<div>
{recurso ? (
<p>Recurso cargado: {recurso}</p>
) : (
<p>Cargando recurso...</p>
)}
</div>
);
}
Espero que estos ejemplos te ayuden a comprender mejor cómo usar useEffect en diferentes situaciones en tus aplicaciones React. Si tienes más preguntas o necesitas aclaraciones, no dudes en preguntar.
¡Por supuesto! Aquí tienes otros diez ejemplos de uso de useEffect en React:
```


### 6. Actualización del Título de la Página:

```html
En este ejemplo, utilizamos useEffect para cambiar el título de la página cuando el componente se monta.
jsx
import React, { useEffect } from 'react';
function ComponenteConTitulo() {
useEffect(() => {
document.title = 'Nuevo Título de la Página';
}, []);
return (
<div>
{/* Contenido del componente */}
</div>
);
}
```


### 7. Manejo de Eventos Globales:

```html
Usamos useEffect para suscribirnos y desuscribirnos de eventos globales.
jsx
import React, { useEffect } from 'react';
function ComponenteConEvento() {
useEffect(() => {
const handleScroll = () => {
// Manejar el evento de desplazamiento
console.log('Se hizo scroll');
};
// Suscribirse al evento de desplazamiento al montar
window.addEventListener('scroll', handleScroll);
// Desuscribirse al desmontar
return () => {
window.removeEventListener('scroll', handleScroll);
};
}, []);
return (
<div>
{/* Contenido del componente */}
</div>
);
}
```


### 8. Temporizador:

```html
En este ejemplo, usamos useEffect para iniciar y detener un temporizador.
jsx
import React, { useState, useEffect } from 'react';
function Temporizador() {
const [segundos, setSegundos] = useState(0);
useEffect(() => {
const intervalId = setInterval(() => {
setSegundos((prevSegundos) => prevSegundos + 1);
}, 1000);
// Detener el temporizador al desmontar el componente
return () => {
clearInterval(intervalId);
};
}, []);
return (
<div>
<p>Tiempo transcurrido: {segundos} segundos</p>
</div>
);
}
```


### 9. Uso de API de Geolocalización:

```html
En este ejemplo, utilizamos useEffect para obtener la ubicación del usuario.
jsx
import React, { useState, useEffect } from 'react';
function UbicacionUsuario() {
const [ubicacion, setUbicacion] = useState(null);
useEffect(() => {
const obtenerUbicacion = () => {
navigator.geolocation.getCurrentPosition(
(position) => {
setUbicacion({
latitud: position.coords.latitude,
longitud: position.coords.longitude,
});
},
(error) => {
console.error('Error al obtener la ubicación', error);
}
);
};
obtenerUbicacion();
}, []);
return (
<div>
{ubicacion ? (
<p>
Ubicación actual: {ubicacion.latitud}, {ubicacion.longitud}
</p>
) : (
<p>Obteniendo ubicación...</p>
)}
</div>
);
}
```


### 10. Integración con Librería de Gráficos:

```html
En este ejemplo, usamos useEffect para inicializar una librería de gráficos cuando el componente se monta.
jsx
import React, { useEffect } from 'react';
import Chart from 'chart.js';
function Grafico() {
useEffect(() => {
// Inicializar el gráfico al montar el componente
const ctx = document.getElementById('miGrafico').getContext('2d');
new Chart(ctx, {
type: 'bar',
data: {
labels: ['A', 'B', 'C', 'D', 'E'],
datasets: [{
label: 'Ejemplo de Gráfico',
data: [12, 19, 3, 5, 2],
}],
},
});
// Limpiar recursos al desmontar el componente
return () => {
// Cualquier limpieza necesaria para la librería de gráficos
};
}, []);
return (
<div>
<canvas id="miGrafico" width="400" height="200"></canvas>
</div>
);
}
Estos son algunos ejemplos adicionales de cómo puedes utilizar useEffect en diferentes escenarios dentro de tus componentes React. ¡Espero que encuentres útiles estos ejemplos! Si tienes más preguntas o necesitas aclaraciones, no dudes en preguntar.
```


---

