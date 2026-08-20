# 3.1.3 Objeto predefinido Date

Para crear una fecha se usa el objeto Date. Si se usa el constructor vacío se obtendrá la fecha actual. Pasándole un valor que representa el *timestamp Epoch* (desde el 1/1/1970) o pasándole al
constructor del día (1-31), mes (0-11) y año, se crea un objeto con una fecha predeterminada.

```javascript
let fecha = new Date();
console.log(fecha);
let nochevieja = new Date(2050, 11, 31);
console.log(nochevieja);
```

Si además es necesario indicar la hora se hace mediante tres parámetros más:

```javascript
let cenaNochevieja = new Date(2050, 11, 31, 22, 30, 0);
console.log(cenaNochevieja);
```

Una vez creado un objeto `Date`, existen métodos para realizar operaciones:

- `getFullYear()` devuelve el año de la fecha con cuatro dígitos,
- `getMonth()` número del mes del año (de 0 a 11),
- `getDate()` número de día del mes.

Es posible añadir o sustraer unidades de tiempo al objeto fecha utilizando operadores aritméticos `+` o `-` :

```javascript
let cenaNochevieja = new Date(2050, 11, 31, 22, 30, 0);
let anyo = cenaNochevieja.getFullYear();
let mes = cenaNochevieja.getMonth();
let diaMes = cenaNochevieja.getDate();
let resaca = new Date(cenaNochevieja.setDate(diaMes + 1));
console.log(resaca);
```

Más información [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).

Para comparar fechas se usan los operadores `<` , `>` o la comparación de igualdad/identidad.

```javascript
let cenaPreNochevieja = new Date(2050, 11, 30, 22, 30, 0);
let cenaNochevieja = new Date(2050, 11, 31, 22, 30, 0);
let cenaNochevieja2 = new Date(2050, 11, 31, 22, 30, 0);
console.log(cenaPreNochevieja < cenaNochevieja); // true
console.log(cenaNochevieja == cenaNochevieja2); // false
console.log(cenaNochevieja === cenaNochevieja2); // false
console.log(cenaNochevieja.getTime() == cenaNochevieja2.getTime()); // true
console.log(cenaNochevieja.getTime() === cenaNochevieja2.getTime()); // true
```

Trabajar con fechas siempre es problemático dado que el propio lenguaje no ofrece métodos para realizar cálculos sobre fechas o realizar consultas utilizando el lenguaje natural. Una biblioteca muy completa es **Datejs** de la que se puede obtener más información [aquí](http://www.datejs.com/).
