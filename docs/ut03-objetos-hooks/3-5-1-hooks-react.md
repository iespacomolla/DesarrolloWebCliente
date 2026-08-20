# 3.5.1 Hooks en React

Uno de lo problemas que se plantean en la creación de componentes en **React** son las clases, ya que *JavaScript* no fue diseñado para soportarlas inicialmente. Estas suponen una dificultad no sólo para desarrolladores, sino para máquinas también. Por poner un ejemplo, es común la dificultad para entender la utilización del ámbito cuando se necesita referenciar un método con la palabra reservada `this`. En el caso de las máquinas también se identificaron algunos problemas para mejorar el rendimiento de los componentes debido a patrones que dificultan la optimización en el momento de la traducción.

Por lo tanto, existe la necesidad de un componente más simple que las clases capaz de tener estado y ciclo de vida. Para ello surgen los **hooks**, que son **funciones** que permiten "enganchar" el estado y el ciclo de vida de los componentes funcionales dotándolos de características propias de un componente de clase, es decir, proporcionan un estado y un ciclo de vida evitando el uso de las clases.

Los hooks **son funciones que te permiten "enganchar" el estado de React y el ciclo de vida desde componentes de función**. Los *hooks* no funcionan dentro de las clases, sino que te permiten usar **React** sin clases.

Más información sobre los *hooks* [aquí](https://es.reactjs.org/docs/hooks-reference.html).
