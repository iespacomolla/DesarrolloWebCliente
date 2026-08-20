# 4.7 Virtual DOM en React

El **DOM** (*Document Object Model*) es la representación gráfica del documento de la aplicación web creada por el navegador, sobre la cual, éste aplica los cambios necesarios en cada actualización de estado o evento.

El **DOM** posee una estructura de diagrama de árbol y al cambiar algún elemento o nodo todos su elementos hijos serán dibujados (renderizados) nuevamente independientemente de si han sido modificados o no. Este modo de actualización puede ser costoso desde el punto de vista del rendimiento si existen muchos elementos hijos y puede ser un problema para aplicaciones muy complejas, especialmente si son cargadas en equipos con bajo rendimiento.

El **Virtual DOM** es una representación del **DOM** guardada en memoria que actúa de intermediario entre los estados de la aplicación y los estados del **DOM** (vistos por el/la usuario/a). Cuando ocurre un cambio en la aplicación web, el **Virtual DOM** interpreta dichos cambios y calcula la manera más eficiente de actualizar el **DOM** para dibujar la menor cantidad de cambios posibles.

En cada actualización de la aplicación el proceso sigue los siguientes pasos:

- cambio de estado, se produce un cambio en el estado de algún nodo o elemento lo que genera un **Virtual DOM**,
- cómputo de cambios, **React** compara la diferencia entre el estado del **Virtual DOM** y el **DOM** del navegador y detecta los cambios
  producidos,
- re-dibujado (*re-render*), se definen los cambios en el **DOM** y la interfaz es actualizada.

La ventaja principal de utilizar **Virtual DOM** como intermediario es que modifica sólo aquellos nodos donde se han producido los cambios ahorrando recursos de procesamiento y brindando una experiencia de usuario más fluida.
