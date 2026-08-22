# Prácticas UT05: Eventos y Hooks. Formularios

## Práctica 5.01 Eventos

### Ejercicio 1 - Saludar

Realiza un programa con dos botones `Comenzar Saludos` y `Parar saludos`. Al hacer clic en el primero lanza un `setInterval` para que cada dos segundos genere un `<h1>` con el texto **¡Hola Feo!**. El botón `Parar saludos` parará la secuencia.

### Ejercicio 2 -Colorines

Haz un programa que al hacer doble clic en la pantalla del navegador cambie el fondo a un color aleatorio. Puedes generar los colores bien en hexadecimal **#5a6f12** o en RGB **rgb(255,255,255)**.

Deberás crear una función que genere un color aleatorio válido. Si eliges colores en hexadecimal utiliza este array:

```javascript
var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
```

Quizás esta sea la **excepción** para utilizar **estilo en línea** en ligar de **clases** con **CSS**, pero que no se vuelva a repetir.

### Ejercicio 3 - Localizador

Haz un programa que, mediante eventos y el uso del objeto `event`, muestre en todo momento la posición actual del ratón en pantalla. Para mostrar la posición, modificaremos de forma dinámica un elemento **HTML** (por ejemplo un `<p>`) que muestre la posición actual del ratón (coordenadas x e y). Como siempre, la salida debe estar debidamente formateada.

## Práctica 5.02 Más eventos

### Ejercicio 1 - Acordeón

Crea un acordeón compuesto por seis elementos que al hacer clic **sobre los impares** se muestre la información que está situada en el **elemento par inmediatamente inferior a él**. Al volver a hacer clic, si el elemento par que contiene la información se ve en pantalla deberá ocultarse. No se podrá utilizar el atributo `id` de los elementos **HTML**.

![](/images/ut05_practica-5_10000000000002FC000000C06D681F44.png)

### Ejercicio 2 - Pestañas

Realiza un sistema de pestañas compuesto por dos `<div>`:

- el primero contendrá las **pestañas** (mínimo tres) que mostrarán un nombre (elige la etiqueta **HTML** que prefieras para ello),
- el segundo contendrá la **información** de cada pestaña (elige la etiqueta **HTML** que prefieras para esta tarea).

Al pulsar sobre cada pestaña del primer `<div>` se mostrará la información relacionada del segundo `<div>`. Su relación será secuencial: la **primera** pestaña mostrará el **primer** contenido, la **segunda** pestaña el **segundo** contenido… No se podrá utilizar el atributo `id` de los elementos **HTML**.

Aplica un poco de tu estilo a las pestañas a través de **CSS**.

## Práctica 5.03 Pintarajea

### Ejercicio 1 - Pintarrajea (bis)

Te han encargado una pequeña aplicación para dibujar llamada **Pintarrajea**. Con ella se podrá diseñar logotipos básicos eligiendo colores y haciendo clic sobre celdas de una tabla. Deberá hacer lo siguiente:

- en el `<body>` habrá dos `<div>`,
- en el primero (**superior**) habrá un **selector de colores** que debe mostrar le siguiente información:
  - contendrá un selector de colores (utiliza la etiqueta **HTML** para ello),
  - habilita una zona para indicar con un texto el color seleccionado (formato hexadecimal o RBG),
  - otro selector que permita cambiar el color del lienzo (fondo) inicialmente blanco,
  - un botón que permita ver/ocultar la cuadrícula del lienzo y
  - puedes utilizar las etiquetas que quieras para esta sección para organizar su contenido.
- en el segundo (**inferior**), de manera **automática** se generará una **tabla cuadrada** de **sesenta** (puedes modificar este número si lo crees necesario) celdas de largo. Cada una de ellas con un tamaño de 10 por 10 px (por ejemplo). Esta tabla actuará como **lienzo** en blanco para dibujar,
  - en la parte inferior de la aplicación habrá un botón que permitirá reiniciar la tabla a color blanco,
  - crear el fichero de estilos **CSS** necesario para que los elementos tengan el formato parecido a un **cuadernillo de Rubio** (si no sabes a qué me refiero, haz arqueología en Internet).

Funcionamiento del programa:

- se pulsa una celda de color de la tabla superior para elegir uno con el que pintar,
- se sitúa el cursor encima del lienzo y se activa el pintado de una de estas dos formas (o una tercera si se te ocurre alguna otra):
  - se pulsa el botón izquierdo del ratón y, sin soltarlo, cuando el ratón se mueve sobre las celdas (sin hacer clic) se irán pintando con el color seleccionado previamente o
  - activar/desactivar el pintado de las celdas con un clic,
- es posible repetir el proceso con otros colores sobre celdas pintadas o sin pintar,
- si es necesario borrar colores, se pulsará sobre el color blanco del selector.

El aspecto podría ser similar al siguiente:

![](/images/ut05_practica-5_10000000000003C1000002E759D3671B.png)

## Práctica 5.04 Rompecabezas

### Ejercicio 1 - Rompecabezas (bis)

Crea un pequeño juego para resolver un rompecabezas con nueve piezas. Las imágenes podrás encontrarlas en Alues.

Sigue estas indicaciones para crear el juego:

- en el `<body>` habrá tres `<div>` uno encima del otro,
- en el primero (superior) contendrá las piezas del rompecabezas mostradas de forma aleatoria en cada carga de la página.
- en el segundo (medio), se situará el panel de juego dividido en una grilla de tres por tres elementos (si consideras complicarlo un poco más, no hay problema). Esta grilla contendrá las piezas del `<div>` superior a medida que el usuario las vaya colocando.
  - en el tercero (inferior) habrá un botón que permitirá reiniciar la partida,
  - crea el fichero de estilos **CSS** necesario para que quede bonito,
  - si no te parece apropiada la imagen del ejercicio puedes seleccionar una diferente. Utiliza [esta web](https://pinetools.com/es/partir-imagenes) para cortarla en nueve piezas (tres en la vertical y tres en la horizontal).

Funcionamiento del programa:

- se arrastra una pieza del `<div>` superior a una de las casillas del `<div>` medio y se coloca en ella. Si ya existe una pieza en esa casilla, no realizará ninguna acción,
- este movimiento se puede realizar en sentido inverso para quitar piezas del `<div>` medio,
- cuando se coloque la última pieza se comprobará si la solución es correcta,
- seguidamente informará al usuario si es correcta. Si no lo es, no realizará ninguna acción.

El aspecto podría ser similar al siguiente:

![](/images/ut05_practica-5_10000000000003F000000394DCB7D511.png)

#### Falta fichero -> imagen del rompecabezas

## Práctica 5.05 Gestor de tareas II, el regreso

### Ejercicio 1 - Tareas dinámcas

En el programa de Gestor de tareas realizado con anterioridad se habilitarán los siguientes cambios:

- un mecanismo **arrastrar y soltar** para permitir cambiar las tareas entre **PENDIENTES** y **ACABADAS** en ambos sentidos. Utiliza los eventos `dragenter`, `dragleave` y `dragend` además de los necesarios para hacer el efecto de arrastrar y soltar y
- otro que permita **cambiar el orden** de las tareas dentro de las **PENDIENTES**. Cuando una tarea se suelte encima de otra la soltada tomará la posición de la tarea sobre la que se ha soltado desplazándola debajo (recuerda que se hiciste una función que hace esto `insertAfter`).

![](/images/ut05_practica-5_20260822_120951.png)

## Práctica 5.06 Mi colección de discos

### Ejercicio 1 - Discoteca

Prepara un formulario diseñado para almacenar los discos con los datos listados a continuación:

- nombre del disco,
- carátula del disco (su **URL**),
- grupo de música o intérprete,
- año de publicación,
- género de música con un mínimo de cuatro (recuerda que el ***reggaeton*** no es un estilo, sino una maldición),
- localización que guardará un código creado para tal efecto (inventado pero que contiene números y letras),
- prestado que almacenará un valor booleano (por defecto será `false`).
- tendrá un botón `Guardar` que añadirá el disco a un listado almacenado en un objeto **JSON** (que tendrás que diseñar) y otro `Mostrar` que mostrará el listado de discos debidamente formateado (usa **CSS**).

### Ejercicio 2 - El usuario es idiota

Antes de añadir el disco al objeto **JSON** debe ser **comprobado**. Crea las **funciones** necesarias para validarlo teniendo en cuenta:

- nombre del disco tiene, al menos, cinco caracteres y es obligatorio,
- grupo de música o intérprete posee, al menos, cinco caracteres y es obligatorio,
- año de publicación dispone de cuatro caracteres numéricos,
- tipo de música comprobará si se ha seleccionado alguno,
- localización tiene el formato **ES-001AA** donde **001** es el número de la estantería y **AA** la balda (combinación de dos letras mayúsculas),
- prestado y carátula no tienen comprobación.

En caso de que se produzca un error en la validación, el campo del formulario implicado será destacado con un estilo **CSS** adecuado. En cuanto ese campo contenga un valor válido, volverá a su estilo original.

Además existe un contenedor de información que, si se ha producido un error, mostrará un mensaje informando de qué campo (o campos) es el incorrecto y cómo solucionarlo (los insultos son opcionales). Ubícalo donde estimes oportuno y añádele el formato **CSS** que necesites.

### Ejercicio 3 - Buscando discos

Añade un input texto y un botón `Buscar` que permita filtrar los discos según el texto introducido por el usuario. Junto a él existirá otro denominado `Limpiar` que volverá el listado a su formato original.

### Ejercicio 4 - Uno de reggaeton

Crea un sistema que permita eliminar un disco de la colección. Para ello añade un botón para eliminar (un icono puede ser una buen idea) en cada uno de ellos que permita quitar ese disco del listado. Se debe confirmar la acción de borrado.

### Ejercicio 5 - Discos persistentes

Hasta ahora si se recarga la página la información modificada se pierde. No es buena idea, asi qie hay que dar persistencia a los datos del listado utilizando `localStorage`. Los datos se cargarán en un objeto **JSON** en la carga de la página y se guardarán cada vez que se modifique el listado (se añada o se elimine un disco). Sería interesante que crearas una función para ello.

## Práctica 5.07 useEffect en *React*

### Ejercicio 1 - Localizador

Recupera el ejercicio **Localizador** de la **UT04** y mígralo a *React* en un componente denominado `<Localizador>`. Recuerda que era un programa que mostraba en todo momento la posición actual del ratón en la pantalla (coordenadas x e y). Para ello, se modificaba de forma dinámica un elemento **HTML** (por ejemplo un `<p>`). En *React* se simplificará ya que se dispone de estados. Recuerda añadir una función de limpieza.

Para comprobar si la función de limpieza funciona, crea un estado en `<App>` para controlar el montaje/desmontaje de ese componente. Ese estado se controlará a través de un botón.

### Ejercicio 2 - Colorines

Del mismo modo que en el ejercicio anterior, migra el ejercicio `Colorines` a un componente de *React* homónimo. Recuerda que la pantalla del navegador cambiaba el fondo a un color aleatorio cuando se hacía doble clic en cualquier parte del documento. Se generaban los colores bien en hexadecimal #5a6f12 o en RGB rgb(255,255,255), pero siempre de forma aleatoria. Recupera las funciones de aquel ejercicio y añade una función de limpieza al componente creado.

Del mismo modo que en el caso anterior, crea un estado en `<App>` para controlar el montaje/desmontaje de ese componente que será controlado a través de un botón.

### Ejercicio 3 - Contador de clics

Crea el componente `<Contador>` que se encargará de **mostrar el número de clics** que se hace sobre cualquier parte del documento. La información será mostrada tan **sólo cada cinco clics** empezando desde **cero**. Por ejemplo: **Estimado/a usuario/a, has pulsado 0 veces el ratón**. Este mensaje sólo se actualizará cuando se alcancen cinco clics y se volverá actualizar a los diez, después a los quince...

La salida de datos debe estar debidamente formateada y debe existir una función de limpieza.

### Ejercicio 4 - Cronómetro

Crea un cronómetro en un componente con las siguientes características:

- iniciará a contar desde el mismo momento que se monta el componente,
- debe mostrar segundos y centésimas (o milésimas si te parece mejor),
- contiene dos botones: `Parar` y `Reiniciar` que no es necesario aclarar para qué es cada uno,
- como siempre, la salida debe estar debidamente formateada.

Recuerda que si se usa `setInterval`, `setTimeout` o `addEventListener` en el objeto `window` o `document` siempre se debe utilizar una función de limpieza en `useEffect`.

## Práctica 5.08 Formularios controlados en **React**

### Ejercicio 1 - Lista de la compra

Crea una aplicación que lleve el registro de una lista de la compra con las siguientes características:

- los datos estarán almacenados en un objeto **JSON** estático (situado en un fichero e importado al cargar la aplicación). Diseña su estructura para que permita almacenar un **identificador** de producto, su **nombre**, su **descripción**, su **precio**, las **unidades** que hay que comprar y el **subtotal** (total por línea de producto),
- crea un formulario controlado que permita añadir productos a la lista de la compra. Dispondrá de un botón que, antes de realizar la inserción en el objeto **JSON**, comprobará si los campos poseen un valor válido,
- el listado de productos debe mostrarse en tiempo real. Reserva una parte de la aplicación para mostrar este listado de productos como ya sabes: debidamente formateado. Si la lista está vacía mostrará un mensaje indicando que no hay productos en la lista todavía,
- se debe mostrar el total de carrito (debidamente formateado) y actualizarse en cada cambio en la lista de la compra,
- al hacer clic sobre un producto de la lista se eliminará de ella previa confirmación del usuario,
- añade un botón que permita eliminar todo el listado.
