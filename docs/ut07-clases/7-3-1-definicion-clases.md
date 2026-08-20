# 7.3.1 Definición de clases con class

La palabra reservada `class` es un tipo de función, pero en lugar de usar la palabra clave function, se utiliza la palabra `class` y las propiedades son asignadas usando el método `constructor()` que, como es habitual en otros lenguajes, sólo existe uno por clase y siempre se ejecuta al construir el objeto.

```javascript
class TarjetaFelicitacion {
    constructor(mensaje) { // Constructor que se inicializa con un mensaje asociado
        this.mensajeTarjeta = mensaje; // a una tarjeta de felicitación.
    }
    getMensaje(nombre) { // Recibe el destinatario y devuelve un mensaje personalizado.
        return `${nombre}, tengo este mensaje para ti ${this.mensajeTarjeta}`;
    }
};
```

Para usar esta clase:

```javascript
miTarjeta = new TarjetaFelicitacion("¡Feliz cumpleaños!"); //Se instancia con un mensaje.
document.getElementById("miDiv").innerHTML = miTarjeta.getMensaje("Carlos");
// Se obtiene el mensaje generado y se introduce en el HTML de miDiv.
```