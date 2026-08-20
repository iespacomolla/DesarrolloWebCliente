# 7.3.2 Ámbitos de una clase

Dentro de una clase existen dos ámbitos: **ámbito de método** y **ámbito de clase**.

El primero, el de método, si se declaran variables o funciones dentro de un método con `var`, `let` o `const`, estos elementos existirán sólo en el método donde se crearon y no serán accesibles desde fuera del método.

El segundo, se pueden crear propiedades precedidas por `this` en el constructor o en la parte superior de la clase que tendrán alcance en toda la clase. Además, estas propiedades también pueden ser modificadas desde fuera de la clase, es decir, son públicas.
