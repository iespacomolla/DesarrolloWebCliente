# 2.4 Tipos de datos

## Tipos de datos

Los principales tipos de datos primitivos en *JavaScript* son:

- numéricos (`number`), que puede, contener cualquier tipo de número real o entero,
- booleanos (`boolean`) puede contener uno de los valores: `true`, `false`, `1` o `0`,
- indefinidos (`undefined`) valor por defecto si no se le asigna uno,
- cadenas (`string`) cualquier combinación de caracteres **UTF-16** (letras, números, signos especiales y espacios). Las cadenas se delimitan mediante comillas dobles o simples. Se puede incluir comillas dobles dentro de una cadena creada con comillas simples, así como comillas simples dentro de una cadena creada con comillas dobles. Para concatenar cadenas puede usarse el operador `+`, pero existe una mejor manera de hacerlo a través de los ***template literals*** (más información [aquí](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals)). Es recomendable aprender su uso ya que es el método que utiliza React para las vistas de sus componentes.

Todos los valores que no son de un tipo **primitivo** (básico) son considerados **objetos**: arrays, funciones, valores compuestos,
etcétera. Esta distinción es muy importante porque los valores primitivos y los valores objetos se comportan de distinta forma cuando
son asignados y cuando son pasados como parámetro a una función. La principal diferencia es que los tipos primitivos se pasan como
parámetros, se copian y se comparan por valor; mientras que los objetos lo hacen por referencia. Más información [aquí](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures).

El operador `typeof` devuelve una cadena que identifica el tipo del operando. Así pues,

```javascript
typeof 94.8; // Que devuelve 'number'.
typeof "Feo"; // Que devuelve 'string'.
let edad=23, nuevaEdad, incremento=4;
const nombre="Feo Muy";
console.log(typeof incremento === "number");
nuevaEdad=edad+incremento;
console.log(nombre+ " tras " + incremento + " años tendrá " + nueva_edad);
```

Los posibles valores de `typeof` son `number`, `string`, `boolean`, `undefined`, `function` y `object`.

El problema viene cuando se hace esto:

```javascript
typeof null // Que indica 'object'.
```

y en vez de recibir `null` dice que es un `object`. Es decir, si se le pasa un array o null el resultado es idéntico; `object`, lo cual es incorrecto. Para comprobar si es `null` es  mejor usar el operador identidad:

```javascript
valorNulo === null // true
```
