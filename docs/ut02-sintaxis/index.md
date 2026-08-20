# UT02: Sintaxis, funciones y componentes

> **Resultado de Aprendizaje Asociado:**  
> RA2. Escribe sentencias simples, aplicando la sintaxis del lenguaje y verificando su ejecución sobre navegadores web.

## Índice

- **[2.1 Strict mode](./2-1-strict-mode.md)**
- **[2.2 Datos y variables](./2-2-datos-variables.md)**
- **[2.3 Hoisting](./2-3-hoisting.md)**
- **[2.4 Tipos de datos](./2-4-tipos-datos.md)**
- **[2.5 Coerción](./2-5-coercion.md)**
- **[2.6 Constantes](./2-6-constantes.md)**
- **[2.7 Operadores](./2-7-operadores.md)**
  - [2.7.1 Operadores de asignación](./2-7-1-operadores-asignacion.md)
  - [2.7.2 Operadores aritméticos](./2-7-2-operadores-aritmeticos.md)
  - [2.7.3 Operadores de comparación](./2-7-3-operadores-comparacion.md)
  - [2.7.4 Operadores lógicos](./2-7-4-operadores-logicos.md)
- **[2.8 Estructuras de control](./2-8-estructuras-control.md)**
  - [2.8.1 Instrucciones if/else](./2-8-1-instrucciones-if-else.md)
  - [2.8.2 Estructuras repetitivas (bucles)](./2-8-2-bucles.md)
- **[2.9 Funciones](./2-9-funciones.md)**
  - [2.9.1 Función declaración](./2-9-1-funcion-declaracion.md)
  - [2.9.2 Función anónima (expresión)](./2-9-2-funcion-anonima.md)
  - [2.9.3 Funciones flecha (arrow functions)](./2-9-3-funciones-flecha.md)
  - [2.9.4 Ámbito de variables (let y var)](./2-9-4-ambito-variables.md)
  - [2.9.5 Alcance de funciones: call stack y scope chain](./2-9-5-alcance-call-stack-scope.md)
  - [2.9.6 El pseudoarray arguments](./2-9-6-pseudoarray-arguments.md)
- **[2.10 Componentes en React](./2-10-componentes-react.md)**
  - [2.10.1 Tipos de componentes](./2-10-1-tipos-componentes.md)
  - [2.10.2 Propiedades en un componente (props)](./2-10-2-props-componentes.md)
  - [2.10.3 JSX](./2-10-3-jsx.md)
- **[Listado de prácticas](./practicas.md)**

## Introducción

Antes de comenzar con *JavaScript* es necesario fijar una serie de conocimientos previos. A lo largo del manual se van a utilizar páginas `HTML`, por lo que se debe saber las etiquetas básicas, la estructura de una página web, uso de listas y capas. Junto a `HTML` se definirá su estilo mediante `CSS`, por lo que es necesario conocer su uso básico y cómo se aplica un estilo a una etiqueta, una clase o un identificador.

Dentro del mundo de la programación *JavaScript* tiene mala fama. Gran parte se debe a que se trata de un **lenguaje débilmente tipado**, lo que permite usar variables sin declarar. Además, al tratarse de un **lenguaje interpretado**, no hay compilador que te diga que hay código erróneo hasta la su ejecución, aunque esto ya no representa un problema gracias a los editores de código. Realmente, *JavaScript* ofrece mucha flexibilidad y las malas críticas vienen más por el desconocimiento del lenguaje que por defectos del mismo.

Contrario a lo que el nombre sugiere, *JavaScript* tiene poco que ver con *Java*. La similitud fue una decisión de marketing allá por el año 1995 cuando *Netscape* introdujo el lenguaje en el navegador.

Una de las versiones más extendidas de *JavaScript* moderno es la llamada por por muchos ***Javascript ES6*** (*ECMAScript 6*), también llamado ***ECMAScript*** **2015** o incluso por algunos llamado directamente *Javascript 6*.

Dada su popularidad, el lenguaje ha sido portado a otros ámbitos entre los que destaca el popular ***NodeJS*** que permite la ejecución de *JavaScript* como como lenguaje escritorio y lenguaje servidor.