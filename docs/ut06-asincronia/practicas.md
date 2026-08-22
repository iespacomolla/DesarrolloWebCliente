# Prácticas UT06: Programación asíncrona y bibliotecas

## Práctica 6.01 Asincronismo básico

> **NOTA**: todas estas acciones se realizarán al cargar la página, es decir, en el evento `window.load();` .

### Ejercicio 1 - Promesa

Crea una *promise* simple que se resuelva a los dos segundos de lanzarla mostrando el resultado por consola (debidamente formateado). La promesa generará, trascurrido un segundo, un número aleatorio entre 0 y 100 y se resolverá (`resolve`) si ese valor es **par** y se rechazará (`reject`) si el valor es **impar**.

Muestra el resultado de consumir la promesa por consola.

### Ejercicio 2 - Feos

Utiliza la **API** `fetch` para mostrar el contenido del fichero `feos.json` ordenado por nombre **alfabéticamente** de forma **ascendente**. El listado debe estar, como no podría ser de otra manera, debidamente formateado con las etiquetas **HTML** que estimes oportunas y dentro de un `<div>` con el identificador `id="feos"`. Se debe tener en cuenta una correcta gestión de errores (`.catch`) e informar al usuario de que el proceso ha terminado (`.finally`).

### Ejercicio 3 - Gentuza

Utiliza la **API** de ***Star Wars*** (*<https://swapi.info/api/people>*) para mostrar un listado de los personajes de todas las películas. La información que debe aparecer en el listado será el **nombre**, su **peso** (en kilogramos), su **género**, su **color de pelo** y su **año de nacimiento** debidamente formateada, eso sí, y en un contenedor con el identificador `id="gentuza"`.

## Práctica 6.02 Enciclopedia galáctica básica en Vanilla

### Ejercicio 1 - Enciclopedia de *Star Wars*

Crea una aplicación que muestre información sobre *Star Wars*. Utiliza el *API REST* que ofrece The Star Wars API en <https://swapi.info/api> para hacer una aplicación con las siguientes características:

- al cargar la aplicación se mostrará un listado (utiliza `<ul>`) con las películas que conforman la saga (**id** y **título**),
- al pulsar sobre el título de una de ellas, se mostrará su sinopsis y una ficha completa con su director, productor y fecha de lanzamiento (en formato europeo),
- aplica algo de tu estilo personal a través de **CSS**,

La aplicación puede tener este aspecto (es una recomendación):

![image](/images/ut06_practica-6_10000000000004CD000002FAE6064CBC.png)

## Práctica 6.03 Asincronismo en *React*

### Ejercicio 1 - Enciclopedia de *Star Wars* pero bien

Migra la enciclopedia básica realizada en *JavaScript Vanilla* a *React* creando los componentes que estimes oportunos (esta será la última migración, prometido).
Para todo esto deberás dividir el código en funciones/componentes que accedan a la **API** (traigan datos del exterior) y que pinten esos datos en el **DOM**. En ningún caso una función/componente realizará ambas tareas.

Para toda la comunicación con la **API REST** utiliza `async/await`.

### Ejercicio 2 - Ampliando la enciclopedia

Añade, en los datos de cada película, un listado de **diez** (sólo diez) de los protagonistas de cada una de ellas (se debe mostrar su nombre completo). Al pinchar sobre el nombre de cada intérprete se mostrará información detallada como su **género**, su **altura**, su **peso**, su **color de pelo**, el **color de sus ojos** y una **imagen** (opcional). Utiliza la **llamada en conjunto de *promise*** en la solicitud de los intérpretes.

Muestra la información donde y como creas oportuno, pero recuerda, debidamente formateada.

## Práctica 6.04 Enciclopedia completa de *Star Wars* en *React*

### Ejercicio 1 - Añadiendo contextos

Modifica la enciclopedia de *Star Wars* para que utilice contextos destinados a contener la información y funcionalidades que se repitan. Se pueden usar los que creas conveniente (mínimo uno).

### Ejercicio 2 - Pilotando

Añade, en los datos de cada intérprete, un listado de las **naves** y **vehículos** (si los hubiera) con los que tenga una relación cada personaje. Al pulsar sobre el botón `Pilota` (que deberás crear y mostrar en la ficha del personaje) se mostrará una ficha con los datos básicos de cada nave y vehículo. Si no hay ninguno se debe informar al usuario.

Utiliza la llamada en **conjunto de *promise*** en aquellas solicitudes que deban resolverse como una.

Recuerda que se sugirió una estructura parecida a esta:

![image](/images/ut06_practica-6_10000000000004CA000002F1539892A8.png)

## Práctica 6.05 Asincronismo libre en React

> **NOTA**: para la realización de los siguientes ejercicios se utilizarán **API REST** reales ya que este comportamiento es el que se utiliza en aplicaciones web. Si el ejercicio no especifica ninguna, puedes encontrar una **API** pública aquí: *<https://github.com/public-apis/public-apis/>* (tratar de no elegir la misma).

### Ejercicio 1 - Explotando una API

Realiza una pequeña aplicación web en *React* que consuma los datos de una **API** de tu elección. Puedes (y debes) reutilizar todos los componentes que puedas de proyectos anteriores, que para eso se han diseñado en forma de componentes.

La aplicación deberá, en función de la **API** seleccionada, mostrar los datos y permitir hacer selecciones o ampliaciones de información (del mismo modo que en la práctica anterior). El funcionamiento de tu aplicación dependerá de la **API** que elijas, así que deberás **estudiarla con detalle**.

Algunas ideas:

- Juego tipo **trivial** que cada vez que carga nos ofrece preguntas distintas sobre un tema concreto. El usuario rellena el formulario y obtiene su puntuación. Se utiliza la *API OpenTriviaDB* que encontrarás en *<https://opentdb.com/api_config.php>*.
- **Enciclopedia Pokemon** (no me hagáis esto), en la que se escribe el nombre de un pokemon y la web devuelve resultados con sus características y alguna imagen del mismo. Se usa la *API PokéAPI* que encontrarás en *<https://pokeapi.co>*.
- **Lyrics Search** que se utiliza para obtener la letra de una canción. Se busca por artista o por canción y cuando elije una canción se muestra la letra. Se utiliza la *API Lyrics.ovh* que encontrarás en *<https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search>*.

Por supuesto puedes improvisar alguna otra aplicación con una de las **API** que encontrarás en el listado de GitHub.

## Práctica 6.06 **CRUD** con *fetch*

### Ejercicio 1 - Explotando una **API**

Retoma el ejercicio “**Mi colección de discos**” que realizaste JavaScript y mígralo a *React* añadiendo el código necesario para implementar las siguientes funcionalidades, entre ellas, sustituir el uso de `localStorage` por una `API` externa.

Para la creación de la API, sigue estos pasos:

- instala `json-server` en tu proyecto con el comando `npm install -g json-server`,
- crea un archivo **JSON** con la estructura de los discos (asegúrate de que la clave discos sea la propiedad raíz),
- ejecuta el servidor con el comando `json-server –watch discos.json –port 3000` (o mejor, crea un comando en la sección *scripts* en el fichero `package.json` de tu proyecto),
- la **API** estará disponible a través de `http://localhost:3000/discos`.

### Ejercicio 2 - Creando contextos

Centraliza la lógica de los discos en un **contexto global** para que cualquier componente pueda acceder a la información sin intermediarios. Este proveedor debe albergar el estado **discos** y todas las funciones de comunicación con la **API**(**leer**, **guardar**, **eliminar** y **actualizar**).

### Ejercicio 3 - GET

Al cargar la aplicación, utiliza una función asíncrona con *fetch* para obtener el listado de discos. Se debe controlar el estado de carga mientras la promesa está en estado *pending* (a través de un estado cargando y un componente).

### Ejercicio 4 - POST

Tras validar el formulario (según los criterios del ejercicio anterior), los datos se enviarán a la **API** mediante una petición **POST**. El cuerpo de la petición debe ser un objeto **JSON** convertido con `JSON.stringify()`.

### Ejercicio 5 - PUT/PATCH

Añade la funcionalidad para **editar los datos de un disco existente** en la colección. Al pulsar el botón `Editar` (que deberás crear) en un disco, sus datos deben cargar de nuevo en un **formulario controlado** (lo más lógico es utilizar rutas dinámicas como `/discos/:id`). Al pulsar sobre el botón `Actualizar` Datos del formulario se realizará una petición **PUT** o **PATCH** para actualizar los datos.

### Ejercicio 6 - DELETE

Crea algún sistema para **eliminar** discos de la base de datos utilizando para ello una petición **DELETE**.

### Ejercicio 7 - Refactorizando

Para mejorar la **legibilidad** y **reutilización** del código, encapsula la lógica de las peticiones a la **API** en un **hook personalizad**o (`useAPI.js`). Este *hook* recibirá los parámetros necesarios y devolverá los datos obtenidos, el estado que indica la situación de la solicitud y las funciones necesarias para realizar las operaciones **CRUD**. Asegúrate de que el *hook* gestione su propio estado interno de forma aislada, devolviendo únicamente lo necesario.

Crea un nuevo **hook personalizado** (`useDiscos.js`) para **consumir el contexto** por parte de los componentes hijos. Este *hook* se utilizará para acceder a los datos y funciones compartidas por el contexto.

## Práctica 6.07 Supabase - Lista de la compra

### Ejercicio 1 - Lista de la compra con **Supabase**

Crea un proyecto para una pequeña aplicación web con *React* para gestionar la lista de la compra. La aplicación dispondrá del **CRUD** completo, pero cada una de estas funcionalidades se irán implementando práctica tras práctica. Para empezar, hay que plantear la aplicación antes de escribir una sola línea de código. Y para ello se necesitarán hacer estos pasos:

- crea una cuenta y una base de datos en *<https://supabase.com/>* (utiliza el correo del centro si no quieres facilitar datos personales),
- diseña una tabla para los productos que deberá tener, como mínimo, los siguientes atributos: **nombre** del producto, **peso**, **precio**, **imagen** (url de una imagen) y **descripción**,
- se podrán crear listas de la compra incluyendo en ellas los artículos disponibles, por lo que se deberá crear la estructura en tablas necesaria. Los atributos que como mínimo se deben guardar serán: **nombre** de la lista (para poder identificarla más rápidamente), **identificador** del propietario/a (que indicará el creador/a de la lista), **fecha** de creación (que se guardará de forma automática al crear la lista) y el **listado** de artículos, (una tradicional relación **muchos a muchos** entre productos y listas),
- se deberá instalar la biblioteca de ***Supabase*** para *React* a través del comando:

```bash
npm install @supabase/supabase-js
```

- para crear la interfaz se debe prever el uso de **menús** y **submenús** con *react-router-dom*, la división de la aplicación en páginas, el diseño de *hooks* personalizados y el uso de **contextos**,

- diseña una **interfaz** intuitiva y añade **CSS** para darle un poco de tu toque personal. Se pueden usar bibliotecas de estilo. Se irán añadiendo funcionalidades a la aplicación como la **edición** de productos, la **autentificación** de usuarios y la gestión de **listas** de la compra, por lo que se debe prever todas estas características a la hora de planificar la interfaz de la aplicación. A modo de ejemplo, la interfaz con todas las funcionalidades que se irán añadiendo podría quedar tal que así:

![image](/images/ut06_practica-6_1000000000000549000003F344C3A210.png)

Esto es sólo una idea de composición de la aplicación, pero es interesante que diseñes la estructura de la plicación desde el inicio (aunque segurá que la someterás a cambios durante el proceso de creación).

## Práctica 6.08 Supabase - Autentificación de usuarios

### Ejercicio 1 - El servicio `auth` en *Supabase*

Para empezar la aplicación es vital la implementación de un **control de usuarios** para dotar de seguridad a los datos almacenados. Para ello se utilizará el servicio *Auth* de *Supabase* implementando las siguientes características:

- crea el fichero de conexión con *Supabase* en la carpeta `supabase` del proyecto. Deberá utilizar la función `createClient` y se exportará el objeto de `conexión`,
- además, configura las variables de entorno del proyecto para que este fichero cargue la información necesaria desde allí,

> **NOTA IMPORTANTE**: para la entrega del proyecto, los datos de la conexión deben estar en el fichero de configuración y no cargarse desde las variables de entorno del proyecto. El único propósito de esto es para facilitar las correcciones de los proyectos, en un entorno real siempre se deben configurar a través del fichero `.env.local` para evitar publicar esos datos.

- sería interesante que toda la información relacionada con la sesión del usuario/a estuviese recogida en un **contexto**, así que crea uno para ello,
- también se deberá crear un *hook* personalizado para el consumo de ese contexto por parte de los componentes que así lo requieran,
- será necesario la creación de **cuentas de usuario/a**, así que crea un pequeño **formulario controlado** para crearlas,
- se deberá poder iniciar sesión en la aplicación a través del método usuario/contraseña,
- se debe implementar un sistema para **cerrar sesión** en la aplicación,
- si el/la usuario/a no ha iniciado sesión, sólo tendrá acceso a la parte pública de la aplicación (componente `<Inicio>` o similar) y para ello será necesario la configuración de la redirección de **URL** en `Authentication` → `URL Configuration` → `Site URL`,
- si se ha iniciado sesión se dispondrá de acceso completo a la aplicación y aparecerá un identificador (como el **correo electrónico** o el **display name**) en la cabecera y
- por último, **personaliza las plantillas de correo** que recibirán los usuarios/as de la aplicación al realizar cualquier acción con su cuenta. Esta opción está disponible a través del panel de control de tu proyecto en `Authentication` → `Email` → `Templates`.

Ya sabes, diseña una interfaz intuitiva y añade algo de **CSS** para darle un poco de tu toque personal.

## Práctica 6.09 Supabase - Listado de productos

### Ejercicio 1 - Mostrando productos

Una vez creada la estructura de la aplicación, se va a implementar el **listado de productos**. La aplicación dispondrá del **CRUD** completo, pero en esta práctica tan sólo se creará esta característica. Sigue estos pasos para empezar a crear la aplicación:

- ¿**crear un contexto** para la unidad de información **productos**?, parece la mejor opción. Crea, además, un *hook* personalizado para consumir este contexto,
- añade un mínimo de **5 productos** a la tabla de productos a través de la **interfaz web** de *Supabase*,
- implementa las siguientes acciones en tu aplicación:
  - **listar** todos los productos (comportamiento por defecto),
  - **filtrar** por **nombre**, **precio** o **peso** (filtros simples, uno a la vez y, para precio y peso, se debe mostrar los artículos con un valor igual o menor al indicado por el usuario),
  - **ordenar** los resultados por nombre, precio o peso.
- cuando se listen los productos, añade a final del listado un **cuadro resumen** que contendrá el **número** de productos del listado y el **precio medio** de todos ellos y
- las opciones de filtrado y ordenación sólo estarán disponibles para **usuarios registrados**.

## Práctica 6.10 Supabase - Gestión de productos

### Ejercicio 1- ¿Productos nuevos?

Llega el turno de la **gestión de los productos** en la aplicación. Para ello, sigue estas indicaciones:

- se debe habilitar un espacio (una página) para la **creación** de productos. En ella habilita una funcionalidad para poder introducir nuevos productos en la base de datos,
- añade un sistema para **eliminar** productos de la base de datos, por ejemplo a través de un icono en cada producto que, al pulsarlo, pida **confirmación de su eliminación**. Utiliza otra forma si lo crees oportuno,
- crea otro espacio para poder **editar** los productos por si hay que realizar un cambio de precio, su nombre o cualquier otro dato. Al pulsar sobre uno de ellos aparecerá un formulario con los datos para poder editar y un botón para actualizarlos en la base de datos (puedes integrarlo con el anterior si así lo estimas oportuno pero es altamente recomendable utilizar **rutas dinámicas** con *react-router-dom*) y
- todos estos apartados sólo deben estar visibles **si se ha iniciado sesión** en el servidor.

Procura que esa interfaz sea intuitiva (de nuevo) y añade algo de **CSS** para darle un poco de tu toque personal.

## Práctica 6.11 Supabase - Creación de listados

### Ejercicio 1 - Creación de listas de compra

Llega el turno de **crear las listas de la compra** (como bien indica el título de la práctica). Para ello, sigue estas indicaciones:

- diseña una interfaz que permita realizar las siguientes acciones:
  - **crear listas** de la compra, se guardará el **nombre**, la **fecha** en la que se creó (de forma automática) y el identificador de **usuario** que la crea,
  - **mostrar las listas** de la compra debidamente formateadas, una vez listadas, al pinchar sobre una de ella (o sobre algún icono) se mostrará información de detalle (los productos que contiene). Además, añade estas características la listado:
    - que muestre el **peso total** de la compra e informe al/la usuario/a si es necesario **coger el coche** para hacer la compra (el umbral de peso lo eliges tú, pero sé razonable),
    - que indique el **total en euros** de la lista para hacer una previsión de fondos y
    - la **fecha** en la que se creó la lista (debidamente formateada).
  - **borrar listas** de la compra, una vez que ya no se utilicen (debes preveer el borrado en varias tablas),
  - **añadir productos** y su cantidad a la lista de la compra, por ejemplo al pulsar sobre cada producto se añadirá una unidad o especificando la cantidad a añadir en el formulario (el primer método es el más “*UI friendly*”),
  - **eliminar productos** de la lista, por ejemplo al pulsar sobre un botón junto al producto en el listado.
- cuando un/una usuario/a inicie sesión, **sólo se tendrá acceso a la gestión de sus listas de la compra** pudiendo crear, editar y eliminarlas a su antojo. También podrán realizar estas acciones sobre las listas en la base de datos, así que tendrás que usar ***Row Level Security*** (recuerda que con `auth.uid()` se obtiene el identificador del usuario que está haciendo la consulta).

Procura que esa interfaz sea intuitiva (de nuevo) y añade algo de **CSS** para darle un poco de tu toque personal.

## Práctica 6.12 Supabase - Roles de usuario

### Ejercicio 1 - Poniendo límites

Para finalizar la aplicación será necesario la implementación de un **control de roles de usuario/a** y algunas funciones extra para dotar de **seguridad** a los datos.

> NOTA IMPORTANTE: para poder revisar el funcionamiento de la práctica es necesario la creación de usuarios con diferentes roles. Añade estos usuarios en la base de datos (tanto en `auth` como en la tabla `Roles`):
>
> - un usuario con permisos de administración:
>   - display name → adminFeo
>   - correo → <jc.gomez@edu.gva.es>
>   - contraseña → Feofeofeo2@
>   - rol → administrador (o similar en tu aplicación)
>
> - otro usuario sinpermisos especiales:
>   - display name → usuarioFeo
>   - correo → <feo@feo.es>
>   - contraseña → Feofeofeo2@
>   - rol → usuario (o similar en tu aplicación)
>

Es posible que debas modificar alguna de las **RLS** que ya has configurado en apartados anteriores y, además, crear algunas nuevas. Sigue estos pasos para continuar con la práctica:

- para controlar de forma eficiente los roles de usuario/a de la aplicación, crea una tabla **Roles** para albergarlos con, como mínimo, las columnas *`id_rol`* (que será clave ajena de `auth.users.id` y con eliminación en cascada), **correo electrónico** y el **rol** (cuyo valor es el rol con menos privilegios por defecto),
- crea una función `security definer` que haga un **INSERT** en roles con los datos introducidos en `auth.users`,
- crea un **disparador** (*trigger*) que actúe cada vez que se crea un usuario en la tabla `auth.users` y que ejecute la función del paso anterior,
- para la gestión de los roles crea una **pequeña sección de administración** de roles desde donde se podrá modificar el rol de todos los usuarios,
- asigna las siguientes políticas **RLS** en tu aplicación:
  - los/las usuarios/as con el rol de **administrador** podrán **ver** todas las listas del resto de usuarios, pero **no** editarlas ni borrarlas,
  - tan sólo los/las usuarios/as que tengan un rol de **administrador** podrán acceder a las partes de la aplicación que permitan la **edición** de los productos y
  - la **administración de roles** sólo estará accesible a los usuarios/as con el rol de **administrador**,
- finalmente, crea una sección en la aplicación para que el/la usuario/a pueda **acceder a su perfil y modificar sus datos** (como mínimo, **avatar**, **nombre** completo y alguna **descripción** sobre él/ella). Deberás crear nuevos elementos en *Supabase* como una tabla **Perfiles**, funciones, disparadores y políticas **RLS** para poder gestionar este apartado. Por descontado, un/a usuario/a sólo podrá hacer **CRUD** sobre sus propios datos (excepto borrar el perfil).

Copia y pega las sentencias **SQL** que has utilizado en el servidor en un comentario al inicio del componente `<App>`.
