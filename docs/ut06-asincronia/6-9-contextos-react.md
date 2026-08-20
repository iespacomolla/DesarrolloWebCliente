# 6.9 Contextos en React

Como ya se estudió en la unidad pasada, uno de los problemas al manejar estados en los componentes es que tan sólo son accesibles en su ámbito, es decir, en el propio componente y en sus componentes descendientes (hijos, nietos, bisnietos, tataranietos, etcétera). Eso sí, para que un componente descendiente pueda utilizar el estado de un componente ascendente, éste debe ser pasado en las `props` del componente hijo.

No es problemático si el estado debe ser manejado por el componente hijo, pero el código se complica si el componente que debe manejar el estado es el tataranieto, ya que debería propagarse a través del hijo, nieto, bisnieto para llegar, por fin, a su destino. Esto se conoce como "*props drilling*" y es una práctica que aleja al código de sea ***clean code*** (y nadie quiere eso).

Para evitar esta situación es posible crear un contexto que afecte a todos los componentes que contenga independientemente de la relación que tengan entre ellos (sean hijos, padres, nietos o, en el peor de los casos, cuñados ;-) ). A esto se le denomina contexto global y es la mejor manera de trabajar si es necesario que varios componentes manejen el mismo estado.

Para ello hay que realizar varias acciones:

- `createContext`, permite crear el contexto que contendrá los estados, las funciones que lo manejan así como cualquier otra información compartida,
- crear un proveedor (***provider***) a través del cual podrá ser consumido desde otros componentes. Este proveedor debe contener (`children`) a todos los componentes que deban acceder al contexto y
- `useContext`, permite consumir los datos del contexto a través de su proveedor (provider). Cuando se importe el proveedor el componente hijo dispondrá de toda la información que el contexto ofrece.

Nada complicado hasta aquí, pero hay que tener en cuenta un pequeño detalle: cada vez que un componente modifica un estado del contexto, todos ellos situados dentro del contexto serán redibujados.

Por ejemplo, se dispone de un contexto con la información del usuario que ha iniciado sesión (algo muy común). Esta información será utilizada en toda la aplicación y por eso todos los componentes deben estar dentro de ese contexto: barra de navegación, propiedades del usuario, pie de página y el resto de la web. Si uno de estos componentes realiza un cambio sobre el estado del usuario todos serán dibujados de nuevo, es decir, toda la aplicación web. Es un comportamiento con el que hay que tener cuidado y medir mucho el sacrificio en rendimiento.

Afortunadamente es posible evitar esto si se crea un componente con el proveedor además del contexto, como se verá a continuación:

```jsx
import React, { createContext, useState } from "react";
const usuarioContexto = createContext(); // Se crea el contexto.
const valoresIniciales = { // Valores para el estado.
    nombre: "Feo",
    apellido1: "De verdad",
    aficiones: ["rugby", "videojuegos", "Fórmula 1"],
};
const UsuarioProveedor = (props) => { // Se crea el componente.
    const [usuario, setUsuario] = useState(valoresIniciales); // Estado del contexto.
    const borrarUsuario = () => { // Función que modifica el estado.
        setUsuario(null);
    };
    const saludarUsuario = () => { // Función que accede el estado.
        console.log(`¡Buenos días ${usuario.nombre} ${usuario.apellido1}!`);
    };
    // Objetos con los datos que se le pasan al proveedor del contexto.
    const datos = { usuario, borrarUsuario, saludarUsuario };
    return (
        // Se crea el proveedor con el children en su interior.
        <usuarioContexto.Provider value={datos}>
            {props.children}
        </usuarioContexto.Provider>
    );
};
// Exportar tanto el componente (UsuarioProveedor) como el contexto (usuarioContexto).
// Es posible que un proveedor ofrezca varios contextos.
export default UsuarioProveedor;
export { usuarioContexto };
```

En el código anterior se ha creado un `usuarioContexto` que contiene un estado con la información del usuario así como las funciones que le afectan. Toda esta información es ofrecida a los componentes que queden dentro del componente `<UsuarioProveedor>`.
En el siguiente código los componentes `<Cabecera>` y `<Home>` tienen acceso al estado de `<UsuarioProveedor>` ya que necesitan la información del usuario para ello. Sin embargo, el componente `<Pie>` no lo necesita por lo que se queda fuera del contexto.

```jsx
import React from "react";
import "./App.css";
import Cabecera from "./components/Cabecera.jsx";
import Home from "./components/Home.jsx";
import Pie from "./components/Pie.jsx";
import UsuarioProveedor from "./contexts/UsuarioProveedor.jsx";
function App() {
    return (
        <>
            <UsuarioProveedor>
                <Cabecera />
                <Home />
            </UsuarioProveedor>
            <Pie />
        </>
    );
}
export default App;
```

Tanto los componentes que estén dentro del contexto como los descendientes de estos podrán acceder al contexto importando para ello `usuarioContexto` del siguiente modo:

```jsx
import React, { useContext } from "react";
// Se importa el contexto ya que estoy dentro del proveedor.
import { usuarioContexto } from "UsuarioProveedor.jsx";
const Cabecera = (props) => {
    // Se guarda el contexto en la variable contxt.
    const contxt = useContext(usuarioContexto);
    return (
        <>
            {/* Se usan los datos del contexto a través de contxt. */}
            <p>Hola usuario {contxt.usuario.nombre}</p>
            <button onClick={contxt.saludar}>Pulsa para saludar</button>
        </>
    );
};
export default Cabecera;
```

Si el componente `<Cabecera>` tuviera descendientes, no importa hasta qué nivel, todos ellos podrían acceder al contexto e incluso modificar su estado para provocar un redibujado de la aplicación web.

Existen soluciones en el mercado más conocidas para manejar el estado global como ***Redux***. Eso sí, es un biblioteca de terceros. Integrado en su núcleo de desarrollo, *React* dispone de dos herramientas con las que se puede emular el comportamiento de *Redux*: `useContext` y `useReducer`. Es preferible aprender el uso de estas herramientas ya que su inclusión nativa en el código de *React* le aseguran su desarrollo. No obstante, *Redux* es una solución ampliamente integrada en el mercado por lo que es interesante no perderla de vista.
