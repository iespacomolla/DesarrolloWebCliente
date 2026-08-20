# 3.1.2 Objeto predefinido String

El uso de este objeto, como el de muchos otros de este apartado, queda relegado a situaciones muy concretas ya que cuando se crea una cadena de texto primitiva, *JavaScript* utiliza automáticamente el autoboxing u *object wrapper* que relaciona el valor primitivo con su objeto (si existe), de ese modo un valor primitivo puede utilizar las propiedades y métodos del objeto `string` sin necesidad de crear uno. Esto es útil porque ayuda a realizar múltiples operaciones con cadenas de una manera rápida y sencilla ahorrando el consumo de memoria de crear el objeto entero. Utilizando en *object  wrapper* se crea el método invocado desde el valor primitivo y se destruye tras finalizar su uso.

Pero volviendo al objeto que nos ocupa, hay que tener en cuenta que los métodos de manipulación de cadenas de *JavaScript* no modifican al objeto actual, sino que **devuelven el objeto resultante de aplicar la modificación**. Si se necesita que la modificación se aplique sobre la misma cadena que estamos trabajando, se hará algo así:

```javascript
cadena=cadena.metodoQueModificaCadena();
```

En este objeto hay una propiedad muy importante llamada length que indica cuantos lementos  (caracteres) tiene la cadena. Además existen una serie de métodos muy útiles:

- `toLowerCase()` y `toUpperCase()`, devuelve la cadena convertida a minúsculas/mayúsculas,
- `concat(cadena)` devuelve el objeto con el valor de cadena concatenado al final,
- `charAt(posición)`, devuelve el carácter que se encuentre en la posición solicitada. Se debe tener en cuenta que las posiciones comienzan a contar desde cero,
- `indexOf(texto, [indice])`, devuelve la primera posición donde se encuentra el texto buscado, empezando a buscar desde la posición indice. Si no se indica, se toma por defecto el valor 0,
- `lastIndexOf(texto, [indice])`, como la anterior, busca hacia atrás la primera ocurrencia del texto buscado. Si no se indica el valor de indice, se busca desde el final,
- `replace(texto1,texto2)`, busca la cadena `texto1` y las reemplaza por `texto2`,
- `split(caracter, [trozos])`, separa la cadena mediante   un separador. Trozos indica el máximo de separaciones. Si no se indica, se harán todas las separaciones posibles,
- `substring(inicio, [fin])`, devuelve la subcadena comprendida entre la posición inicio y fin. Si
  fin no se indica, se toma como valor el final de la cadena,

```javascript
let cad = "Feo:De Verdad:654875214";
let tfo;
cad = cad.toUpperCase();
console.log(cad);
splitTodosCampos = cad.split(":");
split1Campo = cad.split(":", 1);
console.log(splitTodosCampos);
console.log(split1Campo);
tfo = splitTodosCampos[2];
tfo = tfo.replace("3", "9"); // Cambia en el teléfono los treses por nueves.
console.log(tfo);
console.log(tfo.charAt(4)); // Muestra el quinto número del teléfono.
```
