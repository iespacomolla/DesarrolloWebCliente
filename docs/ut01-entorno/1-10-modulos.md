# 1.10 Módulos en JavaScript

## Módulos en JavaScript

Es muy común (y ua pésima idea) tener todo el código en un sólo fichero *JavaScript*, pero esto se vuelve complejo de gestionar en cuanto el código crece. Es mucho más fácil de manejar, como ocurre en otros lenguajes de programación, si el código se divide en ficheros de modo que cada código está ubicada en un fichero separado.

Se estudiarán métodos para organizar el código como las funciones, pero es posible el uso de módulos para separar este código en ficheros autónomos. Pero, ¿eso no era ya posible con clases y funciones? En realidad no de manera eficiente. Cuando se accede a una página o aplicación web, en la mayoría de ocasiones, se accede a un servidor desde donde se está descargando código al navegador para ejecutarlo. La forma más extendida de trabajar era incluir varias etiquetas `<script>` en la página `HTML`. De esta for ma se pueden tener varios ficheros *JavaScript* separados cada uno para una finalidad concreta. Sin embargo, este sistema termina siendo muy poco modular, ofrecía algunas desventajas y resultaba lento ya que sobrecargaba al cliente con múltiples peticiones.

En *ECMAScript* se introducen los **Módulos ES** o **ESM**, que permite la importación y exportación de datos entre diferentes ficheros eliminando las múltiples llamadas y cargando el código de forma más óptima. Para trabajar con módulos hay que conocer las palabras clave:

- ***export***, que exporta datos (variables, funciones, clases...) del   fichero actual e
- ***import***, que importa datos (variables, funciones, clases...) desde otro fichero ***.js*** al actual
