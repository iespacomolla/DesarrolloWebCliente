# 4.1.1 Objeto window

El objeto `window` es el objeto raíz (global) del navegador. Mediante él se puede:

- abrir una nueva ventana con `window.open()`. Si se hace de   este modo el propio navegador bloqueará su apertura tal como sucede   con las ventanas emergentes de publicidad. En la actualidad se   realizan aplicaciones web con una única ventana por lo que no se utiliza demasiado,
- cerrar una ventana mediante `window.close()`,
- mostrar mensajes de alerta, confirmación y consulta mediante `window.alert(mensaje)`, `window.confirm(mensaje)` y `window.prompt(mensaje [,valorPorDefecto])`.

Ya no se utilizan muchos estos métodos y de hacerlo es posible omitir la palabra window ya que siempre hará referencia a la única ventana que está abierta.