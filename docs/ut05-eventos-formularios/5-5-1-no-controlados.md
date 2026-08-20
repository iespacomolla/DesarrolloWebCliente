# 5.5.1 No controlados

Un componente no controlado es aquel que no usa el `state` para representarse en el **DOM**, sino que usa la propia **API** del **DOM**. Se trabaja con los formularios de la misma manera que lo hace Vanilla *JavaScript*, es decir, seleccionando cada componente y accediendo a sus propiedades. Hay que recordar que en *React* está prohibido el uso de esta **API** (`getElementBy` y `querySelector`) para seleccionar elementos del **DOM**, por lo que habrá que utilizar el *hook* `useRef` como ya se ha estudiado con anterioridad.

```javascript
import React, { useRef } from "react";
    const FormularioPruebaNC = () => {
    // Se crean las referencias a los objetos.
    const inputNombre = useRef(null);
    const inputCorreo = useRef(null);
    /*
        NOTA: Si el formulario es grande sería más efectivo hacer una referencia
        únicamente al formulario y obtener los datos a través de la función formData():
        const formData = new FormData(referenciaAlFormulario.current);
    */
    const manejarEnvio = (event) => {
    event.preventDefault();
    // Se obtienen los datos de los inputs no controlados (a través de sus referencias).
    const nombre = inputNombre.current.value;
    const correo = inputCorreo.current.value;
    // Se tratan los datos.
    console.log(`¡Hola ${nombre}!, tu correo electrónico es ${correo} .`);
    // Se limpian los inputs.
    inputNombre.current.value = "";
    inputCorreo.current.value = "";
    };
    return (
    <form>
        <div>
            <label htmlFor='nombre'>Nombre </label>
            <input type='text' id='nombre' ref={inputNombre} />
        </div>
        <div>
            <label htmlFor='correo'>Correo </label>
            <input type='email' id='correo' ref={inputCorreo} />
        </div>
        <button onClick={manejarEnvio}>Enviar</button>
    </form>
    );
    };
export default FormularioPruebaNC;
```

Hay que tener en cuenta dos cosas:
- el componente que contiene el formulario no se redibuja por sí mismo, ya que no tiene cambios de estado
- y, además, los valores de cada campo los gestiona el propio **DOM** no *React*.

Es una solución intermedia en la que intervienen dos **API** y para formularios pequeños no supone un coste alto en rendimiento, pero a la que el formulario crezca la situación puede complicarse en exceso.
