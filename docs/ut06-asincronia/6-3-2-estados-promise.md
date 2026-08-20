# 6.3.2 Estados de promise

Nada más comenzar una promesa está en un estado **pendiente** (*pending*). Al finalizar, su estado será **completada** (*fulfilled*) lo que implica que la tarea se ha realizado/resuelto o **rechazada** (*rejected*) si la tarea no se completó. Una vez que una promesa se completa o se rechaza se mantendrá en dicho estado para siempre (*settled*) y sus *callbacks* nunca se volverán a disparar. Una promesa sólo puede completarse o rechazarse **una vez**. Tanto el estado como cualquier valor dado como resultado no se pueden modificar.

![Figura : Estados de una Promesa](/images/ut06_10000000000001EC000000FBA7507D15.jpg)

No hay que confundir completada con exitosa ya que una promesa se puede completar pero contener un error o puede no completarse porque el/la usuario/a cancelase la petición incluso sin ocurrir ningún error.