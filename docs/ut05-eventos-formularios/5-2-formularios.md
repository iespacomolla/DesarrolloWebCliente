# 5.2 Formularios

Para poder interactuar con un formulario lo mejor es crearle un `id` y acceder a él con `getElementById`. Si el formulario no tiene atributo id pero sí `name`, se puede utilizar:

```javscript
document.forms.nombreDelFormulario
```

Del mismo modo, para acceder a un campo del formulario bien se hace a través de su id o mediante la propiedad:

```javascript
*document.forms.nombreDelFormulario.nombreDelCampo*

Teniendo el siguiente formulario:

<form name="formCliente" id="frmClnt">
    <fieldset id="infoPersonal">
        <legend>Datos Personales</legend>
        <p>
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" id="nom" />
        </p>
        <p>
            <label for="email">Email</label>
            <input type="email" name="correo" id="email" />
        </p>
    </fieldset>
</form>
```

Para acceder al formulario y al nombre del cliente:

```javascript
var formulario = document.forms.formCliente; //Mediante el atributo name.
var correo = formulario.correo;
var formuId = document.getElementById("frmClnt");  //Mediante el atributo id.
var correoId = document.getElementById("email");
```
