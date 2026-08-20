# 2.7.3 Operadores de comparación

Utilizados para comparar dos valores entre sí. Como valor de retorno se obtiene siempre un valor booleano: ``true` o false.

 Operador | Descripción
-- | --
=== | Compara dos elementos, incluyendo su tipo de dato. Si son de distinto tipo, no realiza conversión y devuelve false ya que siempre los considera diferentes. **Uso recomendado.**|
!== | Compara dos elementos, incluyendo su tipo interno. Si son de distinto tipo, no realiza conversión y devuelve `true` ya que siempre los considera diferentes. **Uso recomendado.**|
 == | Devuelve el valor `true` cuando los dos operandos son iguales. Si los elementos son de distintos tipos, realiza una conversión. **No está recomendado su uso.**                                |
!= | Devuelve el valor `true` cuando los dos operandos son distintos. Si los elementos son de distintos tipos, realiza una conversión. **No estárecomendado su uso.**                                |
x > y | Devuelve el valor `true` cuando el operando de la izquierda es mayor que el de la derecha.
x < y | Devuelve el valor `true` cuando el operando de la derecha es mayor que el de la izquierda.  
x >= y | Devuelve el valor `true` cuando el operando de la izquierda es mayor o igual que el de la derecha.                                             |
x >= y | Devuelve el valor `true` cuando el operando de la derecha es menor o igual que el de la izquierda.                                           |

```javascript
let a=4;b=5,c="5";

console.log("El resultado de la expresión 'a==c' es igual a "+(a==c));
console.log("El resultado de la expresión 'a===c' es igual a "+(a===c));
console.log("El resultado de la expresión 'a!=c' es igual a "+(a!=c));
console.log("El resultado de la expresión 'a!==c' es igual a "+(a!==c));
console.log("El resultado de la expresión 'a==b' es igual a "+(a==b));
console.log("El resultado de la expresión 'a!=b' es igual a "+(a!=b));
console.log("El resultado de la expresión 'a>b' es igual a "+(a>b));
console.log("El resultado de la expresión 'a<b' es igual a "+(a<b));
console.log("El resultado de la expresión 'a>=b' es igual a "+(a>=b));
console.log("El resultado de la expresión 'a<=b' es igual a "+(a<=b));
```
