# 6.3 Promise
Las promesas son una característica para gestionar los eventos asíncronos que permiten escribir código más sencillo, *callbacks* más cortos y mantener la lógica de la aplicación de alto nivel separada de los comportamientos de bajo nivel como manejar directamente el objeto
***XMLHttpRequest***.

Una de las ventajas que ofrece esta tecnología es el **encadenamiento** de *callbacks*. Una necesidad común es la de ejecutar dos o más operaciones asíncronas seguidas donde cada operación posterior se inicia cuando la operación previa tiene éxito. Esto se consigue creando una cadena de objetos ***promise***.

Una promise es un objeto que representa un evento único normalmente como resultado de una tarea asíncrona como una llamada ***AJAX***. En la vida real, cuando se va a un restaurante de comida rápida (no lo hagáis) y se pide un menú con hamburguesa, tocino y patatas fritas se está obteniendo una promesa con el número del pedido, porque primero se paga (se hace la solicitud) y se espera recibir la comida (pasan comanda a la cocina).

Esto es un proceso asíncrono el cual inicia una transacción. Mientras se espera a que llamen con nuestra sabrosa hamburguesa se pueden realizar otras acciones, como buscar una mesa o preparar un tuit con lo rica que están las hamburguesas en este restaurante.

Una vez el pedido está preparado llaman con el número del mismo y se recoge, o inesperadamente se ha acabado el tocino y nuestra promesa se cumple pero de forma errónea. Así pues, un valor futuro puede finalizar correctamente o fallar, pero en ambos casos, finalizar.

Hamburguesas aparte, cuando la comunicación con el servidor es síncrona la sucesión de acontecimientos es siempre la esperada: se lanza la petición, se bloquea el navegador, el servidor responde y el navegador actúa en consecuencia en función de la respuesta.

```javascript
let feo = 1;
console.log('A. Se va a sumar uno a la variable feo = ${feo}.');
feo++;
console.log('B. Proceso terminado.');
console.log('C. El valor de feo es: ${feo}.');
```

No hay sorpresas, la respuesta es A, B y C. Con la comunicación asíncrona esto no siempre es así. Las peticiones al servidor se lanzan sin bloquear el proceso principal, por lo que una tarea iniciada más tarde y que necesite la respuesta del servidor, se puede iniciar sin la información necesaria (la del servidor) y fallar irremediablemente.

Además, no se puede prever el tiempo que el servidor tardará en responder de antemano ya que existen muchos parámetros que intervienen en la comunicación y, además, no se sabe si la comunicación llegará a buen término. En el siguiente código se simula una demora con `setTimeout()`:

```javascript
let feo = 1;
console.log('A. Se va a sumar uno a la variable feo = ${feo}.');
setTimeout(() => {
    feo++;
    console.log('B. Proceso terminado.');
}, 1000);
console.log('C. El valor de feo es: ${feo}.');
```

El resultado por consola no es el esperado sino A, C y B. Es aquí donde entran las promesas que son un tipo de objeto que recibe dos parámetros y que ejecutarán o no en función del resultado del código para evaluar, pero siempre responderán:

```javascript
const promesa = new Promise ((resolver, rechazar) => {
// Código a ejecutar de forma asíncrona (puede retrasarse).
    if (true) {
        resolver('Ha funcionado.'); // Resuelve la promesa.
    } else {
        rechazar(new Error('Ha fallado.')); // Rechaza la promesa.
    }
});
```
