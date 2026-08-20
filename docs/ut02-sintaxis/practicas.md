# Prácticas UT02: Sintaxis, funciones y componentes

## Práctica 2.01 Empezando con la sintaxis


**Normas de entrega**

- En cuanto al código:

  - en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,

  - si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
  - los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),


  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - para la resolución de los ejercicios hay que usar funciones.
- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y

  - la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual (si así se solicita).

- Estás gordo

Crea una función para realizar este ejercicio. Marcos y Juan quieren comparar su IMC (Índice de Masa Corporal), que se calcula con la siguiente fórmula:

```javascript
IMC = masa / (altura * altura)
```

- guarda las masas y alturas de Marcos y Juan en variables (pon los valores que quieras)
- calcula ambos IMC
- crea una variable booleana que contenga información sobre si Marcos tiene un IMC mayor que Juan
- muestra un texto en la consola que contenga la variable del paso 3. Algo así como ¿Tiene Marcos un IMC mayor que el de Juan?: true
- Juego mejor que tú

Juan y Miguel juegan al baloncesto en equipos diferentes. En los últimos tres partidos el equipo de Juan consiguió 89,120 y 103 puntos, mientras que el de Miguel consiguió 116, 94 y 123.


Diseña y programa funciones para que realicen las siguientes tareas:

- una para calcular la puntuación media de cada equipo (los equipos se pasan como parámetros,
- otra para mostrar qué equipo tiene mejor media de puntuación e imprime el ganador en la consola. Incluye en la salida también la media de puntuación del equipo. No olvides tener en cuenta el posible caso de un empate (misma puntuación media).
- María también juega al baloncesto y su equipo consiguió 97, 134 y 105 puntos. Rediseña las funciones anteriores para que acepten también a María.
- Números

Crea una función que reciba dos números por parámetro. El primer número indicará cuantas veces se debe imprimir el segundo por pantalla, pero en cada iteración muestra el valor anterior multiplicado por 2. Por ejemplo, si recibe 4 y 6 la salida será: 6 12 24 48.

- Facturas

Crea una función que reciba tres parámetros (nombre de producto, precio e impuesto en porcentaje sobre 100). La función hará lo siguiente:

- los parámetros deberán tener un valor por defecto por si no los recibe que deben ser: "Producto genérico", 100 y 21,
```javascript
si los números no son válidos (isNaN()) muestra un error. Si son válidos, muestra por consola el nombre del producto y el precio final contando impuestos.
```


---

## 📄 Práctica 2.02 Más sintaxis con numericos

*Ubicación original:* `Práctica 2.02 Más sintaxis con numericos.odt`


PRÁCTICA 2.02 Más sintaxis con numericos


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
  - para la resolución de los ejercicios hay que usar funciones.
- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
```javascript
la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
```

- Números y meses

Crea una función que reciba un número entero como parámetro, compruebe que así es y muestre el número de mes correspondiente siendo 1 el valor para enero y 12 para diciembre. Si el número no está entre 1 y 12, el programa insultará informará al usuario.


La información debe salir por consola debidamente formateada.

- Sólo números
```javascript
Escribe una función que reciba un parámetro y compruebe si es un número. Si es así comprobará si es par o impar, si es negativo o positivo y si es primo. Cada una de estas acciones será confinada en una función que será llamada en otra llamada analisisNumerico.
```


La información debe mostrarse debidamente formateada por consola.

- Números otra vez

Crea una función que reciba un número entero positivo y, tras comprobar que así es, devuelva por consola los números del uno al introducido como parámetro que sean múltiplos de tres.


El resultado será mostrado por consola debidamente formateado, como no podría se de otra manera.

- Potencia, de números
```javascript
Crea una función que reciba dos números enteros como parámetros, compruebe que así es y calcula la potencia con base el primer parámetro y exponente el segundo utilizando la estructura iterativa while.
```


¿La salida?, pues debidamente formateada por consola.

- Media, de números

Crea una función que calcula la media aritmética de los números pasados como parámetro. Debe comprobar uno a uno que sean número esteros positivos (o cero).


La información debe salir por consola debidamente formateada, para variar.

```javascript
NOTA: utiliza el pseudoarray arguments.
```

- Calculadora

Crea una función que reciba tres parámetros: dos números enteros y un operador. El operador debe ser una de las siguientes cadenas de texto: “+”, “-”, “*”, “/” y “%” . Si se comprueba que todo es correcto, se devolverá la operación indicada con los parámetros pasados. Cada operación debe realizarse en una función separada (recuerda: una función, una tarea).


¿Adivinas?, la información deberá ser mostrada por consola debidamente formateada.


---

## 📄 Práctica 2.03 Mi primer componente

*Ubicación original:* `Práctica 2.03 Mi primer componente.odt`


![](/images/ut02_practica-2_10000000000003F900000126569D7D7F.png)


PRÁCTICA 2.03 Mi primer componente


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
```javascript
los componentes creados deben estar separados en carpetas (los creados en el Ejercicio1 dentro de una carpeta denominada Ejercicio1),
```

  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con los ficheros package.json y package-lock.json en un fichero ZIP , y
```

  - sube a Aules el fichero comprimido.
- Mi primer componente
```javascript
Crea el componente <Contenedor> que dispondrá de un estilo CSS propio y todo su contenido será pasado por children.
```

- Anidando componentes
```javascript
Programa el componente <Interprete> que mostrará la información de un intérprete de la película. Debe contener la siguiente información:
nombre del intérprete (se pasará por props),
su foto (se pasará por props y será una etiqueta <img> y su src será un enlace, así se evita almacenar imágenes),
```

  - breve biografía (se utilizará children).
```javascript
Esto es un ejemplo (sólo un ejemplo) de composición para el componente <Interprete>:
```


![](/images/ut02_practica-2_10000000000003F900000126569D7D7F.png)


![](/images/ut02_practica-2_10000000000003F900000126569D7D7F.png)

- Figura 1: Ejemplo de componente anidado.Componentes de películas
```javascript
Diseña el componente <Pelicula> que debe mostrar:
```

- título de la película, con formato destacado y las persona(s) encargada(s) de la dirección, debajo del título,
- cartela de la película, será la dirección web de una imagen,
- resumen de la película y
```javascript
todo el elenco de la película que será pasado como children (reutiliza los componentes existentes y muestra tres miembros del elenco).
```


---

