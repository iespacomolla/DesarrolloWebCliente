# UT06: Programación asíncrona y bibliotecas

> **Resultado de Aprendizaje Asociado:**  
> RA7. Desarrolla aplicaciones web dinámicas, reconociendo y aplicando mecanismos de comunicación asíncrona entre cliente y servidor.

## Índice

- **[6.1 Asynchronous JavaScript And XML (AJAX)](./6-1-ajax.md)**
- **[6.2 El objeto XMLHttpRequest](./6-2-xmlhttprequest.md)**
- **[6.3 Promise](./6-3-promise.md)**
  - [6.3.1 Utilizando promise](./6-3-1-utilizando-promise.md)
  - [6.3.2 Estados de promise](./6-3-2-estados-promise.md)
  - [6.3.3 Encadenamiento de promise](./6-3-3-encadenamiento-promise.md)
  - [6.3.4 Evaluando promise en conjunto](./6-3-4-evaluando-promise-conjunto.md)
- **[6.4 Usando la API fetch](./6-4-fetch-api.md)**
  - [6.4.1 Petición](./6-4-1-peticion.md)
  - [6.4.2 Enviando datos](./6-4-2-enviando-datos.md)
  - [6.4.3 Respuesta](./6-4-3-respuesta.md)
- **[6.5 “De vuelta” al modelo síncrono: async/await](./6-5-async-await.md)**
- **[6.6 Uso de bibliotecas externas: Supabase](./6-6-supabase.md)**
  - [6.6.1 Creación de una base de datos](./6-6-1-creacion-bd.md)
  - [6.6.2 Conectar con la base de datos](./6-6-2-conectar-bd.md)
  - [6.6.3 Autentificación de usuarios](./6-6-3-autentificacion-usuarios.md)
  - [6.6.4 Roles de usuario](./6-6-4-roles-usuario.md)
  - [6.6.5 Políticas de seguridad a nivel de fila (RLS)](./6-6-5-politicas-rls.md)
  - [6.6.6 Escribir datos](./6-6-6-escribir-datos.md)
  - [6.6.7 Leer datos](./6-6-7-leer-datos.md)
  - [6.6.8 Borrar datos](./6-6-8-borrar-datos.md)
  - [6.6.9 Actualizar datos](./6-6-9-actualizar-datos.md)
- **[6.7 ¿Mi información al descubierto? Uso de variables de entorno](./6-7-variables-entorno.md)**
  - [6.7.1 NodeJS y JavaScript vanilla](./6-7-1-nodejs-vanilla.md)
  - [6.7.2 React y Angular](./6-7-2-react-angular.md)
- **[6.8 Hooks personalizados (custom hooks)](./6-8-custom-hooks.md)**
- **[6.9 Contextos en React](./6-9-contextos-react.md)**
- **[📝 Listado de Prácticas y Ejercicios](./practicas.md)**

## Introducción

En este apartado se estudiará la **programación asíncrona en *JavaScript***, un concepto fundamental para desarrollar aplicaciones capaces de realizar tareas sin bloquear la ejecución del programa. Se trabajará con herramientas como las **promesas (`Promise`)**, `async/await` y otras técnicas que permiten gestionar operaciones como peticiones a servidores o la lectura de datos de forma eficiente.

Además, se introducirán las **bibliotecas de terceros**, analizando cómo incorporarlas y utilizarlas para ampliar las funcionalidades de *JavaScript* y facilitar el desarrollo de aplicaciones mediante recursos y soluciones ya existentes.
