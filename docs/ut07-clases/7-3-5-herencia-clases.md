# 7.3.5 Herencia con clases

A partir de *ECMAScript* se puede extender clases de forma muy similar a como se hace en otros lenguajes de programación como *Java* utilizando la palabra reservada extends:

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

La palabra clave `super()` hace referencia a la **superclase**, es decir, a la clase padre. Se debe indicar de forma obligatoria en el constructor de las clases hijas que extienden de un padre. No obstante, también se pueden utilizar en métodos para llamar de forma opcional u obligatoria a métodos del padre para que hagan tareas complementarias o parciales:

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
