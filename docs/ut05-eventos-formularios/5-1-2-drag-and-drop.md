# 5.1.2 Un evento especial: arrastrar y soltar (drag and drop)

A diferencia de los eventos típicos que funcionan de forma autónoma, para conseguir este efecto será necesario hacer referencia a varios eventos, siendo muy útil para el desarrollo de aplicaciones web. Más información sobre esta técnica [aquí](https://www.w3schools.com/html/html5_draganddrop.asp).

```javascript

<!DOCTYPE HTML>
<html>
    <head>
        <script>
            const allowDrop => (evento) {
                evento.preventDefault();
            }

            const drag => (evento) {
                evento.dataTransfer.setData("text", ev.target.id);
            }

            const drop => (evento) {
                evento.preventDefault();
                let data = evento.dataTransfer.getData("text");
                evento.target.appendChild(document.getElementById(data));
            }
        </script>
    </head>
    <body>
        <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
        <img id="drag1" src="img_logo.gif" draggable="true" ondragstart="drag(event)" width="336" height="69">
    </body>
</html>
```
