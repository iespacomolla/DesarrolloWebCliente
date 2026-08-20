# 1.9 Uso en el navegador


## Uso en el navegador

Para utilizar *JavaScript* dentro de una página web usaremos la etiqueta `<script>` . Mediante esta etiqueta se puede incluir el código:

- en el propio documento `HTML`:

```html
<script>
 //Instrucciones JavaScript
</script>
```

- en un archivo externo (con extensión ***.js*** ), de modo que se pueda reutilizar entre varios documentos:

```html
<script src="ficheroJavaScript.js"></script>
```

- como parte de un manejador de eventos, como puede ser ***onClick*** o ***onMouseOver***:

```html
<button onClick="nombreFeoFuncionJavaScript()" />
```

- como parte de una URL mediante el pseudo-protocolo ***javascript***:

```html
<a href="javascript:nombreFeoFuncionJavaScript()">Validar</a>
```

Normalmente las referencias *JavaScript* se incluyen mediante la etiqueta `<script>` en la cabecera del documento `HTML`, pero si es necesario que el código se ejecute al cargar la página es conveniente ponerlo antes de cerrar la etiqueta `<body>` para asegurarnos que se ha cargado todo el **DOM** (árbol de nodos de la web que se verá en lo sucesivo).
