# 7.1.1 Propiedades

Un objeto es un contenedor de propiedades (cada propiedad tiene un nombre y un valor) y son útiles para coleccionar y organizar datos. Los objetos pueden contener otros objetos, lo que permite estructuras de grafo o árbol.

Para añadir propiedades a un objeto hay que asignarle un valor utilizando el operador `.` (nomenclatura de punto) para indicar que la propiedad forma parte del objeto.

```javascript
var persona = new Object();
persona.nombre = "Feo";
persona.apellido1 = "De Verdad";
```

Para averiguar si un objeto contiene un campo se usa el operador `in`. Si es necesario eliminar una propiedad de un objeto se utiliza el operador `delete`:

```javascript
console.log('nombre' in persona); // true
delete persona.nombre;
console.log('nombre' in persona); // false
```

Si las **propiedades del objeto han de ser privadas**, sólo hay que declararlas como variables dentro del objeto. Por contra, si no se declaran las propiedades pasan a ser públicas. Hay que recordar que si las propiedades de un objeto son privadas siempre será necesario implementar los métodos `set` y `get` para controlarlas.

Si es necesario ocultar parte del funcionamiento de una clase, es decir, hacer métodos o propiedades privados, sólo hay que añadir el carácter `#` delante del nombre. Hay que tener cuidado ya que esto no está todavía soportado por algunos navegadores. Si se trata de acceder desde fuera de la clase se obtendrá un error similar a este: “*Uncaught SyntaxError: Private field '#soyFeo' must be declared in an enclosing class*”
