# 1.7 Servidor NodeJS

## Servidor NodeJS

Al trabajar en un entorno cliente no será necesario la instalación de un servidor que interprete el código que se escribe ya que esta tarea la realizará el propio navegador web. Bien es cierto que *JavaScript* no sólo sirve para la implementación de páginas web, sino que es posible realizar aplicaciones de servidor que se comunique directamente con
bases de datos o incluso realizar aplicaciones de escritorio independientes.

A pesar de que en este curso no se utilizarán estas utilidades, siempre
es buena idea conocer una tecnología escalable y potente como esta.

Para instalar NodeJS en *Microsoft* *Windows* pincha [aquí](https://nodejs.org/es/download/), para hacerlo a través de
***nvm*** pincha [aquí](https://nodejs.org/es/download/package-manager/#nvm) y para hacerlo en *GNU*/*Linux* *Ubuntu* o *Debian* es necesario utilizar estos comandos:

```bash
curl -fsSL https://deb.nodesource.com/setup_16.x \| sudo -E bash -
sudo apt-get install -y nodejs
```

Aunque en la mayoría de distribuciones funciona la instalación tradicional:

```bash
sudo apt-get install npm nodejs
```

Tras la instalación desde el terminal del sistema operativo es posible ejecutar ficheros *JavaScript* anteponiendo node al nombre del fichero a ejecutar:

```bash
node ./MiFicheroFeo.js
```

Todo el resultado de ese fichero aparecerá en el terminal y no en un navegador. Es interesante conocer que *NodeJS* es un intérprete muy versátil. Esta versatilidad está generada por los módulos instalables que se le pueden aplicar. Existen muchos que añaden características como ejecutar acciones en el sistema operativo, interpretar el código en  *Android* o añadir funcionalidades a los proyectos. Todos los módulos con los que viene instalado *NodeJs* se encuentran descritos en su documentación oficial [aquí](https://nodejs.org/es/docs/), aunque esto no se estudiará en este módulo.
