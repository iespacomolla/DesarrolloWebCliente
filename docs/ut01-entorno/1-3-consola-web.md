# 1.3 La consola web

## La consola web

La mayoría de los navegadores incorporan de manera nativa herramientas para facilitar el desarrollo, aunque una de las que más se utilizarán en este manual será la consola web. El uso de extensiones de navegador y *plugins* permite ampliar las funcionalidades de esta consola, pero no serán necesarios para el correcto desarrollo de este manual.

Tanto en *Mozilla Firefox* como en *Google Chrome* se accede a la consola web pulsando la tecla `F12`.

En el desarrollo de este manual se usará el objeto ***console*** para mostrar resultados (también se podría usar ***alert*** pero es más molesto). Este objeto no es parte del lenguaje, pero sí del ntorno y está presente en la mayoría de los navegadores ya sea en las herramientas del desarrollador en el inspector web.

Así pues, dentro de la consola se podrá visualizar los mensajes que se envíen así como ejecutar comandos *JavaScript*.

Los métodos que más se van a usar con la **API** de ***console*** son:

- ***log()***, muestra por la consola todos los parámetros recibidos, ya sean cadenas u objetos,
- ***info()***, ***warn()*** y ***error()*** muestran mensajes representados con varios colores,
- ***dir()***, enumera los objetos recibidos e imprime todas sus propiedades,
- ***assert()***, permite comprobar si se cumple una aserción booleana,
- ***time()*** y ***timeEnd()***, calcula el tiempo empleado entre las dos instrucciones.

Por ejemplo, si se ejecuta el siguiente código:

```javascript
console.log([1,2,3]);
```

se obtendrá:

![image](/images/ut01_10000000000003980000017C9C170EDF.png)

Más información del uso de ***console*** [aquí](https://developer.mozilla.org/en-US/docs/Web/API/console).

Además de ***console***, existen otros métodos para interactuar con el/la usuario/a a través del navegador:

- ***alert()*** permite mostrar información literal o el contenido de variables en una ventana independiente. La ventana contendrá la información a mostrar y el botón Aceptar.

```javascript
alert("Hola mundo");
```

- ***confirm()*** se activa un cuadro de diálogo que contiene los botones **Aceptar** y **Cancelar**. Cuando el/la usuario/a pulsa el botón **Aceptar** este método devuelve el valor ***true***; el botón **Cancelar** devuelve el valor ***false***. Con ayuda de este método el/la usuario/a puede decidir e influir de ese modo directamente en el programa.

```javascript
let respuesta;
respuesta = confirm("¿Desea cancelar la suscripción?");
alert("Usted ha contestado que "+respuesta);
```

- ***prompt()*** abre un cuadro de diálogo en pantalla en el que se pide al/la usuario/a que introduzca algún dato. Si se pulsa el botón **Cancelar** el valor de devolución es ***false***/***null***. Pulsando en Aceptar se obtiene la cadena de caracteres introducida y se guarda para su posterior procesamiento. El segundo parámetro de ***prompt*** (Alicante en este caso) es su **valor por defecto** y es opcional.

```javascript
let provincia;
provincia = prompt("Introduzca la provincia ","Alicante");
alert("Usted ha introducido la siguiente información "+provincia);
console.log("Operación realizada con éxito");
```
