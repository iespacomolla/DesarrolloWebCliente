# 6.6.3 Autentificación de usuarios

*Supabase* ofrece varias formas de crear usuarios/as. A través de su apartado `Autentication` es posible gestionar:

- políticas de acceso a la base de datos, qué usuarios pueden acceder a qué tablas y con qué permisos. Es buena idea quitar todos los permisos y dotar aquellos necesarios aplicando siempre la máxima de dar los permisos necesarios para hacer las tareas encomendadas, ni uno más,
- proveedores de acceso, además del control de acceso a través del correo electrónico, es posible gestionarlo a través de servicios como Azure, Discord, GitHub, Google, Twitch entre otros muchos,
- plantillas de correos automáticos, permite crear plantillas de correo que se enviarán a los usuarios cuando realicen ciertas acciones en la aplicación como crear cuenta, validar correo, recuperar contraseña o invitar a usuarios,
- también se encuentra la opción de configurar la URL del proyecto a la que los usuarios serán redirigidos tras realizar ciertas acciones,
- y, por supuesto, permite la gestión de los usuarios de la aplicación.

Para iniciar sesión en el proyecto *Supabase* ofrece varias opciones al igual que *Firebase*. En esta ocasión, ya que en el apartado anterior se utilizó la opción de usuario/contraseña, se implementará la opción de **Magic Link**. De esta forma no será necesario generar una contraseña ya que se recibirá un correo electrónico con un enlace que inicia sesión en el servidor y redirige hacia la aplicación. Para ello será necesario el siguiente código:

```jsx
const manejadoLogin = async (e) => {
    try {
        // Función asíncrona para iniciar sesión con el usuario.
        const { data, error } = await supabase.auth.signInWithOtp({
            email: correo,
            options: {
            // La URL se especifica en el servidor, pero es posible cambiarla.
            emailRedirectTo: "http://localhost:5173/inicio",
        },
    });
    } catch (error) {
        throw error;
    }
};
```

En el código, se ha creado una función para manejar el inicio de sesión que, utilizando el objeto `supabase`, accede al servicio de autentificación `auth` y valida la cuenta de correo. Si el usuario existe envía un correo electrónico para que inicie sesión. Al pulsar el enlace, será redirigido/a a la **URL** especificada en el servidor, aunque también es posible indicar una nueva ruta como se aprecia en el código.

Antes de utilizar este modo de iniciar sesión hay que configurar la **URL** a la que será redirigido el usuario por defecto. Se accede a `Authenticartion` → `URL Configuration` y se configuran las direcciones web que son permitidas para esta acción. Es posible utilizar expresiones regulares para facilitar varias **URL** autorizadas. Hay que aclarar que todas estas direcciones sólo serán accesibles si el usuario ha iniciado sesión y tiene permisos suficientes para hacerlo.

Una vez iniciada la sesión, es posible obtener los datos del usuario:

```jsx
const datosUsuario = await supabase.auth.getUser();
```

Este objeto contendrá varios objetos dentro de él, por lo que será una buena idea usar desestructuración para evitar la tediosa notación de punto, especialmente si los objetos anidados son grandes:

```jsx
const { data, error } = await supabase.auth.getUser();
```

De este modo se dispone de dos objetos por separado. Hay que indicar que casi todas las llamadas asíncronas a *Supabase* devuelve una serie de objetos contenidos en objeto contenedor. En la mayoría de ocasiones serán:

- `data`, con los datos introducidos o devueltos por la base de datos en función del modo de consulta,
- `error`, con el error que se ha producido o null si no se ha producido error alguno,
- `count`, que indica el número de registros afectados por la consulta.

Estos son sólo algunos de los objetos que devuelve una consulta al servidor y varían en función del tipo de interacción que se requiera con él. Como siempre, es buena idea revisar la documentación de la función que se esté utilizando o imprimir el objeto por consola para ver su estructura y prototipo.

Para cerrar sesión tan sólo será necesario el uso de la función `signOut` del siguiente modo:

```jsx
const cerrarSesion = async () => {
    // Se cierra la sesión en el servidor de Supabase.
    await supabase.auth.signOut();
    // Se redirige la aplicación a la parte pública (componente <Home>).
    // El objeto navegar se ha creado anteriormente con el hook useNavigate:
    // → const navegar = useNavigate();
    navegar("/");
};
```

Tras el cierre de sesión es posible la redirección del usuario a la parte pública de la aplicación. Para ellos se ha utilizado el *hook* `useNavigate` de la biblioteca **react-router-dom** vista con anterioridad.
