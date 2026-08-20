# 2.10 Componentes en React

Los componentes permiten separar interfaces de usuario en piezas independientes y reutilizables. Internamente, para *JavaScript*, un componente no es más que una función que recibe un objeto, que se denomina `props`, y retorna un elemento de React que describe qué va a aparecer en la pantalla. Se utilizan para indicarle a la aplicación qué es lo que es necesario ver en pantalla y que cuando los datos cambien sólo actualice el componente y no el resto de la aplicación.

Quizás la parte más complicada de esta dinámica es la de dividir la aplicación web en componentes, aunque es una habilidad que se adquiere con el tiempo. Un componente debe tratarse de forma independiente aunque debe interactuar con el resto de ellos que conforman la aplicación. Será necesario comunicarse entre sí y esta tarea se realiza a través de sus propiedades `props`.

Es importante tener en cuenta que el nombre de los componentes de *React* **deben empezar con una mayúscula**. De esta forma es como se diferencian los elementos nativos de `HTML` de los componentes creados de forma pormenorizada. Si no se hace así, el preprocesador del código lo interpreta como si fuese una cadena `string` y no como si fuese una función (componente) y no lo dibujará (renderizará) de la manera esperada.

Un componente en *React* está compuesto por dos partes: la parte que contiene la **lógica de funcionamiento** (que se escribe en *JavaScript),* y la **parte que devuelve** (a través de return) que está escrita en **JSX** (que representa el código que el navegador mostrará en pantalla).

```javascript
function ComponenteFeo(props) {
  // Lógica del componente en código JavaScript.
  return (
    // Vista del componente que será pintada en el navegador escrita en JSX.
  );
}
```

Un componente sólo puede dibujar (renderizar) el contenido **JSX** encerrado dentro de ya que posee la limitación de devolver una etiqueta en cada dibujado:

```jsx
function Undiv(props){
return(
    <div>
        Estoy devolviendo un sólo div.
    </div>
)
}
```

Si es necesario devolver dos etiquetas en la raíz del dibujado, se utilizan los React **Fragments** o encerrando todas las etiquetas en la raíz entre dos etiquetas vacías <>:

```jsx
function Dosdivs(props) {
  return (
    <>
      <div>Estoy devolviendo el primer div.</div>
      <div>Y ahora es segundo div.</div>
    </>
  );
}
```