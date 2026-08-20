# 3.5 Estados en React

Uno de los principales retos en programación es manejar datos que cambian a lo largo del tiempo y garantizar que la interfaz de usuario se actualice de manera coherente. **React** ofrece un mecanismo muy eficiente para resolver este problema: el `state`.

El `state` en **React** puede entenderse como un objeto interno y dinámico que almacena información relevante para un componente. A diferencia de las `props`, que son inmutables y se reciben desde un componente padre, el state es propiedad privada de un componente y
puede modificarse durante su ciclo de vida (concepto que se abordará en la siguiente unidad).

La razón principal para usar el `state` en **React** es que permite crear interfaces dinámicas e interactivas. Si una aplicación solo mostrara información estática, bastaría con usar `HTML` y `props`. Sin embargo, en aplicaciones reales, la información cambia constantemente: un usuario que inicia sesión, un formulario que se rellena, una lista de
productos que se filtra, etcétera.

El `state` permite manejar estas variaciones de forma eficiente ya se encarga de dibujar el componente automáticamente cada vez que el estado cambia. Esto asegura que la interfaz siempre refleje los datos actuales, sin necesidad de manipular directamente el `DOM` como se haría en *JavaScript* tradicional (como se verá en lo sucesivo).

Por lo tanto, un componente es capaz de manejar dos tipos de información: `props` (inmutable y que lo recibe de un componente padre), y `state` (mutable y confinado dentro del componente). Pero, ¿cuándo usar `props` y cuándo `state`? Hay que tener en cuenta que un componente se comporta como una función determinista, es decir, pura. Una función con estas características no modifica los parámetros de entrada.

Teniendo esto en mente:

- en cuanto a las propiedades de un objeto (`props`),
  - son los atributos que se envían desde el exterior del componente,
  - son de sólo lectura, por lo que nunca deben modificarse (funciones     puras).
- en cuanto al estado de la información (`state`),
  - es un objeto de propiedades (clave = valor), un array o un valor primitivo, que es  privada y que son controlados completamente por el componente,
  - se utilizan para obtener datos cliente-servidor ajenos al componente,
  - no se recomienda agregar un estado si no va a afectar al `DOM`, para el manejo de propiedades internas es mejor utilizar variables tradicionales,
  - todo estado lleva asociado una función que se utilizará para actualizar su valor, nunca se modificará directamente el valor del estado, esto no provocaría un redibujado del componente,
  - cuando se actualiza un estado, **React** vuelve a procesar el componente y sus elementos. Es importante saber que se puede retrasar la actualización del componente esperando a que otros puedan ser afectados, por lo que no se garantiza que los cambios de estado sean inmediatos.
