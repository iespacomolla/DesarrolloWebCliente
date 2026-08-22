# Prácticas UT03 Objetos predefinidos y hooks

## Práctica 3.01 Más sintaxis con funciones y arrays

### Ejercicio 1 - Sumando

Crea una **función** que permita sumar todos los números pasados como parámetros. Deberá seguir estas premisas:

- **comprobará** si son de tipo numérico antes de realizar la operación, si no lo es, lanzará un mensaje de error por consola y detendrá la ejecución del programa (además de insultar al usuario),
- debe tener como **mínimo dos parámetros** o no se ejecutará. Debe insultar al usuario,
- la salida debe estar debidamente formateada.

> **NOTA**: usa el pseudoarray arguments.

### Ejercicio 2 - Multiplicando

Genera una **función** que imprima por consola las tablas de multiplicar de los números que van desde el indicado como parámetro (entero positivo mayor a dos) hasta dos. Para ello recibe **dos parámetros**: un **número** y una **función**.

La función pasada como parámetro será la que calcule las tablas de multiplicar. Habrá que diseñar primero esa función y luego pasarla como parámetro. Esta función recibe un número como parámetro e imprime su tabla de multiplicar (debidamente formateada).

Por ejemplo, si se ejecuta `tablas(5, multiplicar)` imprimirá por consola las tablas del cinco, la del cuatro, del tres y la del dos, eso sí, debidamente formateadas.

### Ejercicio 3 - Propinas

Juan y su familia se fueron de vacaciones a EE.UU. y comieron en tres restaurantes distintos. Pagaron 124, 48 y 268 $. Allí todo el mundo deja propina, así que Juan quiere crear una calculadora de propinas.

Ha pensado que le gustaría dar un 20% de propina si la factura es menor de 50 $, 15% si la factura está entre 50 $ - 200 $ y un 10% si la factura es de más de 200 $.

Al final, a Juan le encantaría tener tres arrays (y eso que no sabe lo que son):

- el primero contiene el valor de todas las facturas. Este no se calcula, hay que crear el array poniendo a mano los valores,
- el segundo contiene las tres propinas (que se rellenan de forma automática),
- el tercero contiene las tres cantidades finales que tiene que pagar (que se rellena de forma automática).

### Ejercicio 4 - Sumando vectores

Escribe la función `calcular()` para que maneje **tres arrays** (no serán pasados como parámetros a esta función sino declarados dentro de ella). Lo que sí se pasará como parámetros serán tres funciones con el siguiente comportamiento:

- una para generar un array con números aleatorios comprendidos entre 1 y 100, la cantidad de números generados será pasado como parámetro,
- otra que recibe dos arrays como parámetros y genera un array que contenga la suma de las cifras que ocupen posiciones contrarias, es decir, la primera posición del primero sumada a la última posición del segundo (los arrays deben tener la misma longitud y debe comprobarse),
- y la última para imprimir un array por consola debidamente formateado.

La ejecución del programa se realizará a través de la función `calcular()` del siguiente modo: `calcular(funcion1, funcion2, funcion3)` (los nombres de las funciones se pueden cambiar);

>**NOTA**: para generar números aleatorios (entre 1 y 100) en *JavaScript* usa: `Math.floor(Math.random()*101);`

## Práctica 3.02 Objetos predefinidos

### Ejercicio 1 - toCani

Crear una función que reciba una cadena como parámetro y la devuelva transformada en lenguaje **Cani**. Por ejemplo, si se la pasa la cadena "una cadena cani es como esta" obtendremos "UnA KaDeNa kAnI Es kOmO EsTaHHH" .

Para ello hay que:

- alternar el uso de MAYÚSCULAS y minúsculas de forma aleatoria,
- sustituir la letra C por la K y
- añadir entre dos y cinco letras H al final de la cadena.

### Ejercicio 2 - Temporizador

Diseña una función temporizador que reciba como dos parámetros: minutos y segundos. Cada segundo mostrará por consola el tiempo que le queda al temporizador hasta llegar a cero. En el caso que sólo reciba un parámetro, considerará que son los segundos desde donde comenzará la cuenta atrás.

La función se llamará de este modo:

```javascript
function temporizador(minutos, segundos);
```

Por ejemplo `temporizador(2,50);` indica 2 minutos y 50 segundos. Si alguno de los valores que recibe como parámetros son negativos, de un tipo inesperado o los segundos superan el número 59, la función debe lanzar un error insultando al usuario.

La salida del temporizador debe estar debidamente formateada.

### Ejercicio 3 -  DNI

Realiza una función que cada cinco segundos (mediante `setInterval`) solicite un número de DNI sin la letra (llamando a `prompt`) hasta que alguien le escriba la cadena `-1`. En ese momento el programa debe mostrar seguidas las letras de todos los DNI introducidos por consola.

> **NOTA**: para saber cómo calcular la letra del DNI puedes verlo [aquí](https://es.wikipedia.org/wiki/N%C3%BAmero_de_identificaci%C3%B3n_fiscal#C%C3%B3digo_de_control_para_n%C3%BAmeros_de_DNI_o_NIE).

### Ejercicio 4 - Fechas

Escribe un programa que, pasados tres segundos, muestre una vez la fecha actual del sistema por consola debidamente formateada y en castellano.

### Ejercicio 5 - Más DNI

Crea una función que reciba una letra mayúscula como parámetro y calcule cuantos DNI de entre 48357001 a 48360000 tienen esa letra (reutiliza el código del **Ejercicio 3**).

Tras esto mostrará por consola el número de documentos encontrados y el listado debidamente formateados de una sola vez sin usar un array.

### Ejercicio 6 - Números

Escribe una función que calcule cuántos números son a la vez primos y palíndromos hasta 100 000 y los meta todos en un array. Luego muestra el listado por consola debidamente formateado.

## Práctica 3.03 Funciones y objetos


### Ejercicio 1 - Constructor (de objetos)

Crea una función que **simule ser un constructor de objetos** (recuerda que es una función que devuelve un objeto y que en *JavaScript* no es necesario, pero es un buen ejercicio para practicar objetos) que genere objetos del tipo `curso`. ¿Qué es un objeto del tipo `curso`?, pues un objeto **JSON** con las siguientes propiedades: nombre del curso, año, descripción y alumnado que es un array (vacío de momento).

### Ejercicio 2 -  Mostrando (objetos)

Escribe una función para hacer un informe completo (que muestre toda la información que contiene) del objeto `curso` y que lo muestre por consola, ya sabes como: debidamente formateado. Hay que tener en cuenta que `alumnado` es un array, por lo que habrá que comprobar si tiene valores y recorrerlo en tal caso.

> **NOTA**: para recorrer el objeto utilizar la estructura `for(propiedad in objeto){}`;

### Ejercicio 3 - Recorriendo (objetos)

Crea un objeto **JSON** denominado `discente` que tenga las siguientes propiedades: id, nombre, apellidos, aficiones (que será un array de string) y notas (que será un objeto **JSON** con las propiedades primera, segunda y tercera con las notas de cada evaluación).

Añade los siguientes métodos al objeto discente:

- `calcularMedia`, que calculará la nota media de las tres evaluaciones,
- `imprimirAficiones`, que imprimirá pos consola las aficiones del alumnado e
- `imprimirInforme`, que imprime por consola un informe completo.

Las impresiones deben hacerse debidamente formateadas.

### Ejercicio 4 - Modificando (objetos)

Añade, al objeto `curso`, un método denominado `matricular` que recibe un objeto `discente` (creado en el ejercicio anterior) y que los añade a la propiedad `alumnado` del objeto `curso`.

> **NOTA**: usa los objetos creados en prácticas anteriores para ahorrar tiempo.

### Ejercicio 5 - Mostrando II, ahora es personal (objetos)

Diseña una función que permita **imprimir** por consola **cualquier objeto** pasado como parámetro. Se deberá **comprobar el tipo de dato** de cada propiedad del objeto y actuar en consecuencia dependiendo si es:

- un **número**, se mostrará por consola de forma normal,
- una **cadena**, de igual forma que un número,
- un **array**, deberá ser recorrido si contiene información o informar de que no lo tiene,
- una **función** (método), deberá informar indicando que "xxxx en una función", o
- un **objeto**, se deberá comprobar el tipo de datos que contiene cada una de sus claves y actuar en consecuencia.

La salida debe estar, como es tradicional, debidamente formateada e indicando el tipo de dato que contiene cada clave del objeto.

## Práctica 3.04 Manejo de objetos JSON y arrays (spread)

> NOTA: para la realización de estos ejercicios (y a partir de ahora en el resto del curso) debes utilizar obligatoriamente el **desparrame** (operador *spread*).

### Ejercicio 1 - Mezclando objetos

Crea una array con cinco cadenas de texto que sean nombres propios (los que estimes oportunos).

Con ese array:

- muestra por consola todos los nombres en mayúscula,
- crea un nuevo array con los nombres ordenados alfabeticamente al revés y múestralo por consola,
- crea otro array que contenga un objeto **JSON** por cada nombre del array. Ese objeto tendrá dos propiedades: `id` con el índice de cada posición y `nombre` con el valor de cada posición. Múestralo por consola.

Los datos deben mostrarse debidamente formateados.

### Ejercicio 2 - Filtrando objetos

Genera tres array de diez números (del 1 al 10) generados de forma aleatoria (crea o reutiliza una función para esta tarea). Con esos arrays, crea uno nuevo con los números que sean mayor a cinco y múestralo por consola debidamente formateado.

### Ejercicio 3 - Arrays de objetos

Con el objeto que encontrarás en el fichero `Ejercicio3.js` (usa `import`) reliza las siguientes acciones utilizando para ello el *spread operator* y los métodos que creas conveniente (las funciones recibirán por defecto el objeto `usuarios` contenido en el fichero salvo que se especifique lo contrario):

- función que permita insertar un nuevo objeto `usuario` (devolverá el array con todos los usuarios más el nuevo usuario pasado como parámetro),
- una función que devuelva un array de objetos con los usuarios **mayores de edad**,
- un función que devuelva otro array de objetos con los usuarios que tengan **correo electrónico del servidor Yahoo**,
- otra que devuelva un array con los usuarios que prefieran el **tema claro**, sean **mayores de edad** y su país sea **España**,
- la antepenúltima que devuelva un array de usuarios a los que **les falte algún dato** en su ficha,
- una penúltima función que **añada una nueva clave** `apellidos` a todos los usuarios (el valor por defecto será **“No indicado”**), y
- una última función que permita **añadir** una nueva entrada a direccion denominada `codigo` cuyo valor por defecto será **“00000”**.

El contenido de esas funciones se debe mostrar por consola debidamente formateado.

#### Falta fichero -> Ejercicio3.js (añadir export para que sea esportable)

## Práctica 3.05 Jugando con la sintaxis (Buscaminas)

Escribe una función que calcule la cantidad de minas adyacentes para el juego del Buscaminas. Puedes ver cómo funciona el juego [aquí](https://es.wikipedia.org/wiki/Buscaminas), y si no te queda claro puedes echar una partida [aquí](https://buscaminas.eu/), pero sólo una.

Esta función recibe un array bidimensional con la posición de las minas (valor 0 donde **NO** hay mina y valor -1 donde **SÍ** hay mina). Con él, genera otro array bidimensional con la cantidad de minas que hay en las celdas adyacentes. En las celdas que hay una mina se guarda un valor -1 (igual que en el array de entrada) y, en las que no, el número que indica las minas adyacentes.

> **NOTA**: para crear un array bidimensional en *JavaScript* debes usar un array de arrays de este modo: `let tablero=[[0, 0, 0], [0 , 0, 0], [0 ,0, 0]];`

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

## Práctica 3.06 Mi primera aplicación en React

### Ejercicio 1 - Mi primera aplicación de película con estado

Crea el componente `<Peliculas>` que mostrará todas las películas contenidas en el fichero `peliculas.json` que será guardado en un estado. Reutiliza todos los componentes de prácticas anteriores que puedas, esa es la filosofía de *React*.

Esto es un ejemplo (sólo un ejemplo) de composición para la `<Pelicula>`:
![image](/images/ut03_practica-3_100000000000042E000003B3709AF03F.png)

#### Falta fichero -> peliculas.json

## Práctica 3.07 Estados en React

### Ejercicio 1 - Estado con array

Crea el componente `<Listado>` con un `<div>` y dos botones: `Generar` y `Eliminar` (y algo de estilo **CSS**). Al pulsar `Generar` se generará un número aleatorio entre 1 y 100 (no repetido) que será almacenado en el estado del componente (que será un array). El listado de números debe mostrarse dentro del `<div>` creado con una lista con `<ul>` (`<ul><li></li></ul>`) cada vez que se actualice el estado, debidamente formateados.

Al pulsar el botón `Eliminar` se borrarán todos los elementos del estado.

### Ejercicio 2 - Contador con límites

Diseña el componente `<ContadorLimite>` que debe tener un límite superior de **diez** y un límite inferior de **cero**. Los botones de **Incrementar** y **Decrementar**, que debes crear, estarán deshabilitados si se alcanza el límite correspondiente.

> **NOTA**: la propiedad para deshabilitar un botón es `disabled=true/false`.


### Ejercicio 3 - Contador de *likes*

Programa el componente `<ContadorLikes>` que tenga dos contadores separados, uno para `Likes` y otro para `Dislikes`. Cada uno debe tener **su propio botón** para incrementar. Ambos contadores deben usar su propio estado con `useState` y estar debidamente formateados.

## Práctica 3.08 Listado con estado en React

### Ejercicio 1 - Discentes con estado

Crea el componente `<Matricula>`, y los componentes que estimes necesarios, para mostrar un listado de discentes que se encuentran en el fichero `matriculados.json`. Además, deben existir botones que realicen las siguinetes acciones:

- mostrar sólo los discentes del curso **2DAW**,
- mostrar los discentes de **primer curso** (da igual el ciclo),
- mostrar los discentes del **ciclo DAW** (da igual el curso),
- mostrar los discentes a los que le guste la lectura (contenga **lectura en aficiones**),
- **ordenar** el listado actual (sea cual sea) por apellidos de forma **ascendente** o **descendente** (al pulsar el botón se cambiará el orden de los discentes),
- **reiniciar** el listado (poner el listado con los valores iniciales).
- por último, añade el código necesario para que al **pulsar sobre el nombre de un/una discente** a través de un botón `Desmatricular`, **desaparezca** del listado.

Recuerda que los discentes deben mostrarse debidamente formateados.

#### Falta fichero -> matriculados.js
