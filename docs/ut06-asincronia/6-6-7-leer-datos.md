# 6.6.7 Leer datos

Para leer datos desde Supabase se utiliza la función from del siguiente modo:

```jsx
const { data, error } = await supabase.from("Feos").select("id, name");
```

Este código devolverá las columnas `id` y `name` de todas las filas de la tabla `Feos`. Aunque no sea una sentencia **SQL** habitual, su sintaxis recuerda a ella y parece algo más lógica que en el caso de *Firebase*. Además es posible aplicar filtros, ordenar los resultados y limitarlos como si de una consulta se tratara.

```jsx
const { data, error } = await supabase
    .from("Feos")
    .select("*")
    .eq("country", "Burkina Faso");
```

En el código anterior, `data` contendrá un objeto con la respuesta de la consulta y `error` el código y descripción del error. Si todo ha ido de forma correcta, data debería contener todas las columnas de la tabla `Feos` donde `country` sea igual a “Burkina Faso”.

Para construir consultas más completas es posible utilizar los siguientes operadores que son autoexplicativos:

```jsx
.eq('columna', 'igual a')
.gt('columna', 'mayor que')
.lt('columna', 'menor que')
.gte('columna', 'mayor o igual que')
.lte('columna', 'menor o igual que')
.like('columna', '%CaseSensitive%')
.ilike('columna', '%CaseInsensitive%')
.is('columna', null)
.in('columna', [array de valores])
.neq('columna', 'no igual a')
```

También ofrece operadores para arrays, de igual modo que los ofrecía *Firebase*:

```jsx
.cs('columna', [contiene])
.cd('columna', [contenido por])
```

*Supabase* ofrece **consultas multitabla** tanto uno a muchos como muchos a muchos. Se detecta de forma automática las relaciones establecidas en la creación de la base de datos, por lo que no será necesario indicarla en la consulta, tan sólo los datos que se requieren de las tablas.

Se dispone del siguiente escenario: una tabla con países del mundo y otra con ciudades. La relación resulta evidente, una ciudad sólo puede estar en un país y un país puede tener varias ciudades (a no ser que se hable de ciudades estado, pero esa es la excepción que confirma la regla). Para consultar las ciudades de un país determinado será necesario la consulta en dos tablas, lo que se traduce en el siguiente código:

```jsx
const { data, error } = await supabase
    .from("countries")
    .select("id, name, cities (id, name)");
```

Se trata de una consulta normal con la particularidad que los valores de la tabla que contiene el muchos en el esquema entidad-relación se trata como si de una columna de la tabla que tiene el uno en dicho esquema. De ese modo, sólo queda indicar entre paréntesis las columnas que se necesitan de la segunda tabla.

Las consultas muchos a muchos funcionan de la misma manera, pero hay que tener en cuenta un par de cosas:

- si la tabla que nace de la relación muchos a muchos no contiene nada más que las claves de las otras dos tablas y no aporta información alguna a la relación (en ese caso se obvia por completo), el funcionamiento es el mismo que en el caso anterior, con la salvedad de que la relación se puede hacer de forma bidireccional,
- por el contrario, si la relación de en medio contiene información sobre la relación la sintaxis de la consulta es la misma, pero hay que tener cuidado con su semántica ya que el resultado puede ser confuso.

Mejor con un ejemplo. Se dispone de una pequeña aplicación que guarda a un grupo de discentes, sus prácticas y las notas que han obtenido en ellas con el siguiente esquema:

![](/images/ut06_1000000000000384000000E13C0F47AD.png)

Si se realiza esta consulta:

```jsx
const { data, error } = await supabase
    .from("discentes")
    .select(
    "id, nombre, apellidos, notas (nota, practicas (titulo, descripcion, peso))"
);
```

Se obtendría un objeto como este para cada discente de la tabla discentes:

```json
{
    "id": "582bf7a2-3611-4c5b-bc77-0c233f8ddc76",
    "nombre": "Antonio",
    "apellidos": "Gómez Valiente",
    "notas": [
        {
        "nota": 9,
        "practicas": {
            "titulo": "Práctica 1",
            "descripcion": "Haz un programa con ChatGPT",
            "peso": 10
            }
        },
        {
        "nota": 8,
        "practicas": {
            "titulo": "Práctica 2",
            "descripcion": "Crea un TODO list con React",
            "peso": 40
            }
        },
        {
        "nota": 7,
        "practicas": {
            "titulo": "Práctica 3",
            "descripcion": "Consume la API de Star Wars con React",
            "peso": 40
            }
        }
    ]
}
```

La estructura de este **JSON** variará si se modifica el orden de las tablas en la consulta. Hay que tener cuidado y asegurarse que la consulta es la adecuada. En este ejemplo se ha querido obtener las notas y las prácticas de cada discente, por eso la consulta se ha realizado en la tabla discentes (`from(“discentes”)`). Si fuese necesario saber qué discentes han realizado una práctica el orden se invertiría y la consulta empezaría en la tabla prácticas mientras que discentes estaría dentro de notas del siguiente modo:

```jsx
const { data, error } = await supabase
.from("practicas")
.select(
"titulo, descripcion, peso, notas (nota, discentes (id, nombre, apellidos))"
);
```

Obteniendo un objeto como este para cada práctica de la tabla prácticas:

```json
{
    "titulo": "Práctica 1",
    "descripcion": "Haz un programa con ChatGPT",
    "peso": 10,
    "notas": [
        {
        "nota": 9,
        "discentes": {
            "id": "582bf7a2-3611-4c5b-bc77-0c233f8ddc76",
            "nombre": "Antonio",
            "apellidos": "Gómez Valiente"
        }
        },
        {
        "nota": 5,
        "discentes": {
            "id": "88214b8f-b323-4d04-8082-5d0ff7fefe16",
            "nombre": "Luis",
            "apellidos": "García Fernández"
        }
        },
        {
        "nota": 5,
        "discentes": {
            "id": "21a84406-afb5-4ec5-8dbd-2e6317c58495",
            "nombre": "Rodrigo",
            "apellidos": "Pérez Hidalgo"
        }
        },
        {
        "nota": 9,
        "discentes": {
            "id": "dc2f8649-fc82-4e37-9d40-9483e1b18fc6",
            "nombre": "Silvia",
            "apellidos": "Loca Martínez"
        }
        }
    ]
}
```

La tabla `notas` actúa como nexo entre las otras dos y sólo se incluye en estos ejemplos porque incluye información necesaria, en este caso la calificación de la nota de la práctica de un discente. Si esta tabla no tuviese información alguna, la consulta se realizaría como una uno a muchos olvidando la tabla `notas`.
