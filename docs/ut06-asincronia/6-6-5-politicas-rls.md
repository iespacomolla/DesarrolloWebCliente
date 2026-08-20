# 6.6.5 Políticas de seguridad a nivel de fila (RLS)

Además de la creación de roles, cada tabla de la base de datos posee un sistema de seguridad que permite asignar el acceso a sus datos. Por defecto esta capa de seguridad está desactivada y se activa desde la sección de edición de cada una de las tablas `Database` → `Tables` :

![](/images/ut06_10000001000002910000021B8E10A9A5.png)

A partir de aquí se podrán crear todas las políticas que sean necesarias para el proyecto. Hay que recordar que todas estas políticas serán procesadas directamente por el motor de *PostgreSQL* y serán ejecutadas cada vez que se acceda a ella, por lo que hay que encontrar, como siempre, un equilibrio entre el número de políticas establecidas y la cantidad de accesos.

Importante recordar que una vez activada una política de seguridad, automáticamente el acceso a esa tabla será denegado para todas las acciones y sólo serán permitidas aquella especificadas en la política asignada.

Para crear nuevas políticas de acceso hay que ir a la sección de `Authentication` → `Policies` elegir la tabla sobre la que actuar y crear la nueva política utilizando el siguiente formulario:

![](/images/ut06_1000000100000476000002E64C7E488C.png)

En donde se encuentra:

- `Policy name`, nombre de la política de seguridad que se está creando. Es conveniente que el nombre sea descriptivo para no tener que revisar su contenido pasado un tiempo desde su creación,
- `Allowed operation`, que son las acciones que se permitirán sobre esa tabla,
- `Target roles`, rol o roles a los que afectará la política,
- `USING expresion`, es una expresión SQL que devuelve un valor boolean. Esta expresión será ejecutada cada vez que se acceda a la tabla y, si el resultado es true se concederán los permisos establecidos a los roles indicados para esa consulta. Si el resultado de la expresión es false o null no se concederán.

Como no, también es posible hacer esta consulta a través de la consola **SQL** del servidor. La equivalencia del anterior formulario a una consulta sería la siguiente:

```sql
CREATE POLICY "Política de acceso a Feos." ON "Feos"
FOR SELECT
TO rol_feo, authenticated
USING (true);
```

Otro ejemplo muy utilizado:

```sql
CREATE policy "Sólo puede actualizar sus propios comentarios." ON "Comentarios"
FOR UPDATE
USING (
auth.uid() = id
);
```

La tabla `Comentarios` almacena las anotaciones que se hace cada usuario. En ella se guarda tanto el comentario como el identificador del usuario que hace el comentario (además de otros campos que para este ejemplo no importan).

Según esta política, sólo se podrá modificar la tabla `Comentarios` si su `id` (“Comentarios”.”id” o como aparece en la consulta `id` a secas) tiene un identificador del usuario que está lanzando la consulta `auth.uid()`. Si la expresión devuelve `true`, se podrá cambiar el valor de la tabla.

Como se puede apreciar en esta segunda consulta no se ha especificado rol alguno ya que esta restricción es independiente del rol de cada usuario. La inclusión o no de la cláusula `TO` dependerá del sentido de la restricción.

Para ampliar la información sobre ***Row Level Security*** pincha [aquí](https://supabase.com/docs/guides/auth/row-level-security).

La complejidad de las políticas va a depender del proyecto, pero utilizando este sistema es posible hacer combinaciones de seguridad muy efectivas. Además, *Supabase* dispone también de políticas aplicadas a nivel de columnas (*Column Level Security*) que, a diferencia de lo visto hasta el momento, aplican las políticas a una **celda concreta de la tabla**. No es objetivo de este manual llegar a estas restricciones, pero se puede encontrar más información [aquí](https://supabase.wordpress.com/2023/05/18/estrategias-para-implementar-seguridad-nivel-columna-cls/).
