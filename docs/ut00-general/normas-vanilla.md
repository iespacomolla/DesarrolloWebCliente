# Normas de codificación JavaScript Vanilla

## En cuanto al código

- en la **presentación interna**, importan los **comentarios**, la **claridad del código**, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como **autodocumentado**. No será necesario explicar que es un `if` un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las **funciones** y **clases** empleadas. La ausencia de comentarios será penalizada,

- en la **presentación externa**, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación. Recuerda: el/la usuario/a **es idiota**,

- no se pueden cometer fallos **ortográficos** ni de **región** (fechas, y medidas), tanto en la presentación externa como en la interna,

- todo el código debe estar situado dentro del evento `window.onload = () => {};` o a través del evento `document.addEventListener("DOMContentLoaded", () => {});`,

- si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador `console.log("Información a mostrar")`,

- los ejercicios deben realizarse usando ***JavaScript ES6*** y usar el **modo estricto** (`use strict`) No se podrá utilizar **jQuery** ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),

- para el nombre de **variables**, **constantes**, **clases** y **funciones** se utilizará *lowerCamelCase*,

- para la asignación de eventos se utilizará `addEventListener()` indicando sus *tres* parámetros en su definición,

- todos los **formularios** con los que deba interactuar el/la usuario/a deben **comprobar** que la información es **correcta** usando **expresiones regulares**,

- se debe dividir el código en **bibliotecas temáticas** de funciones y/o clases (a menos que el enunciado especifique lo contrario),

- se usarán las funcionalidades `import` y `export` para crear bibliotecas de funciones temáticas (**no** debe haber declaración de **funciones** ni **objetos** en el documento principal),

- todo el código que sea susceptible de retrasar su ejecución debe escribirse de forma **asíncrona** utilizando `async/await`,

- todas las funciones asíncronas deben tener **control de errores** y

- el código contendrá ejemplos de ejecución, si procede.

## Entrega de prácticas (opcional)

Si se necesita la entrega de los archivos que componen los ejercicios para su revisión:

- todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,

- el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,

- el código contendrá ejemplos de ejecución, si procede, y la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
