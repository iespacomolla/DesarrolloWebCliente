# 3.2 JavaScript Object Notation (JSON)

`JSON` (acrónimo de *JavaScript Object Notation*) es un formato de texto sencillo para el intercambio de datos. Se trata de un subconjunto de la notación literal de objetos de *JavaScript*, aunque, debido a su amplia adopción como alternativa a `XML`, se considera un formato independiente del lenguaje.

Un formato del objeto `JSON` es un par de llaves que rodean cero o más parejas de clave:valor separados por comas, donde cada clave se considera como un propiedad/método. Se estructura de la siguiente manera:

```javascript
let nadie = {};
let persona = {
    nombre: "Feo",  
    apellido1: "De Verdad",
    direccion: {  // Puede haber JSON anidados.
        calle: "La de siempre",
        numero: 5,
        telefono: 123456789,
    }
}; // Todo objeto JSON finaliza con un punto y coma ( ; ).
```

La propiedad y el valor se separan con dos puntos y cada una de las propiedades con una coma. Para recuperar un campo, además de la notación de punto, se puede acceder a cualquier propiedad usando la notación de corchetes:

```javascript
let nom = persona.nombre;
let ape1 = persona["apellido1"];
let nombreCompleto = persona.nombre + persona.apellido1;
let calle = persona.["direccion"]["calle"];
let calle2 = persona.direccion.calle; // Segunda forma de acceso.
```

Es posible declarar una función que devuelva un objeto (a modo de constructor):

```javascript
const creaPersona =>(nom, ape1) {
    return {
        nombre: nom,
        apellido1: ape1,
        direccion: {
            calle: "La de siempre",
            numero: 5
            telefono: 123456789
        },
        getNombreCompleto: function() {
            return `${this.nombre} ${this.apellido1}`;
        },

        saluda: function(persona) {
            if (typeof persona.getNombreCompleto !== "undefined") {  
                return "Hola " + persona.getNombreCompleto();
            } else {
                return "Hola colega";
            }
        }
    };
};

let persona = creaPersona("Feo", "De Verdad"),
persona2 = creaPersona("Bruce", "Wayne");
persona.saluda(persona2); // Hola Bruce Wayne.
persona.saluda({}); // Hola colega.
```

Una propiedad de `JSON` también puede contener funciones, ya que son objetos y se pueden almacenar sin problemas.

Más información sobre el formato [aquí](https://www.w3schools.com/js/js_json.asp).
