# 5.3 Persistencia de datos local: HTML Web Storage

Es una tecnología de almacenamiento existente en los navegadores modernos. La información se almacena en el cliente y generalmente posee al menos **5 MiB** para guardar información.

Antes de iniciar su uso, sería conveniente comprobar que el navegador soporta esta característica:

```javascript
if (typeof(Storage) !== "undefined") {
// Código para el manejo de datos.
} else {
// Mensaje de tecnología no utilizable.
}
```

Más información [aquí](http://www.w3schools.com/html/html5_webstorage.asp).

Los datos se guardan como `clave=valor`. Para poder acceder al valor se debe conocer el nombre de la clave. Esta estructura es muy básica y reconocible (es la que se usa en `JSON`) lo que permite entender su funcionamiento de manera fácil. Por contra, esa simpleza en su estructura impide realizar un sistema de almacenamiento complejo y eficaz.
