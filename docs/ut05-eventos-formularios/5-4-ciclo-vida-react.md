# 5.4 Ciclo de vida de un componente en React

Al igual que ocurre con los objetos en *JavaScript*, los componentes de *React* poseen un ciclo de vida basado en tres etapas:

- **montaje**, ocurre cuando se crea una instancia de un componente y se inserta en el **DOM**,
- **actualización**, sucede cuando se produce un cambio en las propiedades (props) o el estado (state) del componente,
- **desmontaje**, cuando el componente se elimina del **DOM**.

Cada una de estas fases provoca un **evento** que se puede utilizar para especificar el comportamiento del componente. En un inicio estos eventos tan sólo estaban disponibles en los componente de clase a través de `componenteDidMount`, `componentDidiUpdate` y `componentWillUnmount`, pero con la creación de los *hooks* es posible reproducir estos eventos en componentes funcionales (como se verá en los sucesivo).

![image](/images/ut05_1000000000000578000002040A6A5A27.png)

Uno de lo problemas que se plantean en la creación de componentes en *React* son las clases, ya que *JavaScript* no fue diseñado para soportarlas inicialmente. Suponen una dificultad no sólo para desarrolladores, sino para máquinas también. Por poner un ejemplo, es común la dificultad para entender la utilización del ámbito cuando se necesita referenciar un método con la palabra reservada `this`. En el caso de las máquinas también se identificaron algunos problemas para mejorar el rendimiento de los componentes debido a patrones que dificultan la optimización en el momento de la traducción.

Por lo tanto, existe la necesidad de un componente más simple que las clases capaz de tener estado y ciclo de vida. Para ello surgen los *hooks*, que son funciones que permiten “enganchar” el estado y el ciclo de vida de los componentes funcionales dotándolos de características propias de un componente de clase, es decir, proporcionan un estado y un ciclo de vida evitando el uso de las clases.

Más información sobre los *hooks* [aquí](https://es.reactjs.org/docs/hooks-reference.html).
