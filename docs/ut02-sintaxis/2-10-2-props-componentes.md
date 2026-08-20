# 2.10.2 Propiedades en un componente (props)

Cuando se utiliza un componente es posible parametrizarlo a través de las propiedades que se especifican durante su declaración. No hay límite en cuanto a la cantidad de propiedades que se le pueden dar a un componente. Eso sí, las propiedades son sólo de lectura, es decir, los componentes son **funciones puras** (no modifican sus parámetros).

Así funciona un componente utilizando propiedades:

```jsx
function Feo2(props) {
  return (
    <div className='componente'>
      <h2>{props.titulo}</h2>
      <p>{props.subtitulo}</p>
      <p>{props.nota}</p>
    </div>
  );
}
```

Y así su declaración dentro de otro componente:

```jsx
<Feo2 titulo='El bueno, el malo...' subtitulo='...y el feo.' nota='90/100' />
```

Cada componente dispone de una propiedad especial que es `children`. Hay que recordar que un componente en *React* se maneja como si una etiqueta de `HTML` se tratase, por lo que `children` hará referencia al contenido introducido entre las etiquetas y no al pasado como propiedades. Si se utiliza el ejemplo anterior:

```jsx
function Feo2(props) {
  return (
    <div className='componente'>
      <h2>{props.titulo}</h2>
      <p>{props.children}</p>
      <p>{props.nota}</p>
    </div>
  );
}
```

Y esta sería su construcción:

```jsx
<Feo2 titulo='El bueno, el malo...' nota='90/100'>...y el feo.</Feo2>
```
