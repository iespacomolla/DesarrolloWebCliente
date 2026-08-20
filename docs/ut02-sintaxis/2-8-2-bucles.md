# 2.8.2 Estructuras repetitivas (bucles)

#### Bucle `for`

Cuando la ejecución de un programa llega a un bucle `for`:

- lo primero que hace es ejecutar la **inicialización del índice**, que sólo se ejecuta una vez,
- a continuación analiza la **condición de prueba** y si esta se cumple ejecuta las instrucciones del bucle,
- cuando finaliza la ejecución de las instrucciones del bucle se realiza la **modificación del índice**, se retorna a la cabecera del bucle `for` y se realiza de nuevo la condición de prueba,
- si la condición se cumple se ejecutan las instrucciones y si no se cumple la ejecución continúa en las líneas de código que siguen posteriores al bucle.

```javascript
for (Inicialización del índice; Condición de prueba; Modificación en el índice){
    // Instrucciones\...
}

for (i=2; i<=30 ;i+=2) {
    console.log(i);
}
console.log("Se han escrito los números pares del 2 al 30.");
let aux=1;
for (i=2; i<=3000; i\*=2) {
    console.log("2 elevado a " + aux + " es igual a " + i);
    aux++;
}
console.log("Se han escrito las potencias de 2 menores de 3000.");
```

#### Bucle `while`

Con el bucle `while` se pueden ejecutar un grupo de instrucciones mientras se cumpla una condición:

- si la condición nunca se cumple, entonces tampoco se ejecuta ninguna instrucción,
- si la condición se cumple siempre, nos veremos inmersos en el problema de los **bucles infinitos**, que pueden llegar a colapsar el navegador. Por esa razón es muy importante que la condición deba dejar de cumplirse en algún momento.

```javascript
while (condición){
    // Instrucciones...
}

let i=2;
while (i<=30) {
    console.log(i);
    i+=2;
}
console.log("Ya se han mostrado los números pares del 2 al 30.");

let auxclave="";
while (auxclave!=="viva"){
    auxclave=prompt("Introduce la clave: ","claveSecreta")
}
console.log("Has acertado la clave.");
```

#### Bucle `do-while`

La diferencia del bucle `do-while` frente al bucle `while` reside en el momento en que se comprueba la condición: el bucle `do-while` no la comprueba hasta el final, es decir, después del cuerpo del bucle, lo que significa que este bucle se realizará una vez como mínimo aunque no se cumpla la condición.

```javascript
do {
    // Instrucciones\...
} while(condición);

let auxclave;
do {
    auxclave = prompt("Introduce la clave: ","vivaYo");
} while (auxclave !== "claveFea")
console.log("Has acertado la clave.");
```

En los bucles `for`, `while` y `do-while` se pueden utilizar las instrucciones `break` y `continue`  para modificar el comportamiento del bucle. La instrucción `break` dentro de un bucle hace que éste se interrumpa inmediatamente aún cuando no se haya ejecutado todavía el bucle completo. Al llegar a esta instrucción sale del bucle y el programa se sigue desarrollando inmediatamente.

```javascript
let auxclave=true;
let numveces=0;

//Mientras no introduzca la clave y no se pulse Cancelar.
while (auxclave !== "anonimo" && auxclave){
    auxclave = prompt("Introduce la clave ","");
    numveces++;
    if (numveces === 3)
        break;
}

if (auxclave === "SuperClave"){
    console.log("La clave es correcta.");
}else{
    console.log("La clave no es correcta correcta.");
}
```

El efecto que tiene la instrucción continue en un bucle es el de hacer retornar a la secuencia de ejecución a la cabecera del bucle volviendo a ejecutar la condición o a incrementar los índices cuando sea un bucle `for`. Esto permite saltarse iteraciones del bucle, pero no sale de él.

```javascript
let i;
for (i=2; i<=50 ;i+=2){
    if ((i%3) === 0)
        continue;
    console.log(i);
}
```

En este punto es necesario introducir un par de operadores que funcionan como sentencias de flujo. Su uso es muy común ya que son utilizadas en la programación reactiva. Además, acortan las líneas de código escritas y amplían su legibilidad.