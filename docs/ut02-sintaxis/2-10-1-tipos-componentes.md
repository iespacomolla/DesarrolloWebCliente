# 2.10.1 Tipos de componentes

Existen dos tipos de componentes:

- **Componentes de clases** (*Class* *components*), utiliza la   programación orientada a objetos (POO) para definir un componente. Para que una clase se considere componente en *React* debe heredar de la clase *React.Component* y debe contar con un método ***render*** el cual debe devolver elementos de *React* (otro componente, código **JSX** o datos, por ejemplo).

```javascript
// Componentes de clases y ECMAScript 6.
class conponenteFeo extends React.Component {
  render() {
    return (
      <div className='componente'>
        <h2>Hijo 1</h2>
        <p>Contador Feo 1</p>
        <p>1</p>
      </div>
    );
  }
}
```

La principal ventaja de usar **class components** es que es posible utilizar el **estado de la información** para cambiar su estructura. Esta característica, que se estudiará con posterioridad, era exclusiva de este tipo de componentes hasta el advenimiento de los *Hooks* en la versión 16.8.0 de *React*. Esta adición permite prescindir de las clases por completo y utilizar funciones para el control del estado de la información.

- **Componentes funcionales** (*Functional components*), es la forma   más sencilla con la que se puede definir un componente en *React* ya que se utilizan funciones tal y como se haría en *JavaScript*. Además, es la forma de crear estos elementos que más se utiliza entre los programadores de *React* mientras que, progresivamente, se abandona en uso de los componentes de clase.

Para que una función se convierta en *functional component* debe aceptar un sólo argumento `props` o ninguno y debe devolver código escrito en **JSX**.

```jsx
//Componentes funcionales.
function ComponenteFeo(props) {
  return (
    <div className='padre'></div>
      <h1>Componente Padre</h1>
      <div className='componentes'>
        <div className='componente'>
          <h2>Hijo 1</h2>
          <p>Contador Feo 1</p>
          <p>1</p>
        </div>
        <div className='componente'>
          <h2>Hijo 2</h2>
          <p>Contador Feo 2</p>
          <p>1</p>
        </div>
      </div>
    </div>
  );
}
```
