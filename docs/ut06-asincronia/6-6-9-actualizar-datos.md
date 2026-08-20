# 6.6.9 Actualizar datos

En esta ocasión serán tres las cosas que se necesitarán para poder actualizar los datos de un elemento de la base de datos: la función `update`, el identificador y los nuevos datos a modificar.

```jsx
const { data, error } = await supabase
    .from("Feos")
    .update({
        name: "Nuevo nombre para Feo",
        phone: "000000000",
        email: "feonuevo@feo.es",
        country: "Burkina Faso",
    })
    .eq("id", "dc2f8649-fc82-4e37-9d40-9483e1b18fc6");
```

Hay que tener en cuenta que los datos no incluidos en el objeto no serán actualizados. En el ejemplo anterior el atributo `address` no cambiará ya que no aparece en el objeto enviado, pero sí lo harán el resto de valores.

Para crear el objeto tan sólo será necesario traer los datos de ese elemento de la base de datos, ponerlos en un formulario, confiar en el buen hacer del usuario/a y enviar los datos de vuelta al servidor una vez modificados. Hay qee tener en cuenta que, si todo esto se hace a través de *React*, será buena idea realizarlo a través de un **estado** y un **formulario controlado**, por supuesto.
