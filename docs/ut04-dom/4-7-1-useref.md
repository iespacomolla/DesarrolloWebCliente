# 4.7.1 useRef

Fruto de la gestión que **React** realiza del **DOM** a través de su propia versión (**Virtual DOM**), el acceso a éste desde un componente está desaconsejado (**casi prohibido**) ya que se redibuja después de cada actualización (como se verá en lo sucesivo). Estos cambios hacen que la selección tan sólo sea precisa durante la carga inicial del código, pero tras unos cuantos cambios es muy probable que los objetos del **DOM** sean remplazados por los del **Virtual DOM** de **React** y se produzcan resultados inesperados.

Para controlar esta situación se dispone de `useRef()` que permite crear referencias dinámicas a elementos del *DOM*, de este modo no se perderá la referencia si se produce un redibujado del árbol que contiene el componente.

```jsx
import { useRef } from react; // Se importa useRef.
const App => () { // Se crea un componente App.
    const textoRef = useRef(null); // Se crea una referencia dinámica vacía.
    const accion = () => { // Se añade un evento (se verá en el tema siguiente).
    console.log(textoRef.current.value); // Se muestra lo escrito en el input.
}

return (
<div>
    <input type="text" ref={textoRef} /> // Referencia al DOM.
    <button onClick={accion}>Mostrar texto</button>
</div>)
}

export default App;
```

Para acceder a las propiedades de la referencia debe realizarse a través de `current`, de este modo si es necesario acceder al valor (`value`) de un input tipo `text` se realiza así:

```jsx
textoRef.current.value
```

Esto ocurre con todas las características del objeto referenciado del mismo modo que como si se estuviera accediendo desde **ECMAScript6**.

También es posible modificar el **Virtual DOM** una vez hecha la referencia del mismo modo que se realizaba en el **DOM** original:

```jsx
import { useRef } from react;
const  App => () {
    const textoRef = useRef(null);
    const resultadoRef = useRef(null); // Se crea otra referencia para contener el texto.
    const accion = () => {
        console.log(textoRef.current.value);
        resultadoRef.current.innerHTML = textoRef.current.value; // Se asigna el contenido del input al div.
    }

return (
<div>
    <input type="text" ref={textoRef} />
    <button onClick={accion}>Mostrar texto</button>
    <div ref={resultadoRef} ></div> // Nueva referencia al Virtual DOM.
</div>
)};

export default App;
```

Estas referencias, al tratarse de un elemento del código, es posible moverla entre componentes para poder usarlas en componentes
descendientes. Esto se realiza a través del objeto `props` del siguiente modo:

```jsx
<ComponenteFeo referenciaExterna={textoRef} />
```

Y accediendo a ella dentro del componente `<ComponenteFeo>` del siguiente modo:

```jsx
<input type="text" ref={props.referenciaExterna} />
```

En caso de necesitar un acceso directo al **DOM** siempre se realizará utilizando las herramientas que **React** dispone, de no ser así el resultado puede ser inesperado y crear muchos dolores de cabeza. Nunca es buena idea usar `getElement` para recorrer el **DOM** desde **React** (ni siquiera es buena idea hacerlo con `useRef`).
