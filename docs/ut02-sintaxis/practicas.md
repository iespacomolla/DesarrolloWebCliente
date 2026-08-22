# Prácticas UT02 Sintaxis, funciones y componentes

## Práctica 2.01 Empezando con la sintaxis

### Ejercicio 1 - Estás gordo

Crea una **función** para realizar este ejercicio. Marcos y Juan quieren comparar su IMC (Índice de Masa Corporal), que se calcula con la siguiente fórmula:

```javascript
IMC = masa / (altura * altura)
```

- guarda las masas y alturas de Marcos y Juan en variables (pon los valores que quieras)
- calcula ambos IMC
- crea una variable booleana que contenga información sobre si Marcos tiene un IMC mayor que Juan
- muestra un texto en la consola que contenga la variable del paso 3. Algo así como `¿Tiene Marcos un IMC mayor que el de Juan?: true`

### Ejercicio 2 - Juego mejor que tú

Juan y Miguel juegan al baloncesto en equipos diferentes. En los últimos tres partidos el equipo de Juan consiguió 89,120 y 103 puntos, mientras que el de Miguel consiguió 116, 94 y 123.

Diseña y programa **funciones** para que realicen las siguientes tareas:

- una para calcular la puntuación media de cada equipo (los equipos se pasan como parámetros),
- otra para mostrar qué equipo tiene mejor media de puntuación e imprime el ganador en la consola. Incluye en la salida también la media de puntuación del equipo. No olvides tener en cuenta el posible caso de un empate (misma puntuación media).
- María también juega al baloncesto y su equipo consiguió 97, 134 y 105 puntos. Rediseña las funciones anteriores para que acepten también a María.

### Ejercicio 3 - Números

Crea una **función** que reciba dos números por parámetro. El primer número indicará cuantas veces se debe imprimir el segundo por pantalla, pero en cada iteración muestra el valor anterior multiplicado por 2. Por ejemplo, si recibe 4 y 6 la salida será: `6 12 24 48`.

### Ejercicio 4 - Facturas

Crea una función que reciba tres parámetros (nombre de producto, precio e impuesto en porcentaje sobre 100). La función hará lo siguiente:

- los parámetros deberán tener un valor por defecto por si no los recibe que deben ser: "Producto genérico", 100 y 21,

- si los números no son válidos (`isNaN()`) muestra un error. Si son válidos, muestra por consola el nombre del producto y el precio final contando impuestos.

## Práctica 2.02 Más sintaxis con "numericos"

### Ejercicio 1 - Números y meses

Crea una función que reciba un número entero como parámetro, **compruebe** que así es y muestre el número de mes correspondiente siendo 1 el valor para enero y 12 para diciembre. Si el número no está entre 1 y 12, el programa insultará al usuario.

La información debe salir por consola debidamente formateada.

### Ejercicio 2 - Sólo números

Escribe una función que reciba un parámetro y **compruebe** si es un número. Si es así comprobará si es **par** o **impar**, si es **negativo** o **positivo** y si es **primo**. Cada una de estas acciones será confinada en una función que será llamada desde la función general `analisisNumerico` que será la que recibirá el número por parámero.

La información debe mostrarse debidamente formateada por consola.

### Ejercicio 3 - Números otra vez

Crea una función que reciba un número entero positivo y, tras **comprobar** que así es, devuelva por consola los números del uno al introducido como parámetro que sean múltiplos de tres.

El resultado será mostrado por consola debidamente formateado, como no podría se de otra manera.

### Ejercicio 4 - Potencia, de números

Crea una función que reciba dos números enteros como parámetros, **compruebe** que así es y calcula la potencia con base el primer parámetro y exponente el segundo utilizando la estructura iterativa `while`.

¿La salida?, pues debidamente formateada por consola.

### Ejercicio 5 - Media, de números

Crea una función que calcula la media aritmética de los números pasados como parámetro. Debe **comprobar** uno a uno que sean número esteros positivos (o cero).

La información debe salir por consola debidamente formateada, para variar.

> NOTA: utiliza el pseudoarray arguments.


### Ejercicio 6 - Calculadora

Crea una función que reciba tres parámetros: dos números enteros y un operador. El operador debe ser una de las siguientes cadenas de texto: “+”, “-”, “*”, “/” y “%” . Si se **comprueba** que todo es correcto, se devolverá la operación indicada con los parámetros pasados. Cada operación **debe realizarse en una función separada** (recuerda: una función, una tarea).

¿Adivinas?, la información deberá ser mostrada por consola debidamente formateada.

## Práctica 2.03 Mi primer componente en *React*

### Ejercicio 1 - Mi primer componente

Crea el componente `<Contenedor>` que dispondrá de un estilo **CSS** propio y todo su contenido será pasado por children.

### Ejercicio 2 - Anidando componentes

Escribe el componente `<Interprete>` que mostrará la información de un intérprete de la película. Debe contener la siguiente información:

- **nombre** del intérprete (se pasará por `props`),
- su **foto** (se pasará por `props` que será un enlace, así se evita almacenar imágenes, para ponerlo en el atributo `src` de una etiqueta `<img>`),
- breve **biografía** (se utilizará children).

Esto es un ejemplo (sólo un ejemplo) de composición para el componente `<Interprete>`:

![](/images/ut02_practica-2_10000000000003F900000126569D7D7F.png)

### Ejercicio 2 - Componentes de película

Diseña el componente `<Pelicula>` que debe mostrar:

- **título** de la película, con formato destacado y las persona(s) encargada(s) de la dirección, debajo del título,
- **cartela** de la película, será la dirección web de una imagen,
- **resumen** de la película y
- todo su **elenco** que será pasado como `children` (reutiliza los componentes existentes y muestra tres miembros del elenco).
