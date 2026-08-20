# 5.1.4 El objeto event

Cuando se crea una función como respuesta al producirse el evento el navegador automáticamente manda como parámetro un objeto de tipo `event`.

```javascript
mostrarMensaje = (evento) => {
  console.log(evento.type);
}
```

Este objeto posee cierta información útil del evento que se ha producido. Sus atributos más destacados son:

- `type`, tipo de evento que es. Devuelve el nombre del evento tal cual, sin el `on`,
- `keyCode`, almacena el código de tecla de la tecla afectada por el evento,
- `clientX/clientY`, devuelve las coordenadas `X` e `Y` donde se encontraba el ratón, tomando como referencia al navegador,
- `screenX/screenY`, devuelve las coordenadas `X` e `Y` donde se encontraba el ratón, tomando como referencia la pantalla del ordenador.

```javascript
const mostrarMensaje => (evento){
  if(evento.type==="keyup"){
    console.log(evento.keyCode);
  } else if(evento.type==="click") {
    console.log(evento.clientX+" "+evento.clientY);
  }
}

document.getElementById("miObjeto").onclick=mostrarMensaje;
document.onkeyup=mostrarMensaje;
```
