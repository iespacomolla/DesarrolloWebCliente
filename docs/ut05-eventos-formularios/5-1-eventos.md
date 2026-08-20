# 5.1 Eventos

Los eventos permiten asociar código a ciertas acciones que ocurren en el navegador para que cuando se produzcan (evento) se ejecute una función (respuesta al evento). Entre ambos se encuentra el manejador del evento que decide, en base a una lógica muy simple, si la respuesta (función) se ejecuta o no: si un manejador devuelve `true` (o no devuelve nada), se realiza el evento asociado. Si el manejador devuelve `false`, se cancela el evento y no se ejecuta la función asociada.

![image](/images/ut05_1000000000000224000000F0CEA77708.png)

Los eventos más usados en *JavaScript* son:

- `onFocus`, al obtener un foco,
- `onBlur`, al salir del foco de un elemento,
- `onChange`, al hacer un cambio en un elemento,
- `onClick`, al hacer un clic en el elemento,
- `onDblClick`, al hacer doble clic en un elemento,
- `onKeyDown`, al pulsar una tecla (sin soltarla),
- `onKeyUp`, al soltar una tecla pulsada,
- `onKeyPress`, al pulsar una tecla,
- `onLoad`, al cargarse una página,
- `onunLoad`, al descargarse una página (salir de ella),
- `onMouseDown`, al hacer clic de ratón (sin soltarlo),
- `onMouseUp`, al soltar el botón del ratón previamente pulsado,
- `onMouseOver`, al entrar encima de un elemento con el ratón,
- `onMouseOut`, al salir de encima de un elemento con el ratón,
- `onSubmit`, al enviar los datos de un formulario,
- `onReset`, al reiniciar los datos de un formulario,
- `onSelect`, al seleccionar un texto,
- `onResize`, al modificar el tamaño de la página del navegador.

Más información sobre los eventos: [aquí](https://developer.mozilla.org/es/docs/Web/Events).
