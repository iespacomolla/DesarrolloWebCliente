# 3.2.2 Encadenamiento opcional (optional chaining)

Cuando se accede a una propiedad de un objeto `JSON` y no existe (o no contiene valor) por defecto se devuelve el valor `undefined`. Esto puede acarrear serios problemas si se espera un valor de forma obligatoria para que el programa siga avanzando. Es posible establecer una comprobación del valor de esa propiedad antes de continuar con la ejecución del programa. Desde ESCMAScript 2015 se ha introducido un operador que permite evitar estas comprobaciones tan tediosas y se utiliza sobre todo en la programación reactiva, pero es interesante tenerlo presente:

```javascript
let calle3 = persona.direccion?.calle; // Sólo accede a calle si dirección existe.
```
