# 6.6 Uso de bibliotecas externas: Supabase

Supabase es una plataforma **BaaS** (*Backend as a Service*) alojada en la nube que provee a los desarrolladores una amplia gama de herramientas para crear y gestionar servicios *backend*. Esto permite desarrollar las aplicaciones de manera ágil sin tener que preocuparse por las tareas relacionadas con el lado del servidor.

Esta plataforma se muestra como una alternativa de código abierto a *Firebase* de **Google**, pero con una interfaz intuitiva. Además, al estar alojada en la nube, no necesita instalaciones para poder usarla solo requiere activar una cuenta para comenzar a desarrollar un proyecto.

Ofrece todos los servicios y herramientas de *backend* necesarias para crear una aplicación escalable y segura: gestión de base de datos, autenticación, almacenamiento de archivos, generación automática de **API** y actualizaciones en tiempo real.

Además, dispone de un plan gratuito para aplicaciones web simples con un límite de dos proyectos, perfecto para probar la plataforma.

Ventajas de Supabase:

- código abierto, puede ser personalizado según las necesidades del proyecto,
- comunidad en crecimiento, cuenta con una comunidad de colaboradores con usuarios dispuestos a brindar soporte para encontrar la solución a cualquier problema,
- base de datos relacional **PostgresSQL**, a diferencia de *Firebase*, la base de datos que maneja *Supabase* es relacional en lugar de **NoSQL**, lo cual permite disponer de la potencia y flexibilidad de un **SGBD** con **SQL**,
- no tiene dependencia del proveedor, a diferencia de otros **BaaS** que pueden sufrir bloqueos por parte de su proveedor (te estoy mirado a ti, *Google*), este problema no existe con *Supabase* ya que es de código abierto,
- es posible su instalación en local, cabe la posibilidad de instalar el servicio en redes locales o contenida en un contenedor de manera muy sencilla, de ese modo es posible realizar un servidor de pruebas copiando toda la configuración del servidor en línea.

Al contrario que la parte de *Firebase*, *Supabase* se explicará integrado con *React* para ofrecer una doble visión de uso de estos sistemas de almacenamiento. Para utilizarla con *React* será necesario, además de crear una cuenta, un nuevo proyecto, dotarlo de datos e instalar la biblioteca cliente `supabase-js` a través del siguiente comando:

```bash
npm install @supabase/supabase-js
```

A partir de aquí, tan sólo queda crear la base de datos, dotarla de datos y crear el proyecto de *React*.
