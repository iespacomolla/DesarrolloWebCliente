# 1.14 Descripción de los ficheros

## Descripción de los ficheros

La instalación del proyecto trae consigo la construcción de una estructura de carpetas que es necesario conocer:

- `dist`, alberga los ficheros de producción de la aplicación. Estos ficheros se construyen interpretando el código de la carpeta **src** a través del comando `npm run build`,
- `node_modules`, contiene las dependencias del proyecto (bibliotecas asociadas al proyecto),
- `public`, carpeta raíz de nuestro servidor donde se encuentra el `index.html` de la aplicación,
- `src`, contiene el código del proyecto,
- `package.json`, que contiene información del proyecto, así como enumera sus dependencias tanto para desarrollo como para producción,
- `.gitignore`, que es el archivo para indicar a *Git* que ignore ciertos archivos durante la sincronización del proyecto,
- `package-lockjson`, archivo que no se debe editar generado por `npm` con información sobre el proyecto y las dependencias que contiene.

Para empezar con **React** no se necesita más que entrar en la carpeta `src` y empezar a editar su código a través del fichero `App.jsx`, que será el componente índice de la aplicación que se va a construir.

El fichero `main.jsx` no es un componente, sino que es el va a dibujar toda la aplicación en el **DOM** del navegador. Para ello utiliza el método `createRoot` del objeto `ReactDOM` del siguiente modo:

```javascript
ReactDOM.createRoot(lugar-donde-se-va-a-dibujar).render(qué-se-va-a-dibujar);
```

De este modo se introduce el componente `<App />` en el **DOM** del navegador, y ese es el motivo por lo que este componente debe ser el índice de la aplicación, para mantener el código simple y accesible.

A medida que se vaya desarrollando la aplicación se irán creando nuevos componentes para realizar tareas más específicas o instalando componentes de terceros que permitan realizar tareas sin necesidad de invertir tiempo en programarlas de nuevo. Todo esto se realizará con el gestor de paquetes `npm`.