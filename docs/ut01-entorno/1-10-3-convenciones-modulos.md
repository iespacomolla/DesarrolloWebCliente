# 1.10.3 Convenciones a la hora de trabajar con módulos

### Convenciones a la hora de trabajar con módulos

SOn varias las que se tienen que tener en cuenta:

- si se importan módulos y el fichero que los importa se está ejecutando en un navegador será necesario especificar `type="module"` en la importación del fichero, pero cuidado, **prueba.js** no contiene los módulos exportados, sino que es el que realiza la importación:

```html
<script type="module" src="./prueba.js"></script>
```

- por norma general, a los archivos *JavaScript* con módulos tienen   extensión ***.js***, aunque también se pueden encontrar con otras extensiones como .***es2015*** o ***.mjs*** (menos extendidas).

- se aconseja utilizar las rutas **UNIX** (empieza por `.`,  `..` o `/`) en los `export` e `import` ya que son las que tienen mejor soporte tanto en navegadores como en *NodeJS*. También se pueden indicar rutas absolutas para cargar directamente desde el navegador.

En resumen, las exportaciones e importaciones en *JavaScript* son una herramienta indispensable para escribir código de una forma organizada y productiva.
