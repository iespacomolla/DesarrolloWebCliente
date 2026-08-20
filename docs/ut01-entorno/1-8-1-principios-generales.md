# 1.8.1 Principios generales

*(Perteneciente al apartado [1.8 Clean Code](./1-8-clean-code.md))*

### Principios generales

Crear *Clean* *Code* implica tener en cuenta ciertos principios fundamentales durante el desarrollo del *software*. No se trata de seguir unas instrucciones concretas que indican cómo programar en ciertas situaciones, sino más bien de una reflexión sobre el propio trabajo. Su significado despierta polémica en la comunidad del desarrollo: lo que alguien considera "limpio", puede ser "sucio" para otros, por tanto, la limpieza del código acaba siendo algo subjetivo.

- **Los nombres son importantes**

El código no solo debe funcionar y ser interpretado por la máquina que lo ejecuta, sino que también debe ser comprensible para el humano medio, especialmente si se trabaja en proyectos colaborativos. La legibilidad del código siempre es más importante que su concisión. No tiene sentido escribir un código conciso si el resto no lo entiende.

Un ejemplo de creación de código legible sería nombrar las variables que siempre deben ser comprensibles. Por ejemplo, no es posible entender la siguiente variable sin una explicación:

```javascript
var feo;
```

Sin embargo, con el siguiente nombre, la misma variable se explica por sí sola:

```javascript
var elapsedTimeInDays;
```

Esto también ocurre con el nombre de las **funciones**, **clases**, **métodos** o **componentes** que deben ser autoexplicativos, precisos y entregar la idea de lo que hacen. Además, el tamaño no importa: si la función o parámetro necesita de un nombre largo para demostrar lo que realmente representa, es lo que debes hacer.

- **Regla del *boy scout***


Existe un principio que afirma que si sales del área en la que estás acampando, debes dejarla más limpia que cuando la encontraste. Si se lleva esta regla al mundo de la programación se puede adaptar como dejar el código más limpio de lo que estaba antes de editarlo.

- **KISS (*Keep It Simple, Stupid*)**

El ser humano está acostumbrado a pensar de manera narrativa, así que el código funciona de la misma forma. Es una historia y sus autores deben preocuparse por el modo en el que la historia es presentada. Para estructurar un código limpio es necesario crear funciones simples, claras y pequeñas.

El código debe ser lo más sencillo posible evitando cualquier complejidad innecesaria. En programación nunca hay una única manera de resolver un problema, por lo que el desarrollo que sigue el principio KISS debe preguntarse si se podría dar con una solución más simple que la que se ha encontrado.

Existen dos reglas para crear código KISS: las funciones deben ser pequeñas y estas deben ser aún más pequeñas.

- **DRY (*Don't Repeat Yourself*)**

Es una concreción de KISS: cada función debe tener una representación única y, por lo tanto, inequívoca dentro del sistema general del *Clean* *Code*. Lo contrario de DRY es **WET** (*We* *Enjoy* *Typing*) que es cuando el código contiene duplicaciones innecesarias.

Por ejemplo, el nombre de usuario y la contraseña aparecen dos veces en el código para utilizarlos en diferentes acciones. En lugar de programarlos por separado, ambos procesos pueden agruparse en una sola función. De esta manera, el código **WET** (húmedo) con sus redundancias se convertirá en código **DRY** (seco).

- **Eliminar lo innecesario: YAGNI (*You Aren't Gonna Need   It*)**

Se basa en la idea de que sólo se debe añadir funciones al código cuando sea estrictamente necesario. Está íntimamente relacionado con los métodos del desarrollo ágil de *software*. De acuerdo con este principio, en lugar de comenzar a programar partiendo de un concepto general, la arquitectura del *software* se desarrolla paso a paso para
poder reaccionar a cada problema de forma dinámica.

- **Comentar solamente lo necesario**

Los comentarios pueden hacerse, sin embargo, deben ser necesarios. Hay que tener claro que **los comentarios mienten** y esto tiene una explicación lógica. Lo que ocurre es que, mientras el código es modificado, los comentarios no se tocan nunca. Estos son olvidados, y por lo tanto, no retratan la funcionalidad real del nuevo código que seguro que ha cambiado varias veces desde su escritura inicial.

- **Tratamiento de errores y pruebas**

Las **cosas pueden salir mal** y **el/la usuario/a medio de tu código es idiota**, por lo que hay que escribir código que contemple todas las posibilidades a las que el código puede enfrentarse, es decir, tratar las excepciones de forma correcta para tener el control ante cualquier situación.

Además, un código sólo se considera limpio después de ser válido a través de pruebas que deben diseñarse en función del código escrito. Sólo cuando las pruebas confirmen que el código es válido será cuando de verdad lo sea.

El *Clean* *Code* es un concepto que soluciona con eficacia uno de los principales problemas que gran parte de los proyectos de desarrollo: **el mantenimiento**.
