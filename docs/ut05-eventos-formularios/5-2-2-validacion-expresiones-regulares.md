# 5.2.2 Validación de formularios: expresiones regulares

## **Expresiones regulares con atributo** `pattern`

Desde `HTML5`, los elementos de tipo `input` pueden definir un atributo llamado `pattern` donde definen una expresión regular.

```javascript
<form action="/paginaDestino.php">

<label for="pwd">Password:</label>

<input type="password" id="pwd" name="pwd" pattern="(?=.\*\\d)(?=.\*\[a-z\])(?=.\*\[A-Z\]).{8,}" 
  title="Debe contener al menos un número, una mayúscula y una minúscula. Además, debe contener 8 o más caracteres.">
<input type="submit">
</form>
```

En este ejemplo, si al enviar el formulario no se cumple el patrón definido, se mostrará el contenido del atributo `title`. Para ver más ejemplos: [aquí](https://www.w3schools.com/tags/att_input_pattern.asp).

Puedes ver un ejemplo de validación con `CSS` [aquí](https://developer.mozilla.org/es/docs/Learn/Forms/Form_validation).

## Funciones *JavaScript* para el uso de expresiones regulares

*JavaScript* posee dos formas de crear expresiones regulares, bien de forma literal con expresión regular, `let re = /ab+c/`, o bien con el objeto `RegExp`, `let re = new RegExp("ab+c")`. Para comprobar si se cumple esa expresión regular se usa el método `test`. Este recibe una cadena y devuelve `true` si la cadena cumple esa expresión regular o `false` en caso contrario.

```javascript
let re = new RegExp("ab+c");
let cadena=prompt("Dime una cadena.");
if(re.test(cadena)){
  console.log("La cadena cumple el patrón de una a, entre 1 e infinitas b y al final una c.");
}
```

Sobre el uso de expresiones regulares hay más información [aquí](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions).
