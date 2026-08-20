# 6.6.6 Escribir datos

Al contrario que pasaba en *Firebase*, no es necesario apuntar a una colección antes de realizar la inserción de datos, en el propio envío de los datos se especifica a qué tabla van dirigidos. Eso sí, de igual modo que en *Firebase*, habrá que crear un objeto que contenga esta información. Ese objeto debe ser un conjunto de `clave-valor` en donde la clave debe coincidir con la columna donde se va a almacenar el valor. De este modo, si se dispone de la siguiente tabla:

![](/images/ut06_10000000000004F6000001904BE1CEB0.png)

el objeto que espera recibir será el siguiente:

```jsx
const feoGuardar = {
    name: "Feo",
    phone: "123456789",
    email: "feo@feo.es",
    address: "Calle de los ciegos, 66",
    country: "España",
};
```

No se incluye la columna `id` ya que esta se genera de forma automática aunque también es posible enviarle un dato. En tal caso no creará una clave **UUID** nueva y guardará la enviada, pero si este trabajo ya lo hace la base de datos no será necesario realizarlo de nuevo.

Una vez creado el objeto (a través de un formulario controlado, por ejemplo) se envía a la base de datos con el siguiente código:

```jsx
const crearFeo = async (e) => {
    try {
        // Se guardan los datos.
        const respuesta = await supabase.from("Feos").insert(feoGuardar);
        // El insert devuelve el resultado de la operación en un objeto.
        // Para comprobar el formato del objeto, se imprime por consola.
        console.log(respuesta);
    } catch (error) {
        throw error;
    };
};
```

Si es necesario la inserción de varias filas de una sola vez, en lugar de pasar un objeto con los datos se le pasa un array que contiene esos objetos:

```jsx
const { data, error } = await supabase
    .from('Feos')
    .insert([
        { Feo1 },
        { Feo2 },
    ]);
```

En donde `Feo1` y `Feo2` son objetos del tipo `feoGuardar`.
