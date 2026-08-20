# 5.1.3 Esperar a la carga

Es buena idea comenzar a ejecutar código cuando se haya acabado de cargar una página HTML. Si se escribe código *JavaScript* que se ejecute al iniciar la página pero no se espera a que la página está completamente cargada, es posible obtener errores del estilo de **no encuentro el elemento X del DOM** ya que el código *JavaScript* se ha ejecutado antes de la carga de dicho elemento.

Para evitar esta situación se utiliza el evento `onLoad` del objeto `document`. Cuando se produce este evento todos los elementos que forman la página web ya han sido cargados:

```javascript
document.addEventListener('DOMContentLoaded', () > {
    // Todo el código JavaScript aquí.
});
```

De este modo habrá que esperar al evento `DOMContentLoaded` para ejecutar el código que contiene, y este evento sólo ocurrirá cuando todos los objetos del **DOM** estén cargados.

También es posible esperar al evento `onload` del objeto `window`, el cual indica que todos los objetos de ventana (no sólo el document) han sido cargados:

```javascript
window.onload = () > {
    // Todo el código JavaScript aquí.
};
```
