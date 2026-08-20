# 6.1 Asynchronous JavaScript And XML (AJAX)

Uno de los usos más comunes en *JavaScript* es **AJAX** (*Asynchronous JavaScript And XML*), técnica (que no lenguaje) que permite realizar peticiones **HTTP** al servidor desde *JavaScript* y recibir la respuesta sin recargar la página ni cambiar a otra página distinta. La idea de la comunicación asíncrona es enviar la solicitud de datos fuera del proceso principal de ejecución, es decir, en otro nuevo que se ejecuta en paralelo. Por este motivo es necesario especificar qué debe hacer ese hilo con la información una vez recibida, ya que el proceso general no esperará a que termine la tarea, sino que seguirá avanzando sin demora.

Todo esto se realiza a través de la combinación de varias tecnologías de forma simultánea:

- `XHTML` y `CSS` para la presentación de la página, 
- la *API* de *DOM* para la manipulación dinámica de elementos de la página,
- formatos de intercambio de información como **JSON** o **XML**,
- el objeto `XMLHttpRequest` para el intercambio asíncrono de información,
- *JavaScript* para aplicar las anteriores tecnologías.

El proceso que sigue es la siguiente:

![](/images/ut06_10000000000001AD0000014A338C7BBD.png)

*JavaScript*, a través del objeto `XMLHttpRequest`, realiza una petición al servidor, que contesta enviando la información en un formato de intercambio de datos, generalmente **JSON**,

Las aplicaciones web **AJAX** reducen la cantidad de información a intercambiar (no se envía la página entera, sino que se modifica sólo lo que interesa) y a su vez al usuario final obtiene un mayor dinamismo viendo una página web como una aplicación de escritorio.
