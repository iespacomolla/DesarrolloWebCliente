# 7.2.2 Herencia

*JavaScript* es un lenguaje de *herencia prototipada* lo que significa que un objeto puede heredar directamente propiedades de otro objeto a partir de su prototipo sin necesidad de crear clases.

Si es necesario heredar entre objetos el proceso se realiza en dos pasos:

- Heredar el constructor

Para ello el hijo debe realizar una llamada al padre y definir sus propios atributos. Por ejemplo, para crear un objeto Empleado que se base en Persona pero añadiendo el campo cargo con el puesto laboral del empleado:

```javascript
var Empleado = function(nombre, apellido1, cargo) {
    Persona.call(this, nombre, apellido1); // Hereda de Persona.
    this.cargo = cargo; //Se añade una nueva propiedad.
};
```

Se llama al constructor del padre mediante `call` para que `this` tome el valor del hijo.

- Heredar el prototipo

Una vez heredado el constructor, se necesita heredar el prototipo para compartir los métodos y si fuese el caso sobrescribirlos. Se usa `Object.create(prototipo, propiedades)`, por lo que habrá que añadir la siguiente línea de código después del constructor:

```javascript
Empleado.prototype = Object.create(Persona.prototype);
```

En programación web no es muy utilizada la herencia, pero sí lo es en otros ámbitos por lo que es interesante conocer estos procesos. Para simplificarlos se ha modificado la sintaxis de modo que se parezca más a la de un lenguaje basado en objetos, tal y como se verá a continuación.

### Herencia con clases

A partir de **ECMAScript** se puede extender clases de forma muy similar a como se hace en otros lenguajes de programación como *Java* utilizando la palabra reservada extends:

```javascript
class Padre {
    tarea() {
        console.log("Tarea del padre.");
    }
}

class Hijo extends Padre {
    constructor() {
    super();
}
// Posee el método tarea() heredado.
}
var feo = new Hijo();
feo.tarea(); // Tarea del padre.
```

La palabra clave `super()` hace referencia a la `superclase`, es decir, a la clase padre. Se debe indicar de forma obligatoria en el constructor de las clases hijas que extienden de un padre. No obstante, también se pueden utilizar en métodos para llamar de forma opcional u obligatoria a métodos del padre para que hagan tareas complementarias o parciales:

```javascript
class Padre {
    tarea() {
        console.log("Tarea del padre.");
    }
};

class Hijo extends Padre {
    tarea() {
        super.tarea();
        console.log("Tarea del hijo.");
    }
};
```

En el caso del ejemplo anterior la clase hijo tiene un método `tarea()` que sobrescribe el método homónimo del padre realizando únicamente el código indicado en esa clase hija. Sin embargo, si se indica `super.tarea()` (donde tarea es el nombre del método de la clase padre), esto llamará y ejecutará el método de la clase padre y, al terminar, continua realizando el código del método de la clase hija.
