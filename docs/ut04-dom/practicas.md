# 📝 Prácticas y Ejercicios - UT04: Document Object Model

> En esta sección se recogen todas las prácticas, ejercicios de evaluación, autoevaluaciones y actividades guiadas correspondientes a la **UT04: Document Object Model**.

---

## 📄 Cambios

*Ubicación original:* `Cambios.txt`

```text

IMPORTANTE!!! 	--> Explicar primero el objeto window y setTimeout con ejemplos para que quede claro.
		--> Crear prácticas para sólo recorrer el DOM y dividir las clases en dos (recorrer y crear atributos).
								
APUNTES		--> Revisar índice (DOM) con este vídeo: https://www.youtube.com/watch?v=WjxQRfZfZnw

CONTENIDOS (2024)	--> La carga de películas hacerla en <Peliculas>, no en <App>.


Secuenciación de clases:

	1 -> teoría hasta recorrer.
	2 -> Práctica01 (a redactar sólo recorrer).
	3 -> teoría hasta crear elementos y atributos.
	4 -> Práctica 02 (revisar)).
	6 -> Práctica03.
	7 -> Teoría Virtual DOM y useRef.
	8 -> Prácticas04 y 05.
	9 -> Teoría rutas en React.
	10 -> Práctica06 (dividida en dos).
	
```

---

## 📄 Ejercicios ChatGPT

*Ubicación original:* `Ejercicios_old/Ejercicios ChatGPT.odt`


########## Sumario


Sólo con click:


¡Por supuesto! Aquí te presento 10 ejercicios de React que utilizan exclusivamente el evento `onClick` para manipular el DOM directamente sin usar hooks como `useState` o `useEffect`. Todos los ejercicios están diseñados para interactuar con el DOM de manera directa a través de eventos.---### **Ejercicio 1: Botón contador**Crea un botón que incremente un número cada vez que se hace clic y lo muestre en pantalla.#### **Solución**```jsximport React from 'react';const ClickCounter = () => { let count = 0; const handleClick = () => { count += 1; document.getElementById('countDisplay').textContent = count; }; return ( &lt;div&gt; &lt;h1 id="countDisplay"&gt;0&lt;/h1&gt; &lt;button onClick={handleClick}&gt;Incrementar&lt;/button&gt; &lt;/div&gt; );};export default ClickCounter;```---### **Ejercicio 2: Cambiar color de fondo**Crea un botón que cambie el color de fondo de un `div` al hacer clic, alternando entre dos colores.#### **Solución**```jsximport React from 'react';const ChangeBackgroundColor = () => { let isBlue = true; const handleClick = () => { const divElement = document.getElementById('colorBox'); if (isBlue) { divElement.style.backgroundColor = 'red'; } else { divElement.style.backgroundColor = 'blue'; } isBlue = !isBlue; }; return ( &lt;div&gt; &lt;div id="colorBox" style=&#123;&#123; width: '200px', height: '200px', backgroundColor: 'blue' &#125;&#125;&gt;&lt;/div&gt; &lt;button onClick={handleClick}&gt;Cambiar color&lt;/button&gt; &lt;/div&gt; );};export default ChangeBackgroundColor;```---### **Ejercicio 3: Mostrar/ocultar texto**Crea un botón que muestre o esconda un texto en la pantalla cuando se haga clic.#### **Solución**```jsximport React from 'react';const ToggleText = () => { let isVisible = true; const handleClick = () => { const textElement = document.getElementById('text'); if (isVisible) { textElement.style.display = 'none'; } else { textElement.style.display = 'block'; } isVisible = !isVisible; }; return ( &lt;div&gt; &lt;p id="text"&gt;Este es un texto que puedes ocultar o mostrar.&lt;/p&gt; &lt;button onClick={handleClick}&gt;Mostrar/Ocultar&lt;/button&gt; &lt;/div&gt; );};export default ToggleText;```---### **Ejercicio 4: Cambiar tamaño de un div**Crea un botón que al hacer clic aumente el tamaño de un `div` en 50px en cada dimensión.#### **Solución**```jsximport React from 'react';const ResizeBox = () => { let width = 100; let height = 100; const handleClick = () => { width += 50; height += 50; const boxElement = document.getElementById('box'); boxElement.style.width = `${width}px`; boxElement.style.height = `${height}px`; }; return ( &lt;div&gt; &lt;div id="box" style=&#123;&#123; width: '100px', height: '100px', backgroundColor: 'green' &#125;&#125;&gt;&lt;/div&gt; &lt;button onClick={handleClick}&gt;Aumentar tamaño&lt;/button&gt; &lt;/div&gt; );};export default ResizeBox;```---### **Ejercicio 5: Cambiar el contenido de un texto**Crea un botón que cambie el contenido de un párrafo al hacer clic.#### **Solución**```jsximport React from 'react';const ChangeText = () => { const handleClick = () => { const textElement = document.getElementById('text'); textElement.textContent = 'El contenido ha cambiado después del clic.'; }; return ( &lt;div&gt; &lt;p id="text"&gt;Este es el texto original.&lt;/p&gt; &lt;button onClick={handleClick}&gt;Cambiar texto&lt;/button&gt; &lt;/div&gt; );};export default ChangeText;```---### **Ejercicio 6: Contar clics en varios botones**Crea tres botones, cada uno con un contador que aumente cada vez que ese botón sea clicado. Muestra el número de clics junto a cada botón.#### **Solución**```jsximport React from 'react';const MultiButtonCounter = () => { let count1 = 0; let count2 = 0; let count3 = 0; const handleClick1 = () => { count1 += 1; document.getElementById('count1').textContent = count1; }; const handleClick2 = () => { count2 += 1; document.getElementById('count2').textContent = count2; }; const handleClick3 = () => { count3 += 1; document.getElementById('count3').textContent = count3; }; return ( &lt;div&gt; &lt;div&gt; &lt;button onClick={handleClick1}&gt;Botón 1&lt;/button&gt; &lt;span id="count1"&gt;0&lt;/span&gt; &lt;/div&gt; &lt;div&gt; &lt;button onClick={handleClick2}&gt;Botón 2&lt;/button&gt; &lt;span id="count2"&gt;0&lt;/span&gt; &lt;/div&gt; &lt;div&gt; &lt;button onClick={handleClick3}&gt;Botón 3&lt;/button&gt; &lt;span id="count3"&gt;0&lt;/span&gt; &lt;/div&gt; &lt;/div&gt; );};export default MultiButtonCounter;```---### **Ejercicio 7: Rotar un div**Crea un botón que al hacer clic rote un `div` 45 grados cada vez.#### **Solución**```jsximport React from 'react';const RotateBox = () => { let rotation = 0; const handleClick = () => { rotation += 45; const boxElement = document.getElementById('rotateBox'); boxElement.style.transform = `rotate(${rotation}deg)`; }; return ( &lt;div&gt; &lt;div id="rotateBox" style=&#123;&#123; width: '100px', height: '100px', backgroundColor: 'orange', transition: 'transform 0.5s' &#125;&#125; &gt;&lt;/div&gt; &lt;button onClick={handleClick}&gt;Rotar caja&lt;/button&gt; &lt;/div&gt; );};export default RotateBox;```---### **Ejercicio 8: Cambiar el valor de un input**Crea un botón que al hacer clic cambie el valor de un campo de entrada (`input`).#### **Solución**```jsximport React from 'react';const ChangeInputValue = () => { const handleClick = () => { const inputElement = document.getElementById('inputField'); inputElement.value = 'Nuevo valor'; }; return ( &lt;div&gt; &lt;input id="inputField" type="text" placeholder="Escribe algo..." /&gt; &lt;button onClick={handleClick}&gt;Cambiar valor&lt;/button&gt; &lt;/div&gt; );};export default ChangeInputValue;```---### **Ejercicio 9: Agregar elementos a una lista**Crea un botón que al hacer clic agregue un nuevo elemento (`li`) a una lista (`ul`).#### **Solución**```jsximport React from 'react';const AddListItem = () => { let count = 1; const handleClick = () => { const listElement = document.getElementById('list'); const newItem = document.createElement('li'); newItem.textContent = `Elemento ${count}`; listElement.appendChild(newItem); count += 1; }; return ( &lt;div&gt; &lt;ul id="list"&gt;&lt;/ul&gt; &lt;button onClick={handleClick}&gt;Agregar elemento&lt;/button&gt; &lt;/div&gt; );};export default AddListItem;```---### **Ejercicio 10: Cambiar imagen al hacer clic**Crea un botón que al hacer clic cambie la imagen mostrada en un `img`.#### **Solución**```jsximport React from 'react';const ChangeImage = () => { const handleClick = () => { const imgElement = document.getElementById('image'); imgElement.src = 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Nueva+Imagen'; }; return ( &lt;div&gt; &lt;img id="image" src="https://via.placeholder.com/150/0000FF/FFFFFF?text=Imagen+1" alt="Imagen" /&gt; &lt;button onClick={handleClick}&gt;Cambiar imagen&lt;/button&gt; &lt;/div&gt; );};export default ChangeImage;```---Estos ejercicios te permiten practicar el manejo de eventos `onClick` en React para modificar directamente el DOM, sin necesidad de utilizar hooks adicionales como `useState` o `useEffect`. ¡Espero que los disfrutes!


Con otros eventos:


## Ejercicio 1: Crear un contador manual

```javascript
Crea un contador que sólo pueda ser actualizado manualmente utilizando useRef. Añade dos botones: uno para incrementar y otro para decrementar el valor del contador.
```


#### Solución

```html
jsx
import React, { useRef } from 'react';
const Counter = () => {
const countRef = useRef(0);
const increment = () => {
countRef.current += 1;
document.getElementById('countDisplay').textContent = countRef.current;
};
const decrement = () => {
countRef.current -= 1;
document.getElementById('countDisplay').textContent = countRef.current;
};
return (
<div>
<h1 id="countDisplay">{countRef.current}</h1>
<button onClick={increment}>Incrementar</button>
<button onClick={decrement}>Decrementar</button>
</div>
);
};
export default Counter;
```


## Ejercicio 2: Enfoque de un input

```javascript
Crea un input que se enfoque automáticamente cuando se carga la página. Utiliza useRef para referenciar el input y aplicar el enfoque.
```


#### Solución

```javascript
jsx
import React, { useRef, useEffect } from 'react';
const AutoFocusInput = () => {
const inputRef = useRef(null);
useEffect(() => {
inputRef.current.focus();
}, []);
return <input ref={inputRef} type="text" />;
};
export default AutoFocusInput;
```


## Ejercicio 3: Guardar el valor anterior de un input

```javascript
Crea un componente que muestre el valor actual y el anterior de un input cada vez que se escriba algo. Usa useRef para almacenar el valor anterior sin causar renderizados adicionales.
```


#### Solución

```html
jsx
import React, { useRef, useState } from 'react';
const PreviousInputValue = () => {
const [inputValue, setInputValue] = useState('');
const previousValueRef = useRef('');
const handleChange = (e) => {
previousValueRef.current = inputValue;
setInputValue(e.target.value);
};
return (
<div>
<input type="text" value={inputValue} onChange={handleChange} />
<p>Valor actual: {inputValue}</p>
<p>Valor anterior: {previousValueRef.current}</p>
</div>
);
};
export default PreviousInputValue;
```


## Ejercicio 4: Controlar un temporizador sin renderizados

```javascript
Crea un temporizador que sólo pueda ser controlado manualmente, con un botón para empezar y otro para detener. Usa useRef para controlar el estado del temporizador sin renderizar el componente.
```


#### Solución

```html
jsx
import React, { useRef } from 'react';
const ManualTimer = () => {
const timerRef = useRef(null);
const timeRef = useRef(0);
const startTimer = () => {
if (!timerRef.current) {
timerRef.current = setInterval(() => {
timeRef.current += 1;
document.getElementById('timerDisplay').textContent = timeRef.current;
}, 1000);
}
};
const stopTimer = () => {
clearInterval(timerRef.current);
timerRef.current = null;
};
return (
<div>
<h1 id="timerDisplay">{timeRef.current}</h1>
<button onClick={startTimer}>Empezar</button>
<button onClick={stopTimer}>Detener</button>
</div>
);
};
export default ManualTimer;
```


## Ejercicio 5: Controlar el scroll de un div

```javascript
Crea un div con contenido desbordante (overflow) y dos botones para hacer scroll hacia arriba o abajo. Utiliza useRef para controlar la posición del scroll sin causar re-renderizados.
```


#### Solución

```html
jsx
import React, { useRef } from 'react';
const ScrollControl = () => {
const scrollDivRef = useRef(null);
const scrollUp = () => {
scrollDivRef.current.scrollTop -= 20;
};
const scrollDown = () => {
scrollDivRef.current.scrollTop += 20;
};
return (
<div>
<div
ref={scrollDivRef}
style={{ width: '200px', height: '100px', overflow: 'auto', border: '1px solid black' }}
>
<p>Contenido largo para probar el scroll...</p>
<p>Más contenido...</p>
<p>Aún más contenido...</p>
<p>Y más contenido...</p>
<p>Fin del contenido.</p>
</div>
<button onClick={scrollUp}>Scroll Up</button>
<button onClick={scrollDown}>Scroll Down</button>
</div>
);
};
export default ScrollControl;
```


## Ejercicio 6: Reproducir y pausar un video

```javascript
Crea un componente que contenga un video y dos botones para reproducir y pausar el video. Usa useRef para acceder al elemento de video sin renderizar el componente.
```


#### Solución

```html
jsx
import React, { useRef } from 'react';
const VideoPlayer = () => {
const videoRef = useRef(null);
const playVideo = () => {
videoRef.current.play();
};
const pauseVideo = () => {
videoRef.current.pause();
};
return (
<div>
<video ref={videoRef} width="300" controls>
<source src="video.mp4" type="video/mp4" />
</video>
<button onClick={playVideo}>Reproducir</button>
<button onClick={pauseVideo}>Pausar</button>
</div>
);
};
export default VideoPlayer;
```


## Ejercicio 7: Medir el tamaño de un div

```javascript
Crea un componente que mida y muestre el ancho y alto de un div cuando el usuario haga clic en un botón. Usa useRef para acceder a las dimensiones del div sin renderizados adicionales.
```


#### Solución

```html
jsx
import React, { useRef } from 'react';
const MeasureDiv = () => {
const divRef = useRef(null);
const measureDiv = () => {
const width = divRef.current.offsetWidth;
const height = divRef.current.offsetHeight;
alert(`Ancho: ${width}px, Alto: ${height}px`);
};
return (
<div>
<div ref={divRef} style={{ width: '200px', height: '150px', background: 'lightgray' }}>
Contenido del div
</div>
<button onClick={measureDiv}>Medir div</button>
</div>
);
};
export default MeasureDiv;
```


## Ejercicio 8: Implementar un contador de clics sin re-renderizados

```javascript
Crea un contador que cuente los clics en un botón sin actualizar el estado del componente, utilizando useRef para almacenar el conteo de clics.
```


#### Solución

```html
jsx
import React, { useRef } from 'react';
const ClickCounter = () => {
const clickCountRef = useRef(0);
const handleClick = () => {
clickCountRef.current += 1;
document.getElementById('clickDisplay').textContent = clickCountRef.current;
};
return (
<div>
<h1 id="clickDisplay">0</h1>
<button onClick={handleClick}>Click me</button>
</div>
);
};
export default ClickCounter;
```


## Ejercicio 9: Controlar una animación CSS

```javascript
Crea una caja animada que se mueva de izquierda a derecha al hacer clic en un botón. Usa useRef para acceder a la caja y modificar su estilo sin re-renderizados.
```


#### Solución

```html
jsx
import React, { useRef } from 'react';
const MoveBox = () => {
const boxRef = useRef(null);
const moveBox = () => {
boxRef.current.style.transform = 'translateX(100px)';
};
return (
<div>
<div
ref={boxRef}
style={{ width: '100px', height: '100px', background: 'blue', transition: 'transform 0.5s' }}
/>
<button onClick={moveBox}>Mover caja</button>
</div>
);
};
export default MoveBox;
```


## Ejercicio 10: Seguir el mouse en una caja

```javascript
Crea una caja que muestre las coordenadas del mouse cuando esté dentro de la caja. Usa useRef para acceder al div y actualizar su contenido dinámicamente sin renderizar el componente.
```


#### Solución

```html
jsx
import React, { useRef } from 'react';
const MouseTracker = () => {
const boxRef = useRef(null);
const handleMouseMove = (e) => {
const x = e.nativeEvent.offsetX;
const y = e.nativeEvent.offsetY;
boxRef.current.textContent = `X: ${x}, Y: ${y}`;
};
return (
<div
ref={boxRef}
onMouseMove={handleMouseMove}
style={{ width: '300px', height: '300px', background: 'lightgray', border: '1px solid black' }}
/>
);
};
export default MouseTracker;
Estos ejercicios te ayudarán a entender el uso de useRef para interactuar con el DOM directamente sin causar re-renderizados innecesarios en los componentes. ¡Disfruta del desafío!
```


ChatGPT puede cometer errores. Considera verificar la información importante.


---

## 📄 Ejercicios Propuesta

*Ubicación original:* `Ejercicios_old/Ejercicios Propuesta.odt`


########## Sumario


¡Claro! Aquí tienes 10 ejercicios para practicar manipulación de nodos en el DOM usando JavaScript. No utilizarán formularios ni eventos, sino que estarán enfocados en la selección y modificación de elementos.


## Ejercicio 1: Seleccionar y cambiar el texto de un párrafo


Descripción: Selecciona el primer párrafo de la página y cambia su texto a "Texto modificado por JavaScript".


Solución:

```javascript
javascript
const p = document.querySelector('p');
p.textContent = "Texto modificado por JavaScript";
```


## Ejercicio 2: Cambiar el color de todos los elementos h

```javascript
Descripción: Selecciona todos los elementos h2 en la página y cambia su color de texto a azul.
```


Solución:

```javascript
javascript
const headings = document.querySelectorAll('h2');
headings.forEach(h2 => {
h2.style.color = 'blue';
});
```


## Ejercicio 3: Agregar una nueva clase a un elemento div

```javascript
Descripción: Selecciona el primer elemento div y agrégale una clase llamada highlight.
```


Solución:

```javascript
javascript
const div = document.querySelector('div');
div.classList.add('highlight');
```


## Ejercicio 4: Ocultar todos los elementos de una lista ul

```javascript
Descripción: Selecciona todos los elementos li dentro de un ul y ocúltalos (establece su estilo display a none).
```


Solución:

```javascript
javascript
const items = document.querySelectorAll('ul li');
items.forEach(item => {
item.style.display = 'none';
});
```


## Ejercicio 5: Cambiar el contenido HTML de un div

```javascript
Descripción: Selecciona el primer div de la página y reemplaza su contenido HTML con un nuevo párrafo.
```


Solución:

```html
javascript
const div = document.querySelector('div');
div.innerHTML = "<p>Este es un nuevo párrafo dentro del div.</p>";
```


## Ejercicio 6: Modificar el atributo src de una imagen

```javascript
Descripción: Selecciona una imagen (img) y cambia su atributo src a una nueva URL de imagen.
```


Solución:

```javascript
javascript
const img = document.querySelector('img');
img.src = "https://via.placeholder.com/150";
```


## Ejercicio 7: Eliminar un elemento específico de una lista


Descripción: Selecciona el tercer elemento de una lista desordenada y elimínalo del DOM.


Solución:

```javascript
javascript
const thirdItem = document.querySelector('ul li:nth-child(3)');
thirdItem.remove();
```


## Ejercicio 8: Añadir un nuevo elemento li al final de una lista

```javascript
Descripción: Selecciona una lista ul y añade un nuevo elemento li con el texto "Nuevo elemento" al final de la lista.
```


Solución:

```javascript
javascript
const ul = document.querySelector('ul');
const newItem = document.createElement('li');
newItem.textContent = "Nuevo elemento";
ul.appendChild(newItem);
```


## Ejercicio 9: Insertar un nuevo nodo antes de otro

```javascript
Descripción: Selecciona el segundo li de una lista y añade un nuevo elemento li con el texto "Elemento antes" justo antes de este.
```


Solución:

```javascript
javascript
const secondItem = document.querySelector('ul li:nth-child(2)');
const newItem = document.createElement('li');
newItem.textContent = "Elemento antes";
secondItem.parentNode.insertBefore(newItem, secondItem);
```


## Ejercicio 10: Clonar un nodo y agregarlo a otro lugar

```javascript
Descripción: Selecciona un div de la página, clónalo y agrega el clon al final del body.
```


Solución:

```javascript
javascript
const div = document.querySelector('div');
const clonedDiv = div.cloneNode(true);
document.body.appendChild(clonedDiv);
```


Estos ejercicios deberían ayudarte a mejorar tus habilidades con el DOM usando JavaScript. Si necesitas más desafíos o aclaraciones, ¡avísame!


##### Tú dijiste:


Gracias.


###### ChatGPT Plus


ChatGPT


¡De nada! Me alegra que te haya sido útil. Si tienes más preguntas o necesitas más ejercicios, no dudes en preguntar. ¡Éxito con tu práctica! 😊


##### Tú dijiste:


¿Podrías complicar esos ejercicios un poco más?


###### ChatGPT Plus


ChatGPT


¡Por supuesto! Aquí tienes una versión más avanzada de los ejercicios anteriores, con desafíos adicionales para manipular el DOM de forma más compleja.


## Ejercicio 1: Seleccionar múltiples párrafos y alternar su contenido


Descripción: Selecciona todos los párrafos y, para cada uno, si contiene la palabra "JavaScript", cambia su texto a "Texto actualizado", de lo contrario, cambia su texto a "No contiene JavaScript".


Solución:

```javascript
javascript
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(p => {
if (p.textContent.includes('JavaScript')) {
p.textContent = "Texto actualizado";
} else {
p.textContent = "No contiene JavaScript";
}
});
```


## Ejercicio 2: Cambiar el color de todos los h2 alternando entre dos colores

```javascript
Descripción: Selecciona todos los elementos h2 y cambia el color de texto de los h2 en posiciones pares a rojo y los impares a verde.
```


Solución:

```javascript
javascript
const headings = document.querySelectorAll('h2');
headings.forEach((h2, index) => {
h2.style.color = (index % 2 === 0) ? 'red' : 'green';
});
```


## Ejercicio 3: Añadir varias clases a todos los div

```javascript
Descripción: Selecciona todos los div y añádeles dos clases nuevas: container y visible, pero solo si ya no tienen la clase hidden.
```


Solución:

```javascript
javascript
const divs = document.querySelectorAll('div');
divs.forEach(div => {
if (!div.classList.contains('hidden')) {
div.classList.add('container', 'visible');
}
});
```


## Ejercicio 4: Mostrar los elementos de una lista en orden inverso

```javascript
Descripción: Selecciona todos los elementos li de una lista ul y reorganízalos en el DOM para que se muestren en orden inverso.
```


Solución:

```javascript
javascript
const ul = document.querySelector('ul');
const items = Array.from(document.querySelectorAll('ul li'));
items.reverse().forEach(item => {
ul.appendChild(item);
});
```


## Ejercicio 5: Reemplazar todo el contenido de un div con múltiples elementos

```javascript
Descripción: Selecciona el primer div de la página y reemplaza todo su contenido por tres párrafos, cada uno con un texto diferente.
```


Solución:

```javascript
javascript
const div = document.querySelector('div');
div.innerHTML = ''; // Vaciar el contenido existente
for (let i = 1; i <= 3; i++) {
const p = document.createElement('p');
p.textContent = `Párrafo número ${i}`;
div.appendChild(p);
}
```


## Ejercicio 6: Cambiar dinámicamente el tamaño de todas las imágenes


Descripción: Selecciona todas las imágenes y cambia su tamaño. Si el ancho de la imagen es mayor a 300px, reduce el ancho a 300px. Si es menor, aumenta el ancho a 300px.


Solución:

```javascript
javascript
const images = document.querySelectorAll('img');
images.forEach(img => {
img.style.width = img.width > 300 ? '300px' : `${img.width}px`;
});
```


## Ejercicio 7: Eliminar todos los elementos li que contengan una palabra específica

```javascript
Descripción: Selecciona todos los elementos de una lista ul y elimina los que contienen la palabra "Eliminar".
```


Solución:

```javascript
javascript
const items = document.querySelectorAll('ul li');
items.forEach(item => {
if (item.textContent.includes('Eliminar')) {
item.remove();
}
});
```


## Ejercicio 8: Añadir varios nuevos elementos a una lista

```javascript
Descripción: Añade cinco nuevos elementos li a una lista ul, con el texto "Nuevo elemento X" (donde X es el número correspondiente), pero solo si la lista tiene más de 3 elementos.
```


Solución:

```javascript
javascript
const ul = document.querySelector('ul');
if (ul.children.length > 3) {
for (let i = 1; i <= 5; i++) {
const newItem = document.createElement('li');
newItem.textContent = `Nuevo elemento ${i}`;
ul.appendChild(newItem);
}
}
```


## Ejercicio 9: Reemplazar un elemento li en una posición específica

```javascript
Descripción: Selecciona el cuarto elemento de una lista ul y reemplázalo por un nuevo li con el texto "Reemplazado".
```


Solución:

```javascript
javascript
const ul = document.querySelector('ul');
const fourthItem = ul.querySelector('li:nth-child(4)');
if (fourthItem) {
const newItem = document.createElement('li');
newItem.textContent = "Reemplazado";
ul.replaceChild(newItem, fourthItem);
}
```


## Ejercicio 10: Clonar múltiples nodos y reorganizarlos en otro contenedor

```javascript
Descripción: Selecciona todos los div de la página, clónalos y agrégalos en orden inverso a un nuevo contenedor div con la clase nuevo-contenedor.
```


Solución:

```javascript
javascript
const divs = Array.from(document.querySelectorAll('div'));
const nuevoContenedor = document.createElement('div');
nuevoContenedor.classList.add('nuevo-contenedor');
divs.reverse().forEach(div => {
const clonedDiv = div.cloneNode(true);
nuevoContenedor.appendChild(clonedDiv);
});
document.body.appendChild(nuevoContenedor);
```


Estos ejercicios incluyen manipulaciones más avanzadas y situaciones condicionales que te ayudarán a profundizar en la comprensión del DOM. ¡Espero que disfrutes el desafío! Si tienes alguna duda o quieres más ejemplos, no dudes en preguntar.


##### Tú dijiste:


¡Genial! Gracias.


###### ChatGPT Plus


ChatGPT


¡Me alegra que te haya gustado! 😊 Si necesitas más ejercicios, aclaraciones o cualquier otra cosa, no dudes en pedírmelo. ¡Éxito en tu práctica con JavaScript y el DOM! 👨‍💻✨


##### Tú dijiste:


Pero, ¿podrías complicarlos más?


###### ChatGPT Plus


ChatGPT


¡Claro! Aquí tienes una versión aún más avanzada y compleja de los ejercicios anteriores. En esta versión, se incluye manipulación más sofisticada del DOM, como recorridos avanzados, creación dinámica de estructuras más complejas y operaciones condicionales adicionales.


## Ejercicio 1: Selección condicional y modificación profunda del DOM


Descripción: Selecciona todos los párrafos. Si un párrafo contiene más de 50 caracteres, cambia su contenido a mayúsculas; de lo contrario, cambia su color de fondo a gris.


Solución:

```javascript
javascript
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(p => {
if (p.textContent.length > 50) {
p.textContent = p.textContent.toUpperCase();
} else {
p.style.backgroundColor = 'grey';
}
});
```


## Ejercicio 2: Modificar nodos según su profundidad en el DOM

```javascript
Descripción: Selecciona todos los h2, y dependiendo de la profundidad del nodo en el DOM (su nivel en el árbol de elementos), cambia su color. Si está dentro de un div, color rojo; si está dentro de un section, color verde.
```


Solución:

```javascript
javascript
const headings = document.querySelectorAll('h2');
headings.forEach(h2 => {
if (h2.closest('div')) {
h2.style.color = 'red';
} else if (h2.closest('section')) {
h2.style.color = 'green';
}
});
```


## Ejercicio 3: Añadir clases dinámicamente según el número de nodos hermanos

```javascript
Descripción: Selecciona todos los div en la página. Si el div tiene más de 3 hermanos (otros nodos dentro del mismo padre), añádele la clase múltiples-hermanos. Si tiene menos de 3, añade la clase pocos-hermanos.
```


Solución:

```javascript
javascript
const divs = document.querySelectorAll('div');
divs.forEach(div => {
const siblingsCount = div.parentElement.children.length - 1; // Excluirse a sí mismo
if (siblingsCount > 3) {
div.classList.add('multiples-hermanos');
} else {
div.classList.add('pocos-hermanos');
}
});
```


## Ejercicio 4: Reorganizar nodos según su contenido

```javascript
Descripción: Selecciona todos los elementos li dentro de una lista. Reorganízalos de manera que los que contienen la palabra "Importante" aparezcan al principio, manteniendo el resto en el orden original.
```


Solución:

```javascript
javascript
const ul = document.querySelector('ul');
const items = Array.from(ul.querySelectorAll('li'));
const importantes = items.filter(item => item.textContent.includes('Importante'));
const otros = items.filter(item => !item.textContent.includes('Importante'));
// Vaciar la lista original y reorganizar
ul.innerHTML = '';
importantes.concat(otros).forEach(item => {
ul.appendChild(item);
});
```


## Ejercicio 5: Crear una tabla dinámicamente y añadir contenido

```javascript
Descripción: Crea dinámicamente una tabla dentro de un div. La tabla debe tener 4 filas y 3 columnas. Cada celda debe contener el texto "Fila X, Columna Y", donde X es el número de la fila e Y el número de la columna.
```


Solución:

```javascript
javascript
const div = document.querySelector('div');
const table = document.createElement('table');
for (let i = 1; i <= 4; i++) {
const row = document.createElement('tr');
for (let j = 1; j <= 3; j++) {
const cell = document.createElement('td');
cell.textContent = `Fila ${i}, Columna ${j}`;
row.appendChild(cell);
}
table.appendChild(row);
}
div.appendChild(table);
```


## Ejercicio 6: Modificación de atributos con base en otros atributos

```javascript
Descripción: Selecciona todas las imágenes en la página. Si el ancho (atributo width) es mayor que 400px, cambia el valor del atributo alt a "Imagen grande". Si es menor, cámbialo a "Imagen pequeña".
```


Solución:

```javascript
javascript
const images = document.querySelectorAll('img');
images.forEach(img => {
if (img.width > 400) {
img.setAttribute('alt', 'Imagen grande');
} else {
img.setAttribute('alt', 'Imagen pequeña');
}
});
```


## Ejercicio 7: Insertar nodos de manera recursiva

```javascript
Descripción: Selecciona un div y crea una lista desordenada (ul) con 3 elementos (li) dentro de él. Dentro de cada li, inserta recursivamente otra lista desordenada con 2 elementos li adicionales.
```


Solución:

```javascript
javascript
const div = document.querySelector('div');
function crearListaRecursiva(nivel) {
if (nivel === 0) return null;
const ul = document.createElement('ul');
for (let i = 1; i <= 3; i++) {
const li = document.createElement('li');
li.textContent = `Nivel ${nivel}, Item ${i}`;
const subLista = crearListaRecursiva(nivel - 1);
if (subLista) {
li.appendChild(subLista);
}
ul.appendChild(li);
}
return ul;
}
const lista = crearListaRecursiva(2); // 2 niveles de recursividad
div.appendChild(lista);
```


## Ejercicio 8: Intercambiar dos nodos en el DOM

```javascript
Descripción: Selecciona el primer y el último elemento de una lista (ul) y los intercambia de lugar en el DOM.
```


Solución:

```javascript
javascript
const ul = document.querySelector('ul');
const firstItem = ul.firstElementChild;
const lastItem = ul.lastElementChild;
if (firstItem && lastItem && firstItem !== lastItem) {
ul.insertBefore(lastItem, firstItem); // Mover el último antes del primero
ul.appendChild(firstItem); // Mover el primero al final
}
```


## Ejercicio 9: Crear y modificar elementos según el estado de otros

```javascript
Descripción: Si un div tiene la clase activo, crea y agrega un nuevo botón dentro de ese div con el texto "Desactivar". Si no tiene la clase activo, agrega un botón con el texto "Activar".
```


Solución:

```javascript
javascript
const divs = document.querySelectorAll('div');
divs.forEach(div => {
const button = document.createElement('button');
if (div.classList.contains('activo')) {
button.textContent = 'Desactivar';
} else {
button.textContent = 'Activar';
}
div.appendChild(button);
});
```


## Ejercicio 10: Duplicar nodos y alternar su visibilidad

```javascript
Descripción: Selecciona todos los div de la página, clónalos y añade los clones al final del cuerpo (body). Alterna la visibilidad entre el div original y su clon (uno visible, el otro oculto).
```


Solución:

```javascript
javascript
const divs = document.querySelectorAll('div');
divs.forEach(div => {
const clonedDiv = div.cloneNode(true);
div.style.display = 'block';
clonedDiv.style.display = 'none';
document.body.appendChild(clonedDiv);
// Alternar visibilidad entre original y clon
setInterval(() => {
div.style.display = (div.style.display === 'none') ? 'block' : 'none';
clonedDiv.style.display = (clonedDiv.style.display === 'none') ? 'block' : 'none';
}, 2000);
});
```


Estos ejercicios ofrecen una mayor complejidad y requieren un manejo más avanzado del DOM, incluyendo la creación de estructuras dinámicas, la manipulación condicional y el uso de funciones recursivas. ¡Espero que disfrutes resolviéndolos! Si necesitas más ayuda o aclaraciones, ¡no dudes en pedirlo!


ChatGPT puede cometer errores. Considera verificar la información importante.


---

## 📄 Práctica 3.01 DOM (autoevaluable)

*Ubicación original:* `Ejercicios_old/Práctica 3.01 DOM (autoevaluable).odt`


## PRÁCTICA 3.01 DOM


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
```javascript
el manejo de objetos iterables (array y JSON) se realizará siempre utilizando el spread operator y los métodos vistos en clase,
para leer JSON se utilizará la desestructuración (si procede),
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal).
```

- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
```javascript
la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
NOTA: La ejecucicón del código de los ejercicios se realizará transcurridos dos segundos desde la carga de la página a través de un setTimeout(()=>{ funcion_a_realizar }, 2000).
Contando elementos del DOM
Se dispone de una página web en Ejercicio01.html. Añade el código necesario en un fichero js aparte para mostrar la siguiente información:
```

- el número de párrafos de la página,
- el texto del segundo párrafo,
- el número de enlaces de la página,
- la dirección del primer enlace y
- la dirección del penúltimo enlace.

El texto con la información será añadido al &lt;div&gt; con id=info y debe estar debidamente formateado.

- Números DOM
```javascript
Crea una página web que tenga un listado de tipo <ul> con un <li> de muestra y el texto “Soy una muestra fea” (o algo similar). Cada dos segundos (con setInterval()) se añadirá un nuevo elemento <li> con un número aleatorio entre 1 y 1 000.
Tabla dinámica DOM
A partir del fichero Ejercicio03.html genera el código necesario para realizar las siguientes acciones:
cada dos segundos se añade una frase contenido en el array quijoteFrases que hará de diccionario (usa import),
además, se transformará el texto de la primera celda mediante la función toCani (creada con anterioridad) que se mostrará en la segunda celda.
Creando funciones DOM
Aunque parezca mentira, no existe ningún método para añadir un elemento después de otro como sí lo hace insertBefore. Crea una función que reciba como parámetros dos elementos (el primero debe ser nuevo en el DOM) y coloque el primero después del segundo. La llamada se realizará de este modo:
function insertAfter(nuevoElemento, existenteElemento);
```


---

## 📄 Práctica 3.02 DOM II Hell on Earth

*Ubicación original:* `Ejercicios_old/Práctica 3.02 DOM II Hell on Earth.odt`


## PRÁCTICA 3.02 DOM II Hell on Earth


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
```javascript
el manejo de objetos iterables (array y JSON) se realizará siempre utilizando el spread operator y los métodos vistos en clase,
para leer JSON se utilizará la desestructuración (si procede),
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal).
```

- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
```html
la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
NOTA: La ejecucicón del código de los ejercicios se realizará transcurridos dos segundos desde la carga de la página a través de un setTimeout(()=>{ funcion_a_realizar }, 2000).
El censor DOM
Crear una función que recorra el DOM desde la etiqueta <body> del fichero Ejercicio01.html y si encuentra la palabra "sexo" elimine el texto y la sustituya por "Contenido Bloqueado" poniendo el texto en rojo, negrita y cursiva (utiliza clases).
Primos DOM
```


Escribe un programa que cree dinámicamente una tabla de 10 por 10 celdas en la carga de la página (sin esperar los dos segundos). Cada celda de la tabla tendrá un número único que empezará en uno y se irá incrementando en uno.


Además, trancurridos dos segundos desde la carga inicial, todas las celdas de la tabla que tengan números primos se pongan con un fondo rojo y el texto en negrita (utiliza clases).

```javascript
Ocultar DOM
```


Crea una web que tenga cinco elementos &lt;p&gt; con el mismo estilo. Programa una acción para que cada segundo uno de los párrafos (seleccionado de forma aleatoria) cambie su color de fondo a uno generado aleatoriamente.


Dota de algún estilo CSS para que los párrafos sean distinguibles (altura, longitud, color y un borde).

```javascript
Componente Carrusel DOM
```


A partir de un array de imágenes como este:

```javascript
var imagenes = ["img/feo.jpg", "img/fea.jpg", "img/feos.jpg", "img/feas.jpg"];
```


Escribir un programa que muestre la primera imagen en con una etiqueta &lt;img&gt; dentro de un &lt;div&gt;. Tras dos segundos de espera, se muestra la siguiente imagen. Una vez mostrada la última imagen el carrusel volverá a comenzar por la primera.

```javascript
Añade alguna transición entre las imágenes utilizando las propiedades CSS. Por ejemplo desplazando las imágenes fuera de la página con right y left o que aparezcan y desaparezcan poco a poco con opacity.
Busca cuatro imágenes que estimes oportunas (aptas para menores) y colócalas en la carpeta img de tu ejercicio o, mejor todavía, utiliza direcciones web para evitar almacenar esas imágenes.
NOTA: para realizar las transiciones se debe modificar el código CSS a través de JavaScript. No se puede utilizar características propias de CSS como transition.
```


---

## 📄 Práctica 3.03 Gestor de tareas (opcional)

*Ubicación original:* `Ejercicios_old/Práctica 3.03 Gestor de tareas (opcional).odt`


![](/images/ut04_practica-3_10000000000002B90000035FBBC9BE28.png)


## PRÁCTICA 3.03 Gestor de tareas


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
```javascript
el manejo de objetos iterables (array y JSON) se realizará siempre utilizando el spread operator y los métodos vistos en clase,
para leer JSON se utilizará la desestructuración (si procede),
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal).
```

- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
```javascript
la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
```

- Gestor de tareas

![](/images/ut04_practica-3_10000000000002B90000035FBBC9BE28.png)

```javascript
Figura 1: Aspecto general de la aplicaciónEscribe el código CSS y JavaScript necesario (sin modificar el HTML de forma estática) para que se pueda realizar el siguiente comportamiento:
todos los eventos serán manejados a través de onClick recibiendo una función declaración y un identificador como parámetro (no se debe usar otra técnica ni pasar el objeto this al evento),
```

- las tareas de prueba deben eliminarse de forma dinámica al cargar la aplicación,
- todos los cambios de estilo en las etiquetas se realizarán con clases CSS,
- si se pulsa el botón Añadir se añade un &lt;div&gt; a las tareas pendientes con el contenido del &lt;textarea&gt; y limpiando el contenido tras su copia. Si el &lt;textarea&gt; está vacío debe insultar informar al usuario y no añadir ninguna tarea,
- las tareas (elementos &lt;div&gt;) deben contener dos botones: Borrar y Acabar ,
- cuando se pulsa sobre el botón Acabar de una tarea pendiente se quitará de la lista de tareas pendientes y pasará a la lista de tareas acabadas. Además realizará estas acciones:
  - se cambiará el color de fondo de la tarea a verde y el texto del botón Acabar debe cambiar a Volver, y el del botón Borrar a Archivar,
  - si se pulsa sobre el botón Volver de una tarea acabada se quitará de la lista de tareas acabadas y volverá a la lista de tareas pendientes con el formato y texto de los botones originales,
  - si se pulsa sobre el botón Archivar en una tarea desaparecerá del listado de acabadas pero no se eliminará,
  - cuando se pulse en el botón Mostrar se volverán a mostrar las tareas finalizadas y ocultas.

---

## 📄 Práctica 3.04 useRef en React (autoevaluable)

*Ubicación original:* `Ejercicios_old/Práctica 3.04 useRef en React (autoevaluable).odt`

```javascript
PRÁCTICA 3.04 useRef en React
```


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula,
  - el estilo que afecte a un componente debe estar contenido en un fichero CSS junto a ese componente y con su mismo nombre.
- En cuanto a la entrega de los archivos que componen los ejercicios de React:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
```javascript
los componentes creados deben estar separados en carpetas (los creados en el Ejercicio1 dentro de una carpeta denominada Ejercicio1),
```

  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con los ficheros package.json y package-lock.json en un fichero ZIP , y
```

  - sube a Aules el fichero comprimido.
- Creando elementos
```html
Diseña un componente denominado <Numericos> que contenga un <div>, y en su interior, una lista ordenada y un botón con el texto Añadir numerico. Dota a estos elementos de un CSS apropiado para la ocasión.
```


Escribe el código necesario para que al pulsar sobre el botón se añada un nuevo elemento al listado cuyo texto será un número generado de forma aleatoria entre 1 y 1 000.

- Cambiando propiedades
```html
Crea un componente denomindo <Parrafico> que contenga un <div> con un párrafo y un botón con el texto Cambiar colorico. Añade un estilo elegante a estos componentes.
```


Cuando se pulse el botón, el color de fondo del párrafo será cambiado por uno generado de forma aleatoria (reutiliza funciones anteriores).

- Contador con referecnias
```html
Elabora un componente denominado <Contadorico> que disponga de un <div> con un párrafo y dos botones en su interior. El párrafo debe contener un cero como contenido y los botones los textos Incrementar y Decrementar. Genera el código para realizar estas acciones:
```

- cuando se pulse el botón Incrementar al valor del párrafo se le sumará una unidad,
- cuando se pulse el botón Decrementar al valor del párrafo se le restará una unidad y
- el valor del párrafo nunca podrá ser negativo.

---

## 📄 Práctica 3.05 Calculadora en React (opcional)

*Ubicación original:* `Ejercicios_old/Práctica 3.05 Calculadora en React (opcional).odt`


![](/images/ut04_practica-3_10000000000001E300000253524D850F.png)


PRÁCTICA 3.05 Calculadora en React


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
```

  - los ejercicios deben realizarse usando JavaScript ES6. No se podrá utilizar ninguna biblioteca (si no se especifica lo contrario en el enunciado),
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula,
  - el estilo que afecte a un componente debe estar contenido en un fichero CSS junto a ese componente y con su mismo nombre.
- En cuanto a la entrega de los archivos que componen los ejercicios de React:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
```javascript
los componentes creados deben estar separados en carpetas (los creados en el Ejercicio1 dentro de una carpeta denominada Ejercicio1),
```

  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con los ficheros package.json y package-lock.json en un fichero ZIP , y
```

  - sube a Aules el fichero comprimido.
```javascript
Creando una calculadora en React con useRef
```


Crea una calculadora sencilla en React que tenga un aspecto parecido al de la imagen (es conveniente cambiar el estilo para evitar revisar veinte calculadoras idénticas).


Construye la aplicación teniendo en cuenta que:

```javascript
deberás crear bibliotecas temáticas para las funciones de la calculadora (usa import),
utiliza useRef para hacer referencia a elementos de DOM que lo requieran,
```

- crea el componente &lt;Calculadora&gt;, compuesto por los componentes que estimes oportunos.

![](/images/ut04_practica-3_10000000000001E300000253524D850F.png)


---

## 📄 Práctica 3.05 Películas con useRef

*Ubicación original:* `Ejercicios_old/Práctica 3.05 Películas con useRef.odt`


![](/images/ut04_practica-3_10000000000003E7000002EFE60FEE73.png)

```javascript
PRÁCTICA 3.05 Películas con useRef
```


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula,
  - el estilo que afecte a un componente debe estar contenido en un fichero CSS junto a ese componente y con su mismo nombre.
- En cuanto a la entrega de los archivos que componen los ejercicios de React:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
```javascript
los componentes creados deben estar separados en carpetas (los creados en el Ejercicio1 dentro de una carpeta denominada Ejercicio1),
```

  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con los ficheros package.json y package-lock.json en un fichero ZIP , y
```

  - sube a Aules el fichero comprimido.
- Ampliando películas

Modifica la aplicación de mostrar películas de la unidad anterior para que para que realice las siguientes funcionalidades. Puedes reutilizar el proyecto de la práctica anterior añadiendo y/o quitando información que estimes oportuna.


Esta revisión de la aplicación debe contener dos botones (Elenco y Taquilla) que tengan las siguientes funcionalidades:

- Elenco, que mostrará un listado de los actores que intervienen en la película,
- Taquilla, en la que se mostrará la recaudación de esa película en taquilla.
```javascript
Al pulsar sobre estos botones aparecerá la información oculta en un principio. Al volver a pulsar en ellos la información volverá a desaparecer. Usa las propiedades CSS y el hook useRef para conseguir este efecto. Sería buena idea crear un componente para taquilla.
```


La estructura de esta aplicación podría ser, por ejemplo, esta (pero mejor):


![](/images/ut04_practica-3_10000000000003E7000002EFE60FEE73.png)


---

## 📄 Práctica 3.06 Interfaces con rutas en React (autoevaluable)

*Ubicación original:* `Ejercicios_old/Práctica 3.06 Interfaces con rutas en React (autoevaluable).odt`


PRÁCTICA 3.06 Interfaces con rutas en React


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
```

  - los ejercicios deben realizarse usando JavaScript ES6. No se podrá utilizar ninguna biblioteca (si no se especifica lo contrario en el enunciado),
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula,
  - el estilo que afecte a un componente debe estar contenido en un fichero CSS junto a ese componente y con su mismo nombre.
- En cuanto a la entrega de los archivos que componen los ejercicios de React:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
```javascript
los componentes creados deben estar separados en carpetas (los creados en el Ejercicio1 dentro de una carpeta denominada Ejercicio1),
```

  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con los ficheros package.json y package-lock.json en un fichero ZIP , y
```

  - sube a Aules el fichero comprimido.
```javascript
Mi primera ruta en React con react-router-dom (autoevaluable)
Crea las siguientes rutas en el componente <App> de tu proyecto (nuevo o reutilizado):
```

- página principal de la aplicación (Inicio),
- otra de contacto (Contacto),
- una con información sobre la versión del programa (AcercaDe) y
- página con un listado de productos ficticios (Productos).

Recuerda que en cada una de las rutas se debe cargar un componente y los tendrás que crear. Usa una estructura de carpetas adecuada. Comprueba que las rutas funcionan utilizando la barra de navegación del navegador.

- Navegación entre páginas
```javascript
Crea el componente <Menu> utilizando <Link> para poder navegar entre las rutas de la aplicación e insértalo en la aplicación. Añade un poco de CSS para adecenarlo. Comprueba que las rutas funcionan de forma adecuada.
```

- Ruta por defecto
```javascript
Añade una ruta por defecto a la aplicación para que redirija al componente <Error> si no encuentra correspondencia con alguna otra. Comprueba su correcto funcionamiento.
```

- Uso del hook useNavigate
```javascript
En cada página de la aplicación crea un botón que permita redirigir al inicio. Para ello deberás utilizar el hook useNavigate de forma adecuada.
```


---

## 📄 Práctica 3.07 Interfaces con rutas de película en React

*Ubicación original:* `Ejercicios_old/Práctica 3.07 Interfaces con rutas de película en React.odt`


![](/images/ut04_practica-3_10000000000004E4000003ACDD6CE18C.png)


PRÁCTICA 3.07 Interfaces con rutas de película en React


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
```

  - los ejercicios deben realizarse usando JavaScript ES6. No se podrá utilizar ninguna biblioteca (si no se especifica lo contrario en el enunciado),
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula,
  - el estilo que afecte a un componente debe estar contenido en un fichero CSS junto a ese componente y con su mismo nombre.
- En cuanto a la entrega de los archivos que componen los ejercicios de React:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
```javascript
los componentes creados deben estar separados en carpetas (los creados en el Ejercicio1 dentro de una carpeta denominada Ejercicio1),
```

  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con los ficheros package.json y package-lock.json en un fichero ZIP , y
```

  - sube a Aules el fichero comprimido.
```javascript
Rutas en React con react-router-dom
```


Crea la interfaz para una aplicación de gestión de películas. Tan sólo se deberá crear la interfaz con contenido de relleno, pero deberá incluir todas estos apartados (te aconsejo que primero dibujes en papel la estructura de la aplicación y luego la dividas en componentes):

- debe tener una estructura fija con componentes que hagan las siguientes funciones: cabecera, menú, contenido y pie de la aplicación (pueden, a su vez, dividirse en componentes más específicos, si lo crees oportuno),
```javascript
en <Contenido> se verterá la información de la web que vaya cambiando, por lo que será la parte que más se modifique a lo largo de la ejecución de la aplicación,
```

- crea un menú con los siguientes apartados: inicio (que mostrará el contenido inicial), películas (que mostrará el listado de las películas), intérpretes (que mostrará información sobre los actores y actrices), galería (con imágenes de las cartelas de las películas) y acerca de (información de la aplicación como su versión, creador/a y fecha de modificación),
- dentro de películas crea un submenú que permitirá filtrar las películas por título, intérprete y/o director (no hay que implementar esta funcionalidad ahora sólo mostrar el menú que conducirá a un componente con un mensaje de texto),
- en galería existe otro submenú para filtrar las imágenes que permita filtrar las cartelas por título, intérprete y/o director (no hay que implementar esta funcionalidad ahora sólo mostrar el menú que conducirá a un componente con un mensaje de texto),
- crea una estructura de carpetas adecuada a la aplicación, que ya empieza a crecer,
```javascript
en caso de error, debe configurarse una ruta por defecto que muestre un nuevo componente denominado <Error>.
```


![](/images/ut04_practica-3_10000000000004E4000003ACDD6CE18C.png)


La aplicación puede tener un aspecto parecido a este, aunque es mejor que apliques tu propio estilo:


---

## 📄 Práctica 3.0X rutas en react

*Ubicación original:* `Ejercicios_old/Práctica 3.0X rutas en react.odt`


Ejercicio 1: Configurar las rutas básicas

```bash
Crea un nuevo proyecto React usando create-react-app o tu método preferido.
Instala react-router-dom usando el comando npm install react-router-dom.
Configura un archivo de enrutamiento (App.js) que incluya tres rutas: una página principal, una página de contacto y una página de acerca de nosotros.
```


Ejercicio 2: Navegación entre páginas

- En la página principal, añade enlaces a las páginas de contacto y acerca de nosotros.
- Asegúrate de que al hacer clic en estos enlaces, se navegue correctamente a las páginas correspondientes.

Ejercicio 3: Página de error 404

- Añade una ruta adicional para una página de error 404 que se muestre cuando se acceda a una URL no existente.
- Esta página debería indicar claramente que la URL no fue encontrada.

Ejercicio 4: Páginas anidadas

- Crea una sección en la página de contacto que tenga enlaces a diferentes departamentos (por ejemplo, ventas, soporte, etc.).
- Configura rutas anidadas para cada uno de estos departamentos.

Ejercicio 5: Paso de parámetros

- Crea una nueva ruta que permita ver los detalles de un departamento en particular.
- Usa parámetros de ruta para mostrar la información específica de cada departamento cuando se selecciona desde la página de contacto.
```javascript
Recuerda que para cada ejercicio, puedes consultar la documentación de react-router-dom para obtener ayuda adicional si es necesario. ¡Espero que estos ejercicios te ayuden a familiarizarte con el uso de react-router-dom! Si tienes alguna pregunta o necesitas más ayuda, no dudes en preguntar.
```


Ejercicio 1: Configurar las rutas básicas

```html
jsx
// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
function App() {
return (
<Router>
<Switch>
<Route path="/" exact component={Home} />
<Route path="/contact" component={Contact} />
<Route path="/about" component={About} />
</Switch>
</Router>
);
}
export default App;
```


Ejercicio 2: Navegación entre páginas

```html
jsx
// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
return (
<div>
<h1>Home</h1>
<Link to="/contact">Contact</Link>
<Link to="/about">About</Link>
</div>
);
}
export default Home;
```


Ejercicio 3: Página de error 404

```html
jsx
// NotFound.js
import React from 'react';
function NotFound() {
return <h1>404 - Not Found</h1>;
}
export default NotFound;
jsx
// App.js (agregando la ruta para NotFound)
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import NotFound from './NotFound';
function App() {
return (
<Router>
<Switch>
<Route path="/" exact component={Home} />
<Route path="/contact" component={Contact} />
<Route path="/about" component={About} />
<Route component={NotFound} />
</Switch>
</Router>
);
}
export default App;
```


Ejercicio 4: Páginas anidadas

```html
jsx
// Contact.js
import React from 'react';
import { Link } from 'react-router-dom';
function Contact() {
return (
<div>
<h1>Contact</h1>
<Link to="/contact/sales">Sales</Link>
<Link to="/contact/support">Support</Link>
</div>
);
}
export default Contact;
```


Ejercicio 5: Paso de parámetros

```html
jsx
// Department.js
import React from 'react';
import { useParams } from 'react-router-dom';
function Department() {
let { departmentId } = useParams();
return <h1>Department ID: {departmentId}</h1>;
}
export default Department;
jsx
// App.js (agregando la ruta para Department)
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import NotFound from './NotFound';
import Department from './Department';
function App() {
return (
<Router>
<Switch>
<Route path="/" exact component={Home} />
<Route path="/contact" component={Contact} />
<Route path="/contact/:departmentId" component={Department} />
<Route path="/about" component={About} />
<Route component={NotFound} />
</Switch>
</Router>
);
}
export default App;
Asegúrate de crear los componentes Home, Contact, About y Department como archivos separados en tu proyecto. ¡Espero que estas soluciones te sean útiles! Si tienes alguna otra pregunta o necesitas más ayuda, no dudes en preguntar.
```


MAS COMPLICADOS


Ejercicio 1: Configurar las rutas básicas con páginas protegidas

```javascript
Crea un componente PrivateRoute.js que proteja la ruta /about. Solo los usuarios autenticados deben poder acceder a esta página.
Simula una autenticación: crea un estado isAuthenticated en tu App y utiliza un botón para alternar entre el estado autenticado y no autenticado.
Cuando el usuario no esté autenticado y intente acceder a /about, redirígelo a una página de inicio de sesión.
```


Ejercicio 2: Navegación entre páginas con animaciones

- Utiliza CSS para agregar una transición animada cuando se navega entre las páginas. Por ejemplo, puedes hacer que las páginas se desvanezcan al entrar o salir.
- Agrega una barra de navegación que se mantenga fija en la parte superior de la página y permita navegar entre las diferentes rutas sin volver a la página principal.

Ejercicio 3: Página de error 404 personalizada

- Mejora la página de error 404 para que incluya un mensaje más amigable y un enlace que redireccione de regreso a la página principal.

Ejercicio 4: Páginas anidadas con contenido dinámico

- En la página de contacto, agrega un formulario de contacto. Al enviar el formulario, almacena la información en el estado de la aplicación y muestra un mensaje de confirmación.
- Agrega una nueva ruta para ver los mensajes de contacto enviados. Cada mensaje debería tener su propia URL única.

Ejercicio 5: Paso de parámetros y carga de datos

```javascript
En la página de detalles del departamento, usa el departmentId para cargar información sobre ese departamento desde una API o una fuente de datos simulada.
```

- Muestra esta información en la página de detalles del departamento.
```javascript
Estos ejercicios añaden un nivel adicional de complejidad y te permitirán explorar más a fondo las capacidades de react-router-dom y React en general. ¡Espero que te resulten útiles! Si tienes alguna pregunta o necesitas más ayuda, no dudes en preguntar.
```


Ejercicio 1: Configurar las rutas básicas con páginas protegidas

```html
jsx
// PrivateRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
<Route
{...rest}
render={props =>
isAuthenticated ? (
<Component {...props} />
) : (
<Redirect to="/login" />
)
}
/>
);
export default PrivateRoute;
jsx
// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';
import Login from './Login';
function App() {
const [isAuthenticated, setIsAuthenticated] = useState(false);
const toggleAuth = () => {
setIsAuthenticated(!isAuthenticated);
}
return (
<Router>
<Switch>
<Route path="/" exact component={Home} />
<Route path="/contact" component={Contact} />
<PrivateRoute
path="/about"
component={About}
isAuthenticated={isAuthenticated}
/>
<Route path="/login">
<Login toggleAuth={toggleAuth} />
</Route>
<Route component={NotFound} />
</Switch>
</Router>
);
}
export default App;
```


Ejercicio 2: Navegación entre páginas con animaciones


Para agregar animaciones, se necesita un poco de CSS adicional. Aquí te muestro un ejemplo simple utilizando transiciones de opacidad:

```javascript
css
/* App.css */
.transition {
opacity: 1;
transition: opacity 0.5s;
}
.transition-exit {
opacity: 1;
}
.transition-exit-active {
opacity: 0;
}
jsx
// App.js (actualizado)
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';
import Login from './Login';
import './App.css';
function App() {
// (Resto del código sin cambios)
}
export default App;
```


Ejercicio 3: Página de error 404 personalizada

```html
jsx
// NotFound.js (actualizado)
import React from 'react';
import { Link } from 'react-router-dom';
function NotFound() {
return (
<div>
<h1>404 - Not Found</h1>
<p>La página que buscas no se encuentra.</p>
<Link to="/">Volver a la página principal</Link>
</div>
);
}
export default NotFound;
```


Ejercicio 4: Páginas anidadas con contenido dinámico

```html
jsx
// Contact.js (actualizado)
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Contact() {
const [messages, setMessages] = useState([]);
const [message, setMessage] = useState('');
const handleSubmit = (e) => {
e.preventDefault();
setMessages([...messages, message]);
setMessage('');
}
return (
<div>
<h1>Contact</h1>
<form onSubmit={handleSubmit}>
<input
type="text"
value={message}
onChange={(e) => setMessage(e.target.value)}
/>
<button type="submit">Enviar mensaje</button>
</form>
<Link to="/contact/messages">Ver mensajes</Link>
</div>
);
}
export default Contact;
jsx
// Messages.js
import React from 'react';
import { useParams } from 'react-router-dom';
function Messages() {
// Muestra los mensajes almacenados en el estado local o en una base de datos
return (
<div>
<h1>Mensajes</h1>
{/* Mostrar los mensajes aquí */}
</div>
);
}
export default Messages;
```


Ejercicio 5: Paso de parámetros y carga de datos

```html
jsx
// Department.js (actualizado)
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
function Department() {
const { departmentId } = useParams();
const [departmentData, setDepartmentData] = useState(null);
useEffect(() => {
// Aquí puedes cargar los datos del departamento desde una API o fuente de datos simulada
// Por ejemplo, usando fetch o axios
// Luego, actualiza el estado con setDepartmentData
}, [departmentId]);
if (!departmentData) {
return <div>Cargando...</div>;
}
return (
<div>
<h1>{departmentData.name}</h1>
<p>{departmentData.description}</p>
</div>
);
}
export default Department;
```


Recuerda que estos son ejemplos simplificados y puedes adaptarlos según las necesidades de tu aplicación. ¡Espero que encuentres útiles estas soluciones! Si tienes más preguntas o necesitas más ayuda, no dudes en preguntar.


---

## 📄 Práctica 3.0X useRef

*Ubicación original:* `Ejercicios_old/Práctica 3.0X useRef.odt`


Ejercicio 1: Contador con useRef

```javascript
Descripción: Crea un contador que se actualice al hacer clic en un botón utilizando useRef.
```


Solución:

```html
jsx
import React, { useRef, useState } from 'react';
function Counter() {
const countRef = useRef(0);
const handleClick = () => {
countRef.current++;
console.log('Contador actual:', countRef.current);
};
return (
<div>
<button onClick={handleClick}>Incrementar</button>
</div>
);
}
export default Counter;
```


Ejercicio 2: Control de enfoque con useRef

```javascript
Descripción: Crea dos campos de entrada y un botón. Cuando el usuario hace clic en el botón, el primer campo de entrada debe recibir el enfoque utilizando useRef.
```


Solución:

```html
jsx
import React, { useRef } from 'react';
function FocusControl() {
const inputRef = useRef();
const handleClick = () => {
inputRef.current.focus();
};
return (
<div>
<input type="text" />
<input type="text" ref={inputRef} />
<button onClick={handleClick}>Focalizar</button>
</div>
);
}
export default FocusControl;
```


Ejercicio 3: Contador con reinicio

```javascript
Descripción: Crea un contador que se actualice al hacer clic en un botón y que se reinicie a cero cuando se haga clic en otro botón utilizando useRef.
```


Solución:

```html
jsx
import React, { useRef, useState } from 'react';
function ResettableCounter() {
const countRef = useRef(0);
const handleClickIncrement = () => {
countRef.current++;
console.log('Contador actual:', countRef.current);
};
const handleClickReset = () => {
countRef.current = 0;
console.log('Contador reiniciado');
};
return (
<div>
<button onClick={handleClickIncrement}>Incrementar</button>
<button onClick={handleClickReset}>Reiniciar</button>
</div>
);
}
export default ResettableCounter;
```


Ejercicio 4: Acceder a elementos del DOM

```javascript
Descripción: Crea un componente que renderice una lista y utiliza useRef para acceder a uno de los elementos de la lista y cambiar su estilo cuando se hace clic en un botón.
```


Solución:

```html
jsx
import React, { useRef } from 'react';
function ListWithRef() {
const listItemRef = useRef(null);
const handleClick = () => {
listItemRef.current.style.color = 'red';
};
return (
<div>
<ul>
<li>Elemento 1</li>
<li>Elemento 2</li>
<li ref={listItemRef}>Elemento 3</li>
</ul>
<button onClick={handleClick}>Cambiar Estilo</button>
</div>
);
}
export default ListWithRef;
Estos ejercicios deberían ayudarte a practicar el uso de useRef en React. Si tienes alguna pregunta o necesitas más ejemplos, no dudes en preguntar. ¡Feliz codificación!
```


Ejercicio 1: Contador con contador global


Descripción: Crea un contador que se actualice al hacer clic en un botón. Agrega un botón adicional que reinicie el contador. El contador debe ser global y compartido entre múltiples componentes.


Solución:

```html
jsx
import React from 'react';
const globalCount = { current: 0 };
function Counter() {
const handleClick = () => {
globalCount.current++;
console.log('Contador actual:', globalCount.current);
};
const handleReset = () => {
globalCount.current = 0;
console.log('Contador reiniciado');
};
return (
<div>
<button onClick={handleClick}>Incrementar</button>
<button onClick={handleReset}>Reiniciar</button>
</div>
);
}
export default Counter;
```


Ejercicio 2: Lista de elementos con enfoque automático


Descripción: Crea un componente que renderice una lista de elementos. Cuando se agrega un nuevo elemento, el campo de entrada debe recibir automáticamente el enfoque.


Solución:

```html
jsx
import React, { useRef } from 'react';
function AutoFocusList() {
const inputRef = useRef();
const itemsRef = useRef([]);
const handleAddItem = () => {
const newItem = { id: Date.now(), text: 'Nuevo elemento' };
itemsRef.current = [...itemsRef.current, newItem];
inputRef.current.focus();
};
return (
<div>
<input type="text" ref={inputRef} />
<button onClick={handleAddItem}>Agregar Elemento</button>
<ul>
{itemsRef.current.map(item => (
<li key={item.id}>{item.text}</li>
))}
</ul>
</div>
);
}
export default AutoFocusList;
```


Ejercicio 3: Scroll infinito con useRef


Descripción: Crea un componente que renderice una lista de elementos. Cuando el usuario se desplaza hacia abajo, carga más elementos automáticamente.


Solución:

```html
jsx
import React, { useRef } from 'react';
function InfiniteScrollList() {
const containerRef = useRef();
const itemsRef = useRef([...Array(20).keys()]);
const handleScroll = () => {
const container = containerRef.current;
if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
itemsRef.current = [...itemsRef.current, ...Array(20).keys()];
}
};
return (
<div ref={containerRef} style={{ height: '300px', overflow: 'auto' }} onScroll={handleScroll}>
<ul>
{itemsRef.current.map(item => (
<li key={item}>{item}</li>
))}
</ul>
</div>
);
}
export default InfiniteScrollList;
```


Ejercicio 4: Control de tiempo con useRef


Descripción: Crea un temporizador que comienza cuando se carga el componente y se actualiza cada segundo.


Solución:

```html
jsx
import React from 'react';
const timerRef = { current: 0 };
function Timer() {
setInterval(() => {
timerRef.current++;
console.log('Tiempo transcurrido:', timerRef.current);
}, 1000);
return (
<div>
<p>Tiempo actual: {timerRef.current}</p>
</div>
);
}
export default Timer;
```


Ejercicio 5: Captura de coordenadas del ratón


Descripción: Crea un componente que muestre las coordenadas del ratón mientras se mueve por la pantalla.


Solución:

```html
jsx
import React, { useRef } from 'react';
function MouseCoordinates() {
const coordinatesRef = useRef({ x: 0, y: 0 });
const handleMouseMove = (e) => {
coordinatesRef.current = { x: e.clientX, y: e.clientY };
};
document.addEventListener('mousemove', handleMouseMove);
return (
<div>
<p>Coordenadas del ratón:</p>
<p>X: {coordinatesRef.current.x}</p>
<p>Y: {coordinatesRef.current.y}</p>
</div>
);
}
export default MouseCoordinates;
En estos ejercicios, solo se utiliza el hook useRef para mantener el estado y la lógica del componente. ¡Espero que encuentres útiles estos ejercicios! Si tienes alguna pregunta o necesitas más ejemplos, no dudes en preguntar.
```


---

## 📄 Evaluacion_UT04

*Ubicación original:* `Evaluacion_UT04.md`

```markdown
# PRUEBA DE EVALUACIÓN - UNIDAD 04
## Document Object Model (DOM), BOM, useRef y Enrutamiento en React

**Módulo:** Desarrollo Web en Entorno Cliente (2º DAW)  
**Duración:** 2 horas (Presencial, sin conexión a Internet)  
**Puntuación máxima:** 100 puntos

---

### Normas de entrega y directrices técnicas

#### En cuanto al código:
- **Presentación interna:** Importan los comentarios explicativos, la claridad del código y la significación de los identificadores; el programa debe considerarse autodocumentado.
- **Presentación externa:** Interfaz limpia con retroalimentación visual amigable.
- **Sintaxis y estándares:** Los ejercicios de JavaScript deben realizarse en **JavaScript ES6**, activando el **modo estricto** (`"use strict";`).
- **Manipulación del DOM:** Se deben emplear los métodos estándar del DOM (`querySelector`, `getElementById`, `createElement`, `appendChild`, `insertBefore`, `remove`, `classList`). No se permite la alteración indiscriminada de `innerHTML` para crear estructuras complejas ni el uso de bibliotecas como jQuery.
- **Límite de contenidos:** Solo está permitido emplear los conocimientos de las unidades **UT01, UT02, UT03 y UT04** (BOM, DOM, `useRef` y enrutamiento con `react-router-dom`). No se permite el uso de eventos avanzados de formularios (UT05) ni peticiones asíncronas remotas (UT06).

#### En cuanto a la entrega de archivos:
1. Entregar en la carpeta `Evaluacion_UT04/` dividida en: `Ejercicio 1/`, `Ejercicio 2/` y `Ejercicio 3/`.
2. Para los ejercicios de JavaScript incluir su correspondiente archivo `.html` y `.js`.
3. Para el ejercicio de React, crear los componentes `.jsx` y sus hojas de estilo `.css`.

---

## Enunciados de la Prueba

### Ejercicio 1: Tablero Dinámico de Avisos Urgentes en Vanilla DOM (35 puntos)
Se requiere construir una aplicación interactiva en JavaScript para publicar y gestionar avisos en una pizarra digital:

1. **Estructura HTML base:** Dispone de un `<input>` de texto, un `<select>` con prioridades ("Alta", "Media", "Baja") y un `<button>` "Publicar Aviso".
2. **Generación dinámica:**
   - Al pulsar el botón, valida que el texto no esté vacío. Si está vacío, alerta al usuario y no crea nada.
   - Crea un elemento `<div>` con la clase `.tarjeta-aviso` y una clase adicional según la prioridad (`.prioridad-alta`, `.prioridad-media`, `.prioridad-baja`).
   - Dentro del aviso, incluye la fecha y hora de creación formateada, el texto del aviso y dos botones: "Destacar" y "Archivar".
   - Si la prioridad es "Alta", el aviso debe insertarse **al principio** del contenedor de avisos (`insertBefore`); si es media o baja, al final (`appendChild`).
3. **Comportamiento interactivo:**
   - **Destacar:** Alterna la clase CSS `.aviso-destacado` (borde dorado y fondo resaltado).
   - **Archivar:** Elimina el nodo del DOM mediante el método `remove()`.

---

### Ejercicio 2: Auditoría y Modificación Estructural del DOM (30 puntos)
A partir de una página web con un árbol jerárquico de secciones y artículos:

1. Crea una función `auditarDocumento()` que:
   - Cuente cuántos elementos `<h2>` y cuántos enlaces `<a>` existen.
   - Obtenga el texto del primer y último elemento de una lista `<ul>`.
   - Inserte dinámicamente un bloque resumen con id `resumen-auditoria` justo **antes** del pie de página (`<footer>`) usando `insertBefore`.
2. Crea una función `resaltarEnlacesExternos()` que recorra todos los enlaces del documento y, a aquellos cuyo atributo `href` empiece por `"https://"`, les añada la clase `.enlace-seguro` y el atributo `target="_blank"`.

---

### Ejercicio 3: Catálogo y Navegación con useRef y Rutas en React (35 puntos)
Desarrolla una aplicación con `react-router-dom` y `useRef`:

1. **Rutas configuradas:**
   - `/` (Inicio): Presentación con botón para explorar catálogo.
   - `/catalogo`: Lista de artículos tecnológicos. Al pulsar sobre un artículo, muestra su detalle en un modal o sección oculta gestionada mediante `useRef` (modificando estilos directamente sin re-renderizar todo el árbol).
   - `/contacto`: Formulario con campos de nombre y mensaje referenciados mediante `useRef` para capturar el valor y enfocar (`focus()`) el campo de texto si está vacío.
   - `*` (Error 404): Página amigable con enlace de retorno.

```

---

## 📄 Práctica 4.01 DOM (autoevaluable)

*Ubicación original:* `Práctica 4.01 DOM (autoevaluable).odt`


## PRÁCTICA 4.01 DOM


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
```javascript
el manejo de objetos iterables (array y JSON) se realizará siempre utilizando el spread operator y los métodos vistos en clase,
para leer JSON se utilizará la desestructuración (si procede),
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal).
```

- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
```javascript
la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
NOTA: La ejecucicón del código de los ejercicios se realizará transcurridos dos segundos desde la carga de la página a través de un setTimeout(()=>{ funcion_a_realizar }, 2000), a menos que el enunciado indique lo contrario.
Contando elementos del DOM
Se dispone de una página web en Ejercicio01.html. Añade el código necesario en un fichero js aparte para mostrar la siguiente información:
```

- el número de párrafos de la página,
- el texto del segundo párrafo,
- el número de enlaces de la página,
- la dirección del primer enlace y
- la dirección del penúltimo enlace.

El texto con la información será añadido al &lt;div&gt; con id=info y debe estar debidamente formateado.

- Números DOM
```javascript
Crea una página web que tenga un listado de tipo <ul> con un <li> de muestra y el texto “Soy una muestra fea” (o algo similar). Cada dos segundos (con setInterval()) se añadirá un nuevo elemento <li> con un número aleatorio entre 1 y 1 000.
Tabla dinámica DOM
A partir del fichero Ejercicio03.html genera el código necesario para realizar las siguientes acciones:
cada segundo se añade una frase contenido en el array quijoteFrases que hará de diccionario (usa import),
además, se transformará el texto de la primera celda mediante la función toCani (creada con anterioridad) que se mostrará en la segunda celda.
Creando funciones DOM
Aunque parezca mentira, no existe ningún método para añadir un elemento después de otro como sí lo hace insertBefore. Crea una función que reciba como parámetros dos elementos (el primero debe ser nuevo en el DOM) y coloque el primero después del segundo. La llamada se realizará de este modo:
function insertAfter(nuevoElemento, existenteElemento);
```


---

## 📄 Práctica 4.02 DOM II Hell on Earth

*Ubicación original:* `Práctica 4.02 DOM II Hell on Earth.odt`


## PRÁCTICA 4.02 DOM II Hell on Earth


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
```javascript
el manejo de objetos iterables (array y JSON) se realizará siempre utilizando el spread operator y los métodos vistos en clase,
para leer JSON se utilizará la desestructuración (si procede),
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal).
```

- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
```html
la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
NOTA: La ejecucicón del código de los ejercicios se realizará transcurridos dos segundos desde la carga de la página a través de un setTimeout(()=>{ funcion_a_realizar }, 2000), a menos que el enunciado indique lo contrario.
El censor DOM
Crear una función que recorra el DOM desde la etiqueta <body> del fichero Ejercicio01.html y si encuentra la palabra "sexo" elimine el texto y la sustituya por "Contenido Bloqueado" poniendo el texto en rojo, negrita y cursiva (utiliza clases para el estilo).
Primos DOM
```


Escribe un programa que cree dinámicamente una tabla de 10 por 10 celdas en la carga de la página (sin esperar los dos segundos). Cada celda de la tabla tendrá un número único que empezará en uno y se irá incrementando en uno.


Además, trancurridos dos segundos desde la carga inicial, todas las celdas de la tabla que tengan números primos se pongan con un fondo rojo y el texto en negrita (utiliza clases para el estilo).

```javascript
Ocultar DOM
```


Crea una web que tenga cinco elementos &lt;p&gt; con el mismo estilo. Programa una acción para que cada segundo uno de los párrafos (seleccionado de forma aleatoria) cambie su color de fondo a uno generado aleatoriamente (usa un atributo en lugar de clases para esto, pero recuerda que no es una buena práctica).


Dota de algún estilo CSS para que los párrafos sean distinguibles (altura, longitud, color y un borde).

```javascript
Componente Carrusel DOM
```


A partir de un array de imágenes como este:

```javascript
var imagenes = ["img/feo.jpg", "img/fea.jpg", "img/feos.jpg", "img/feas.jpg"];
```


Escribir un programa que muestre la primera imagen en con una etiqueta &lt;img&gt; dentro de un &lt;div&gt;. Tras dos segundos de espera, se muestra la siguiente imagen. Una vez mostrada la última imagen el carrusel volverá a comenzar por la primera.

```javascript
Añade alguna transición entre las imágenes utilizando las propiedades CSS. Por ejemplo desplazando las imágenes fuera de la página con right y left o que aparezcan y desaparezcan poco a poco con opacity.
Busca cuatro imágenes que estimes oportunas (aptas para menores) y colócalas en la carpeta img de tu ejercicio o, mejor todavía, utiliza direcciones web para evitar almacenar esas imágenes.
NOTA: para realizar las transiciones se debe modificar el código CSS a través de JavaScript. No se puede utilizar características propias de CSS como transition.
```


---

## 📄 Práctica 4.03 Gestor de tareas

*Ubicación original:* `Práctica 4.03 Gestor de tareas.odt`


![](/images/ut04_practica-4_10000000000002B90000035FBBC9BE28.png)


## PRÁCTICA 4.03 Gestor de tareas


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
```javascript
el manejo de objetos iterables (array y JSON) se realizará siempre utilizando el spread operator y los métodos vistos en clase,
para leer JSON se utilizará la desestructuración (si procede),
se usarán las funcionalidades import y export para crear bibliotecas de funciones temáticas (no debe haber declaración de funciones ni objetos en el documento principal).
```

- En cuanto a la entrega de los archivos que componen los ejercicios:
  - todos los ejercicios en una carpeta (creando las subcarpetas necesarias para documentación anexa como imágenes o estilos) cuyo nombre queda a discreción del discente,
  - el nombre de los ficheros necesarios para resolver el ejercicio será el número de ejercicio que contenga,
  - el código contendrá ejemplos de ejecución, si procede, y
```javascript
la carpeta será comprimida en formato ZIP y será subida a Aules de forma puntual.
```

- Gestor de tareas

![](/images/ut04_practica-4_10000000000002B90000035FBBC9BE28.png)

```javascript
Figura 1: Aspecto general de la aplicaciónEscribe el código CSS y JavaScript necesario (sin modificar el HTML de forma estática) para que se pueda realizar el siguiente comportamiento:
todos los eventos serán manejados a través de onClick recibiendo una función declaración y un identificador como parámetro (no se debe usar otra técnica ni pasar el objeto this al evento),
```

- las tareas de prueba deben eliminarse de forma dinámica al cargar la aplicación,
- todos los cambios de estilo en las etiquetas se realizarán con clases CSS,
- si se pulsa el botón Añadir se añade un &lt;div&gt; a las tareas pendientes con el contenido del &lt;textarea&gt; y limpiando el contenido tras su copia. Si el &lt;textarea&gt; está vacío debe insultar informar al usuario y no añadir ninguna tarea,
- las tareas (elementos &lt;div&gt;) deben contener dos botones: Borrar y Acabar ,
- cuando se pulsa sobre el botón Acabar de una tarea pendiente se quitará de la lista de tareas pendientes y pasará a la lista de tareas acabadas. Además realizará estas acciones:
  - se cambiará el color de fondo de la tarea a verde y el texto del botón Acabar debe cambiar a Volver, y el del botón Borrar a Archivar,
  - si se pulsa sobre el botón Volver de una tarea acabada se quitará de la lista de tareas acabadas y volverá a la lista de tareas pendientes con el formato y texto de los botones originales,
  - si se pulsa sobre el botón Archivar en una tarea desaparecerá del listado de acabadas pero no se eliminará,
  - cuando se pulse en el botón Mostrar se volverán a mostrar las tareas finalizadas y ocultas.

---

## 📄 Práctica 4.04 useRef en React (autoevaluable)

*Ubicación original:* `Práctica 4.04 useRef en React (autoevaluable).odt`

```javascript
PRÁCTICA 4.04 useRef en React
```


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula,
  - el estilo que afecte a un componente debe estar contenido en un fichero CSS junto a ese componente y con su mismo nombre.
- En cuanto a la entrega de los archivos que componen los ejercicios de React:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
```javascript
los componentes creados deben estar separados en carpetas (los creados en el Ejercicio1 dentro de una carpeta denominada Ejercicio1),
```

  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con el fichero package.json en un fichero ZIP , y
```

  - sube a Aules el fichero comprimido.
- Creando elementos
```html
Diseña un componente denominado <Numericos> que contenga un <div>, y en su interior, una lista ordenada y un botón con el texto Añadir numerico. Dota a estos elementos de un CSS apropiado para la ocasión.
```


Escribe el código necesario para que al pulsar sobre el botón se añada un nuevo elemento al listado cuyo texto será un número generado de forma aleatoria entre 1 y 1 000.

- Cambiando propiedades
```html
Crea un componente denomindo <Parrafico> que contenga un <div> con un párrafo y un botón con el texto Cambiar colorico. Añade un estilo elegante a estos componentes.
```


Cuando se pulse el botón, el color de fondo del párrafo será cambiado por uno generado de forma aleatoria (reutiliza funciones anteriores).

- Contador con referecnias
```html
Elabora un componente denominado <Contadorico> que disponga de un <div> con un párrafo y dos botones en su interior. El párrafo debe contener un cero como contenido y los botones los textos Incrementar y Decrementar. Genera el código para realizar estas acciones:
```

- cuando se pulse el botón Incrementar al valor del párrafo se le sumará una unidad,
- cuando se pulse el botón Decrementar al valor del párrafo se le restará una unidad y
- el valor del párrafo nunca podrá ser negativo.

---

## 📄 Práctica 4.05 Películas con useRef

*Ubicación original:* `Práctica 4.05 Películas con useRef.odt`


![](/images/ut04_practica-4_10000000000003E7000002EFE60FEE73.png)

```javascript
PRÁCTICA 4.05 Películas con useRef
```


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
los ejercicios deben realizarse usando JavaScript ES6 y usar el modo estricto (use strict) No se podrá utilizar jQuery ni cualquier otra biblioteca (si no se especifica lo contrario en el enunciado),
```

  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula,
  - el estilo que afecte a un componente debe estar contenido en un fichero CSS junto a ese componente y con su mismo nombre.
- En cuanto a la entrega de los archivos que componen los ejercicios de React:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
```javascript
los componentes creados deben estar separados en carpetas (los creados en el Ejercicio1 dentro de una carpeta denominada Ejercicio1),
```

  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con los ficheros package.json y package-lock.json en un fichero ZIP , y
```

  - sube a Aules el fichero comprimido.
- Ampliando películas

Modifica la aplicación de mostrar películas de la unidad anterior para que realice las siguientes funcionalidades. Puedes reutilizar el proyecto de la práctica anterior añadiendo y/o quitando información que estimes oportuna.


Esta revisión de la aplicación debe contener dos botones (Elenco y Taquilla) que tengan las siguientes funcionalidades:

- Elenco, que mostrará un listado de los actores que intervienen en la película,
- Taquilla, en la que se mostrará la recaudación de esa película en taquilla (debidamente formateada).
```javascript
Al pulsar sobre estos botones aparecerá la información oculta en un principio. Al volver a pulsar en ellos la información volverá a desaparecer. Usa las propiedades CSS y el hook useRef para conseguir este efecto. Sería buena idea crear un componente para taquilla.
```


La estructura de esta aplicación podría ser, por ejemplo, esta (pero mejor):


![](/images/ut04_practica-4_10000000000003E7000002EFE60FEE73.png)


---

## 📄 Práctica 4.06 Interfaces con rutas en React

*Ubicación original:* `Práctica 4.06 Interfaces con rutas en React.odt`


PRÁCTICA 4.06 Interfaces con rutas en React


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
```

  - los ejercicios deben realizarse usando JavaScript ES6. No se podrá utilizar ninguna biblioteca (si no se especifica lo contrario en el enunciado),
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula,
  - el estilo que afecte a un componente debe estar contenido en un fichero CSS junto a ese componente y con su mismo nombre.
- En cuanto a la entrega de los archivos que componen los ejercicios de React:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
```javascript
los componentes creados deben estar separados en carpetas (los creados en el Ejercicio1 dentro de una carpeta denominada Ejercicio1),
```

  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con los ficheros package.json y package-lock.json en un fichero ZIP , y
```

  - sube a Aules el fichero comprimido.
```javascript
Mi primera ruta en React con react-router-dom
Crea las siguientes rutas en el componente <App> de tu proyecto (nuevo o reutilizado):
```

- página principal de la aplicación (Inicio),
- otra de contacto (Contacto),
- una con información sobre la versión del programa (AcercaDe) y
- página con un listado de productos ficticios (Productos).

Recuerda que en cada una de las rutas se debe cargar un componente y los tendrás que crear. Usa una estructura de carpetas adecuada. Comprueba que las rutas funcionan utilizando la barra de navegación del navegador.

- Navegación entre páginas
```javascript
En el mismo proyecto, crea el componente <Menu> utilizando <Link> para poder navegar entre las rutas de la aplicación e insértalo en la aplicación. Añade un poco de CSS para adecentarlo. Comprueba que las rutas funcionan de forma adecuada.
```

- Ruta por defecto
```javascript
Añade una ruta por defecto a la aplicación para que redirija al componente <Error> si no encuentra correspondencia con alguna otra. Comprueba su correcto funcionamiento.
```

- Uso del hook useNavigate
```javascript
En cada página de la aplicación crea un botón que permita redirigir al inicio. Para ello deberás utilizar el hook useNavigate de forma adecuada.
```


---

## 📄 Práctica 4.07 Interfaces con rutas de película en React

*Ubicación original:* `Práctica 4.07 Interfaces con rutas de película en React.odt`


![](/images/ut04_practica-4_10000000000004E4000003ACDD6CE18C.png)


PRÁCTICA 4.07 Interfaces con rutas de película en React


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula,
  - el estilo que afecte a un componente debe estar contenido en un fichero CSS junto a ese componente y con su mismo nombre.
- En cuanto a la entrega de los archivos que componen los ejercicios de React:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
```javascript
los componentes creados deben estar separados en carpetas (los creados en el Ejercicio1 dentro de una carpeta denominada Ejercicio1),
```

  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con los ficheros package.json y package-lock.json en un fichero ZIP , y
```

  - sube a Aules el fichero comprimido.
```javascript
Rutas en React con react-router-dom
Crea la interfaz con rutas y la biblioteca react-router-dom para una aplicación de gestión de películas. Deberá incluir todas estos apartados (te aconsejo que primero dibujes en papel la estructura de la aplicación y luego la dividas en componentes que pueden, por supuesto, ser reutilizados de prácticas anteriores):
```

- debe tener una estructura con componentes que hagan las siguientes funciones: cabecera, menú, contenido y pie de la aplicación (pueden, a su vez, dividirse en componentes más específicos, si lo crees oportuno). Sería interesante reutilizar componentes de prácticas anteriores para crear esta estructura, si existen,
```javascript
en <Contenido> se verterá la información de la web que vaya cambiando, por lo que será la parte que más se modifique a lo largo de la ejecución de la aplicación,
```

- crea un menú con los siguientes apartados: inicio (que mostrará el contenido inicial), películas (que mostrará el listado de las películas), intérpretes (que mostrará información sobre los actores y actrices), galería (con imágenes de las cartelas de las películas) y acerca de (información de la aplicación como su versión, creador/a y fecha de modificación),
```html
crea los componentes “página” para cada sección del menú (un componente <Inicio> para inicio, uno <Peliculas> para películas, etcétera). Todos deben tener un texto que identifique al componente, por ejemplo con un <h2>Esta es la página de inicio</h2> para el componente <Inicio>.
en el componente <Peliculas> mostrará un listado de las películas contenidas en el fichero peliculas.json de prácticas anteriores. Ese listado contendrá el título de la película, su imagen de cartela en miniatura y el año de exhibición. En ese mismo componente, al pulsar sobre una película se mostrará otro componente denominado <PeliculaDetalle> con la información ampliada de cada una (toda su información). Por supuesto, puedes reutilizar componentes de prácticas anteriores.
```

- en la sección galería existe un submenú con tres opciones para filtrar las cartelas por título, intérprete y/o director. Al pulsar sobre cada opción cargará (en la misma sección) una página con las cartelas pero, ¡ojo!, no hay que implementar esta funcionalidad ahora, sólo mostrar un mensaje de texto,
- crea una estructura de carpetas adecuada a la aplicación, que ya empieza a crecer y es buena idea tenerlo todo separado y ordenado,
```javascript
en caso de error, debe configurarse una ruta por defecto que muestre un nuevo (o reutilizado) componente denominado <Error>.
```


![](/images/ut04_practica-4_10000000000004E4000003ACDD6CE18C.png)


La aplicación puede tener una estructura parecida a esta, aunque es mejor que apliques tu propio estilo y estructura:


---

## 📄 Práctica 4.XX Calculadora en React (opcional)

*Ubicación original:* `Práctica 4.XX Calculadora en React (opcional).odt`


![](/images/ut04_practica-4_10000000000001E300000253524D850F.png)


PRÁCTICA 3.05 Calculadora en React


Normas de entrega

- En cuanto al código:
```javascript
en la presentación interna, importan los comentarios, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como autodocumentado. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las funciones y clases empleadas. La ausencia de comentarios será penalizada,
```

  - en la presentación externa, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación,
```javascript
si no se especifica lo contrario, la información resultante del programa debe aparecer en la consola del navegador console.log(información),
```

  - los ejercicios deben realizarse usando JavaScript ES6. No se podrá utilizar ninguna biblioteca (si no se especifica lo contrario en el enunciado),
  - para el nombre de variables, constantes y funciones se utilizará lowerCamelCase,
  - el nombre de los componentes debe comenzar con letra mayúscula,
  - el estilo que afecte a un componente debe estar contenido en un fichero CSS junto a ese componente y con su mismo nombre.
- En cuanto a la entrega de los archivos que componen los ejercicios de React:
  - entrega la práctica en un sólo proyecto (el nombre a tu discreción),
```javascript
los componentes creados deben estar separados en carpetas (los creados en el Ejercicio1 dentro de una carpeta denominada Ejercicio1),
```

  - el código contendrá ejemplos de ejecución, si procede,
```javascript
comprime la carpeta src junto con los ficheros package.json y package-lock.json en un fichero ZIP , y
```

  - sube a Aules el fichero comprimido.
```javascript
Creando una calculadora en React con useRef
```


Crea una calculadora sencilla en React que tenga un aspecto parecido al de la imagen (es conveniente cambiar el estilo para evitar revisar veinte calculadoras idénticas).


Construye la aplicación teniendo en cuenta que:

```javascript
deberás crear bibliotecas temáticas para las funciones de la calculadora (usa import),
utiliza useRef para hacer referencia a elementos de DOM que lo requieran,
```

- crea el componente &lt;Calculadora&gt;, compuesto por los componentes que estimes oportunos.

![](/images/ut04_practica-4_10000000000001E300000253524D850F.png)


---

