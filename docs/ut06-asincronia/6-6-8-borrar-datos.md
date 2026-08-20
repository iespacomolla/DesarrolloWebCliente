# 6.6.8 Borrar datos

Para eliminar un registro de la base de datos serán necesarias dos cosas: la función `delete` y el identificador del elemento que será eliminado. Hay que tener en cuenta lo catastrófico que puede ser un `delete from` sin el `where`.

```jsx
const { data, error } = await supabase
    .from("Feos")
    .delete()
    .eq("id", "dc2f8649-fc82-4e37-9d40-9483e1b18fc6");
```

El código anterior desestructura el objeto que se recibe de la función asíncrona `delete` al eliminar el elemento de la tabla `Feos` con `id` *dc2f8649-fc82-4e37-9d40-9483e1b18fc6*. Es así de sencillo es eliminar un elemento de la base de datos.

Lo ideal es introducirla en una función que reciba como parámetro el `id` del elemento a eliminar:

```jsx
const borrarFeo = async (e) => {
    try {
        const { data, error } = await supabase
            .from("Feos")
            .delete()
            .eq("id", e.target.id);
    } catch (error) {
        throw error;
    }
};
```
