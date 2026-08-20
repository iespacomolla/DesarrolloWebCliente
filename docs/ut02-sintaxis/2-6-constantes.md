# 2.6 Constantes


## Constantes

Las constantes son elementos que permiten almacenar un valor el cual permanece invariable (permanece constante). Para declarar constantes se utiliza la instrucción `const`. Su ámbito es el mismo que el de `let`, es decir, sólo son accesibles en el bloque que se han declarado.

```javascript
const PI=3.1416;
console.log(PI);
PI=3; // Esto falla.
```

Aunque es posible definir arrays y objetos usando `const`, no es recomendable hacerlo ya que es posible que su uso no sea el que se espera. Un array o un objeto declarado como constante mantendrá invariable su estructura no así su contenido.

Por ejemplo, al declarar un array realmente lo que ocurre es que la variable almacena su dirección de memoria. Si se declara usando
`const`, lo que ocurre es que no puede cambiarse esa dirección de memoria, pero permitirá cambiar sus valores.

```javascript
const miArray=[1,2,3]
console.log(miArray[0]); // Muestra el valor 1.
miArray[0]=4;
console.log(miArray[0]); // Muestra el valor 4.
miArray=[]; // Esto falla.
```
