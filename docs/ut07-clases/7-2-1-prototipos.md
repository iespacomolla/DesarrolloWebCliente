# 7.2.1 Prototipos

Los **prototipos** permiten definir propiedades y funcionalidades que se aplicarán a todas las instancias del objeto, es decir, es un objeto que se usa como fuente de las propiedades. Así pues, cuando un objeto recibe una petición de una propiedad que no contiene buscará la propiedad en su prototipo. Si no lo encuentra buscará en el prototipo del prototipo y así sucesivamente.

A nivel de código todos los objetos contienen una propiedad `prototype` que inicialmente referencia a un objeto vacío. Esta propiedad no sirve de mucho hasta que la función se usa como un constructor.
Por defecto todos los objetos tienen como prototipo raíz `Object.prototype` el cual ofrece algunos métodos que comparten todos sus objetos instanciados, como por ejemplo `toString`. Es posible averiguar el prototipo de un objeto podemos usar la función `Object.getPrototypeOf(objeto)`.

Al llamar a una función mediante la instrucción `new` provoca que se invoque como un constructor. El constructor asocia la variable `this` al objeto creado y, a menos que se indique lo contrario, la llamada devolverá este objeto. Cada instancia creada con este constructor tendrá este objeto como su prototipo. Con lo que para añadir nuevos métodos al constructor se han de añadir como propiedades del prototipo.

```javascript
var Persona = function(nombre, apellido1) {
    this.nombre = nombre;
    this.apellido1 = apellido1;
}
Persona.prototype.getNombreCompleto = function() { // Se añade al prototipo de Persona.
    return this.nombre + " " + this.apellido1;
};
Persona.prototype.saluda = function(persona) {
    return typeof persona.getNombreCompleto !== "undefined"
    ? `Hola ${persona.getNombreCompleto()}`
    : `Hola colega`;
}

var persona = new Persona("Feo", "De Verdad"),
persona2 = new Persona("Bruce", "Wayne");
console.log(persona.saluda(persona2)); // Hola Bruce Wayne.
console.log(persona.saluda({})); // Hola colega.
console.log(persona.saluda({ getNombreCompleto: "Clark Kent" })); // Hola colega.
```

Una vez definido el prototipo de un objeto, las propiedades del prototipo se convierten en propiedades de los objetos instanciados. Su propósito **es similar al uso de clases** dentro de un lenguaje clásico orientado a objeto. De hecho, el uso de prototipos en *JavaScript* se plantea para poder compartir código de manera similar al paradigma orientado a objetos.
