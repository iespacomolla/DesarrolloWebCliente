# 2.9 Funciones

Las funciones en *JavaScript* son objetos, y como tales, se pueden usar como cualquier otro valor. Las funciones pueden almacenarse en variables, objetos y arrays. Se pueden pasar como argumentos a funciones y una función a su vez puede devolver una función (ella misma u otra). Además, como objetos que son, pueden tener métodos.

Pero lo que hace especial a una función respecto a otros tipos de objetos es que las funciones pueden invocarse. Se crean con la palabra clave `function` junto a los parámetros sin tipo de datos y dentro de una pareja de paréntesis. El nombre de la función es opcional.

*JavaScript* no produce ningún error de ejecución si el número de argumentos y el de parámetros no coincide. Si hay demasiados valores de argumentos, los argumentos de sobra se ignoran. Por contra, si hay menos argumentos que parámetros, los parámetros que han quedado sin asignar tendrán el valor `undefined`. No se realiza ninguna comprobación de tipos, con lo que se puede pasar cualquier valor como parámetro.

Además, dentro de una función podemos invocar a otra función que definimos en el código a posteriori con lo que no tenemos ninguna restricción de declarar las funciones antes de usarlas. Pese a no tener restricción es una buena práctica de código que las funciones que dependen de otras se coloquen tras ellas.

Por último, para devolver cualquier valor dentro de una función usaremos la instrucción `return`, la cual es opcional. Si una función no hace `return` , el valor devuelto será
`undefined`.

Las funciones en JavaScript admiten **parámetros por defecto**. Es posible asignarles un valor durante la declaración y, si no se especifica ninguno en la llamada, el parámetro tendrá ese valor por defecto.