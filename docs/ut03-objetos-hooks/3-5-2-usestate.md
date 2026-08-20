# 3.5.2 El hook de estado: useState

Las propiedades de un componente no es un concepto ajeno a estas alturas ya que guarda muchas similitudes con los parámetros de una función, sin embargo, el concepto de **estado de la información** sí que puede ser nuevo. Se trata de la información que está entera y únicamente gestionada por el componente y que dicta su comportamiento, es decir, si se produce un cambio en esta información, el componente será dibujado (renderizado) de nuevo. Además, este estado lleva asociado una función (a modo de respuesta al evento) que es la encargada de modificarlo de manera exclusiva.

```jsx
import React, { useState } from 'react';
const MostrarTexto = () => {
  const [texto, setTexto] = useState(false);
  return (
    <div>
      <button type="button" onClick={() => setTexto(true)}>Mostrar Texto</button>
      <h1>{texto && ¡Se muestra el texto!}</h1>
    </div>
  );
}

export default MostrarTexto;
```

El componente `MostrarTexto` tiene un botón y una etiqueta `<h1>`, que depende del valor de la variable `texto` para ser visible. Hasta aquí nada nuevo.

Sin embargo, en la primera parte del componente, se ha utilizado el `useState`. En primer lugar se declaran dos variables utilizando *array destructuring*: la primera, `texto`, representa el estado del componente; la segunda, `setTexto`, representa la función con la que cambiaremos el valor de ese estado (lo que en un componente de clase se haría con `this.setState({...})`. Además, se le ha asignado un valor inicial (`false`).

Finalmente, se usa una respuesta para el evento `onClick` del botón que cambia el estado al valor `true`, lo que permite que se muestre el texto.
