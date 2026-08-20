# 6.6.2 Conectar con la base de datos

Una vez creada la base de datos tan sólo son necesarios dos datos para conectar con ella y ambos se pueden encontrar en la sección `Project Settings` → `API` , estos son la **URL** del proyecto y su clave.

![](/images/ut06_10000001000005020000028F1D39A7CD.png)

Al igual que pasaba con *Firebase*, es buena idea poner estos datos a buen recaudo y evitar que se guarden en **Github**. Esto se abordará al final del tema.

Con estos datos a mano, sólo falta crear el objeto que contendrá la conexión a todos los servicios del proyecto y no sólo a la base de datos. Es buena idea crearlos en un fichero aparte para separarlo de la lógica de la aplicación, así se ha creado en fichero `config.js`:

```jsx
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_KEY
);
export { supabase };
```

Este código importa de la biblioteca de *Supabase* la función `createClient` y con ella crea el objeto de conexión `supabase` que, finalmente, será exportado para su uso en el resto de la aplicación.
