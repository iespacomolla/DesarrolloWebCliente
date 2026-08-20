# 6.8 Hooks personalizados (custom hooks)

Los *hooks* de *React* son funciones que devuelven un resultado y que permiten el encapsulado y la reutilización del código, no en vano son funciones. La diferencia con estas es que los *hooks* pueden contener un **estado** para realizar su función de forma adecuada.

Para construirlos es conveniente respetar una normas de nomenclatura y uso que ayudarán a identificarlos:

- su nombre debe comenzar con la palabra `use`,
- **no comparten estado**, si se usa dos veces el mismo *hook* en un componente se generarán dos estados,
por tanto, el estado de cada *hook* está aislado del resto de elementos.

Una de las tareas que más se van a repetir del lado del cliente es la llamadas a **API**, por lo que crear un *hook* para esta tarea se antoja una buena idea. Por ejemplo:

```jsx
import { Fragment, useState, useEffect } from "react";
import "./App.css";
function App() {
    const [datos, setDatos] = useState();
    useEffect(() => {
        fetch("https://swapi.dev/api/people/1")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setDatos(data);
            });
    }, []);
    return (
        <Fragment>
        <pre>{datos ? JSON.stringify(datos, null, 2) : <p>Buscando en la galaxia...</p>}</pre>
        </Fragment>
    );
}
export default App;
```

Es habitual escribir este código para consumir datos. Tanto la llamada a la **API** como el uso de `useState` y `useEffect` será denominador común. Por lo tanto es buena idea refactorizar este código y crear un *hook* con el código a repetir. En este proceso, además, se va a parametrizar para tener acceso a cualquier endpoint de la **API** que se utilice. El *hook* quedaría del siguiente modo:

```jsx
import React, { useEffect, useState } from "react";
const useDatos = (url) => {
    const [datos, setDatos] = useState();
    useEffect(() => {
        fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setDatos(data);
        });
    }, []);
    return { datos };
};
export default useDatos;
```

Nótese que lo único que devuelve es su propio estado una vez resuelta la promesa del `fetch`. El código del componente anterior quedaría del siguiente modo:

```jsx
import "./App.css";
import useDatos from "./hooks/useDatos.js";
function App() {
    const { datos } = useDatos("https://swapi.dev/api/people/4");
    return (
        <>
        <pre>{datos ? JSON.stringify(datos, null, 2) : <p>Buscando en la galaxia...</p>}</pre>
        </>
    );
}
export default App;
```

Hay que tener en cuenta que en ambos ejemplos el componente `<App>` dispone de un estado, sólo que en segundo caso está confinado dentro del *hook* `useDatos` y no se podrá tener acceso a él, es decir, no se podrá modificar su valor ya que no se dispone de la función `setDatos`. Si es necesario realizar esta acción tan sólo bastará con devolver esa función desde el *hook* y recogerla desde el componente. Así se devuelve desde el *hook*:

```jsx
return { datos, setDatos };
```
Así se recoge desde el componente:

```jsx
const { datos, setDatos } = useDatos("https://swapi.dev/api/people/4");
```

De este modo se dispone acceso al estado de useDatos desde el componente `<App>`.
