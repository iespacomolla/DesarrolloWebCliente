# 📝 Prácticas y Ejercicios - UT06: Programación asíncrona y bibliotecas

> En esta sección se recogen todas las prácticas, ejercicios de evaluación, autoevaluaciones y actividades guiadas correspondientes a la **UT06: Programación asíncrona y bibliotecas**.

---

## 📄 CRUD API Prueba Gemini

*Ubicación original:* `CRUD API Prueba Gemini.odt`


# Tema 6: Operaciones CRUD con la API Fetch en JavaScript


1. Introducción al acceso a datos en aplicaciones cliente


En los inicios de la web, el navegador (el cliente) tenía un rol pasivo: su principal tarea era solicitar páginas HTML a un servidor y renderizarlas. Sin embargo, la arquitectura web moderna ha transformado radicalmente este paradigma. Hoy en día, el cliente es una aplicación compleja y dinámica, capaz de gestionar su propio estado, interactuar con el usuario en tiempo real y, fundamentalmente, comunicarse de forma continua con el servidor para obtener y enviar datos sin necesidad de recargar la página completa. Esta evolución ha hecho que la comunicación asíncrona entre cliente y servidor sea el pilar sobre el que se construyen las aplicaciones web actuales.


Este intercambio de información se rige por el modelo de comunicación cliente-servidor, donde el cliente (el navegador) solicita recursos y el servidor responde con ellos. Para que esta comunicación sea estandarizada y predecible, se utiliza una API (Interfaz de Programación de Aplicaciones), que define las reglas y métodos que las aplicaciones pueden usar para comunicarse entre sí. En el desarrollo web moderno, el estándar de facto es la API REST (Representational State Transfer). Se trata de un conjunto de convenciones que, funcionando sobre el protocolo HTTP, permite una comunicación robusta y universalmente entendida entre cliente y servidor.

```javascript
La base de la interacción con los datos en cualquier aplicación se puede reducir a cuatro operaciones fundamentales, conocidas por el acrónimo CRUD: Crear, Leer, Actualizar y Eliminar. La genialidad de las APIs REST reside en que establecen una correspondencia directa entre estas operaciones y los métodos del protocolo HTTP (POST, GET, PUT/PATCH, DELETE). Esta relación es el fundamento de toda la interacción con los datos desde el cliente.
```


A continuación, exploraremos el modelo CRUD en detalle y veremos cómo cada una de sus operaciones se mapea a un método HTTP específico, preparándonos para implementarlo en JavaScript.


2. El modelo CRUD


El acrónimo CRUD representa las cuatro operaciones esenciales para la gestión de datos persistentes en cualquier sistema de software: Crear, Leer, Actualizar y Eliminar. Este modelo es universal y se aplica desde las bases de datos más complejas hasta las aplicaciones más sencillas, proporcionando un marco conceptual claro para la manipulación de la información. Su relevancia es tal, que dominarlo es un requisito indispensable para cualquier desarrollador de aplicaciones.


Cada operación del acrónimo tiene un propósito específico y bien definido:

- Create (Crear): Se refiere a la inserción de nuevos registros o datos en el sistema. Es el equivalente a guardar un nuevo elemento.
- Read (Leer): Consiste en la consulta y recuperación de datos que ya existen en el sistema, ya sea para un solo elemento o para un conjunto de ellos.
- Update (Actualizar): Implica la modificación de datos que ya han sido guardados previamente.
- Delete (Eliminar): Es la acción de borrar permanentemente un registro del sistema.

Como mencionamos, una API REST bien diseñada mapea estas operaciones directamente a los métodos del protocolo HTTP. Esta convención es la que nos permite interactuar con los datos del servidor de una manera estandarizada. La siguiente tabla resume esta correspondencia fundamental:


| Operación CRUD | Método HTTP | Descripción |
| --- | --- | --- |
| Create | POST | Se utiliza para enviar datos y crear un nuevo recurso. |
| Read | GET | Se utiliza para solicitar y recuperar datos de un recurso. |
| Update | PUT / PATCH | Se utiliza para actualizar un recurso existente. PUT reemplaza el recurso completo, mientras que PATCH aplica una modificación parcial. |
| Delete | DELETE | Se utiliza para eliminar un recurso específico. |


El seguimiento de estas convenciones es una buena práctica general que conduce a un código más predecible y mantenible, ya que cualquier desarrollador familiarizado con REST entenderá inmediatamente el propósito de cada petición.

```javascript
Para ejecutar estas operaciones en JavaScript desde el lado del cliente, utilizaremos la moderna API Fetch, que nos proporciona las herramientas necesarias para realizar estas peticiones HTTP de forma asíncrona.
```


3. La API Fetch

```javascript
La API Fetch es la interfaz moderna, integrada de forma nativa en todos los navegadores actuales, para realizar peticiones de red. Supone el reemplazo definitivo del antiguo objeto XMLHttpRequest (XHR) y se ha convertido en una herramienta indispensable en el desarrollo web por su potencia y su sintaxis simplificada basada en Promesas.
Fetch es una función global (window.fetch()) que nos proporciona una forma fácil y lógica de obtener recursos de forma asíncrona a través de la red. Su diseño se alinea perfectamente con la programación asíncrona moderna de JavaScript.
La sintaxis básica es la siguiente: fetch(url, options). Su primer argumento es la URL del recurso que queremos obtener y el segundo es un objeto opcional de configuración, donde podemos especificar el método, cabeceras, cuerpo de la petición, etc.
Su funcionamiento interno está basado en Promesas. Al llamar a fetch(), esta función devuelve inmediatamente una Promesa que se resuelve con un objeto Response tan pronto como el servidor responde con las cabeceras. Es importante entender que esto ocurre antes de que el cuerpo completo de la respuesta (los datos) se haya descargado. Si ocurre un fallo de red que impide que la petición se complete (por ejemplo, no hay conexión a internet), la Promesa se rechaza. Este comportamiento nos obliga a encadenar métodos .then() para procesar la respuesta y .catch() para gestionar los errores de red.
Fetch es la alternativa moderna a XMLHttpRequest y sus ventajas son claras:
```

- Sintaxis más limpia y legible: El uso de Promesas evita el anidamiento de callbacks ("callback hell") y facilita la escritura de código asíncrono.
```javascript
API unificada: Proporciona objetos Request y Response bien definidos, lo que hace que la API sea más coherente y fácil de usar.
```

- Mejor integración: Se integra de forma natural con otras tecnologías web modernas como los Service Workers.
- Mayor flexibilidad y potencia: Ofrece un control más granular sobre las cabeceras, el modo de la petición (CORS), las credenciales y otros aspectos de la comunicación HTTP.
```javascript
Con estos conceptos claros, estamos listos para aplicar la API Fetch y realizar nuestra primera operación CRUD: la lectura de datos mediante peticiones GET.
```


4. Peticiones GET (Read)

```javascript
Las peticiones GET son el tipo de solicitud más común en la web. Su propósito es claro y simple: solicitar y recuperar datos de un servidor. Es una operación de solo lectura, lo que significa que no debe modificar el estado del recurso en el servidor. De hecho, GET es el método por defecto que utiliza fetch si no especificamos otro en el objeto de opciones.
Para recuperar datos de una API, solo necesitamos proporcionar la URL del recurso. Usaremos jsonplaceholder, una API REST online gratuita para pruebas y prototipado.
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => console.log(data));
Observemos el patrón clave aquí, ya que se repetirá constantemente. El primer .then() recibe el objeto Response. Este objeto no contiene los datos directamente, sino que es una representación de la respuesta HTTP. Para extraer el cuerpo y convertirlo de una cadena JSON a un objeto JavaScript, debemos usar el método response.json(). Este método también es asíncrono y devuelve una Promesa, por lo que necesitamos encadenar un segundo .then() para, finalmente, acceder a los datos ya parseados y listos para ser utilizados.
```


El siguiente ejemplo práctico muestra cómo renderizar una lista de nombres de usuario en el DOM, actualizando el contenido de un elemento HTML.

```html
HTML (index.html):
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Lista de Usuarios</title>
</head>
<body>
<h1>Usuarios de la API</h1>
<ul id="user-list">
<li>Cargando...</li>
</ul>
<script src="app.js"></script>
</body>
</html>
JavaScript (app.js):
// Seleccionamos el elemento <ul> del DOM
const userList = document.getElementById('user-list');
// Hacemos la petición a la API
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
// Limpiamos el contenido inicial ("Cargando...")
userList.innerHTML = '';
// Iteramos sobre el array de usuarios
users.forEach(user => {
// Creamos un nuevo elemento <li>
const li = document.createElement('li');
// Establecemos su contenido con el nombre del usuario
li.textContent = user.name;
// Añadimos el <li> a la lista <ul>
userList.appendChild(li);
});
});
Una vez que sabemos cómo leer datos, el siguiente paso lógico es aprender a crearlos. Esto nos lleva directamente a las peticiones POST.
```


5. Peticiones POST (Create)

```javascript
Mientras que GET se usa para solicitar datos, las peticiones POST se utilizan para enviar datos a un servidor con el fin de crear un nuevo recurso. Ejemplos comunes incluyen registrar un nuevo usuario, publicar un comentario o añadir un producto a un carrito de la compra.
A diferencia de una petición GET simple, una POST requiere que proporcionemos información adicional en el segundo argumento de fetch: el objeto de configuración (options). Hay tres propiedades clave que debemos especificar:
method: 'POST': Indicamos explícitamente que queremos usar el método HTTP POST.
headers: Son metadatos que enviamos al servidor para describir nuestra petición. La cabecera más importante en este caso es 'Content-Type': 'application/json', que le dice al servidor que los datos que estamos enviando en el cuerpo están en formato JSON.
body: Es el contenido de la petición, es decir, los datos del nuevo recurso que queremos crear.
El protocolo HTTP requiere que el body de una petición sea una cadena de texto. Sin embargo, en JavaScript trabajamos con objetos. Por lo tanto, antes de enviar nuestro objeto de datos, debemos serializarlo, es decir, convertirlo a una cadena de texto en formato JSON. Para esto, utilizamos el método JSON.stringify().
El siguiente ejemplo muestra cómo enviar los datos de un nuevo usuario a jsonplaceholder para crearlo:
// 1. Objeto JavaScript con los datos del nuevo usuario
const nuevoUsuario = {
name: 'Ana Pérez',
username: 'anaperez',
email: 'ana.perez@example.com'
};
// 2. Realizamos la petición fetch con la configuración
fetch('https://jsonplaceholder.typicode.com/users', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(nuevoUsuario) // Convertimos el objeto a una cadena JSON
})
.then(response => response.json())
.then(data => {
// La API de prueba nos devuelve el objeto creado con un nuevo 'id'
console.log('Usuario creado exitosamente:', data);
})
.catch(error => {
console.error('Error al crear el usuario:', error);
});
Al ejecutar este código, la consola mostrará un objeto similar al que enviamos, pero con una propiedad id asignada por el servidor, confirmando que el recurso ha sido "creado". Ahora que sabemos crear y leer recursos, es hora de aprender a modificarlos utilizando PUT y PATCH.
```


6. Peticiones PUT / PATCH (Update)

```javascript
Para modificar recursos que ya existen en el servidor, el protocolo HTTP nos ofrece dos métodos principales: PUT y PATCH. Aunque ambos sirven para actualizar, es crucial entender su diferencia semántica para utilizarlos correctamente y seguir las convenciones de una API REST.
```


La diferencia clave es la siguiente:

```javascript
PUT (Reemplazo total): Una petición PUT se utiliza para reemplazar por completo un recurso existente con la nueva versión que se proporciona en el cuerpo (body) de la petición. Si algún campo del recurso original no se incluye, el servidor debería interpretarlo como que ese campo debe eliminarse o establecerse a su valor por defecto. Es una operación idempotente, lo que significa que realizar la misma petición PUT múltiples veces tendrá el mismo efecto que hacerla una sola vez.
PATCH (Actualización parcial): Una petición PATCH, por otro lado, se utiliza para aplicar una modificación parcial a un recurso. Solo se envían los campos que se desean cambiar. Los campos no incluidos deben permanecer inalterados en el servidor. Esta es la opción más eficiente cuando solo necesitas actualizar una o dos propiedades de un objeto grande.
Supongamos que queremos actualizar un post con id: 1 en jsonplaceholder.
```


#### Ejemplo con PUT (reemplazo completo)


En este ejemplo, actualizamos tanto el título como el cuerpo del post.

```javascript
// Datos para el reemplazo completo del post con id=1
const updatedPostData = {
title: 'Este es un título completamente nuevo',
body: 'Este es el nuevo contenido del post. El anterior ha sido reemplazado.',
userId: 1
};
fetch('https://jsonplaceholder.typicode.com/posts/1', {
method: 'PUT',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(updatedPostData),
})
.then(response => response.json())
.then(data => console.log('Recurso actualizado con PUT:', data))
.catch(error => console.error('Error en PUT:', error));
```


#### Ejemplo con PATCH (actualización parcial)

```javascript
Ahora, solo queremos cambiar el título, dejando el resto de campos intactos. PATCH es la herramienta ideal.
// Datos para la actualización parcial (solo el título)
const partialUpdateData = {
title: 'Título actualizado parcialmente',
};
fetch('https://jsonplaceholder.typicode.com/posts/1', {
method: 'PATCH',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(partialUpdateData),
})
.then(response => response.json())
.then(data => console.log('Recurso actualizado con PATCH:', data))
.catch(error => console.error('Error en PATCH:', error));
```


Con la actualización de recursos dominada, completamos el ciclo CRUD con la última operación: la eliminación de datos.


7. Peticiones DELETE (Delete)

```css
Las peticiones DELETE tienen un propósito claro y destructivo: solicitar al servidor la eliminación permanente de un recurso específico. Es la operación final del ciclo CRUD y, debido a su naturaleza irreversible, debe manejarse con cuidado.
La sintaxis para una petición DELETE es muy simple. Solo necesitamos especificar method: 'DELETE' en el objeto de opciones y apuntar a la URL del recurso que queremos eliminar.
fetch('https://jsonplaceholder.typicode.com/posts/1', {
method: 'DELETE',
})
.then(response => {
if (response.ok) {
console.log('Recurso eliminado exitosamente.');
} else {
console.error('Error al eliminar el recurso.');
}
});
Dado que una acción DELETE es destructiva, es una práctica fundamental en la experiencia de usuario (UX) solicitar una confirmación antes de enviarla. Un borrado accidental puede ser muy frustrante. La forma más sencilla de lograr esto es con un diálogo de confirmación window.confirm().
// El usuario pulsa un botón de "Eliminar"
if (window.confirm('¿Estás seguro de que quieres eliminar este post?')) {
// Si confirma, se envía la petición DELETE
fetch('https://jsonplaceholder.typicode.com/posts/1', {
method: 'DELETE',
});
}
Tras una eliminación exitosa, la respuesta convencional y más común de una API REST es un código de estado 204 No Content, que indica que la operación fue exitosa pero no hay contenido que devolver en el cuerpo de la respuesta. Sin embargo, es importante saber que algunas APIs pueden desviarse de esta convención. Por ejemplo, jsonplaceholder, al ser una API de pruebas, responde con un código 200 OK y un cuerpo con un objeto vacío ({}). Como desarrolladores, debemos estar preparados para ambos escenarios.
```


Hemos cubierto todas las operaciones CRUD. Sin embargo, un desarrollador profesional sabe que las cosas no siempre salen bien. El siguiente paso es aprender a gestionar los posibles fallos en estas comunicaciones.


8. Gestión correcta de errores con fetch

```css
Llegamos a uno de los aspectos más críticos y que más errores provoca al usar fetch: su particular manejo de los errores HTTP. Es fundamental que interiorices el siguiente concepto para evitar problemas en tus aplicaciones. En el desarrollo de aplicaciones que dependen de la red, la gestión de errores no es una opción, es una obligación. Nuestra aplicación debe ser robusta para manejar estos escenarios y ofrecer una buena experiencia al usuario.
El comportamiento más importante y contraintuitivo de fetch es el siguiente:
La Promesa devuelta por fetch() no es rechazada cuando el servidor responde con un código de error HTTP (como 404 Not Found o 500 Internal Server Error).
La promesa de fetch solo se rechaza ante un fallo de red real que impida que la petición se complete. Si la petición llega al servidor y este responde (incluso con un error), para fetch la operación ha sido "exitosa" a nivel de red, y la promesa se resuelve.
El método correcto para detectar un error HTTP es evaluar la propiedad booleana response.ok. Esta propiedad es true si el código de estado de la respuesta está en el rango de éxito (200-299) y false en caso contrario. El patrón canónico para gestionar errores es comprobar response.ok y, si es false, lanzar un error manualmente que será capturado por el bloque .catch().
// Intentamos acceder a un recurso que no existe (provocará un error 404)
fetch('https://jsonplaceholder.typicode.com/users/999')
.then(response => {
// Comprobamos si la respuesta fue exitosa
if (!response.ok) {
// Si no lo es, lanzamos un error que será capturado por el .catch()
throw new Error(`Error HTTP: ${response.status}`);
}
// Si todo va bien, continuamos procesando la respuesta
return response.json();
})
.then(data => {
console.log(data);
})
.catch(error => {
// Capturamos tanto los errores de red como los que lanzamos manualmente
console.error('Hubo un problema con la petición Fetch:', error);
});
```


Es vital distinguir entre:

```javascript
Errores de Red: Hacen que la promesa de fetch se rechace y son capturados directamente por .catch().
Errores de Estado HTTP: Deben ser detectados manualmente con response.ok y propagados al bloque .catch() lanzando un Error.
Este patrón se integra de forma muy natural con el bloque try...catch al utilizar la sintaxis async/await, que veremos a continuación como una forma más moderna y legible de escribir este mismo código.
```


9. Uso de async / await con fetch

```javascript
La sintaxis async/await es una "azúcar sintáctica" construida sobre las Promesas que nos permite escribir código asíncrono de una manera que se lee de forma secuencial, como si fuera síncrona. Esto mejora enormemente la legibilidad y el mantenimiento del código, especialmente en operaciones encadenadas como las que realizamos con fetch.
Para usarla, envolvemos nuestro código en una función declarada con la palabra clave async y utilizamos await antes de cualquier operación que devuelva una Promesa (fetch() y response.json()). La gestión de errores se realiza de forma natural con un bloque try...catch.
```


#### Petición GET y POST con async/await

```javascript
// Función asíncrona para obtener datos de un usuario
async function obtenerUsuario(userId) {
const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
try {
// 'await' pausa la ejecución hasta que la promesa de fetch se resuelva
const response = await fetch(url);
// Comprobamos el error HTTP como antes
if (!response.ok) {
throw new Error(`Error HTTP: ${response.status}`);
}
const data = await response.json();
console.log('Datos del usuario:', data);
} catch (error) {
// Capturamos cualquier error (de red o lanzado por nosotros)
console.error('Error en la obtención de datos:', error);
}
}
// Función asíncrona para crear un nuevo post
async function crearPost(postData) {
try {
const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(postData),
});
if (!response.ok) {
throw new Error(`Error HTTP: ${response.status}`);
}
const data = await response.json();
console.log('Post creado:', data);
} catch (error) {
console.error('Error al crear el post:', error);
}
}
// Llamadas a las funciones
obtenerUsuario(1);
crearPost({ title: 'Nuevo Post', body: 'Contenido...', userId: 1 });
Las ventajas de async/await frente al encadenamiento de .then() son significativas:
Código más legible y mantenible: Evita el anidamiento de callbacks (.then()) y se asemeja a la programación síncrona tradicional.
Gestión de errores centralizada: Permite usar los bloques try...catch estándar de JavaScript, que resultan más intuitivos que .catch().
```

- Depuración más sencilla: El flujo de ejecución es más fácil de seguir en las herramientas de desarrollo del navegador.

Ahora que dominamos la sintaxis y las operaciones, es el momento de aplicar todos estos conceptos en un único proyecto práctico e integrador.


10. Ejemplo práctico completo de CRUD

```javascript
Para consolidar todo el conocimiento adquirido, vamos a construir una pequeña aplicación web funcional para gestionar una lista de "tareas" (todos). Utilizaremos la API de jsonplaceholder para realizar las operaciones CRUD: leer la lista de tareas, añadir una nueva, y eliminar una existente.
```


El proyecto constará de tres ficheros, siguiendo el principio de separación de responsabilidades:

```javascript
index.html: Contendrá la estructura HTML, incluyendo un formulario para añadir tareas y una lista donde se mostrarán.
style.css: Estilos básicos para una interfaz limpia y usable.
app.js: Contendrá toda la lógica de la aplicación en JavaScript.
En nuestro app.js, vamos a aplicar dos patrones profesionales clave. Para la funcionalidad de borrado, usaremos delegación de eventos: en lugar de añadir un listener a cada botón de eliminar, añadiremos un único listener al contenedor padre (<ul>). Esto es mucho más eficiente, especialmente con listas largas. Además, al añadir una nueva tarea, realizaremos una actualización optimista de la UI: tras recibir la confirmación del servidor, añadiremos el nuevo elemento directamente al DOM sin necesidad de volver a pedir toda la lista, proporcionando una experiencia de usuario instantánea.
```


#### index.html

```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Lista de Tareas (CRUD con Fetch)</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<h1>Mis Tareas</h1>
<form id="todo-form">
<input type="text" id="todo-title" placeholder="Nueva tarea..." required>
<button type="submit">Añadir</button>
</form>
<ul id="todo-list">
<!-- Las tareas se cargarán aquí -->
</ul>
<script src="app.js"></script>
</body>
</html>
```


#### style.css

```css
body { font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; }
form { display: flex; gap: 10px; margin-bottom: 20px; }
input { flex-grow: 1; padding: 8px; }
button { cursor: pointer; }
ul { list-style: none; padding: 0; }
li { display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid #ccc; }
.delete-btn { background-color: #ff4d4d; color: white; border: none; padding: 5px 10px; }
```


#### app.js

```html
const API_URL = 'https://jsonplaceholder.typicode.com/todos';
const todoList = document.getElementById('todo-list');
const todoForm = document.getElementById('todo-form');
const todoTitleInput = document.getElementById('todo-title');
// --- READ (GET) ---
async function fetchAndRenderTodos() {
try {
const response = await fetch(`${API_URL}?_limit=10`);
if (!response.ok) throw new Error('Error al cargar las tareas.');
const todos = await response.json();
todoList.innerHTML = '';
todos.forEach(todo => {
const li = document.createElement('li');
li.textContent = todo.title;
li.dataset.id = todo.id;
const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Eliminar';
deleteBtn.className = 'delete-btn';
li.appendChild(deleteBtn);
todoList.appendChild(li);
});
} catch (error) {
todoList.innerHTML = `<li>Error: ${error.message}</li>`;
}
}
// --- CREATE (POST) ---
todoForm.addEventListener('submit', async (e) => {
e.preventDefault();
const newTodoTitle = todoTitleInput.value.trim();
if (!newTodoTitle) return;
const newTodo = { title: newTodoTitle, completed: false, userId: 1 };
try {
const response = await fetch(API_URL, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(newTodo)
});
if (!response.ok) throw new Error('No se pudo crear la tarea.');
const createdTodo = await response.json();
// Actualización optimista de la UI
const li = document.createElement('li');
li.textContent = createdTodo.title;
li.dataset.id = createdTodo.id;
const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Eliminar';
deleteBtn.className = 'delete-btn';
li.appendChild(deleteBtn);
todoList.prepend(li);
todoTitleInput.value = '';
} catch (error) {
alert(error.message);
}
});
// --- DELETE (DELETE) ---
todoList.addEventListener('click', async (e) => {
if (e.target.classList.contains('delete-btn')) {
const li = e.target.closest('li');
const todoId = li.dataset.id;
if (confirm('¿Seguro que quieres eliminar esta tarea?')) {
try {
const response = await fetch(`${API_URL}/${todoId}`, { method: 'DELETE' });
if (!response.ok) throw new Error('No se pudo eliminar la tarea.');
li.remove();
} catch (error) {
alert(error.message);
}
}
}
});
// --- INICIALIZACIÓN ---
// Al cargar el DOM, obtenemos y mostramos todas las tareas iniciales.
document.addEventListener('DOMContentLoaded', fetchAndRenderTodos);
```


A partir de este ejemplo práctico, podemos extraer una serie de buenas prácticas que elevan la calidad de nuestro código a un nivel más profesional.


11. Buenas prácticas

```javascript
Escribir código que funciona es solo el primer paso. El código profesional debe ser reutilizable, mantenible y robusto. A continuación, se presentan algunas buenas prácticas clave al trabajar con la API Fetch.
En lugar de repetir la lógica de fetch, la comprobación de response.ok y el parseo de JSON en cada llamada, podemos encapsularla en una función "wrapper" o envoltorio. Esto centraliza la lógica y el manejo de errores. Este patrón hace que el wrapper sea más genérico, permitiendo que la función que lo llama (obtenerUsuarios en el ejemplo) tenga control total sobre cómo gestionar el error final.
/**
* Función wrapper para realizar peticiones a la API.
* Centraliza la llamada fetch, la gestión de errores HTTP y el parseo de JSON.
* @param {string} url - La URL del endpoint.
* @param {object} options - El objeto de configuración para fetch.
* @returns {Promise<any>} - La promesa con los datos en formato JSON.
*/
async function apiFetch(url, options = {}) {
try {
const response = await fetch(url, options);
if (!response.ok) {
throw new Error(`Error HTTP: ${response.status}`);
}
// Si la respuesta podría no tener cuerpo (ej. DELETE exitoso con 204)
if (response.status === 204) {
return null;
}
return await response.json();
} catch (error) {
// Re-lanzamos el error para que la función que llama pueda manejarlo
throw error;
}
}
// Ejemplo de uso del wrapper
async function obtenerUsuarios() {
try {
const usuarios = await apiFetch('https://jsonplaceholder.typicode.com/users');
console.log(usuarios);
} catch (error) {
// Manejar el error específico de esta llamada
alert('No se pudieron cargar los usuarios.');
}
}
Es una excelente práctica centralizar la configuración de la API, como la URL base (const API_URL = '...'), en una constante al principio del fichero para facilitar cambios futuros.
```


Además, debemos priorizar la claridad y legibilidad del código mediante el uso de nombres de variables y funciones descriptivos y el uso de comentarios donde la lógica no sea evidente.


Finalmente, es fundamental entender que el código del cliente es inseguro. Nunca se deben almacenar claves de API secretas o información sensible en el código cliente. Toda validación de datos que se realice en el navegador es solo para mejorar la experiencia de usuario y siempre debe ser replicada y confirmada en el servidor.


12. Resumen del tema


Llegados a este punto, hemos cubierto todos los aspectos fundamentales para interactuar con APIs desde JavaScript. Esta sección resume las ideas clave para afianzar el aprendizaje.

- El modelo CRUD representa las cuatro operaciones básicas de gestión de datos.
```javascript
Existe una correspondencia directa entre CRUD y los métodos HTTP: GET (Leer), POST (Crear), PUT/PATCH (Actualizar), y DELETE (Eliminar).
La API Fetch es la herramienta moderna de JavaScript para realizar peticiones HTTP y se basa en Promesas.
Las peticiones que envían datos (POST, PUT, PATCH) requieren configurar el method, headers y body (serializado con JSON.stringify).
Es imprescindible comprobar response.ok para una correcta gestión de errores HTTP, ya que fetch no rechaza su promesa por ellos.
La sintaxis async/await simplifica el código asíncrono y la gestión de errores mediante try...catch.
```


Ahora estás preparado para poner a prueba tus conocimientos y consolidar tus habilidades con los siguientes ejercicios prácticos.


13. Ejercicios propuestos


La mejor manera de consolidar lo aprendido es ponerlo en práctica. Te animo a realizar los siguientes ejercicios, que están diseñados con una dificultad progresiva para aplicar todos los conceptos vistos en el tema.


#### Nivel básico

```javascript
Galería de Fotos: Utiliza el endpoint https://jsonplaceholder.typicode.com/photos. Realiza una petición GET para obtener las primeras 10 fotos y muéstralas en una galería de imágenes en tu página HTML, mostrando su thumbnailUrl como imagen y su title como pie de foto.
Datos de un Post: Crea un campo de texto y un botón. Al introducir un número (ID) en el campo y pulsar el botón, realiza una petición GET a https://jsonplaceholder.typicode.com/posts/{ID} y muestra el título y el cuerpo del post correspondiente en la página.
```


#### Nivel intermedio

```javascript
Crear Comentarios: Crea un formulario con campos para el nombre, email y cuerpo de un comentario. Al enviarlo, realiza una petición POST al endpoint https://jsonplaceholder.typicode.com/comments para crear un nuevo comentario con los datos del formulario. Muestra el comentario devuelto por la API en la consola.
Lista de Tareas (ToDo) con Borrado: Recupera y muestra una lista de tareas desde https://jsonplaceholder.typicode.com/todos. Añade un botón "Eliminar" a cada tarea. Al pulsar el botón, debe aparecer una confirmación y, si se acepta, se debe enviar una petición DELETE para eliminar esa tarea. Tras la eliminación, el elemento debe desaparecer de la lista en el DOM.
```


#### Nivel avanzado

```javascript
Mini Gestor de Usuarios: Crea una aplicación de una sola página (SPA) que gestione una lista de usuarios (https://jsonplaceholder.typicode.com/users). La aplicación debe permitir:
```

  - Mostrar la lista completa de usuarios al cargar la página.
```javascript
Añadir un nuevo usuario a través de un formulario (POST). El nuevo usuario debe aparecer en la lista sin necesidad de recargar la página.
Eliminar cualquier usuario de la lista (DELETE).
(Extra) Añadir un botón "Editar" en cada usuario. Al pulsarlo, los datos del usuario deben cargarse en el formulario, que ahora servirá para actualizar la información (PUT o PATCH).
```


---

## 📄 Práctica 5.02 Enciclopedia básica correción

*Ubicación original:* `Ejercicios_old_5/Práctica 5.02 Enciclopedia básica correción.txt`

```text

Definición de funciones en el main.
Uso de import/export.
Mensajes en consola.
Comprobar map antes de recorrerlo.
addEventListener en funciones (en lugar de winodw.load).
Se usa delegación de eventos.
Se usa control de errores en los fetch (catch).
```

---

## 📄 Práctica 5.03 Asincronismo en React

*Ubicación original:* `Ejercicios_old_5/Práctica 5.03 Asincronismo en React.txt`

```text

Definición de funciones en el main.
Uso de import/export.
Mensajes en consola.
Comprobar map antes de recorrerlo.
addEventListener en funciones (en lugar de winodw.load).
Se usa delegación de eventos.
Se usa control de errores en los fetch (catch).
Separa contenido en funciones (obtención datos y pintar datos).

```

---

## 📄 Práctica 5.04 Asincronismo libre (opcional) 

*Ubicación original:* `Ejercicios_old_5/Práctica 5.04 Asincronismo libre (opcional) .odt`

```javascript
PRÁCTICA 5.03 Asincronismo libre con React
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
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal),
todo el código que sea susceptible de retrasar su ejecución debe escribirse de forma asíncrona utilizando aync/await preferiblemente,
```

  - todas las funciones asíncronas deben tener control de errores.
- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
```javascript
la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
```


NOTA: Para la realización de los siguientes ejercicios se utilizarán API REST reales ya que este comportamiento es el que se utiliza en aplicaciones web. Si el ejercicio no especifica ninguna, puedes encontrar una API pública aquí: https://github.com/public-apis/public-apis/ (tratad de no elegir la misma).

- Explotando una API

Crea una pequeña aplicación web con alguna de las API del repositorio anterior.


Algunas ideas:

- Juego tipo trivial que cada vez que carga nos ofrece preguntas distintas sobre un tema concreto. El usuario rellena el formulario y obtiene su puntuación. Se utiliza la API OpenTriviaDB que encontrarás en https://opentdb.com/api_config.php.
- Enciclopedia Pokemon (no me hagáis esto), en la que se escribe el nombre de un pokemon y la web devuelve resultados con sus características y alguna imagen del mismo. Se usa la API PokéAPI que encontrarás en https://pokeapi.co.
- Lyrics Search que se utiliza para obtener la letra de una canción. Se busca por artista o por canción y cuando elije una canción se muestra la letra. Se utiliza la API Lyrics.ovh que encontrarás en https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search .

Por supuesto puedes improvisar alguna otra con una de las API que encontrarás en el listado de GitHub.


---

## 📄 Práctica 5.04 Asincronismo síncrono con async await en React

*Ubicación original:* `Ejercicios_old_5/Práctica 5.04 Asincronismo síncrono con async await en React.odt`

```javascript
PRÁCTICA 5.04 Asincronismo “síncrono” con async/await en React
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
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal),
todo el código que sea susceptible de retrasar su ejecución debe escribirse de forma asíncrona utilizando async/await,
```

  - todas las funciones asíncronas deben tener control de errores.
- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
```javascript
la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
Ampliando y migrando a async/await
```


Parte 1

```javascript
Modifica la enciclopedia de Star Wars para que consuma el código asíncrono con async/await .
```


Parte 2


Añade, en los datos de cada película, un listado de diez (sólo diez) de los protagonistas de cada una de ellas (se debe mostrar su nombre completo). Al pinchar sobre el nombre de cada intérprete se mostrará información detallada como su género, su altura, su peso, su color de pelo, el color de sus ojos y una imagen (opcional).

```javascript
Utiliza la llamada en conjunto de promises en aquellas solicitudes que deban resolverse como una (en personajes y pilota).
```


Muestra la información donde y como creas oportuno, pero recuerda, debidamente formateada.


---

## 📄 Práctica 5.04 Asincronismo síncrono con async await

*Ubicación original:* `Ejercicios_old_5/Práctica 5.04 Asincronismo síncrono con async await.txt`

```text

Definición de funciones en el main.
Uso de import/export.
Mensajes en consola.
Comprobar map antes de recorrerlo.
addEventListener en funciones (en lugar de winodw.load).
Se usa delegación de eventos.
Se usa control de errores en los fetch (catch).
Separa contenido en funciones (obtención datos y pintar datos).
Usa async/await para consumir promesas.
Usar await dentro de una estructura iterativa.
Uso adecuado del Promise.AllSettled (const datos = await Promise...);

```

---

## 📄 Práctica 5.05 Asincronismo libre 

*Ubicación original:* `Ejercicios_old_5/Práctica 5.05 Asincronismo libre .txt`

```text

Definición de funciones en el fichero principal.
Uso de import/export.
Mensajes en consola.
No se comprueban map ni foreach antes de recorrerlo.
Hay addEventListener en funciones (en lugar de winodw.load).
Se usa delegación de eventos.
Se usa control de errores en los fetch (catch).
Separa contenido en funciones (obtención datos y pintar datos).
Usa async/await para consumir promesas.
Usar await dentro de una estructura iterativa.
Uso adecuado del Promise.AllSettled (const datos = await Promise...);

Dificultad de la propuesta.
Diseño de la propuesta.

```

---

## 📄 Práctica 5.05 Asincronismo libre en React

*Ubicación original:* `Ejercicios_old_5/Práctica 5.05 Asincronismo libre en React.odt`

```javascript
PRÁCTICA 5.05 Asincronismo libre en React.
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
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal),
todo el código que sea susceptible de retrasar su ejecución debe escribirse de forma asíncrona utilizando async/await,
```

  - todas las funciones asíncronas deben tener control de errores.
- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
```javascript
la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
```


NOTA: Para la realización de los siguientes ejercicios se utilizarán API REST reales ya que este comportamiento es el que se utiliza en aplicaciones web. Si el ejercicio no especifica ninguna, puedes encontrar una API pública aquí: https://github.com/public-apis/public-apis/ (tratar de no elegir la misma).

- Explotando una API

Realiza una pequeña aplicación web en React que consuma los datos de una API de tu elección.


La aplicación deberá, en función de la API seleccionada, mostrar los datos y permitir hacer selecciones o ampliaciones de información (del mismo modo que en la práctica anterior). El funcionamiento de tu aplicación dependerá de la API que elijas, así que deberás estudiarla con detalle.


Algunas ideas:

- Juego tipo trivial que cada vez que carga nos ofrece preguntas distintas sobre un tema concreto. El usuario rellena el formulario y obtiene su puntuación. Se utiliza la API OpenTriviaDB que encontrarás en https://opentdb.com/api_config.php.
- Enciclopedia Pokemon (no me hagáis esto), en la que se escribe el nombre de un pokemon y la web devuelve resultados con sus características y alguna imagen del mismo. Se usa la API PokéAPI que encontrarás en https://pokeapi.co.
- Lyrics Search que se utiliza para obtener la letra de una canción. Se busca por artista o por canción y cuando elije una canción se muestra la letra. Se utiliza la API Lyrics.ovh que encontrarás en https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search .

Por supuesto puedes improvisar alguna otra aplicación con una de las API que encontrarás en el listado de GitHub.


---

## 📄 Práctica 5.06 Enciclopedia completa de Star Wars en React corrección

*Ubicación original:* `Ejercicios_old_5/Práctica 5.06 Enciclopedia completa de Star Wars en React corrección.txt`

```text

Mensajes en consola.
No se comprueban map ni foreach antes de recorrerlo.
Se usa delegación de eventos.
Se usa control de errores en los fetch (catch).
Separa contenido en funciones (obtención datos y pintar datos).
Usa async/await para consumir promesas.
Usar await dentro de una estructura iterativa.
Uso adecuado del Promise.AllSettled (const datos = await Promise...);

División de componentes.
Inicialización de estados con variable (revisar curso que viene).
Número de estados y adecuación.
Formato de salida (id, previsualización del estado, estilo...).
Formularios son  controlados.

```

---

## 📄 Práctica 5.06 Enciclopedia completa de Star Wars en React

*Ubicación original:* `Ejercicios_old_5/Práctica 5.06 Enciclopedia completa de Star Wars en React.odt`


![](/images/ut06_practica-5_10000000000004CA000002F1539892A8.png)

```javascript
PRÁCTICA 5.06 Star Wars en React
```


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula,
  - debes dividir tu código en bibliotecas temáticas de funciones y/o clases a partir de este ejercicio,
```javascript
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal),
todo el código que sea susceptible de retrasar su ejecución debe escribirse de forma asíncrona utilizando async/await preferiblemente,
```

  - todas las funciones asíncronas deben tener control de errores.
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

![](/images/ut06_practica-5_10000000000004CA000002F1539892A8.png)

- Añadiendo contextos en React

Parte 1


Modifica la enciclopedia de Star Wars para que utilice contextos destinados a contener la información y funcionalidades que se repitan. Se pueden usar los que creas conveniente (mínimo uno).


Parte 2


Diseña un hook personalizado para realizar la gestión de las llamadas a la API. Deberá traer la información, controlar los errores e informar del estado de la transacción (cargando o no).


Parte 3


Añade, en los datos de cada intérprete, un listado de las naves y vehículos (si los hubiera) con los que tenga una relación cada personaje. Al pulsar sobre el botón Pilota (que deberás crear y mostrar en la ficha del personaje) se mostrará una ficha con los datos básicos de cada nave y vehículo. Si no hay ninguno se debe informar al usuario.

```javascript
Utiliza la llamada en conjunto de promises en aquellas solicitudes que deban resolverse como una.
```


![](/images/ut06_practica-5_10000000000004CA000002F1539892A8.png)


> 📸 *Figura 1: Propuesta (no obligatoria) de organización de la información.Recuerda que el primer ejercicio se sugirió una estructura como esta:*

```javascript
Usa bibliotecas (recomendación) de estilo como React Boostrap o React Material Design (o cualquiera con la que estéis trabajando en Diseño de Interfaces Web), ya que será muy común el uso de ellas en el futuro.
```


---

## 📄 Práctica 5.07 Hooks personalizados en React

*Ubicación original:* `Ejercicios_old_5/Práctica 5.07 Hooks personalizados en React.odt`


![](/images/ut06_practica-5_10000000000004CA000002F1539892A8.png)

```javascript
PRÁCTICA 5.07 Hooks personalizados en React
```


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula,
  - debes dividir tu código en bibliotecas temáticas de funciones y/o clases a partir de este ejercicio,
```javascript
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal),
todo el código que sea susceptible de retrasar su ejecución debe escribirse de forma asíncrona utilizando async/await preferiblemente,
```

  - todas las funciones asíncronas deben tener control de errores.
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

![](/images/ut06_practica-5_10000000000004CA000002F1539892A8.png)

- Diseñando hooks en React

¿Opcional para navidad?


Añade, en los datos de cada intérprete, un listado de las naves y vehículos (si los hubiera) con los que tenga una relación cada personaje. Al pulsar sobre el botón Pilota (que deberás crear y mostrar en la ficha del personaje) se mostrará una ficha con los datos básicos de cada nave y vehículo. Si no hay ninguno se debe informar al usuario.

```javascript
Utiliza la llamada en conjunto de promises en aquellas solicitudes que deban resolverse como una.
```


![](/images/ut06_practica-5_10000000000004CA000002F1539892A8.png)


> 📸 *Figura 1: Propuesta (no obligatoria) de organización de la información.Recuerda que el primer ejercicio se sugirió una estructura como esta:*

```javascript
Usa bibliotecas (recomendación) de estilo como React Boostrap o React Material Design (o cualquiera con la que estéis trabajando en Diseño de Interfaces Web), ya que será muy común el uso de ellas en el futuro.
```


---

## 📄 Práctica 5.XX Asincronismo en React (autoevaluable)

*Ubicación original:* `Ejercicios_old_5/Práctica 5.XX Asincronismo en React (autoevaluable).odt`

```javascript
PRÁCTICA 5.06 asincronismo en React
```


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula,
  - debes dividir tu código en bibliotecas temáticas de funciones y/o clases a partir de este ejercicio,
```javascript
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal),
todo el código que sea susceptible de retrasar su ejecución debe escribirse de forma asíncrona utilizando async/await preferiblemente,
```

  - todas las funciones asíncronas deben tener control de errores.
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
```javascript
Pintando API con hooks en React
```


Crea una pequeña aplicación que muestre el listado de las películas de Star Wars y la información de cada película al pinchar sobre ella (sólo datos básicos de la película, sin actores).


Se deben seguir estas premisas:

- todo el código debe estar contenido en componentes. El número, características y modo queda a discreción del discente,
```javascript
toda comunicación con el servidor debe ser en modo asíncrono y, como no puede ser de otra manera, usando async/await,
se deben crear hooks personalizados para la lógica de la aplicación que sea susceptible de repetirse y necesite un estado.
Antes de lanzarte a programar componentes, párate un par de minutos a diseñar la interfaz de tu aplicación y a enumerar los componentes y hooks que vas a necesitar. Sólo cuando esta tarea esté finalizada ponte a programar.
```


---

## 📄 cambios

*Ubicación original:* `Ejercicios_old_5/cambios.txt`

```text


Organización de las sesiones (cambios 2024):

	- 1ª -> AJAX, promises y fetch (básico sin encadenamiento en promises ni encabezado en fetch)
	- 2ª -> Encabezado del fetch (sólo mencionar), encadenamiento de promesas, promesas en funciones y promise en conjunto ¿?.
	- 3ª -> Async/Await
	- 3ºB-> Promise en conjunto ¿?
	- 4ª -> custom hooks (retrasar la práctica de asincronismo libre para el final y poner en su lugar la de hooks (explicar antes de contextos)).
	- 5ª -> useContext
	
	Encabezado de fetch en profundidad se deja para la UT06 para hacer peticiones GET, POST, PUT y DELETE.


Teoría:

	- custom hooks -> ampliar ejemplos:
						-> exportando sólo el estado (pintar los datos)
						-> exportar datos y set (pintar y manejar datos)
						-> hooks con estado (loading)
						-> hooks con estado de errores
						
	- añadir esto:
		/**
       * NOTA IMPORTANTE
       * Si en un map se coloca una función asíncrona, invariablemente se devolverá
       * una promesa, por lo que hay que poner ese map dentro de un Promise.allSettled
       * para que devuelva las promesas consumidas.
       */
      const _nuevos = await Promise.allSettled(
        datos.map(async (dato) => {
          // Se comprueba si existe en la BBDD.
          const { data, error } = await supabase
            .from("disponen")
            .select("*")
            .eq("id_practica", dato.id_practica)
            .eq("id_evaluacion", evaluacionSeleccionada.id_evaluacion);
          // Si la respuesta contiene algo es que existe el registro y no se inserta.
          if (!data || data.length === 0) {
            return {
              id_practica: dato.id_practica,
              id_evaluacion: evaluacionSeleccionada.id_evaluacion,
            };
          }
        })
      );
						
Actividades:

	-> 5.01 dividir en dos partes:
		-> 	primera, autoevaluable para hacer una llamada a la API con hook personalizado 
			mostrar sólo el listado de las películas. Ya la tendrán resuelta con el código
			de clase, pero es buena idea que la intenten por ellos mismos.
		->	segunda, incluir los detalles de las películas ampliando el hook y componentes.
			¿autoevaluable?.
			
	-> ¿Incluir en una actividad un ejercicio con rutas y useParams? (por ejemplo en películas
		y que muestren la película pasada como parámetro)
```

---

## 📄 Práctica 6.01 Lista de la compra con Supabase

*Ubicación original:* `Ejercicios_old_6/Práctica 6.01 Lista de la compra con Supabase.odt`


![](/images/ut06_practica-6_1000000000000549000003F344C3A210.png)


PRÁCTICA 6.01 Desarrollando un proyecto con Supabase y React


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula,
  - debes dividir tu código en bibliotecas temáticas de funciones y/o clases a partir de este ejercicio,
```javascript
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas a partir de esta práctica,
todo el código que sea susceptible de retrasar su ejecución debe escribirse de forma asíncrona utilizando async/await preferiblemente,
```

  - todas las funciones asíncronas deben tener control de errores.
- En cuanto a la entrega de los archivos que componen los ejercicios de React:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
  - los componentes creados deben estar separados en carpetas,
  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con los ficheros package.json y package-lock.json en un fichero ZIP , y
```

  - sube a Aules el fichero comprimido.
- Lista de la compra con Supabase y React

Crea una pequeña aplicación web con React para gestionar la lista de la compra. La aplicación dispondrá del CRUD completo, pero cada una de estas funcionalidades se irán implementando práctica tras práctica. Para empezar, hay que plantear la aplicación antes de escribir una sola línea de código. Y para ello se necesitarán hacer estos pasos:

- crea una cuenta y una base de datos en https://supabase.com/ (utiliza el correo del centro si no quieres facilitar datos personales),
- diseña una tabla para los productos que deberá tener, como mínimo, los siguientes atributos: nombre del producto, peso, precio, imagen (url de una imagen) y descripción,
```javascript
se podrán crear listas de la compra incluyendo en ellas los artículos disponibles, por lo que se deberá crear la estructura en tablas necesaria. Los atributos que como mínimo se deben guardar serán: nombre de la lista (para poder identificarla más rápidamente), identificador del propietario/a (que indicará el creador/a de la lista), fecha de creación (que se guardará de forma automática al crear la lista) y el listado de artículos, (una tradicional relación muchos a muchos entre productos y listas),
```

- para crear la interfaz, se debe prever el uso de menús y submenús con react-router-dom, la división de la aplicación en páginas (recuerda que son componentes con una función especial) y el uso de contextos,
- diseña una interfaz intuitiva y añade CSS para darle un poco de tu toque personal. Se pueden usar bibliotecas de estilo. Se irán añadiendo funcionalidades a la aplicación como la edición de productos, la autentificación de usuarios y la gestión de listas de la compra, por lo que se debe prever todas estas características a la hora de planificar la interfaz de la aplicación. A modo de ejemplo, la interfaz con todas las funcionalidades que se irán añadiendo podría quedar tal que así:

![](/images/ut06_practica-6_1000000000000549000003F344C3A210.png)


> 📸 *Figura 1: Ejemplo de interfaz completa de la aplicación*


---

## 📄 Práctica 6.02 Autentificación de usuarios

*Ubicación original:* `Ejercicios_old_6/Práctica 6.02 Autentificación de usuarios.odt`


PRÁCTICA 6.02 Autentificación de usuarios


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula,
  - debes dividir tu código en bibliotecas temáticas de funciones y/o clases a partir de este ejercicio,
```javascript
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas a partir de esta práctica,
todo el código que sea susceptible de retrasar su ejecución debe escribirse de forma asíncrona utilizando async/await preferiblemente,
```

  - todas las funciones asíncronas deben tener control de errores.
- En cuanto a la entrega de los archivos que componen los ejercicios de React:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
  - los componentes creados deben estar separados en carpetas,
  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con los ficheros package.json y package-lock.json en un fichero ZIP , y
```

  - sube a Aules el fichero comprimido.
- Autentificación de usuarios
```javascript
Para empezar la aplicación es vital la implementación de un control de usuarios para dotar de seguridad a los datos almacenados. Para ello se utilizará el servicio Auth de Supabase implementando las siguientes características:
```

- será necesario la creación de cuentas de usuario/a, así que crea un pequeño formulario para crearlas,
- se deberá poder iniciar sesión en la aplicación a través del método usuario/contraseña,
- se debe implementar un sistema para cerrar sesión en la aplicación,
- hay que incluir un mecanismo para que se pueda recuperar la contraseña,
- si el usuario/a no ha iniciado sesión, sólo tendrá acceso a la parte pública de la aplicación (componente Inicio.jsx o similar) y para ello será necesario la implantación de políticas de seguridad (Row Level Security) y el control de si se ha iniciado sesión,
- si se ha iniciado sesión se dispondrá de acceso completo a la aplicación y aparecerá el nombre completo (Display name) en la cabecera,
- por último, personaliza las plantillas de correo que recibirán los usuarios/as de la aplicación al realizar cualquier acción con su cuenta. Esta opción está disponible a través del panel de control de tu proyecto en Authentication → Email Templates .

Ya sabes, diseña una interfaz intuitiva y añade algo de CSS para darle un poco de tu toque personal.


---

## 📄 Práctica 6.03 Listado de productos

*Ubicación original:* `Ejercicios_old_6/Práctica 6.03 Listado de productos.odt`


PRÁCTICA 6.03 Listado los productos


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula,
  - debes dividir tu código en bibliotecas temáticas de funciones y/o clases a partir de este ejercicio,
```javascript
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas a partir de esta práctica,
todo el código que sea susceptible de retrasar su ejecución debe escribirse de forma asíncrona utilizando async/await preferiblemente,
```

  - todas las funciones asíncronas deben tener control de errores.
- En cuanto a la entrega de los archivos que componen los ejercicios de React:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
  - los componentes creados deben estar separados en carpetas,
  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con los ficheros package.json y package-lock.json en un fichero ZIP , y
```

  - sube a Aules el fichero comprimido.
- Listado de productos con Supabase y React

Una vez creada la estructura de la aplicación, se va a implementar el listado de productos. La aplicación dispondrá del CRUD completo, pero en esta práctica tan sólo se creará esta característica. Sigue estos pasos para empezar a crear la aplicación:

- añade un mínimo de 7 productos a esa colección a través de la interfaz web de Supabase,
- implementa las siguientes acciones en tu aplicación:
  - listar todos los productos (comportamiento por defecto),
  - filtrar por nombre, precio o peso (filtros simples, uno a la vez y, para precio y peso, se debe mostrar los artículos con un valor igual o menor al indicado por el usuario),
  - ordenar los resultados por nombre, precio o peso.
- cuando se listen los productos, añade a final del listado un cuadro resumen que contendrá el número de productos del listado y el precio medio de todos ellos.

Para esta sección de la aplicación, diseña una página con un submenú (con react-router-dom) en donde el submenú contendrá todas las funcionalidades descritas con anterioridad.


---

## 📄 Práctica 6.04 Edición de productos

*Ubicación original:* `Ejercicios_old_6/Práctica 6.04 Edición de productos.odt`


PRÁCTICA 6.04 Edición de productos


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula,
  - debes dividir tu código en bibliotecas temáticas de funciones y/o clases a partir de este ejercicio,
```javascript
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas a partir de esta práctica,
todo el código que sea susceptible de retrasar su ejecución debe escribirse de forma asíncrona utilizando async/await preferiblemente,
```

  - todas las funciones asíncronas deben tener control de errores.
- En cuanto a la entrega de los archivos que componen los ejercicios de React:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
  - los componentes creados deben estar separados en carpetas,
  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con los ficheros package.json y package-lock.json en un fichero ZIP , y
```

  - sube a Aules el fichero comprimido.
- Edición de productos

Llega el turno de la edición de los productos en la aplicación. Para ello, sigue estas indicaciones:

- se debe habilitar un espacio (una página, por ejemplo) para la creación de productos. En ella habilita una funcionalidad para poder introducir nuevos productos en la base de datos,
- añade un sistema para eliminar productos de la base de datos, por ejemplo a través de un icono en cada producto que, al pulsarlo, pida confirmación de su eliminación. Utiliza otra forma si lo crees oportuno,
- crea otro espacio para poder editar los productos por si hay que realizar un cambio de precio, su nombre o cualquier otro dato. Al pulsar sobre uno de ellos aparecerá un formulario con los datos para poder editar y un botón para actualizarlos en la base de datos (puedes integrarlo con el anterior si así lo estimas oportuno).

Procura que esa interfaz sea intuitiva (de nuevo) y añade algo de CSS para darle un poco de tu toque personal.


---

## 📄 Práctica 6.05 Creación de listados

*Ubicación original:* `Ejercicios_old_6/Práctica 6.05 Creación de listados.odt`


PRÁCTICA 6.05 Creación de listados


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula,
  - debes dividir tu código en bibliotecas temáticas de funciones y/o clases a partir de este ejercicio,
```javascript
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas a partir de esta práctica,
todo el código que sea susceptible de retrasar su ejecución debe escribirse de forma asíncrona utilizando async/await preferiblemente,
```

  - todas las funciones asíncronas deben tener control de errores.
- En cuanto a la entrega de los archivos que componen los ejercicios de React:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
  - los componentes creados deben estar separados en carpetas,
  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con los ficheros package.json y package-lock.json en un fichero ZIP , y
```

  - sube a Aules el fichero comprimido.
- Creación de listas de compra

Llega el turno de crear las listas de la compra (como bien indica el título de la práctica). Para ello, sigue estas indicaciones:

- diseña una interfaz que permita realizar las siguientes acciones:
  - listar las listas de la compra, una vez mostradas, al pinchar sobre una de ella (o sobre algún icono) se mostrará información de detalle (los productos que contiene). Además, añade estas características a la aplicación:
    - que muestre el peso total de la compra e indique al usuario si es necesario coger el coche para hacer la compra (el umbral de peso lo eliges tú, pero sé razonable),
    - que indique el total en euros de la lista para hacer una previsión de fondos.
  - crear listas de la compra, se guardará el nombre, la fecha en la que se creó (de forma automática) y el identificador de usuario que la crea,
  - borrar listas de la compra, una vez que ya no se utilicen,
  - añadir productos y su cantidad a la lista de la compra, por ejemplo al pulsar sobre cada producto,
  - eliminar productos de la lista, por ejemplo al pulsar sobre un botón junto al producto en el listado.
- cuando un usuario/a inicie sesión, sólo se tendrá acceso a la gestión de sus listas de la compra pudiendo crear, editar y eliminarlas a su antojo (también podrán realizar estas acciones sobre las listas en la base de datos, así que tendrás que usar Row Level Security),

Procura que esa interfaz sea intuitiva (de nuevo) y añade algo de CSS para darle un poco de tu toque personal.


---

## 📄 Práctica 6.06 Roles de usuario

*Ubicación original:* `Ejercicios_old_6/Práctica 6.06 Roles de usuario.odt`


PRÁCTICA 6.06 Autentificación de usuarios


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula,
  - debes dividir tu código en bibliotecas temáticas de funciones y/o clases a partir de este ejercicio,
```javascript
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas a partir de esta práctica,
todo el código que sea susceptible de retrasar su ejecución debe escribirse de forma asíncrona utilizando async/await preferiblemente,
```

  - todas las funciones asíncronas deben tener control de errores.
- En cuanto a la entrega de los archivos que componen los ejercicios de React:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
  - los componentes creados deben estar separados en carpetas,
  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con los ficheros package.json y package-lock.json en un fichero ZIP , y
```

  - sube a Aules el fichero comprimido.
- Roles de usuarios

Para finalizar la aplicación será necesario la implementación de un control de roles de usuario/a y algunas funciones extra para dotar de seguridad a los datos:

- los usuarios con el rol de registrado podrán gestionar sus propias listas (crearlas, modificarlas y borrarlas),
- tan sólo los usuarios/as que tengan un rol de edición podrán acceder a las partes de la aplicación que permitan la edición de los productos,

IMPORTANTE.


Para poder revisar el funcionamiento de la práctica es necesario la creación de usuarios con diferentes roles. Añade esos usuarios (uno por rol) en un comentario al inicio del componente App.jsx .


Para la gestión de los roles habría que crea un apartado específico, pero como su funcionamiento es un tanto peculiar las modificaciones de rol serán asignadas a través del panel de control de Supabase. Queda a discreción del discente la creación de un apartado para la gestión de los usuarios y la asignación de roles. No será obligatoria.


Ya sabes, diseña una interfaz intuitiva (esta interfaz ya es grande) y añade algo de CSS para darle un poco de tu toque personal.


---

## 📄 Evaluacion_UT06

*Ubicación original:* `Evaluacion_UT06.md`

```markdown
# PRUEBA DE EVALUACIÓN - UNIDAD 06
## Programación Asíncrona, Fetch API, Async/Await, Custom Hooks y Contextos en React

**Módulo:** Desarrollo Web en Entorno Cliente (2º DAW)  
**Duración:** 2 horas (Presencial, sin conexión a Internet - Simulador / Mock API)  
**Puntuación máxima:** 100 puntos

---

### Normas de entrega y directrices técnicas

#### En cuanto al código:
- **Presentación interna:** Importan los comentarios, la claridad del código y el manejo exhaustivo de excepciones con `try/catch`.
- **Sintaxis y estándares:** Código en **JavaScript ES6** con modo estricto (`"use strict";`).
- **Asincronía moderna:** Toda operación de red debe utilizar `async/await` con control de errores (`try/catch`) y verificación explícita de `response.ok` y códigos de estado HTTP.
- **Arquitectura React:** Los componentes deben alimentarse mediante **Contextos de React (`useContext`)** para desacoplar la vista de la lógica de red.
- **Límite de contenidos:** Contenidos de **UT01 a UT06** (Promesas, `Promise.all`, Fetch API, `async/await`, custom hooks y `useContext`).

---

## Enunciados de la Prueba

### Ejercicio 1: Cliente Asíncrono con Fetch y Peticiones Paralelas (45 puntos)
Se debe implementar un cliente en JavaScript Vanilla para consultar información de usuarios y sus publicaciones asociadas:

1. **Función `obtenerUsuarioConPublicaciones(userId)`:**
   - Realiza una petición asíncrona mediante `fetch` al endpoint de usuarios y al endpoint de posts en paralelo utilizando `Promise.all`.
   - Implementa control de errores: si el servidor devuelve un error 404 o 500, lanza una excepción capturada por `catch` y renderiza un mensaje amigable en el DOM.
   - Mientras se resuelve la promesa, muestra un indicador visual de "Cargando datos...".
2. **Renderizado en el DOM:**
   - Muestra la tarjeta del usuario con su nombre, email y ciudad.
   - Debajo, muestra una lista con los títulos y cuerpos de las publicaciones obtenidas.

---

### Ejercicio 2: Sistema CRUD Global con useContext en React (55 puntos)
Desarrolla una aplicación en React para la gestión de un catálogo de productos/artículos:

1. **Contexto Global (`ArticulosContext`):**
   - Alberga el estado de los artículos, el estado de carga (`cargando: true/false`) y el posible error (`error: string|null`).
   - Expone funciones asíncronas para: `obtenerArticulos()`, `agregarArticulo(nuevo)`, `editarArticulo(id, actualizacion)` y `eliminarArticulo(id)`.
2. **Componentes:**
   - `<ArticulosProvider>`: Proveedor del contexto que inicializa los datos simulados o remotos.
   - `<ArticulosListado>`: Renderiza los artículos en una cuadrícula con botones de editar y eliminar.
   - `<ArticuloFormulario>`: Formulario controlado reutilizable tanto para el alta como para la edición de un artículo existente.

```

---

## 📄 Práctica 6.01 Asincronismo básico (autoevaluable)

*Ubicación original:* `Práctica 6.01 Asincronismo básico (autoevaluable).odt`


PRÁCTICA 6.01 Asincronismo básico


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
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal),
```

  - todo el código que sea susceptible de retrasar su ejecución debe escribirse de forma asíncrona utilizando asincronismo,
  - todas las funciones asíncronas deben tener control de errores.
- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
```javascript
la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
NOTA: todas estas acciones se realizarán al cargar la página, es decir, en el evento window.load(); .
```

- Promesa
```javascript
Crea una promise simple que se resuelva a los dos segundos de lanzarla mostrando el resultado por consola (debidamente formateado). La promesa generará, trascurrido un segundo, un numero aleatorio entre 0 y 100 y se resolverá (resolve) si ese valor es par y se rechazará (reject) si el valor es impar. Muestra el resultado de consumir la promesa por consola.
```

- Feos
```html
Utiliza la API fetch para mostrar el contenido del fichero feos.json ordenado por nombre alfabéticamente de forma ascendente. El listado debe estar, como no podría ser de otra manera, debidamente formateado con las etiquetas HTML que estimes oportunas y dentro de un <div> con el identificador feos. Se debe tener en cuenta una correcta gestión de errores (.catch) e informar al usuario de que el proceso ha terminado (.finally).
```

- Gentuza
```javascript
Utiliza la API de Star Wars (https://swapi.info/api/people) para mostrar un listado de los personajes de todas las películas. La información que debe aparecer en el listado será el nombre, su peso (en kilogramos), su género, su color de pelo y su año de nacimiento debidamente formateada, eso sí y en un contenedor con el identificador gentuza.
```


---

## 📄 Práctica 6.02 Enciclopedia galáctica básica en Vanilla

*Ubicación original:* `Práctica 6.02 Enciclopedia galáctica básica en Vanilla.odt`


![](/images/ut06_practica-6_10000000000004CD000002FAE6064CBC.png)


PRÁCTICA 6.02 Enciclopedia galáctica básica en JavaScript


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
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal),
todo el código que sea susceptible de retrasar su ejecución debe escribirse de forma asíncrona utilizando asincronismo con async/await,
```

  - todas las funciones asíncronas deben tener control de errores.
- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
```javascript
la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
```

- Enciclopedia de Star Wars

Crea una aplicación que muestre información sobre Star Wars. Utiliza el API REST que ofrece The Star Wars API en https://swapi.info/api para hacer una aplicación con las siguientes características:

- al cargar la aplicación se mostrará un listado (&lt;ul&gt;) con las películas que conforman la saga (id y título),

![](/images/ut06_practica-6_10000000000004CD000002FAE6064CBC.png)

- al pulsar sobre el título de una de ellas, se mostrará su sinopsis y una ficha completa con su director, productor y fecha de lanzamiento (en formato europeo),
- aplica algo de tu estilo personal a través de CSS,
- la aplicación puede tener este aspecto (es una recomendación):

![](/images/ut06_practica-6_10000000000004CD000002FAE6064CBC.png)

- Figura 1: Aspecto general de la enciclopedia de Star Wars.

---

## 📄 Práctica 6.03 Asincronismo en React

*Ubicación original:* `Práctica 6.03 Asincronismo en React.odt`


PRÁCTICA 6.03 Asincronismo en React


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula.
  - la componentización debe ser lógica y estar adaptada a las necesidades de la aplicación,
  - todos los formularios en React deben ser del tipo controlados (a través del estado). En caso contrario debe ser debidamente justificado,
```javascript
toda comunicación con el exterior del DOM debe ser realizada con funciones asíncronas que dispongan de control de errores (try{} catch{}),
se debe implementar el uso de async/await para la comunicación asíncrona.
```

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
- Enciclopedia de Star Wars versión en React.

Parte 1

```javascript
Migra la enciclopedia básica realizada en JavaScript Vanilla a React creando los componentes que estimes oportunos (esta será la última migración, prometido).
Para todo esto deberás dividir el código en funciones/componentes que accedan a la API (traigan datos del exterior) y que pinten esos datos en el DOM. En ningún caso una función/componente realizará ambas tareas.
Para toda la comunicación con la API REST utiliza async/await.
```


Parte 2


Añade, en los datos de cada película, un listado de diez (sólo diez) de los protagonistas de cada una de ellas (se debe mostrar su nombre completo). Al pinchar sobre el nombre de cada intérprete se mostrará información detallada como su género, su altura, su peso, su color de pelo, el color de sus ojos y una imagen (opcional).

```javascript
Utiliza la llamada en conjunto de promise en la solicitud de los intérpretes.
```


Muestra la información donde y como creas oportuno, pero recuerda, debidamente formateada.


---

## 📄 Práctica 6.04 Enciclopedia completa de Star Wars en React

*Ubicación original:* `Práctica 6.04 Enciclopedia completa de Star Wars en React.odt`


![](/images/ut06_practica-6_10000000000004CA000002F1539892A8.png)

```javascript
PRÁCTICA 6.04 Star Wars en React
```


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula.
  - la componentización debe ser lógica y estar adaptada a las necesidades de la aplicación,
  - todos los formularios en React deben ser del tipo controlados (a través del estado). En caso contrario debe ser debidamente justificado,
```javascript
toda comunicación con el exterior del DOM debe ser realizada con funciones asíncronas que dispongan de control de errores (try{} catch{}),
se debe implementar el uso de async/await para la comunicación asíncrona.
```

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

![](/images/ut06_practica-6_10000000000004CA000002F1539892A8.png)

- Añadiendo contextos en React

Parte 1


Modifica la enciclopedia de Star Wars para que utilice contextos destinados a contener la información y funcionalidades que se repitan. Se pueden usar los que creas conveniente (mínimo uno).


Parte 2


Añade, en los datos de cada intérprete, un listado de las naves y vehículos (si los hubiera) con los que tenga una relación cada personaje. Al pulsar sobre el botón Pilota (que deberás crear y mostrar en la ficha del personaje) se mostrará una ficha con los datos básicos de cada nave y vehículo. Si no hay ninguno se debe informar al usuario.

```javascript
Utiliza la llamada en conjunto de promise en aquellas solicitudes que deban resolverse como una.
```


![](/images/ut06_practica-6_10000000000004CA000002F1539892A8.png)


> 📸 *Figura 1: Propuesta (no obligatoria) de organización de la información.Recuerda que se sugirió una estructura parecida a esta:*


---

## 📄 Práctica 6.05 CRUD con fetch

*Ubicación original:* `Práctica 6.05 CRUD con fetch.odt`

```javascript
PRÁCTICA 6.05 CRUD con fetch
```


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula.
  - la componentización debe ser lógica y estar adaptada a las necesidades de la aplicación,
  - todos los formularios en React deben ser del tipo controlados (a través del estado). En caso contrario debe ser debidamente justificado,
```javascript
toda comunicación con el exterior del DOM debe ser realizada con funciones asíncronas que dispongan de control de errores (try{} catch{}) para gestionar posibles fallos de red o respuestas HTTP no exitosas (comprobando la propiedad response.ok),
se debe implementar el uso de async/await para la comunicación asíncrona y
los componentes deben consumir los datos a través de un contexto de React para evitar la propagación manual de props.
```

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
- Explotando una API
```javascript
Retoma el ejercicio “Mi colección de discos” que realizaste en React y añádele el código necesario para implementar las siguientes funcionalidades, entre ellas, sustituir el uso de localStorage por una API externa.
```

- Creación de la API en local siguiendo estos pasos:
```bash
instala json-server en tu proyecto con el comando npm install -g json-server,
crea un archivo JSON con la estructura de los discos (asegúrate de que la clave discos sea la propiedad raíz),
ejecuta el servidor con el comando json-server –watch discos.json –port 3000 (o mejor, crea un comando en la sección scripts en el fichero package.json de tu proyecto),
la API estará disponible a través de http://localhost:3000/discos.
Diseño de un contexto de datos (useContext). Centraliza la lógica de los discos en un contexto global para que cualquier componente pueda acceder a la información sin intermediarios. Este proveedor debe albergar el estado discos y todas las funciones de comunicación con la API (leer, guardar, eliminar y actualizar).
Carga inicial (GET): al cargar la aplicación, utiliza una función asíncrona con fetch para obtener el listado de discos.
Se debe controlar el estado de carga mientras la promesa está en estado pending (a través de un estado cargando y un componente).
Guardado (POST): tras validar el formulario (según los criterios del ejercicio anterior), los datos se enviarán a la API mediante una petición POST. El cuerpo de la petición debe ser un objeto JSON convertido con JSON.stringify().
Actualización de discos (PUT/PATCH): se debe añadir la funcionalidad para editar los datos de un disco existente en la colección. Al pulsar el botón Editar (que deberás crear) en un disco, sus datos deben cargar de nuevo en un formulario controlado (lo más lógico es utilizar rutas dinámicas como /discos/:id). Al pulsar sobre el botón Actualizar Datos del formulario se realizará una petición PUT o PATCH para actualizar los datos.
Refactorización con hooks personalizados (custom hooks). Para mejorar la legibilidad y reutilización del código, encapsula la lógica de las peticiones a la API en un hook personalizado (useAPI.js). Este hook recibirá los parámetros necesarios y devolverá los datos obtenidos, el estado que indica la situación de la solicitud y las funciones necesarias para realizar las operaciones CRUD. Asegúrate de que el hook gestione su propio estado interno de forma aislada, devolviendo únicamente lo necesario.
Crea un nuevo hook personalizado (useDiscos.js) para consumir el contexto por parte de los componentes hijos. Este hook se utilizará para acceder a los datos y funciones compartidas por el contexto.
```


---

## 📄 Práctica 6.06 Supabase - Lista de la compra

*Ubicación original:* `Práctica 6.06 Supabase - Lista de la compra.odt`


![](/images/ut06_practica-6_1000000000000549000003F344C3A210.png)


PRÁCTICA 6.06 Supabase – Lista de la compra


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula.
  - la componentización debe ser lógica y estar adaptada a las necesidades de la aplicación,
  - todos los formularios en React deben ser del tipo controlados (a través del estado). En caso contrario debe ser debidamente justificado,
```javascript
toda comunicación con el exterior del DOM debe ser realizada con funciones asíncronas que dispongan de control de errores (try{} catch{}) para gestionar posibles fallos de red o respuestas HTTP no exitosas (comprobando la propiedad response.ok),
se debe implementar el uso de async/await para la comunicación asíncrona y
los componentes deben consumir los datos a través de un contexto de React para evitar la propagación manual de props.
```

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
- Lista de la compra con Supabase y React

Crea un proyecto para una pequeña aplicación web con React para gestionar la lista de la compra. La aplicación dispondrá del CRUD completo, pero cada una de estas funcionalidades se irán implementando práctica tras práctica. Para empezar, hay que plantear la aplicación antes de escribir una sola línea de código. Y para ello se necesitarán hacer estos pasos:

- crea una cuenta y una base de datos en https://supabase.com/ (utiliza el correo del centro si no quieres facilitar datos personales),
```bash
diseña una tabla para los productos que deberá tener, como mínimo, los siguientes atributos: nombre del producto, peso, precio, imagen (url de una imagen) y descripción,
se podrán crear listas de la compra incluyendo en ellas los artículos disponibles, por lo que se deberá crear la estructura en tablas necesaria. Los atributos que como mínimo se deben guardar serán: nombre de la lista (para poder identificarla más rápidamente), identificador del propietario/a (que indicará el creador/a de la lista), fecha de creación (que se guardará de forma automática al crear la lista) y el listado de artículos, (una tradicional relación muchos a muchos entre productos y listas),
se deberá instalar la biblioteca de Supabase para React a través del comando:
npm install @supabase/supabase-js
```


![](/images/ut06_practica-6_1000000000000549000003F344C3A210.png)

```javascript
para crear la interfaz, se debe prever el uso de menús y submenús con react-router-dom, la división de la aplicación en páginas, el diseño de hooks personalizados y el uso de contextos,
```


![](/images/ut06_practica-6_1000000000000549000003F344C3A210.png)

- Figura 1: Ejemplo de interfaz completa de la aplicacióndiseña una interfaz intuitiva y añade CSS para darle un poco de tu toque personal. Se pueden usar bibliotecas de estilo. Se irán añadiendo funcionalidades a la aplicación como la edición de productos, la autentificación de usuarios y la gestión de listas de la compra, por lo que se debe prever todas estas características a la hora de planificar la interfaz de la aplicación. A modo de ejemplo, la interfaz con todas las funcionalidades que se irán añadiendo podría quedar tal que así:

---

## 📄 Práctica 6.07 Supabase - Autentificación de usuarios

*Ubicación original:* `Práctica 6.07 Supabase - Autentificación de usuarios.odt`


PRÁCTICA 6.07 Supabase - Autentificación de usuarios


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula.
  - la componentización debe ser lógica y estar adaptada a las necesidades de la aplicación,
  - todos los formularios en React deben ser del tipo controlados (a través del estado). En caso contrario debe ser debidamente justificado,
```javascript
toda comunicación con el exterior del DOM debe ser realizada con funciones asíncronas que dispongan de control de errores (try{} catch{}) para gestionar posibles fallos de red o respuestas HTTP no exitosas (comprobando la propiedad response.ok),
se debe implementar el uso de async/await para la comunicación asíncrona y
los componentes deben consumir los datos a través de un contexto de React para evitar la propagación manual de props.
```

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
- Autentificación de usuarios
```javascript
Para empezar la aplicación es vital la implementación de un control de usuarios para dotar de seguridad a los datos almacenados. Para ello se utilizará el servicio Auth de Supabase implementando las siguientes características:
crea el fichero de conexión con Supabase en la carpeta supabase del proyecto. Deberá utilizar la función createClient y se exportará el objeto de conexión,
```

- además, configura las variables de entorno del proyecto para que este fichero cargue la información necesaria desde allí,
```javascript
NOTA IMPORTANTE: para la entrega del proyecto, los datos de la conexión deben estar en el fichero de configuración y no cargarse desde las variables de entorno del proyecto. El único propósito de esto es para facilitar las correcciones de los proyectos, en un entorno real siempre se deben configurar a través del fichero .env.local para evitar publicar esos datos.
```

- sería interesante que toda la información relacionada con la sesión del usuario/a estuviese recogida en un contexto, así que crea un contexto para ello,
```javascript
también se deberá crear un hook personalizado para el consumo de ese contexto por parte de los componentes que así lo requieran,
```

- será necesario la creación de cuentas de usuario/a, así que crea un pequeño formulario para crearlas,
- se deberá poder iniciar sesión en la aplicación a través del método usuario/contraseña,
- se debe implementar un sistema para cerrar sesión en la aplicación,
```javascript
si el usuario/a no ha iniciado sesión, sólo tendrá acceso a la parte pública de la aplicación (componente <Inicio> o similar) y para ello será necesario la configuración de la redirección de URL en Authentication → URL Configuration → Site URL,
```

- si se ha iniciado sesión se dispondrá de acceso completo a la aplicación y aparecerá el nombre completo (Display name) en la cabecera y
- por último, personaliza las plantillas de correo que recibirán los usuarios/as de la aplicación al realizar cualquier acción con su cuenta. Esta opción está disponible a través del panel de control de tu proyecto en Authentication → Email → Templates .

Ya sabes, diseña una interfaz intuitiva y añade algo de CSS para darle un poco de tu toque personal.


---

## 📄 Práctica 6.08 Supabase - Listado de productos

*Ubicación original:* `Práctica 6.08 Supabase - Listado de productos.odt`


PRÁCTICA 6.08 Supabase - Listado los productos


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula.
  - la componentización debe ser lógica y estar adaptada a las necesidades de la aplicación,
  - todos los formularios en React deben ser del tipo controlados (a través del estado). En caso contrario debe ser debidamente justificado,
```javascript
toda comunicación con el exterior del DOM debe ser realizada con funciones asíncronas que dispongan de control de errores (try{} catch{}) para gestionar posibles fallos de red o respuestas HTTP no exitosas (comprobando la propiedad response.ok),
se debe implementar el uso de async/await para la comunicación asíncrona y
los componentes deben consumir los datos a través de un contexto de React para evitar la propagación manual de props.
```

- En cuanto a la entrega de los archivos que componen los ejercicios de React:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
```javascript
los componentes creados deben estar separados en carpetas (los creados en el Ejercicio1 dentro de una carpeta denominada Ejercicio1),
```

  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con el fichero package.json en un fichero ZIP , y
sube a Aules el fichero comprimido.
```

- Listado de productos con Supabase y React

Una vez creada la estructura de la aplicación, se va a implementar el listado de productos. La aplicación dispondrá del CRUD completo, pero en esta práctica tan sólo se creará esta característica. Sigue estos pasos para empezar a crear la aplicación:

```javascript
¿crear un contexto para la unidad de información productos?, parece la mejor opción. Crea, además, un hook personalizado para consumir este contexto,
```

- añade un mínimo de 5 productos a la tabla de productos a través de la interfaz web de Supabase,
- implementa las siguientes acciones en tu aplicación:
  - listar todos los productos (comportamiento por defecto),
  - filtrar por nombre, precio o peso (filtros simples, uno a la vez y, para precio y peso, se debe mostrar los artículos con un valor igual o menor al indicado por el usuario),
  - ordenar los resultados por nombre, precio o peso.
- cuando se listen los productos, añade a final del listado un cuadro resumen que contendrá el número de productos del listado y el precio medio de todos ellos y
- las opciones de filtrado y ordenación sólo estarán disponibles para usuarios registrados.

---

## 📄 Práctica 6.09 Supabase - Edición de productos

*Ubicación original:* `Práctica 6.09 Supabase - Edición de productos.odt`


PRÁCTICA 6.09 Supabase - Edición de productos


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula.
  - la componentización debe ser lógica y estar adaptada a las necesidades de la aplicación,
  - todos los formularios en React deben ser del tipo controlados (a través del estado). En caso contrario debe ser debidamente justificado,
```javascript
toda comunicación con el exterior del DOM debe ser realizada con funciones asíncronas que dispongan de control de errores (try{} catch{}) para gestionar posibles fallos de red o respuestas HTTP no exitosas (comprobando la propiedad response.ok),
se debe implementar el uso de async/await para la comunicación asíncrona y
los componentes deben consumir los datos a través de un contexto de React para evitar la propagación manual de props.
```

- En cuanto a la entrega de los archivos que componen los ejercicios de React:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
```javascript
los componentes creados deben estar separados en carpetas (los creados en el Ejercicio1 dentro de una carpeta denominada Ejercicio1),
```

  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con el fichero package.json en un fichero ZIP , y
sube a Aules el fichero comprimido.
```

- Edición de productos

Llega el turno de la edición de los productos en la aplicación. Para ello, sigue estas indicaciones:

- se debe habilitar un espacio (una página) para la creación de productos. En ella habilita una funcionalidad para poder introducir nuevos productos en la base de datos,
- añade un sistema para eliminar productos de la base de datos, por ejemplo a través de un icono en cada producto que, al pulsarlo, pida confirmación de su eliminación. Utiliza otra forma si lo crees oportuno,
- crea otro espacio para poder editar los productos por si hay que realizar un cambio de precio, su nombre o cualquier otro dato. Al pulsar sobre uno de ellos aparecerá un formulario con los datos para poder editar y un botón para actualizarlos en la base de datos (puedes integrarlo con el anterior si así lo estimas oportuno) y
- todos estos apartados sólo deben estar visibles si se ha iniciado sesión en el servidor.

Procura que esa interfaz sea intuitiva (de nuevo) y añade algo de CSS para darle un poco de tu toque personal.


---

## 📄 Práctica 6.10 Supabase - Creación de listados

*Ubicación original:* `Práctica 6.10 Supabase - Creación de listados.odt`


PRÁCTICA 6.10 Supabase - Creación de listados


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula.
  - la componentización debe ser lógica y estar adaptada a las necesidades de la aplicación,
  - todos los formularios en React deben ser del tipo controlados (a través del estado). En caso contrario debe ser debidamente justificado,
```javascript
toda comunicación con el exterior del DOM debe ser realizada con funciones asíncronas que dispongan de control de errores (try{} catch{}) para gestionar posibles fallos de red o respuestas HTTP no exitosas (comprobando la propiedad response.ok),
se debe implementar el uso de async/await para la comunicación asíncrona y
los componentes deben consumir los datos a través de un contexto de React para evitar la propagación manual de props.
```

- En cuanto a la entrega de los archivos que componen los ejercicios de React:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
```javascript
los componentes creados deben estar separados en carpetas (los creados en el Ejercicio1 dentro de una carpeta denominada Ejercicio1),
```

  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con el fichero package.json en un fichero ZIP , y
sube a Aules el fichero comprimido.
```

- Creación de listas de compra

Llega el turno de crear las listas de la compra (como bien indica el título de la práctica). Para ello, sigue estas indicaciones:

- diseña una interfaz que permita realizar las siguientes acciones:
  - crear listas de la compra, se guardará el nombre, la fecha en la que se creó (de forma automática) y el identificador de usuario que la crea,
  - mostrar las listas de la compra debidamente formateadas, una vez listadas, al pinchar sobre una de ella (o sobre algún icono) se mostrará información de detalle (los productos que contiene). Además, añade estas características a la aplicación:
    - que muestre el peso total de la compra e informe al/la usuario/a si es necesario coger el coche para hacer la compra (el umbral de peso lo eliges tú, pero sé razonable),
    - que indique el total en euros de la lista para hacer una previsión de fondos y
    - la fecha en la que se creó la lista (debidamente formateada).
  - borrar listas de la compra, una vez que ya no se utilicen,
  - añadir productos y su cantidad a la lista de la compra, por ejemplo al pulsar sobre cada producto se añadirá una unidad o especificando la cantidad a añadir en el formulario (el primer método es el más “UI friendly”),
  - eliminar productos de la lista, por ejemplo al pulsar sobre un botón junto al producto en el listado.
```javascript
cuando un/una usuario/a inicie sesión, sólo se tendrá acceso a la gestión de sus listas de la compra pudiendo crear, editar y eliminarlas a su antojo. También podrán realizar estas acciones sobre las listas en la base de datos, así que tendrás que usar Row Level Security (recuerda que con auth.uid() se obtiene el identificador del usuario que está haciendo la consulta).
```


Procura que esa interfaz sea intuitiva (de nuevo) y añade algo de CSS para darle un poco de tu toque personal.


---

## 📄 Práctica 6.11 Supabase - Roles de usuario

*Ubicación original:* `Práctica 6.11 Supabase - Roles de usuario.odt`


PRÁCTICA 6.11 Supabase - Roles de usuario


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula,
  - la componentización debe ser lógica y estar adaptada a las necesidades de la aplicación,
  - todos los formularios en React deben ser del tipo controlados (a través del estado). En caso contrario debe ser debidamente justificado,
```javascript
toda comunicación con el exterior del DOM debe ser realizada con funciones asíncronas que dispongan de control de errores (try{} catch{}) para gestionar posibles fallos de red o respuestas HTTP no exitosas (comprobando la propiedad response.ok),
se debe implementar el uso de async/await para la comunicación asíncrona y
los componentes deben consumir los datos a través de un contexto de React para evitar la propagación manual de props.
```

- En cuanto a la entrega de los archivos que componen los ejercicios de React:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
```javascript
los componentes creados deben estar separados en carpetas (los creados en el Ejercicio1 dentro de una carpeta denominada Ejercicio1),
```

  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con el fichero package.json en un fichero ZIP y
sube a Aules el fichero comprimido.
```

- Roles de usuarios
```javascript
Para finalizar la aplicación será necesario la implementación de un control de roles de usuario/a y algunas funciones extra para dotar de seguridad a los datos. Es posible que debas modificar alguna de las RLS que ya has configurado en apartados anteriores y, además, crear algunas nuevas:
```


NOTA IMPORTANTE

```javascript
Para poder revisar el funcionamiento de la práctica es necesario la creación de usuarios con diferentes roles. Añade estos usuarios en la base de datos (tanto en auth como en la tabla Roles):
```


display name→ adminFeodisplay name→ usuarioFeo


correo → jc.gomez@edu.gva.escorreo → feo@feo.es


contraseña → Feofeofeo2@ contraseña → Feofeofeo2@


rol → administradorrol → usuario

```javascript
para controlar de forma eficiente los roles de usuario/a de la aplicación, crea una tabla Roles para albergarlos con, como mínimo, las columnas id_rol (que será clave ajena de auth.users.id y con eliminación en cascada), correo electrónico y el rol (con el valor “usuario” por defecto),
crea una función security definer que haga un INSERT en roles con los datos introducidos en auth.users,
crea un disparador (trigger) que actúe cada vez que se crea un usuario en la tabla auth.users y que ejecute la función del paso anterior,
```

- para la gestión de los roles crea una pequeña sección de administración de roles desde donde se podrá modificar el rol de todos los usuarios,
```javascript
asigna las siguientes políticas RLS en tu aplicación:
```

  - los usuarios/as con el rol de administrador podrán ver todas las listas del resto de usuarios, pero no editarlas ni borrarlas,
  - tan sólo los usuarios/as que tengan un rol de administrador podrán acceder a las partes de la aplicación que permitan la edición de los productos y
  - la administración de roles sólo estará accesible a los usuarios/as con el rol de administrador,
```javascript
finalmente, crea una sección en la aplicación para que el/la usuario/a pueda acceder a su perfil y modificar sus datos (como mínimo, avatar, nombre completo y alguna descripción sobre él/ella). Deberás crear nuevos elementos en Supabase como una tabla Perfiles, funciones, disparadores y políticas RLS para poder gestionar este apartado. Por descontado, un/a usuario/a sólo podrá hacer CRUD sobre sus propios datos (excepto borrar el perfil).
Copia y pega las sentencias SQL que has utilizado en el servidor en un comentario al inicio del componente <App>.
```


---

## 📄 Práctica 6.XX Asincronismo libre en React

*Ubicación original:* `Práctica 6.XX Asincronismo libre en React.odt`

```javascript
PRÁCTICA 6.05 Asincronismo libre en React.
```


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula.
  - la componentización debe ser lógica y estar adaptada a las necesidades de la aplicación,
  - todos los formularios en React deben ser del tipo controlados (a través del estado). En caso contrario debe ser debidamente justificado,
```javascript
toda comunicación con el exterior del DOM debe ser realizada con funciones asíncronas que dispongan de control de errores (try{} catch{}),
se debe implementar el uso de async/await para la comunicación asíncrona.
```

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

NOTA: Para la realización de los siguientes ejercicios se utilizarán API REST reales ya que este comportamiento es el que se utiliza en aplicaciones web. Si el ejercicio no especifica ninguna, puedes encontrar una API pública aquí: https://github.com/public-apis/public-apis/ (tratar de no elegir la misma).

- Explotando una API

Realiza una pequeña aplicación web en React que consuma los datos de una API de tu elección.


La aplicación deberá, en función de la API seleccionada, mostrar los datos y permitir hacer selecciones o ampliaciones de información (del mismo modo que en la práctica anterior). El funcionamiento de tu aplicación dependerá de la API que elijas, así que deberás estudiarla con detalle.


Algunas ideas:

- Juego tipo trivial que cada vez que carga nos ofrece preguntas distintas sobre un tema concreto. El usuario rellena el formulario y obtiene su puntuación. Se utiliza la API OpenTriviaDB que encontrarás en https://opentdb.com/api_config.php.
- Enciclopedia Pokemon (no me hagáis esto), en la que se escribe el nombre de un pokemon y la web devuelve resultados con sus características y alguna imagen del mismo. Se usa la API PokéAPI que encontrarás en https://pokeapi.co.
- Lyrics Search que se utiliza para obtener la letra de una canción. Se busca por artista o por canción y cuando elije una canción se muestra la letra. Se utiliza la API Lyrics.ovh que encontrarás en https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search .

Por supuesto puedes improvisar alguna otra aplicación con una de las API que encontrarás en el listado de GitHub.


---

## 📄 cambios

*Ubicación original:* `cambios.txt`

```text


Organización de las sesiones (cambios 2024):

	- 1ª -> AJAX, promises y fetch (básico sin encadenamiento en promises ni encabezado en fetch)
	- 2ª -> Encabezado del fetch (sólo mencionar), encadenamiento de promesas, promesas en funciones y promise en conjunto ¿?.
	- 3ª -> Async/Await
	- 3ºB-> Promise en conjunto ¿?
	- 4ª -> custom hooks (retrasar la práctica de asincronismo libre para el final y poner en su lugar la de hooks (explicar antes de contextos)).
	- 5ª -> useContext
	
	Encabezado de fetch en profundidad se deja para la UT06 para hacer peticiones GET, POST, PUT y DELETE.


Teoría:

	- Revisar los contenidos de React 19 en cuanto a contextos.

	- custom hooks 	-> ampliar ejemplos:
					-> exportando sólo el estado (pintar los datos)
					-> exportar datos y set (pintar y manejar datos)
					-> hooks con estado (loading)
					-> hooks con estado de errores
						
	- añadir esto:
		/**
       * NOTA IMPORTANTE
       * Si en un map se coloca una función asíncrona, invariablemente se devolverá
       * una promesa, por lo que hay que poner ese map dentro de un Promise.allSettled
       * para que devuelva las promesas consumidas.
       */
      const _nuevos = await Promise.allSettled(
        datos.map(async (dato) => {
          // Se comprueba si existe en la BBDD.
          const { data, error } = await supabase
            .from("disponen")
            .select("*")
            .eq("id_practica", dato.id_practica)
            .eq("id_evaluacion", evaluacionSeleccionada.id_evaluacion);
          // Si la respuesta contiene algo es que existe el registro y no se inserta.
          if (!data || data.length === 0) {
            return {
              id_practica: dato.id_practica,
              id_evaluacion: evaluacionSeleccionada.id_evaluacion,
            };
          }
        })
      );
						
Actividades:

	-> 5.01 dividir en dos partes:
		-> 	primera, autoevaluable para hacer una llamada a la API con hook personalizado 
			mostrar sólo el listado de las películas. Ya la tendrán resuelta con el código
			de clase, pero es buena idea que la intenten por ellos mismos.
		->	segunda, incluir los detalles de las películas ampliando el hook y componentes.
			¿autoevaluable?.
			
	-> ¿Incluir en una actividad un ejercicio con rutas y useParams? (por ejemplo en películas
		y que muestren la película pasada como parámetro)
```

---

