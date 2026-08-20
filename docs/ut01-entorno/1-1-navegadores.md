# 1.1 Navegadores

## Navegadores

La función principal del navegador es obtener documentos HTML e interpretarlos para mostrarlos en pantalla. En la actualidad, no solamente descargan este tipo de documentos sino que muestran con el documento sus imágenes, sonidos e incluso vídeos *streaming* en diferentes formatos y protocolos.

Algunos de los navegadores web más populares se incluyen en lo que se denomina una *suite*. Estas *suite* disponen de varios programas integrados para leer noticias de *Usenet* y correo  electrónico mediante los protocolos NNTP, IMAP y POP.

Los primeros navegadores web sólo soportaban una versión muy simple de `HTML`. El rápido desarrollo de los navegadores web propietarios condujo al desarrollo de lenguajes no estándares de `HTML` y a problemas de interoperabilidad en la web. Los más modernos (como *Google Chrome*,
*Mozilla*, *Netscape*, *Opera* e *Internet Explorer* / *Microsoft Edge*)
soportan los estándares `HTML` y `XHTML` comenzando con **HTML 4.01**, los cuales deberían visualizarse de la misma manera en todos ellos.

Para acceder a estos recursos, se utiliza un identificador único llamado **URL** (*Uniform Resource Locator*).

El formato general de una **URL** es **protocolo://máquina/directorio/archivo**:

- si no se especifica el directorio, toma como directorio el raíz,
- si no se especifica el fichero, toma alguno de los nombres por
  defecto. Usualmente estos nombres por defecto son similares a
  `index.html` o `index.php`.

Por ejemplo `https://www.google.es` donde se accede al recurso
**<www.google.es>** usando el protocolo **https**.

La comunicación entre el servidor web y el navegador se realiza mediante el protocolo `HTTP`, aunque la mayoría de los navegadores soportan otros protocolos como `FTP` y `HTTPS` (una versión cifrada de `HTTP` basada en *Secure Socket Layer* o **SSL**).

### Principales navegadores

- *Microsoft Edge* (antiguo *Internet Explorer*)
- *Mozilla* *Firefox*
- *Google Chrome*
- *Safari*
- *Opera*

En este manual se hará referencia a *Mozilla Firefox* o *Google Chrome*. El motivo de usar estos es la gran cantidad de herramientas para depuración que poseen incluso en su versión estándar. Para la mayoría de acciones con éste será suficiente. En el caso de *Firefox* está disponible una versión que amplía las herramientas de desarrollo ***Firefox Developer Edition***.

Es una práctica imprescindible para un buen programador web comprobar que cualquier desarrollo funcione correctamente en los principales navegadores.
