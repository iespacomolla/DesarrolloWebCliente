# 6.7.2 React y Angular

En **frameworks** como **React** o **Angular**, esta característica está implementada de forma nativa, por lo que al trabajar con ellos la ocultación de la información se realizará del mismo modo, tan sólo que el fichero donde se guardan las variables de entorno es `.env.local` que, al igual que en el caso de *NodeJS*, debe ser guardado en la carpeta raíz del proyecto, no del código fuente de la aplicación (`src`). Si se ha utilizado **Vite** para la creación de la aplicación de *React*, el nombre de las variables de entorno dentro del fichero **.env.local** irá precedido por `VITE_`, mientras que las de `create-react-app` (ya en deshuso) lo harán con `REACT_APP_`.

Las reglas para crear y manejar estos fichero son las mismas que las explicadas en el apartado anterior. Lo único que queda es revisar si este fichero está listado en el `.gitignore` del proyecto para evitar que se suba al repositorio en el siguiente `push`.

Sí. En un proyecto **Vite + Supabase**, lo habitual es guardar la URL y la clave en un fichero `.env` y acceder a ellas mediante `import.meta.env`.

En la **raíz del proyecto**, al mismo nivel que `package.json`, se crea el fichero ''.env'', y se añade:

```env
VITE_SUPABASE_URL=https://tu_proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu_clave_publica_de_supabase
```

Para utilizar esa información sólo hay que invocar las variables de entorno del siguiente modo:

```jsx
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
```

Así se evita escribir directamente las credenciales en el código fuente y que se suban al repositorio de `GitHub`. Además, será necesario añadir estos ficheros al listado `.gitignore`:

```gitignore
.env
.env.local
.env.*.local
```

El `.env` **no hace que una clave `VITE_*` sea secreta en una aplicación frontend**. Vite sustituye esas variables durante el proceso de compilación, por lo que un usuario puede acabar viendo la clave en los archivos *JavaScript* enviados al navegador.

En *Supabase*, esto es correcto para la **clave pública (`anon` o `publishable`)**. Lo que **nunca** se debe colocar en un `.env` con prefijo `VITE_` es una clave privilegiada como `service_role`, porque daría acceso elevado al proyecto.

Si es necesario mantener **información secreta** fuera del navegador, se debe utilizar en un **backend, Edge Function o servidor**, y desde el frontend realizar peticiones a ese backend. Recuerda que en cliente no es posible ocultar información al uauario/a.
