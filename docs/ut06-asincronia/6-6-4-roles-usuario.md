# 6.6.4 Roles de usuario

Existe la posibilidad de definir **roles** que permiten controlar los permisos y el acceso a los datos. Los roles que *Supabase* dispone por defecto son:

- `postgres`, rol predeterminado de PostgreSQL con privilegios de administrador y se utiliza para la administración de la base de datos,
- `anon`, el usuario/a no está autenticado en la aplicación y se utiliza para limitar el acceso no autorizado,
- `authenticated`, se utiliza cuando un usuario ha iniciado sesión en la aplicación y se usa para permitir el acceso autorizado,
- `supabase_admin`, es un rol administrativo utilizado para el mantenimiento de la base de datos.

Existen más roles por defecto como `authenticator`, `service_role`, `supabase_auth_admin`, `supabase_storage_admin`, entre otros, que se encargan de administrar los servicios ofrecidos por el servidor. No se tratarán aquí ya que su conocimiento excede de las intenciones de este manual. Más
información sobre todos los roles [aquí](https://supabase.com/docs/guides/self-hosting#roles).

Pero existe la posibilidad de crear roles a demanda en función de las necesidades del proyecto. Es un proceso sencillo y se puede utilizar tanto el panel de control de *Supabase* como la opción de crear un nuevo rol mediante **SQL**.

Para la primera, las opciones que brinda el servidor son autoexplicativas:


![](/images/ut06_100000010000070700000385AEE18E3F.png)


Para la segunda opción se utiliza la línea de comandos de la base de datos del siguiente modo para crear un nuevo rol:*

```sql
CREATE ROLE <rol_feo>;
```

Una vez creado es necesario asignar privilegios, es decir, los usuarios/as que tengan ese rol ¿qué podrán hacer? Lo primero es que puedan iniciar sesión:

```sql
ALTER ROLE <rol_feo> LOGIN;
GRANT <rol_feo> TO authenticated;
```

Ahora hay que asignar privilegios sobre una tabla y sobre una acción:

```sql
GRANT SELECT ON <table_name> TO <rol_feo>;
```

Al ejecutar esta consulta se estará concediendo el privilegio de selección `SELECT` sobre la tabla `<table_name>` al rol `<rol_feo>`.

También existen otras sentencias que permiten otorgar otros tipos de privilegios como `INSERT`, `UPDATE` o `DELETE`. Hay que recordar ajustar la sentencia según los privilegios específicos que sea necesario otorgar y ninguno más.

Para asignar un rol a un usuario/a se utiliza la siguiente sentencia:

```sql
UPDATE auth.users SET role = "rol_feo" WHERE id = “<user-uuid>”;
```

Esta sentencia actualiza el objeto `users`, dentro de `auth`, asignando `rol_feo` al usuario con identificador `<user_uuid>`.

Hay que recordar que es posible obtener el identificador del usuario/a a través del panel de control o con la siguiente consulta:

```sql
SELECT id, email FROM auth.users WHERE email = “email_user”;
```

Además, para obtener los roles establecidos en los usuarios/as se ejecutar esta consulta:

```sql
SELECT id, email, role FROM auth.users;
```
