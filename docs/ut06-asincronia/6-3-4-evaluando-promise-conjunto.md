# 6.3.4 Evaluando promise en conjunto

El prototipo de *promise* dispone de varias funciones que permiten evaluar varios objetos de este tipo juntos y devolver un conjunto de datos dentro de una promesa en función de su resolución:

- `all()`, que devuelve una promesa que se resolverá cuando todas las promesas pasadas como argumentos sean resueltas. Si una se rechaza, la promesa devuelta estará rechazada y mostrará los motivos del rechazo de la primera *promise* rechazada. Devolverá un objeto iterable con   el resultado de las *promise* pasadas como argumento,
- `allSettled()`, resolverá una *promise* cuando todas las promesas estén en estado *settled*, independientemente de si han sido resueltas o rechazadas,
- `any()`, resuelve una *promise* cuando alguna de ellas esté en estado de *fulfilled*   (completada), será rechazada si todas ellas han sido *rejected*,
- `race()`, resuelve una *promise* con el resultado de la primera en estar *settled* (resuelta), ya sea resuelta o rechazada.

De este modo es posible hacer varias solicitudes simultáneamente y obrar en consecuencia. Hay que tener en cuenta que todas estas funciones reciben como parámetro un objeto iterable, comúnmente un *Array* o una colección de objetos *promise*.

```javascript
var p1 = new Promise((resolver, rechazar) => {
  setTimeout(() => resolver("Uno"), 1000);
});
var p2 = new Promise((resolver, rechazar) => {
  setTimeout(() => resolver("Dos"), 2000);
});
var p3 = new Promise((resolver, rechazar) => {
  setTimeout(() => resolver("Tres"), 3000);
});
Promise.all(\[p1, p2, p3\]).then((values) => {
  console.log(values); // Array(3) ["Uno", "Dos", "Tres"]
}).catch((error) => {
  console.error(error.message);
});
```
