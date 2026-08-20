# 5.2.1 Elementos del formulario

No se tratarán todos los atributos de estas etiquetas ya que son demasiados y excede a los objetivos de este manual (se pueden consultar [aquí](https://developer.mozilla.org/es/docs/Web/HTML/Element/input)). No obstante, se nombrarán los atributos necesarios para el correcto seguimiento de la unidad.

- Texto

Para acceder al valor de un `input` de tipo texto simplemente hay que referenciar el atributo value.

```javascript
<input type="text" id="miTexto">
<script>
    let elemento=document.getElementById("miTexto");
    console.log(elemento.value);
</script>
```

Existen variaciones de este elemento si se modifica el valor del campo `type` del siguiente modo:

- texto para búsquedas `<input type="search">`
- número de teléfono o móvil `<input type="tel">`
- dirección URL `<input type="url">`
- dirección de correo electrónico `<input type="email">`
- contraseña `<input type="password">`
- campo oculto (no mostrar al usuario) `<input type="hidden">`

No son todos los que `HTML5` ofrece, esos son consultables desde [aquí](https://lenguajehtml.com/html/formularios/crear-un-formulario/).

Si es necesario escribir texto multilínea (o muy extenso) se utiliza la opción `<textarea>`. Este componente posee dos posee opciones para manejar su tamaño como `col` y `rows`.

```javascript
<form id="formulario_feo">
    <textarea name="texto_feo" cols="100" rows="50" placeholder="Escribe aquí el texto...">
        Este es el texto por defecto de un componente textarea feo.
    </textarea>
</form>
```

- Radio button

Los *radio button* son elementos del formulario que ante varias entradas permiten  seleccionar sólo una de ellas. Se agrupan teniendo un name común. Se accede como un array donde se tiene el atributo value y el atributo checked que es `true` si está  seleccionado o false en caso contrario.

```javascript
<input type="radio" id="preguntaSI" name="pregunta" value="s&iacute;" />
<label for="preguntaSI">Sí</label>
<input type="radio" id="preguntaNO" name="pregunta" value="no" />
<label for="preguntaNO">No</label>
<script>
    let elementos=document.getElementsByName("pregunta");
    for(let i=0;i<elementos.length;i++){
        if(elementos[i].checked === true)
        console.log(`Valor del elemento marcado ${elementos[i].value}.`);
    }
</script>
```

- Checkbox

Similar a los *radio button* salvo que permite más de un elemento seleccionado. Para saber si un elemento *checkbox* ha sido seleccionado habrá que comprobar el estado de la propiedad `checked`:

```javascript
<input type="checkbox" id="preguntaAS" name="pregunta" value="asc" />
<label for="preguntaAS">Piso con ascensor</label>
<input type="checkbox" id="preguntaAM" name="pregunta" value="amb" />
<label for="preguntaAM">Piso amueblado</label>
<script>
  let elementos=document.getElementsByName("pregunta");
  for(let i=0;i<elementos.length;i++)*{*
    if(elementos\[i\].checked === true){
       console.log(`Valor del elemento marcado ${elementos[i].value}.`);
    }
  }
</script>
```

- Select

Elemento que muestra un desplegable y permite elegir una opción. Destaca el atributo options que contiene un array con las opciones disponibles y el atributo `selectedIndex` que contiene la posición del *array options* seleccionada o -1 si no hay seleccionada ninguna.

Dentro de cada options, `value` almacena el valor y text el texto mostrado.

```javascript
<select id="aprobar" >
  <option value="10">Saco 10 en DWC.</option>
  <option value="9">Saco 9 en DWC.</option>
  <option value="8">Saco 8 en DWC.</option>
</select>
```

- Evento `onSubmit`

Al enviarse un formulario se lanza el evento `onSubmit`. Si es necesario interrumpir el envío sólo hay que devolver `false` desde el manejador de eventos.

La estructura típica es la siguiente:

```javascript
<form onSubmit="return validar();">
```

Si la función validar devuelve true se realiza el envío. Si devuelve false se cancela. Dentro de la función validar se hacen las validaciones que se estimen convenientes.

En algunas aplicaciones por motivos estéticos o de funcionalidad es deseable que al enviar un formulario no se haga desde un botón `submit`, sino desde cualquier otro evento que permita la ejecución de código. Hay que recordar que el evento `onSubmit` recarga la página y, en la mayoría de ocasiones, no es eso lo que se pretende.

Esto se puede hacer recogiendo el elemento del formulario y aplicando el método `submit()`.

```javascript
<form id="formulario">
<script>
    let elemento=document.getElementById("formulario");
    elemento.submit();
</script>
```
