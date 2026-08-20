# 5.4.1 El hook de efecto: useEffect

Se trata de un *hook* que realiza varias acciones:

- reemplaza los métodos del ciclo de vida de los componentes de clase como `ComponentDidMount`, `ComponentDidUpdate` y `ComponentWillUnmount`,
- controla la ejecución de los *side effects* o efectos secundarios en programación (efectos que acompañan al principal).

`UseEffect` recibe dos parámetros:

- el primero **obligatorio**, una **función** que puede realizar cualquier tipo de operación,
- el segundo **opcional**, un **array** con las dependencias de ejecución.

Se ejecuta **siempre** después del primer dibujado y, en función de sus dependencias, después de cada actualización del componente.

El segundo parámetro se usa para especificar las dependencias. *React* comprobará si el valor de esas dependencias ha cambiado. Si es así, tiene que volver a ejecutar la función pasada como primer parámetro. En caso de no variar este valor, el *hook* no se ejecutará.

```jsx
import React, { useState, useEffect } from "react";
function FormularioFeo() {
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    useEffect(() => {
        console.log(`Se ha ejecutado el hook: ${nombre}.`);
    }, [nombre]);
    return (
        <div>
            <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <input value={apelllidos} onChange={(e) => setApellidos(e.target.value)} />
        </div>
    );
}
```

En este caso se dispone de dos input: uno para establecer la variable nombre y el otro para apellidos. El *hook* `useEffect` simplemente realiza un `console.log()` en cada ocasión en que se ejecuta. Si no se le pasase el segundo parámetro `[nombre]`, se vería el resultado de `console.log()` cada vez que el usuario introduce un valor en cualquiera de los dos inputs. En cambio, al pasarle la variable nombre como dependencia, el `hook` se ejecuta solamente cuando el usuario introduce un valor en el input correspondiente a nombre.

Si lo que se necesita es que el `hook` se ejecute tan sólo una vez después del dibujado del componente, bastará con pasarle un **array vacío**. Si no se le pasa parámetro alguno, el *hook* se disparará en cada redibujado del componente.

Además, es posible utilizar varios `useEffect` en un mismo componente si se requieren diferentes acciones para varias dependencias.
