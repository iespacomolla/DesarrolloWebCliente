# 6.7.1 NodeJS y JavaScript Vanilla

Para hacer esto con *NodeJs* será necesario la instalación del paquete `.dotenv` (más información [aquí](https://www.npmjs.com/package/dotenv), pero antes, ya que será necesario la utilización de módulos accesorio, es buena idea crear un proyecto. Se crea la carpeta contenedora del proyecto, se abre desde el terminal del sistema (o desde el terminal del editor de código) y se ejecuta el siguiente comando:

```bash
npm init -y
```

Tras la creación del proyecto, habrá que instalar el paquete requerido:

```bash
npm install dotenv
```

Con todo esto tan sólo quedará configurar las variables de entorno que serán traducidas cada vez que el navegador las solicite. Se crea el fichero `.env` con la información sensible:

```env
SUPABASE_URL=https://tu_proyecto.supabase.co
SUPABASE_KEY=tu_clave_api_key
```

Hay que seguir un par de reglas: escribir sin espacios y el nombre de la variable de entorno debe estar escrita en mayúsculas. El fichero de configuración de la conexión (supabase.js, por ejemplo) quedaría entonces de este modo:

```javascript
require('dotenv').config();

const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

module.exports = supabase;
```

Además, hay que añadir el requerimiento del módulo dotenv al inicio de este fichero: `require("dotenv").config();`

El problema de esta forma de trabajar es que el código debe de interpretarlo *NodeJs* para que la sustitución se haga de forma efectiva, es decir, preceder la ejecución de este archivo con el comando `node` o construir un servidor con el propio *NodeJs*, tarea que excede de los límites de este módulo.

Hasta este punto se está trabajando con `serve` por lo que no será capaz de interpretar este código. Además, se está utilizando `require` en lugar de `import`, lo que puede ocasionar problemas de incompatibilidad, que se arreglan modificando la línea `“type”: “module”` por `“type”: “commonjs”` del fichero `package.json`.

Es mejor idea trabajar con proyecto en **React**, **Angular** o **Vue** que, además de todas las ventajas que ya ofrecen, tienen esta característica ya implementada.
