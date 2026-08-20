# 1.13 Creación de un nuevo proyecto


## Creación de un nuevo proyecto

Antes de la instalación es necesario limpiar la caché de `npm` para asegurar que se obtiene la versión más reciente del *software*. Para ello se utiliza es siguiente comando:

```bash
npm cache clean \--force
```

Después se instalará la herramienta ***Vite*** que permitirá la creación de un proyecto **React** a través de un asistente facilitando la configuración inicial del proyecto:

```bash
npm install -g vite
```

Una vez instalado en global (modificador ***-g***) hay que situarse en la carpeta en donde se va a localizar el proyecto. Una vez allí, se lanza el siguiente comando para crear una aplicación:

```bash
npm create vite@latest nombre-de-la-app
```

Hay que tener presente que no es posible utilizar mayúsculas y evitar el uso de caracteres especiales en el nombre de la aplicación. `nombre-de-la-app` contendrá la ruta de la carpeta en donde se guardan los archivos de la aplicación.

Es posible que solicite la instalación de un paquete denominado <create-vite@X.X.X> . Se trata de un paquete necesario para mostrar el asistente que ayudará a la creación del proyecto. Tras esto, en el terminal aparecerá un corto asistente que permitirá elegir cuál será la tecnología del proyecto (la opción *Vanilla* implica usar sólo código *JavaScript* nativo), y el lenguaje que se usará en él: *TypeScript* o *JavaScript*.

Tras la creación del proyecto, el propio terminal informa de los siguientes pasos a realizar:

- moverse hasta la carpeta del proyecto creado `cd nombre-de-la-app`,
- instalar todas las dependencias del proyecto `npm install` y
- lanzar el proyecto en un servidor local `npm run dev`.

Esto creará un servidor web con las bibliotecas necesarias para empezar a trabajar en el proyecto. La aplicación es accesible desde la red local lo que permite acceder al servidor desde un teléfono móvil o tableta para ir comprobando en tiempo real el desarrollo en este tipo de dispositivos.

Además de este comando es conveniente familiarizarse con los siguientes:

- `npm run build`, que genera el código final del proyecto. No   es un compilador sino un transpilador que interpreta y optimiza el código del proyecto a código de producción,
- `npm run preview`, vista previa local del proyecto antes de su construcción,
- `npm run dev`, que inicia el servidor de desarrollo.

Para todo esto, también es posible utilizar el gestor de paquetes yarn creado por *Facebook* que optimiza varias de las características de npm, aunque en este manual se seguirá trabajando con el último.

Hay que recordar que cuando se utilice *Git* para el control de versiones y se realice un clone en un entorno de trabajo nuevo será necesario instalar de nuevo todas las bibliotecas en ese nuevo equipo. Para ello se utiliza el fichero package.json (donde están indicadas las dependencias del proyecto) y el comando `npm install`.

Esto instalará todas las dependencias del proyecto para poder continuar trabajando. Huelga decir que estas bibliotecas no es conveniente almacenarlas en el repositorio de *Git* por el elevado espacio que suelen ocupar.

Para instalar otras bibliotecas al proyecto bastará con utilizar el gestor de paquetes `npm` como de costumbre. Por ejemplo, para instalar las bibliotecas de *Firestore*

```bash
npm install firebase
```

De este modo el proyecto accederá de forma local a las bibliotecas necesarias.