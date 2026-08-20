# 2.9.5 Alcance de funciones: call stack y scope chain

El alcance determina desde donde se puede acceder a una variable o una función, es decir, donde nace y donde muere. El **alcance global** significa que cualquier variable o función pueden ser invocada o accedida desde cualquier parte del código de la aplicación. En *JavaScript*, por defecto, **todas las variables y funciones que se definen tienen alcance global**.

Si se define una variable dentro de una función, el alcance se conoce como **local o alcance de función**, de modo que la variable vive mientras lo hace la función. Aquella función que se define dentro de una función (padre) es local a la función pero global para las funciones anidadas (hijas) a la que se ha definido la función (padre). Por esto, más que alcance de función, se le conoce como **alcance anidado**. Y así sucesivamente, se puede definir funciones dentro de funciones con alcance anidado en el hijo que serán accesibles por el nieto, pero no por el padre.

```javascript
var varGlobal = "Esta es una variable global.";
var funcionGlobal = function (alfa) {
  var varLocal = "Esta es una variable local con alcance anidado.";
  var funcionLocal = function () {
    var varLocal = "¡Hola Feo!";
    console.log(varLocal);
    console.log(alfa);
  };
  funcionLocal();
  console.log(varLocal);
};

funcionGlobal(2);
```

Ahora se verán varios ejemplos con bloques de funciones. En este primer ejemplo, todas las funciones están al mismo nivel y se van llamando unas a otras:

```javascript
var nombre = "Feo";

function tercera() {
    var c = "C ";
    var texto2 = c + nombre;
    console.log(texto2);
}

function segunda() {
    var b = "B ";
    tercera();
    var texto2 = b + nombre;
    console.log(texto2);
}

function primera() {
    var a = "A ";
    segunda();
    var texto = a + nombre;
    console.log(texto);
}

primera();
```

La función `tercera` no tiene acceso a las variables `a`, `b` o `texto` porque no están definidas en un ámbito superior. Hay que distinguir muy bien entre el ***call stack*** (la pila de llamadas a funciones) que en este caso sería `global` → `primera` → `segunda` → `tercera`, de la ***scope chain*** (la cadena de ámbitos), que se construye en función de dónde está escrito el código. Este concepto también se conoce como ***lexical scope***. En el ejemplo de arriba, la función `tercera` tiene acceso a sus variables (`c` y `texto2`) y a las del ámbito global que es donde está escrita la función `tercera`.

Otro ejemplo:

```javascript
var a = "A";
function primera() {
    var b = "B";
    function segunda() {
        var c = "C";
        function tercera() {
            var d = "D";
            console.log(a, b, c, d);
        }
        tercera();
    }
    segunda();
}
primera();
```

En este caso la función `tercera` tiene acceso a todas las variables porque está escrita dentro de `segunda`, que a su vez está escrita dentro de `primera`, que pertenece al **ámbito global**.

Un último ejemplo:

```javascript
var a = "A";
function primera() {
    var b = "B";
    segunda();
    function segunda() {
        var c = "C"; tercera();
    }
}

function tercera() {
    var d = "D";
    console.log(a,b,c,d); //error
}

primera();
```

En este ejemplo, la función `tercera` de nuevo sólo tiene acceso a sus variables y a las globales. No importa que haya sido llamada desde `segunda`, importa que está declarada directamente sobre el ámbito global.
