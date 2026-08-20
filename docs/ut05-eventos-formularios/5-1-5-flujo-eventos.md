# 5.1.5 Flujo de eventos

Hay que tener en cuenta que un elemento del **DOM** que genera un evento puede estar dentro de otro que, a su vez, genera otro evento. A la hora de propagarse existen dos posibilidades al definir su flujo que permite saber cuál es el elemento que va a responder:

- con la **captura de eventos**, al pulsar sobre un elemento se produce una evento de arriba a abajo, desde el elemento window, pasando por `<body></body>` hasta llegar al elemento que lo captura
- en cambio, mediante el **burbujeo de eventos** (*event bubbling*) el evento se produce en el elemento de más abajo y va subiendo hasta llegar al `window`.

Según el siguiente fragmento `HTML`:

```javascript
<html onclick="procesaEvento()">
  <head>
    <title>Ejemplo de flujo de eventos.</title>
  </head>
  <body onclick="procesaEvento()">
    <div onclick="procesaEvento()">Pincha aquí.</div>
  </body>
</html>
```

Cuando se pulsa sobre el texto Pincha aquí que se encuentra dentro del `<div>`, si el navegador sigue el modelo de *event bubbling*, se ejecutan los eventos en el orden que muestra el esquema:

![image](/images/ut05_10000001000001DA000001466FCD5F1B.png)

En cambio mediante la captura de eventos sería:

![image](/images/ut05_10000000000001B200000147DA01C109.png)

El flujo de eventos definido en la especificación **DOM** soporta tanto el burbujeo como la captura, pero la captura de eventos se ejecuta en primer lugar. Los dos flujos de eventos recorren todos los objetos **DOM** desde el objeto `document` hasta el elemento más específico o viceversa.