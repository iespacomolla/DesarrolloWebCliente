# 7.3.3 Propiedades y métodos privados

Si es necesario ocultar parte del funcionamiento de una clase, es decir, hacer métodos o propiedades privados, sólo hay que añadir el carácter `#` delante del nombre. Hay que tener cuidado ya que esto no
está todavía soportado por algunos navegadores.

Si se trata de acceder desde fuera de la clase se obtendrá un error similar a este: "*Uncaught SyntaxError: Private field '#soyFeo' must be declared in an enclosing class*".
