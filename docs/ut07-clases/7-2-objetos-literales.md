# 7.2 Objetos literales

Realmente el código no se escribe de este modo. No se crea un `Object` y posteriormente se le asocian propiedades y métodos sino que se simplifica mediante objetos literales.

Los objetos literales ofrecen una notación para crear nuevos objetos valor. Un objeto literal es un par de llaves que rodean cero o más parejas de `clave:valor` separados por comas donde cada `clave` se considera como un/a propiedad/método, de la siguiente manera:

```javascript
var nadie = {};
var persona = {
    nombre: "Feo",
    apellido1: "De Verdad",
    getNombreCompleto: function() {  // Un método es una propiedad de tipo function.
        return this.nombre + " " + this.apellido1;
    }
}; // Todo objeto literal finaliza con un punto y coma ( ; ).
```

La propiedad y el valor se separan con dos puntos y cada una de las propiedades con una coma de forma similar a **JSON**. Para recuperar un campo, además de la notación de punto, se puede acceder a cualquier propiedad usando la **notación de corchetes**:

```javascript
var nom = persona.nombre;
var ape1 = persona["apellido1"];
var nombreCompleto = persona.getNombreCompleto();
var nombreCompletoCorchete = persona["getNombreCompleto"]();
```

Además, una propiedad puede ser, a su vez, un objeto lo que da la posibilidad de objetos y propiedades anidadas:

```javascript
var cliente = {
    nombre: "Bruce Wayne",
    email: "bruce@wayne.com",
    direccion: {
        calle: "Mountain Drive",
        num: 1007,
        ciudad: "Gotham"
    }
};
```

Y se accede a ellas del mismo modo:

```javascript
cliente.nombre = "Bruce Wayne";
cliente.email = "bruce@wayne.com";
cliente["direccion"]["calle"] = "Mountain Drive";
cliente.direccion.num = 1007;
cliente.direccion.ciudad = "Gotham";
```
Para **simular el constructor** de una clase como lo harían el resto de lenguajes, es posible declarar una función constructor que devuelva un objeto:

```javascript
function creaPersona(nom, ape1) {
    return {
        nombre : nom,
        apellido1 : ape1,
        getNombreCompleto : function() {
            return this.nombre + " " + this.apellido1;
        },
        saluda: function(persona) {
            return typeof persona.getNombreCompleto !== "undefined"
            ? `Hola ${persona.getNombreCompleto()}`
            : `Hola colega`;
        }
    }
};

var persona = creaPersona("Feo", "De Verdad"),
persona2 = creaPersona("Bruce", "Wayne");
persona.saluda(persona2); // Hola Bruce Wayne.
persona.saluda({}); // Hola colega.
```
