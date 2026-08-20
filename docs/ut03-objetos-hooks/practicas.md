# Prácticas UT03: Objetos predefinidos y hooks

> En esta sección se recogen todas las prácticas, ejercicios de evaluación, autoevaluaciones y actividades guiadas correspondientes a la **UT03: Objetos predefinidos y hooks**.

---

## Práctica 3.01 Más sintaxis con funciones y arrays (autoevaluable)

*Ubicación original:* `Práctica 3.01 Más sintaxis con funciones y arrays (autoevaluable).odt`


PRÁCTICA 3.01 Más sintaxis con funciones y arrays


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
```javascript
la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
```

- Sumando

Crea una función que permita sumar todos los números pasados como parámetros. Deberá seguir estas premisas:

- comprobará si son de tipo numérico antes de realizar la operación, si no lo es, lanzará un mensaje de error por consola y detendrá la ejecución del programa,
- debe tener como mínimo dos parámetros o no se ejecutará. Debe insultar informar al usuario,
- la salida debe estar debidamente formateada.
```javascript
Nota: usa el pseudoarray arguments.
```

- Multiplicando

Genera una función que imprima por consola las tablas de multiplicar de los números que van desde el indicado como parámetro (entero positivo mayor a dos) hasta dos. Para ello recibe dos parámetros: un número y una función.


La función pasada como parámetro será la que calcule las tablas de multiplicar. Habrá que diseñar primero esa función y luego pasarla como parámetro. Esta función recibe un número como parámetro e imprime su tabla de multiplicar (debidamente formateada).

```javascript
Por ejemplo, si se ejecuta tablas(5, multiplicar) imprimirá por consola las tablas del cinco, la del cuatro, del tres y la del dos, eso sí, debidamente formateadas.
```

- Propinas

Juan y su familia se fueron de vacaciones a EE.UU. y comieron en tres restaurantes distintos. Pagaron 124, 48 y 268 $. Allí todo el mundo deja propina, así que Juan quiere crear una calculadora de propinas.


Ha pensado que le gustaría dar un 20 % de propina si la factura es menor de 50 $, 15 % si la factura está entre 50 $ - 200 $ y un 10 % si la factura es de más de 200 $.


Al final, a Juan le encantaría tener tres arrays (y eso que no sabe lo que son):

- el primero contiene el valor de todas las facturas. Este no se calcula, hay que crear el array poniendo a mano los valores,
- el segundo contiene las tres propinas (que se rellenan de forma automática),
- el tercero contiene las tres cantidades finales que tiene que pagar (que se rellena de forma automática).
- Sumando vectores
```javascript
Escribe la función calcular() para que maneje tres arrays (no serán pasados como parámetros a esta función sino declarados dentro de ella). Lo que sí se pasará como parámetros serán tres funciones con el siguiente comportamiento:
```

- una para generar un array con números aleatorios comprendidos entre 1 y 100, la cantidad de números generados será pasado como parámetro,
- otra que recibe dos arrays como parámetros y genera un array que contenga la suma de las cifras que ocupen posiciones contrarias, es decir, la primera posición del primero sumada a la última posición del segundo (los arrays deben tener la misma longitud),
- y la última para imprimir un array por consola debidamente formateado.
```javascript
La ejecución del programa se realizará a través de la función calcular() del siguiente modo: calcular(funcion1, funcion2, funcion3);
Nota: para generar números aleatorios (entre 1 y 100) en JavaScript usa: Math.floor(Math.random()*101);
```


---

## Práctica 3.02 Objetos predefinidos (autoevaluable)

*Ubicación original:* `Práctica 3.02 Objetos predefinidos (autoevaluable).odt`


PRÁCTICA 3.02 Objetos predefinidos


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
```javascript
el manejo de objetos iterables (array y JSON) se realizará siempre utilizando el spread operator y los métodos vistos en clase,
para leer JSON se utilizará la desestructuración (si procede),
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal).
```

- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
```javascript
la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
```

- toCani

Crear una función que reciba una cadena como parámetro y la devuelva transformada en lenguaje Cani. Por ejemplo, si se la pasa la cadena "una cadena cani es como esta" obtendremos "UnA KaDeNa kAnI Es kOmO EsTaHHH" .


Para ello hay que:

- alternar el uso de MAYÚSCULAS y minúsculas,
- sustituir la letra C por la K y
- añadir entre dos y cinco letras H al final de la cadena.
- Temporizador

Diseña una función temporizador que reciba como dos parámetros: minutos y segundos. Cada segundo mostrará por consola el tiempo que le queda al temporizador hasta llegar a cero. En el caso que sólo reciba un parámetro, considerará que son los segundos desde donde comenzará la cuenta atrás. La función se llamará de este modo:

```javascript
function temporizador(minutos, segundos);
Por ejemplo temporizador(2,50); indica 2 minutos y 50 segundos. Si alguno de los valores que recibe como parámetros son negativos, de un tipo inesperado o los segundos superan el número 59, la función debe lanzar un error insultando informando al usuario.
```


La salida del temporizador debe estar debidamente formateada.

- DNI
```javascript
Realiza una función que cada cinco segundos (mediante setInterval) solicite un número de DNI sin la letra (llamando a prompt) hasta que alguien le escriba la cadena -1. En ese momento el programa debe mostrar seguidas las letras de todos los DNI introducidos por consola. Para saber cómo calcular la letra del DNI puedes verlo aquí.
```

- Fechas

Escribe un programa que pasados tres segundos muestre una vez la fecha actual del sistema por consola debidamente formateada y en castellano.

- Más DNI

Crea una función que reciba una letra mayúscula como parámetro y calcule cuantos DNI de entre 48357001 a 48360000 tienen esa letra (reutiliza el código del Ejercicio 3).


Tras esto mostrará por consola el número de documentos encontrados y el listado debidamente formateados de una sola vez sin usar un array.

- Números

Escribe una función que calcule cuántos números son a la vez primos y palíndromos hasta 100 000 y los meta todos en un array. Luego muestra el listado por consola debidamente formateado.


---

## Práctica 3.03 Funciones y objetos

*Ubicación original:* `Práctica 3.03 Funciones y objetos.odt`


PRÁCTICA 3.03 Funciones y objetos


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
```javascript
la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
```

- Constructor (de objetos)
```javascript
Crea una función que simule ser un constructor de objetos (recuerda que es una función que devuelve un objeto) que genere objetos del tipo curso. Las propiedades de este objeto serán: nombre del curso, año, descripción y alumnado que es un array (vacío de momento).
```

- Mostrando (objetos)
```css
Escribe una función para hacer un informe completo (que muestre toda la información que contiene) del objeto curso y que lo muestre por consola, ya sabes como: debidamente formateado.
NOTA: para recorrer el objeto utilizar la estructura for(propiedad in objeto){};
```

- Recorriendo (objetos)
```javascript
Crea un objeto JSON denominado discente que tenga las siguientes propiedades: id, nombre, apellidos, aficiones (que será un array de string) y notas (que será un objeto JSON con las propiedades primera, segunda y tercera con las notas de cada evaluación).
```


Añade los siguientes métodos:

```javascript
calcularMedia, que calculará la nota media de las tres evaluaciones,
imprimirAficiones, que imprimirá pos consola las aficiones del alumnado e
imprimirInforme, que imprime por consola un informe completo.
```


Las impresiones deben hacerse debidamente formateadas.

- Modificando (objetos)
```javascript
Añade, al objeto curso, un método denominado matricular que recibe un objeto discente (creado en el ejercicio anterior) y que los añade a la propiedad alumnado del objeto curso.
```


NOTA: usa los objetos creados en prácticas anteriores para ahorrar tiempo.

- Mostrando II (objetos)
- Diseña una función que permita imprimir por consola cualquier objeto pasado como parámetro. Se deberá comprobar el tipo de dato de cada propiedad del objeto y actuar en consecuencia dependiendo si es un número, cadena, array, objeto o función (método).
- La salida debe estar, como es tradicional, debidamente formateada e indicando el tipo de dato que contiene cada clave del objeto.

---

## Práctica 3.04 Manejo de objetos JSON y arrays (spread)

*Ubicación original:* `Práctica 3.04 Manejo de objetos JSON y arrays (spread).odt`


PRÁCTICA 3.04 Manejo de objetos JSON y arrays (spread)


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
```javascript
el manejo de objetos iterables (array y JSON) se realizará siempre utilizando el spread operator y los métodos vistos en clase,
para leer JSON se utilizará la desestructuración (si procede),
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal).
```

- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
```javascript
la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
```

- Mezclando objetos

Crea una array con cinco cadenas de texto que sean nombres propios (los que estimes oportunos). Con ese array:

- muestra por consola todos los nombres en mayúscula,
- crea un nuevo array con los nombres ordenados alfabeticamente al revés y múestralo por consola,
```javascript
crea un nuevo array que contenga un objeto JSON por cada nombre del array. Ese objeto tendrá dos propiedades: id con el índice de cada posición y nombre con el valor de cada posición. Múestralo por consola.
```


Los datos deben mostrarse debidamente formateados.

- Filtrando objetos
- Genera tres array de diez números (del 1 al 10) generados de forma aleatoria (crea o reutiliza una función para esta tarea). Con esos array, crea uno nuevo con los números que sean mayor a cinco y múestralo por consola debidamente formateado.
- Arrays de objetos
```javascript
Con el objeto que encontrarás en el fichero Ejercicio3.js (copia y pega) reliza las siguientes acciones utilizando para ello el spread operator y los métodos que creas conveniente (las funciones recibirán por defecto el objeto usuarios contenido en el fichero salvo que se especifique lo contrario):
```

- función que permita insertar un nuevo usuario (devolverá el array con todos los usuarios más el nuevo usuario pasado como parámetro),
- una función que devuelva un array de objetos con los usuarios mayores de edad,
- un función que devuelva otro array de objetos con los usuarios que tengan correo electrónico del servidor Yahoo,
- otra que devuelva un array con los usuarios que prefieran el tema claro, sean mayores de edad y su país sea España,
- la antepenúltima que devuelva un array de usuarios a los que les falte algún dato en su ficha,
```javascript
una penúltima función que añada una nueva clave apellidos a todos los usuarios (el valor por defecto será “No indicado”).
y una última función que permita añadir una nueva entrada a direccion denominada codigo cuyo valor por defecto será “00000”.
```


El contenido de esas funciones se debe mostrar por consola debidamente formateado.


---

## Práctica 3.05 Jugando con la sintaxis (opcional)

*Ubicación original:* `Práctica 3.05 Jugando con la sintaxis (opcional).odt`


PRÁCTICA 3.05 Jugando con la sintaxis


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
```javascript
el manejo de objetos iterables (array y JSON) se realizará siempre utilizando el spread operator y los métodos vistos en clase,
para leer JSON se utilizará la desestructuración (si procede),
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal).
```

- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
```javascript
la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
```

- Descomponiendo el problema I: el inicio

Crea dos funciones que realicen la siguiente tarea:

- la primera debe llenar un array de forma aleatoria con nueve números comprendidos entre el 1 y el 9 y que no se repitan. Devolverá ese array.
```javascript
la segunda debe recibir un array con nueve números y comprobar si alguno se repite. Devolverá true si se repite o false si no se repite.
```

- Descomponiendo el problema II: el avance

Crea otras dos funciones con idéntico comportamiento que las anteriores pero en esta ocasión los arrays con los que trabajará serán bidimensionales:

- la primera creará un array bidimensional de tres por tres en el que ningún número debe repetirse. Devolverá ese array.
```javascript
la segunda recibe un array de tres por tres y tiene alguno de sus nueve números repetido. Esta función devolverá true si existe alguna repetición y false si no la tiene.
```


Para crear un array bidimensional en JavaScript debes usar un array de arrays de este modo:

```javascript
var tablero=[[0, 0, 0], [0 , 0, 0], [0 ,0, 0]];
```

- Descomponiendo el problema III: el sudoku
```javascript
Con todas las funciones elaboradas en los dos ejercicios anteriores, haz un programa que sea capaz de comprobar que la solución a un sudoku es correcta. Puedes generar funciones nuevas si así lo estimas oportuno. Esta función recibirá por parámetro el array con los valores del sudoku (uno de nueve por nueve) y devolverá true o false en función de si es correcto o no.
```


Ten presente que un sudoku es un array bidimensional de nueve filas por nueve columnas que a su vez se puede dividir en nueve arrays bidimensionales de tres por tres.


En Aules puedes descargar un fichero con un sudoku válido para hacer las pruebas (o montar tú el código). La explicación de las reglas del Sudoku se puede consultar aquí.


---

## Práctica 3.06 Jugando con la sintaxis II (opcional)

*Ubicación original:* `Práctica 3.06 Jugando con la sintaxis II (opcional).odt`


PRÁCTICA 3.06 Jugando con la sintaxis II


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
```javascript
el manejo de objetos iterables (array y JSON) se realizará siempre utilizando el spread operator y los métodos vistos en clase,
para leer JSON se utilizará la desestructuración (si procede),
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal).
```

- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
```javascript
la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
```

- Buscaminas
- Escribe una función que calcule la cantidad de minas adyacentes para el juego del Buscaminas. Puedes ver cómo funciona el juego aquí, y si no te queda claro puedes echar una partida aquí.

Esta función recibe un array bidimensional con la posición de las minas (valor 0 donde NO hay mina y valor -1 donde SÍ hay mina). Con él, genera otro array bidimensional con la cantidad de minas que hay en las celdas adyacentes. En las celdas que hay una mina se guarda un valor -1 (igual que en el array de entrada) y, en las que no, el número que indica las minas adyacentes.


Por ejemplo, recibiendo esta entrada:

```javascript
[-1, 0, 0, 0]
[ 0, 0, 0, 0]
[ 0,-1, 0, 0]
[ 0, 0, 0, 0]
```


se produce esta salida por pantalla:

```javascript
[-1, 1, 0, 0]
[ 2, 2, 1, 0]
[ 1,-1, 1, 0]
[ 1, 1, 1, 0]
```


---

## Práctica 3.07 Mi primera aplicación (autoevaluable)

*Ubicación original:* `Práctica 3.07 Mi primera aplicación (autoevaluable).odt`


![](/images/ut03_practica-3_100000000000042E000003B3709AF03F.png)


PRÁCTICA 3.07 Mi primera aplicación


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula.
- En cuanto a la entrega de los archivos que componen los ejercicios de React:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
  - los componentes creados deben simularán la estructura de un proyecto en React separando los componentes en carpetas según la función que realicen,
  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con el fichero package.json en un fichero ZIP , y
```

  - sube a Aules el fichero comprimido.
- Mi primera aplicación de película con estado
```javascript
Crea el componente <Peliculas> que mostrará todas las películas contenidas en el fichero peliculas.json que será guardado en un estado. Reutiliza todos los componentes de prácticas anteriores que puedas, esa es la filosofía de React.
```


![](/images/ut03_practica-3_100000000000042E000003B3709AF03F.png)

```javascript
Esto es un ejemplo (sólo un ejemplo) de composición para la <Pelicula>:
```


---

## Práctica 3.08 Estados en React

*Ubicación original:* `Práctica 3.08 Estados en React.odt`


## PRÁCTICA 3.08 Estados en React


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
  - los componentes creados deben simularán la estructura de un proyecto en React separando los componentes en carpetas según la función que realicen,
  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con el fichero package.json en un fichero ZIP , y
```

  - sube a Aules el fichero comprimido.
- Estado con array
```html
Crea el componente <Listado> con un <div> y dos botones: Generar y Eliminar (y algo de estilo CSS). Al pulsar Generar se generará un número aleatorio entre 1 y 100 (no repetido) que será almacenado en el estado del componente (que será un array). El listado de números debe mostrarse dentro del <div> creado con una lista con <ul> (<ul><li></li></ul>) cada vez que se actualice el estado, debidamente formateados.
```


Al pulsar el botón Eliminar se borrarán todos los elementos del estado.

- Contador con límites
```javascript
Diseña el componente <ContadorLimite> que debe tener un límite superior de diez y un límite inferior de cero. Los botones de Incrementar y Decrementar , que debes crear, estarán deshabilitados si se alcanza el límite correspondiente.
NOTA: la propiedad para deshabilitar un botón en disabled=true/false.
```

- Contador de “likes”
```javascript
Programa el componente <ContadorLikes> que tenga dos contadores separados, uno para Likes y otro para Dislikes. Cada uno debe tener su propio botón para incrementar. Ambos contadores deben usar su propio estado con useState y estar debidamente formateados.
```


---

## Práctica 3.09 Listado con estado

*Ubicación original:* `Práctica 3.09 Listado con estado.odt`


## PRÁCTICA 3.09 Listado con estado


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
  - los componentes creados deben simularán la estructura de un proyecto en React separando los componentes en carpetas según la función que realicen,
  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con el fichero package.json en un fichero ZIP , y
```

  - sube a Aules el fichero comprimido.
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
- por último, añade el código necesario para que al pulsar sobre el nombre de un/una discente a través de un botón Desmatricular, desaparezca del listado.

Recuerda que los discentes deben mostrarse debidamente formateados.


---

## Práctica 3.09 Listado con estado

*Ubicación original:* `Práctica 3.09 Listado con estado.txt`

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

