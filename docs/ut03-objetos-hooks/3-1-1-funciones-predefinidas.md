# 3.1.1 Funciones predefinidas

#### Tratamiento numérico

Todos los números en *JavaScript* se almacenan como números de punto flotante de 64 bits. Para crear variables numéricas se asigna el valor a la variable independientemente de su formato:

```javascript
let diez = 10; // Entero.
let pi = 3.14; // Real.
```

Si se necesita redondear una cifra a un número determinado de decimales usaremos el método `toFixed(dígitos)`, el cual devuelve la cifra original con tantos decimales como los indicados por el parámetro:

```javascript
let pi = 3.14159265;
console.log(pi.toFixed(0)); //3
console.log(pi.toFixed(2)); //3.14
console.log(pi.toFixed(4)); //3.1416
```

Para convertir una cadena a un número se utiliza la función global parseInt(cadena [, base]), donde la base por defecto es 10, es decir, decimal. Del mismo modo para pasar a un número real se usará la función global `parseFloat(cadena [, base])`.

```javascript
let cadena = "3.14";
let pi = parseFloat(cadena, 10);
let tres = parseInt(pi, 10);
```

*JavaScript* emplea el valor `NaN` (que significa *Not A Number*) para indicar un valor numérico no definido, por ejemplo, la división 0/0 o al convertir un texto que no coincide con ningún número.

```javascript
let numero1 = 0;
let numero2 = 0;
console.log(numero1 / numero2); // NaN
console.log(parseInt("tres")); // NaN
```

Para averiguar si una variable no es un número, se usa la función `isNaN(valor)`:

```javascript
let miNumero = "tres";
if (isNaN(miNumero)) {
    console.log("¡No es un número!");
}
```

#### Función `eval`

Es una función que recibe una cadena de texto y la interpreta como código *JavaScript*. Dado que *JavaScript* admite expresiones numéricas, se puede usar `eval` para calcular su resultado. Es una función muy útil ya que se puede construir código dinámicamente mediante una cadena. Debe utilizarse únicamente en situaciones que lo requiera, ya que una cadena interpretada por `eval` que esté formada maliciosamente puede causar un agujero de seguridad.

```javascript
let x = 3;
let y = 2;
let a = eval("2+3");
let b = eval("x\y");
eval("console.log('a vale ' + a + ' b vale '+b)");
```
