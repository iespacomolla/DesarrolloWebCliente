# 2.7.2 Operadores aritméticos

Se utilizan para realizar cálculos aritméticos.

  Operador|Descripción
  --|--
  `+`|Suma.
  `-`|Resta.
  `*`|Multiplicación.
  `/`|División.
  `%`|Calcula el resto de una división entera.

Además de estos operadores, también existen operadores aritméticos unitarios: incremento (`++`), disminución (`--`) y la negación unitaria (`-`). Los operadores de incremento y disminución pueden estar tanto delante como detrás de una variable con distintos matices en su ejecución. Estos operadores aumentan o disminuyen en uno el valor de una variable.

  Operador|Descripción (Suponiendo x=5)
  --|--
  `y = ++x`|Primero el incremento y después la asignación x=6, y=6.
  `y = x++`|Primero la asignación y después el incremento x=6, y=5.
  `y = --x`|Primero el decremento y después la asignación x=4, y=4.
  `y = x--`|Primero la asignación y después el decremento x=4, y=5.
  `y =-x`|Se asigna a y el valor negativo de x, pero el valor de la variable x no varía x=5, y= -5.


```javascript
let num1=5, num2=8, resultado1, resultado2;
resultado1=((num1+num2)*200)/100;
resultado2=resultado1%3;
resultado1=++num1;
resultado2=num2++;
resultado1=--num1;
resultado2=num2--;
resultado1=-resultado2;
```
