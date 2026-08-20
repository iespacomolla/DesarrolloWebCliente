# 6.2 El objeto XMLHttpRequest

La primera versión de la interfaz ***XMLHttpRequest*** fue desarrollada por Microsoft que la introdujo en la versión 5.0 de Internet Explorer. Este objeto permite realizar las llamadas asíncronas al servidor a través de sus métodos:

- `abort()`, cancela la petición en curso,
- `getAllResponseHeaders()`, devuelve el conjunto de cabeceras **HTTP** como una cadena,
- `getResponseHeader(nombreCabecera)`, devuelve el valor de la cabecera **HTTP** especificada
- `send([datos])`, envía la petición,
- `setRequestHeader(etiqueta, valor)`, añade un par etiqueta/valor a la cabecera **HTTP** a  enviar,
- `open(método, URL, [asíncrono [nombreUsuario [clave]]])`, especifica el método, **URL** y otros atributos opcionales de una petición. El parámetro de método puede tomar los valores **GET**, **POST**, o **PUT**. El parámetro **URL** puede ser una relativa o completa. El parámetro asíncrono especifica si la petición será gestionada asincrónicamente o no. Un valor ***true*** indica que el proceso del *script* continúa después del método ***send()*** sin esperar a la respuesta, y ***false*** indica que el *script* se detiene hasta que se complete la operación tras lo cual se reanuda la ejecución. En el caso asíncrono se especifican la respuesta de eventos que se ejecutan ante cada cambio de estado y permiten tratar los resultados de la consulta una vez que se reciben o bien gestionar errores.

,**atributos**:

- `response`, contenido de la respuesta con el formato indicado(`responseType`),
- `responseType`, define el tipo de respuesta de response (por defecto `text`),
- `responseText`, devuelve la respuesta como una cadena,
- `responseXML`, devuelve la respuesta como **XML**. Esta propiedad devuelve un objeto documento **XML** que puede ser examinado usando las propiedades y métodos del árbol del *Document Object Model*,
- `withCredentials`, indica si la ha realizado con usuario y contraseña,
- `status`, devuelve el estado como un número (**404** para *Not Found* y **200** para *OK*),
- `statusText`, devuelve el estado como una cadena (*Not Found* u *OK*),
- `readyState`, devuelve el estado del objeto:
  - ***0*** = sin inicializar (no se ha ejecutado todavía `.open()`),
  - ***1*** = abierto (se ha ejecutado `.open()` pero no `.send()`),
  - ***2*** = cabeceras recibidas (se ha ejecutado `.send()`),
  - ***3*** = cargando (se están transfiriendo datos) y
  - ***4*** = completado (transferencia de datos finalizada).

y **eventos**:

- ***onreadystatechange***, se dispara en cada cambio de estado,
- ***onabort***, al abortar la operación,
- ***onload***, al completar la carga,
- ***onloadstart***, al iniciar la carga y
- ***onprogress***, se dispara periódicamente con información de estado.

**6.2.1 Uso del objeto *XMLHttpRequest***

En primer lugar se inicializa el objeto:

```javascript
httpRequest = new XMLHttpRequest();
```

Esto es válido para la mayoría de navegadores actuales. Si es necesaria la compatibilidad con navegadores antiguos que soporte *ActiveX* (tipo *Internet Explorer 6*) se puede hacer una función más compleja para obtener el objeto:

```javascript
function obtainXMLHttpRequest() {
  let httpRequest;
  if (window.XMLHttpRequest) { // El explorador implementa la interfaz de forma nativa.
  httpRe  quest = new XMLHttpRequest();
  } else if (window.ActiveXObject) { // El explorador permite crear objetos ActiveX.
    try {
      httpRequest = new ActiveXObject("MSXML2.XMLHTTP");
    } catch (e) {
    try {
      httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {}
    }
  }
  // Si no se puede crear, se devuelve false. En caso contrario, se devuelve el objeto.
  return !httpRequest ? false : httpRequest;
}
```

Una vez creado el objeto, se abre la conexión con el servidor, se configura, se hace la solicitud y se mantiene a la espera hasta su respuesta:

```javascript
httpRequest.open("GET","<https://swapi.dev/api/planets",true>); // Se abre la conexión.
httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
httpRequest.onreadystatechange = () => { // Comportamiento de onreadystatechange.
  if (httpRequest.readyState == 1) {// Si la comunicación está abierta.
    console.log("Cargando...");
  if (httpRequest.readyState == 4 && httpRequest.status == 200){// Si se ha completado.  
    console.log(JSON.parse(httpRequest.response)); // Respuesta por la consola.
  }
};

httpRequest.send(); // Se envía la acción y la información (opcional) al servidor.
```

Si es necesario el envío de datos al servidor primero habrá que formatear esa información con el formato `var datos = "parametro=valor&otro_parametro=otro_valor";`, o si viene desde un formulario `var datos = new FormData(formulario)` o desde un `JSON` con var `jsonObj = JSON.parse(misDatos);`.
