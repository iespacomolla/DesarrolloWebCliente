# 6.3.3 Encadenamiento de promise

La ventaja de utilizar este objeto es que existe la posibilidad de encadenar promesas con la particularidad que se resolverán o se rechazarán en orden y siempre esperando a la anterior. Cuando la primera ***promise*** se completa devuelve el resultado a la subsiguiente creando, de este modo, una sucesión de *callbacks* ordenada.

```javascript
new Promise((resolver, rechazar) => {
    setTimeout(() => {
        return resolver(1);
    }, 1000);
    }).then((res_p1) => {
        console.log(res_p1);
        return res_p1 + 1;
    }).then((res_p2) => {
        console.log(res_p2);
        return res_p2 + 1;
    }).then((res_p3) => {
        console.log(res_p3);
        return res_p3 + 1;
    }).catch(() => {
        console.log("Se ha producido un error.");
    }).finally(() => {
        console.log("Proceso de encadenamiento de promesas terminado.");
});
```

El flujo es el siguiente:

1. la promesa inicial se resuelve en un segundo y resuelve (devuelve) el valor 1,
2. se llama al siguiente `.then()` que recibe lo que ha resuelto (devuelto) la primera promise y actúa en consecuencia, en este ejemplo imprime por consola el valor y lo incrementa en uno. Al final, devuelve el valor del incremento.
3. el siguiente `.then()` obtiene el resultado del anterior, hace lo que deba hacer con él y pasa el resultado de sus acciones al siguiente `.then()`,
4. y así sucesivamente hasta el último `.then()` o se produzca un error, en tal caso se ejecutará el código contenido en el `.catch()`,
5. por ultimo, el código contenido en `.finally()` se ejecutará cuando el proceso haya terminado, independientemente si ha sido resuelto o rechazado.

A medida que el resultado se pasa a lo largo de la cadena de manejadores ( `.then()` ), se espera ver en la consola: **1 → 2 → 3** → Proceso de encadenamiento de promesas terminado. En caso de error, la salida esperada sería lo contenido en el manejador `.catch(): Se ha producido un error → Proceso de encadenamiento de promesas terminado`, independientemente de la promesa que haya fallado.

Es buena idea acostumbrarse a esta sintaxis ya que el encadenamiento de ***promise*** se utilizará profusamente con la **API** ***fetch***, como se verá en lo sucesivo.
