# 5.5.2 Controlados

Un componente **controlado** es aquel que usa el state para gestionar la información de los formularios. Más concretamente, es un componente que mantiene una sincronización entre el estado de *React* y el valor del campo. Si el estado cambia, el valor cambia (se produce un redibujado del componente).

```jsx
import React, { useState } from "react";
    const valoresIniciales = {
        correo: "",
        contrasena: "",
    };
    const FormularioPrueba = () => {
    const [datos, setDatos] = useState(valoresIniciales);
    function manejarEnvio(e) {
        // Se previene el comportamiento por defecto de lo formulario el cual recarga la página.
        e.preventDefault();
        // Aquí se usa "datos" para tratar la información.
        console.log(datos);
    }
    function manejarCambio(e) {
        // Deconstrucción del objeto "target" del evento pasado como parámetro.
        const { name, value } = e.target;
        /*
            Se utiliza spread operator para copiar el estado actual,
            y se reemplaza el valor del objeto al que afecta el input que ejecutó el evento.
        */
        setDatos({ ...datos, [name]: value });
    }
    return (
    <form>
        <label htmlFor='correo'>Correo electrónico</label>
        <input id='correo' name='correo' value={datos.correo} onChange={manejarCambio} />
        <label htmlFor='contrasena'>Contraseña</label>
        <input id='contrasena' name='contrasena' value={datos.contrasena} onChange={manejarCambio} />
        <button onClick={manejarEnvio}>Enviar</button>
    </form>
    );
};
export default FormularioPrueba;
```

De este modo será la **API** de *React* la que controle la información del formulario y, al cambiar su estado, se producirá un redibujado del componente como respuesta de la forma tradicional.
