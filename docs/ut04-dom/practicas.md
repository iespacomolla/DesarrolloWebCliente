# Prácticas UT04: Document Object Model

## Práctica 4.01 DOM

> **NOTA**: la ejecucicón del código de los ejercicios se realizará transcurridos **dos segundos desde la carga de la página** a través de un `setTimeout(()=>{ funcion_a_realizar }, 2000)`.

### Ejercicio 1 - Contando elementos del DOM

Se dispone de una página web en `Ejercicio01.html`. Añade el código necesario en un fichero `js` aparte para mostrar la siguiente información:

- el número de párrafos de la página,
- el texto del segundo párrafo,
- el número de enlaces de la página,
- la dirección del primer enlace y
- la dirección del penúltimo enlace.

El texto con la información será añadido al `<div>` con `id=info` y debe estar debidamente formateado.

### Ejercicio 2 - Números DOM

Crea una página web que tenga un listado de tipo `<ul>` con un `<li>` de muestra y el texto “**Soy una muestra fea**” (o algo similar). Cada dos segundos (con `setInterval()`) se añadirá un nuevo elemento `<li>` con un número aleatorio entre 1 y 1 000.

### Ejercicio 3 - Tabla dinámica **DOM**

A partir del fichero `Ejercicio03.html` genera el código necesario para realizar las siguientes acciones:

- cada dos segundos se añade una frase contenido en el array `quijoteFrases` que hará de diccionario (usa `import`),
- además, se transformará el texto de la primera celda mediante la función **toCani** (creada con anterioridad) que se mostrará en la segunda celda.

### Ejercicio 4 - Creando funciones **DOM**

Aunque parezca mentira, no existe ningún método para **añadir un elemento después de otro** como sí lo hace **insertBefore**. Crea una función que reciba como parámetros dos elementos (el primero debe ser nuevo en el **DOM**) y coloque el primero después del segundo. La llamada se realizará de este modo: `function insertAfter(nuevoElemento, existenteElemento);`.

#### Falta fichero -> Ejercicio01.html

#### Falta fichero -> Ejercicio03.html

#### Falta fichero -> quijoteFrases

## Práctica 4.02 DOM II, Hell on Earth

> **NOTA**: la ejecucicón del código de los ejercicios se realizará transcurridos dos segundos desde la carga de la página a través de un `setTimeout(()=>{ funcion_a_realizar }, 2000)`, a menos que el enunciado indique lo contrario.

### Ejercicio 1 - El censor **DOM**

Crear una función que recorra el **DOM** desde la etiqueta `<body>` del fichero `Ejercicio01.html` y si encuentra la palabra "**sexo**" elimine el texto y la sustituya por "**Contenido Bloqueado**" poniendo el texto en **rojo**, **negrita** y **cursiva** (utiliza clases para el estilo, **ni se te ocurra** utilizar estilo en línea).

#### Falta fichero -> Ejercicio01.html

### Ejercicio 2 - Primos **DOM**

Escribe un programa que cree dinámicamente una tabla de 10 por 10 celdas en la carga de la página (sin esperar los dos segundos). Cada celda de la tabla tendrá un número único que empezará en uno y se irá incrementando en uno.

Además, trancurridos dos segundos desde la carga inicial, todas las celdas de la tabla que tengan **números primos** se pongan con un fondo **rojo** y el texto en **negrita** (utiliza clases para el estilo).

### Ejercicio 3 - Ocultar **DOM**

Crea una web que tenga cinco párrafos (elementos `<p>`) con el mismo estilo. Programa una acción para que cada segundo uno de los párrafos (seleccionado de forma aleatoria) cambie su color de fondo a uno generado aleatoriamente. Evita utilizar estilo en línea o perderás un dedo de tu mano izquierda (usa un listado de clases con colores diferentes y asigna una de forma aleatoria).

Dota de algún estilo **CSS** para que los párrafos sean distinguibles (altura, longitud, color y un borde).

### Ejercicio 4 - Componente Carrusel **DOM**

A partir de un array de imágenes como este:

```javascript
var imagenes = ["img/feo.jpg", "img/fea.jpg", "img/feos.jpg", "img/feas.jpg"];
```

Escribe un programa que muestre la primera imagen en con una etiqueta `<img>` dentro de un `<div>`. Tras dos segundos de espera, se muestra la siguiente imagen. Una vez mostrada la última imagen el carrusel volverá a comenzar por la primera.

Añade alguna **transición entre las imágenes**, por ejemplo, desplazando las imágenes fuera de la página con `right` y `left` o que aparezcan y desaparezcan poco a poco con `opacity`.
Busca cuatro imágenes que estimes oportunas (aptas para menores) y colócalas en la carpeta img de tu ejercicio o, mejor todavía, utiliza direcciones web para evitar almacenar esas imágenes.

> **NOTA**: para realizar las transiciones se debe modificar el código **CSS** a través de *JavaScript*. No se puede utilizar características propias de **CSS** como `transition`.

## Práctica 4.03 Gestor de tareas

### Ejercicio 1 - Gestor de tareas

![](/images/ut04_practica-4_10000000000002B90000035FBBC9BE28.png)

Escribe el código **CSS** y *JavaScript* necesario (sin modificar el **HTML** de forma estática) para que se pueda realizar el siguiente comportamiento:

- todos los eventos serán manejados a través de `addEventListener` (si lo estimas oprtuno, puedes utilizar el objeto `this`),
- las tareas de prueba deben **eliminarse de forma dinámica** al cargar la aplicación,
- todos los cambios de estilo en las etiquetas se realizarán con clases **CSS**,
- si se pulsa el botón `Añadir` se añade un `<div>` a las tareas pendientes con el contenido del `<textarea>` y limpiando el contenido tras su copia. Si el `<textarea>` está vacío debe **insultar** al usuario y no añadir ninguna tarea,
- las tareas (elementos `<div>`) deben contener dos botones: `Borrar` y `Acabar` ,
- cuando se pulsa sobre el botón `Acabar` de una tarea pendiente se quitará de la lista de tareas pendientes y pasará a la lista de tareas acabadas. Además realizará estas acciones:
  - se cambiará el **color de fondo** de la tarea a verde y el texto del botón `Acabar` debe cambiar a `Volver`, y el del botón `Borrar` a `Archivar`,
  - si se pulsa sobre el botón `Volver` de una tarea acabada se quitará de la lista de tareas acabadas y **volverá a la lista de tareas pendientes** con el formato y texto de los botones originales,
  - si se pulsa sobre el botón `Archivar` en una tarea **desaparecerá del listado de acabadas** pero no se eliminará (se ocultará),
  - cuando se pulse en el botón `Mostrar` se volverán a mostrar las tareas finalizadas y ocultas.

#### Falta fichero -> todos los del getor de tarea

## Práctica 4.04 useRef en **React**

### Ejercicio 1 - Creando elementos

Diseña un componente denominado `<Numericos>` que contenga un `<div>`, y en su interior, una lista ordenada y un botón con el texto `Añadir numerico`. Dota a estos elementos de un **CSS** apropiado para la ocasión.

Escribe el código necesario para que al pulsar sobre el botón se añada un nuevo elemento al listado cuyo texto será un número generado de forma aleatoria entre 1 y 1 000.

### Ejercicio 2 - Cambiando propiedades

Crea un componente denomindo `<Parrafico>` que contenga un `<div>` con un párrafo y un botón con el texto `Cambiar colorico`. Añade un estilo elegante a estos componentes.

Cuando se pulse el botón, el color de fondo del párrafo será cambiado por uno generado de forma aleatoria (reutiliza funciones anteriores).

### Ejercicio 3 - Contador con referecnias

Elabora un componente denominado `<Contadorico>` que disponga de un `<div>` con un párrafo y dos botones en su interior. El párrafo debe contener un cero como contenido y los botones los textos `Incrementar` y `Decrementar`. Genera el código para realizar estas acciones:

- cuando se pulse el botón `Incrementar` al valor del párrafo se le sumará una unidad,
- cuando se pulse el botón `Decrementar` al valor del párrafo se le restará una unidad y
- el valor del párrafo nunca podrá ser negativo.

## Práctica 4.05 Películas con useRef

### Ejercicio 1 - Ampliando películas en **React**

Modifica la aplicación de mostrar películas de la unidad anterior para que realice las siguientes funcionalidades. Puedes reutilizar el proyecto de la práctica anterior añadiendo y/o quitando información que estimes oportuna.

Esta revisión de la aplicación debe contener dos botones (`Elenco` y `Taquilla`) que tengan las siguientes funcionalidades:

- `Elenco`, que mostrará un listado de los actores que intervienen en la película,
- `Taquilla`, en la que se mostrará la recaudación de esa película en taquilla (debidamente formateada).

Al pulsar sobre estos botones aparecerá la información oculta en un principio. Al volver a pulsar en ellos la información volverá a desaparecer. Usa las propiedades **CSS** y el *hook* `useRef` para conseguir este efecto. Sería buena idea crear un componente para taquilla, ¿no crees?.

La estructura de esta aplicación podría ser, por ejemplo, esta (pero mejor):

![](/images/ut04_practica-4_10000000000003E7000002EFE60FEE73.png)

## Práctica 4.06 Interfaces con rutas en **React**

### Ekercicio 1 - Mi primera ruta con *react-router-dom*

Crea las siguientes rutas en el componente `<App>` de tu proyecto (nuevo o reutilizado):

- página principal de la aplicación (`Inicio`),
- otra de contacto (`Contacto`),
- una con información sobre la versión del programa (`AcercaDe`) y
- página con un listado de productos ficticios (`Productos`).

Recuerda que en cada una de las rutas se debe cargar un componente y los tendrás que crear. Usa una estructura de carpetas adecuada. Comprueba que las rutas funcionan utilizando la barra de navegación del navegador.

### Ejercicio 2 - Navegación entre páginas

En el mismo proyecto, crea el componente `<Menu>` utilizando `<Link>` para poder navegar entre las rutas de la aplicación e insértalo en la aplicación. Añade un poco de **CSS** para adecentarlo. Comprueba que las rutas funcionan de forma adecuada.

### Ejercicio 3 - Ruta por defecto

Añade una ruta por defecto a la aplicación para que redirija al componente `<Error>` si no encuentra correspondencia con alguna otra. Deberás crear ese componente de error con algún mensaje alentador. Comprueba su correcto funcionamiento.

### Ejercicio 4 - Uso del *hook* `useNavigate`

En cada página de la aplicación crea un botón `Volver` que permita redirigir al inicio. Para ello deberás utilizar el *hook* `useNavigate` de forma adecuada.

## Práctica 4.07 Rutas de película en **React**

### Rutas con subrutas con *react-router-dom*

Crea la interfaz con rutas y la biblioteca ***react-router-dom*** para una aplicación de gestión de películas. Deberá incluir todas estos apartados (te aconsejo que primero dibujes en papel la estructura de la aplicación y luego la dividas en componentes que pueden, por supuesto, ser reutilizados de prácticas anteriores):

- debe tener una estructura con componentes que hagan las siguientes funciones: **cabecera**, **menú**, **contenido** y **pie** de la aplicación (pueden, a su vez, dividirse en componentes más específicos, si lo crees oportuno). Sería interesante reutilizar componentes de prácticas anteriores para crear esta estructura, si existen,
- en `<Contenido>` se verterá la información que vaya cambiando, por lo que será la parte que más se modifique a lo largo de la ejecución de la aplicación (ideal para contener las rutas),
- crea un menú con los siguientes apartados: **inicio** (que mostrará el contenido inicial), **películas** (que mostrará el listado de las películas), **intérpretes** (que mostrará información sobre los actores y actrices), **galería** (con imágenes de las cartelas de las películas) y **acerca de** (información de la aplicación como su versión, creador/a y fecha de modificación),
- crea los componentes “página” para cada sección del menú (un componente `<Inicio>` para inicio, uno `<Peliculas>` para películas, etcétera). Todos deben tener un texto que identifique al componente, por ejemplo con un `<h2>Esta es la página de inicio</h2>` para el componente `<Inicio>`.
- en el componente `<Peliculas>` mostrará un listado de las películas contenidas en el fichero `peliculas.json` de prácticas anteriores. Ese listado contendrá el título de la película, su imagen de cartela en miniatura y el año de exhibición. En ese mismo componente, **al pulsar sobre una película** se mostrará otro componente denominado `<PeliculaDetalle>` con la información ampliada de cada una (toda su información). Por supuesto, puedes reutilizar componentes de prácticas anteriores.
- en la sección **galería** existe un submenú con tres opciones para filtrar las cartelas por título, intérprete y/o director. Al pulsar sobre cada opción cargará (en la misma sección) una página con las cartelas pero, ¡ojo!, no hay que implementar esta funcionalidad ahora, sólo mostrar un mensaje de texto,
- crea una estructura de carpetas adecuada a la aplicación, que ya empieza a crecer y es buena idea tenerlo todo separado y ordenado,
- en caso de error, debe configurarse una **ruta por defecto** que muestre un nuevo (o reutilizado) componente denominado `<Error>`.

La aplicación puede tener una estructura parecida a esta, aunque es mejor que apliques tu propio estilo y estructura:
![image](/images/ut04_practica-4_10000000000004E4000003ACDD6CE18C.png)

#### Falta fichero -> peliculas.json
