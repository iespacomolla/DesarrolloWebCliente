# 5.3.2 sessionStorage

De manera similar a *localStorage*, existe el objeto ***sessionStorage*** para almacenar la información con un ciclo de vida asociado a la sesión del navegador, es decir, al cerrar la sesión (pestaña o todo el navegador) el almacenamiento se vaciará. Un caso particular es que se produzca un cierre inesperado por fallo del navegador. En dicho caso los datos se restablecen como si no se hubiese cerrado la sesión.

Las principales diferencias entre **`localStorage`** y **`sessionStorage`** están relacionadas con **cuánto** tiempo se conservan los datos y **cómo** se comparten:

| Característica   | `localStorage`                                            | `sessionStorage`                            |
| ---------------- | --------------------------------------------------------- | ------------------------------------------- |
| **Duración**     | Los datos permanecen aunque se cierre el navegador.        | Los datos se eliminan al cerrar la pestaña.  |
| **Persistencia** | Permanente hasta que se borren.                      | Solo durante la sesión de la pestaña.        |
| **Compartición** | Se comparte entre pestañas/ventanas del mismo origen.      | Cada pestaña tiene su propio almacenamiento. |
| **Capacidad**    | Aproximadamente 5-10 MB, según navegador.                 | Aproximadamente 5-10 MB, según navegador.    |
| **Uso habitual** | Preferencias, configuración, datos que queremos conservar. | Datos temporales de una sesión.              |

Por ejemplo, para guardar un tema elegido por el usuario/a:

```javascript
localStorage.setItem("tema", "feoOscuro");
```

Ese dato seguirá disponible aunque cerremos y volvamos a abrir el navegador.

En cambio:

```javascript
sessionStorage.setItem("nombre", "Horrible");
```

El dato estará disponible mientras permanezca abierta esa pestaña. Al cerrarla, se perderá.
