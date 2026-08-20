# 4.6 Gestionando atributos

Una vez se ha recuperado un nodo se accede a sus atributos mediante el método `getAttribute`(nombreAtributo) y modificarlo mediante `setAttribute(nombreAtributo, valorAtributo)`.

```javascript
let pTres = document.getElementById("tres");
pTres.setAttribute("align","right");
```

También se puede acceder a los atributos como propiedades de los elementos, con lo que se puede hacer lo mismo del siguiente modo:

```javascript
let pTres = document.getElementById("tres");
pTres.align = "right";
```

La gestión de los atributos **está en desuso en favor de las hojas de estilo** para dotar a las páginas de un comportamiento predefinido y desacoplado en su archivo correspondiente. Por ese motivo para modificar los atributos de un nodo se modificará su `CSS`.

Para ello, se dispone del siguiente código `HTML`.

```javascript
<!DOCTYPE html>
<html lang="es"></html>
<head>
    <meta charset="utf-8" />
    <title></title>
    <style>
        #batman {}
        .css-class{
            color: blue;
            border : 1px solid black;
        }
    </style>
</head>
<body>
    <div style="font-size:xx-large" id="batman">Batman siempre gana.</div>
    <script src="css.js"></script>
</body>
</html>
```

La propiedad `style` de los elementos permite obtener/modificar los estilos. Por ejemplo, para cambiar mediante *JavaScript* el color del texto del párrafo a azul y añadirle un borde negro:

```javascript
let divBatman = document.getElementById("batman");
divBatman.style.color = "blue";
divBatman.style.border = "1px solid black";
```

Si la propiedad `CSS` contiene un guion se usa la notación *camelCase*. Así pues, background-color pasará a **backgroundColor**.

Aunque parezca un mejor método para modificarlos, se están modificando los atributos de un elemento del mismo modo que con `setAttribute()`. Para conseguir separar la estructura del diseño definitivamente hay que trabajar con clases `CSS`. De hecho, **es el modo recomendado para trabajar con atributos**. Se usará la propiedad `className`.

```javascript
let divBatman = document.getElementById("batman");
divBatman.className = "css-class";
```

Si se necesita añadir más de una clase se pueden separar con espacios o utilizar la propiedad classList que permite añadir clases mediante el método add.

```javascript
let divBatman = document.getElementById("batman");
divBatman.classList.add("css-class");
divBatman.classList.add("css-class2");
```

Otros métodos útiles de classList son:

- `remove` para eliminar una clase,
- `toggle` para cambiar una clase por otra,
- `length` para averiguar la longitud de la lista de clases y
- `contains` para averiguar si una clase existe dentro de la lista.

De esta forma es posible añadir y eliminar clases `CSS` de un objeto para modificar sus atributos y, con ellos, su apariencia separando de forma definitiva la estructura del estilo.
