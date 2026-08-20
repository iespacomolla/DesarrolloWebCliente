# 6.7 ¿Mi información al descubierto? Uso de variables de entorno

Ocultar código en *JavaScript* es imposible ya que el navegador debe obtenerlo para poder procesarlo. Si se le ocultase parte de esta información el resultado no sería el esperado. Se depende del servidor por completo para la ocultación de información sensible ya que esa es una de sus funciones.

Para ello, el servidor utiliza las **variables de entorno** de forma muy similar a los sistemas operativos: genera esas variables y las pone disposición de las aplicaciones indicadas durante la ejecución del entorno, es decir, mientras que el servidor/servicio esté funcionando. De ese modo es posible crear un fichero de texto `.env` con las variables de entorno y sus valores y estas serán ofrecidas a la aplicación a través del servidor.
