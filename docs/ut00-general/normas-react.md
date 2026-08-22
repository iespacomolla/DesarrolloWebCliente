# Normas de codificación React

## En cuanto al código

- en la **presentación interna**, importan los **comentarios**, la claridad del código, la significación de los nombres elegidos; todo esto debe permitir considerar al programa como **autodocumentado**. No será necesario explicar que es un if un for pero sí su funcionalidad. Hay que comentar las cosas destacadas y, sobre todo, las **funciones** y **clases** empleadas. La ausencia de comentarios será penalizada,

- en la **presentación externa**, importan las leyendas aclaratorias, información en pantalla y avisos de ejecución que favorezcan el uso de la aplicación. Recuerda: el/la usuario/a **es idiota**,

- no se pueden cometer fallos **ortográficos** ni de **región** (fechas, y medidas), tanto en la presentación externa como en la interna,

- para el nombre de **variables**, **constantes**, **clases** y **funciones** se utilizará *lowerCamelCase*,

- el nombre de los componentes debe comenzar con **letra mayúscula**,

- la **componentización** debe ser lógica y estar adaptada a las necesidades de la aplicación,

- todos los **formularios** en *React* deben ser **controlados** (a través del estado). En caso contrario debe ser debidamente justificado,

- toda comunicación con el exterior del **DOM** debe ser realizada con funciones **asíncronas** que dispongan de control de errores (`try{} catch{}`) para gestionar posibles fallos de red o respuestas HTTP no exitosas (comprobando la propiedad `response.ok`),

- se debe implementar el uso de `async/await` para la comunicación asíncrona,

- los componentes deben consumir los datos a través de un **contexto** de *React* para evitar la propagación manual de `props` y

- el código contendrá ejemplos de ejecución, si procede.

## En cuanto a la entrega (opcional)

- entrega la práctica en un sólo proyecto (el nombre a tu discreción),

- los componentes creados deben estar separados en carpetas con una estructura lógica según la aplicación desarrollada,

- comprime la carpeta `src` junto con el fichero `package.json` en un fichero ZIP comprimido para la entrega.
