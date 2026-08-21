import { defineConfig } from 'vitepress'

export default defineConfig({
  base: "/DesarrolloWebCliente/",
  lang: "es-ES",
  title: "Desarrollo Web Cliente",
  description: "Apuntes, teoría, apartados y listado de prácticas de DWC",
  cleanUrls: true,
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: "Inicio", link: "/" },
      {
        text: "Temas",
        items: [
          {
            text: "UT01: Entorno de trabajo",
            link: "/ut01-entorno/",
          },
          {
            text: "UT02: Sintaxis, funciones y componentes",
            link: "/ut02-sintaxis/",
          },
          {
            text: "UT03: Objetos predefinidos y hooks",
            link: "/ut03-objetos-hooks/",
          },
          {
            text: "UT04: Document Object Model",
            link: "/ut04-dom/",
          },
          {
            text: "UT05: Eventos y Formularios",
            link: "/ut05-eventos-formularios/",
          },
          { text: "UT06: Programación asíncrona", link: "/ut06-asincronia/" },
          { text: "UT07: Clases en JavaScript", link: "/ut07-clases/" },
        ],
      },
      /*  {
        text: "Prácticas y Ejercicios",
        items: [
          { text: "Prácticas UT01", link: "/ut01-entorno/practicas" },
          { text: "Prácticas UT02", link: "/ut02-sintaxis/practicas" },
          { text: "Prácticas UT03", link: "/ut03-objetos-hooks/practicas" },
          { text: "Prácticas UT04", link: "/ut04-dom/practicas" },
          {
            text: "Prácticas UT05",
            link: "/ut05-eventos-formularios/practicas",
          },
          { text: "Prácticas UT06", link: "/ut06-asincronia/practicas" },
          { text: "Prácticas UT07", link: "/ut07-clases/practicas" },
        ],
      }, */
    ],
    sidebar: [
      {
        text: "UT01: Entorno de trabajo",
        collapsed: false,
        items: [
          {
            text: "Resumen",
            link: "/ut01-entorno/",
          },
          {
            text: "1.1 Navegadores",
            link: "/ut01-entorno/1-1-navegadores",
          },
          {
            text: "1.2 Manual de referencia",
            link: "/ut01-entorno/1-2-manual-referencia",
          },
          {
            text: "1.3 La consola web",
            link: "/ut01-entorno/1-3-consola-web",
          },
          {
            text: "1.4 Editores de código (entornos de desarrollo)",
            link: "/ut01-entorno/1-4-editores-codigo",
          },
          {
            text: "1.5 Editores online",
            link: "/ut01-entorno/1-5-editores-online",
          },
          {
            text: "1.6 Control de versiones",
            link: "/ut01-entorno/1-6-control-versiones",
          },
          {
            text: "1.7 Servidor NodeJS",
            link: "/ut01-entorno/1-7-servidor-nodejs",
          },
          {
            text: "1.8 Clean Code",
            collapsed: true,
            items: [
              {
                text: "1.8 Clean Code (General)",
                link: "/ut01-entorno/1-8-clean-code",
              },
              {
                text: "1.8.1 Principios generales",
                link: "/ut01-entorno/1-8-1-principios-generales",
              },
            ],
          },
          {
            text: "1.9 Uso en el navegador",
            link: "/ut01-entorno/1-9-uso-navegador",
          },
          {
            text: "1.10 Módulos en JavaScript",
            collapsed: true,
            items: [
              {
                text: "1.10 Módulos en JavaScript (General)",
                link: "/ut01-entorno/1-10-modulos",
              },
              {
                text: "1.10.1 Exportación de módulos",
                link: "/ut01-entorno/1-10-1-exportacion-modulos",
              },
              {
                text: "1.10.2 Importación de módulos",
                link: "/ut01-entorno/1-10-2-importacion-modulos",
              },
              {
                text: "1.10.3 Convenciones a la hora de trabajar con módulos",
                link: "/ut01-entorno/1-10-3-convenciones-modulos",
              },
            ],
          },
          {
            text: "1.11 Programación reactiva con React",
            link: "/ut01-entorno/1-11-react-intro",
          },
          {
            text: "1.12 Hoja de ruta de React",
            link: "/ut01-entorno/1-12-hoja-ruta",
          },
          {
            text: "1.13 Creación de un nuevo proyecto",
            link: "/ut01-entorno/1-13-creacion-proyecto",
          },
          {
            text: "1.14 Descripción de los ficheros",
            link: "/ut01-entorno/1-14-descripcion-ficheros",
          },
          {
            text: "Prácticas UT01",
            //link: "/ut01-entorno/practicas",
          },
        ],
      },
      {
        text: "UT02: Sintaxis, funciones y componentes",
        collapsed: true,
        items: [
          {
            text: "Resumen",
            link: "/ut02-sintaxis/",
          },
          {
            text: "2.1 Strict mode",
            link: "/ut02-sintaxis/2-1-strict-mode",
          },
          {
            text: "2.2 Datos y variables",
            link: "/ut02-sintaxis/2-2-datos-variables",
          },
          {
            text: "2.3 Hoisting",
            link: "/ut02-sintaxis/2-3-hoisting",
          },
          {
            text: "2.4 Tipos de datos",
            link: "/ut02-sintaxis/2-4-tipos-datos",
          },
          {
            text: "2.5 Coerción",
            link: "/ut02-sintaxis/2-5-coercion",
          },
          {
            text: "2.6 Constantes",
            link: "/ut02-sintaxis/2-6-constantes",
          },
          {
            text: "2.7 Operadores",
            collapsed: true,
            items: [
              {
                text: "2.7 Operadores (General)",
                link: "/ut02-sintaxis/2-7-operadores",
              },
              {
                text: "2.7.1 Operadores de asignación",
                link: "/ut02-sintaxis/2-7-1-operadores-asignacion",
              },
              {
                text: "2.7.2 Operadores aritméticos",
                link: "/ut02-sintaxis/2-7-2-operadores-aritmeticos",
              },
              {
                text: "2.7.3 Operadores de comparación",
                link: "/ut02-sintaxis/2-7-3-operadores-comparacion",
              },
              {
                text: "2.7.4 Operadores lógicos",
                link: "/ut02-sintaxis/2-7-4-operadores-logicos",
              },
            ],
          },
          {
            text: "2.8 Estructuras de control",
            collapsed: true,
            items: [
              {
                text: "2.8 Estructuras de control (General)",
                link: "/ut02-sintaxis/2-8-estructuras-control",
              },
              {
                text: "2.8.1 Instrucciones if/else",
                link: "/ut02-sintaxis/2-8-1-instrucciones-if-else",
              },
              {
                text: "2.8.2 Estructuras repetitivas (bucles)",
                link: "/ut02-sintaxis/2-8-2-bucles",
              },
            ],
          },
          {
            text: "2.9 Funciones",
            collapsed: true,
            items: [
              {
                text: "2.9 Funciones (General)",
                link: "/ut02-sintaxis/2-9-funciones",
              },
              {
                text: "2.9.1 Función declaración",
                link: "/ut02-sintaxis/2-9-1-funcion-declaracion",
              },
              {
                text: "2.9.2 Función anónima (expresión)",
                link: "/ut02-sintaxis/2-9-2-funcion-anonima",
              },
              {
                text: "2.9.3 Funciones flecha (arrow functions)",
                link: "/ut02-sintaxis/2-9-3-funciones-flecha",
              },
              {
                text: "2.9.4 Ámbito de variables (let y var)",
                link: "/ut02-sintaxis/2-9-4-ambito-variables",
              },
              {
                text: "2.9.5 Alcance de funciones: call stack y scope chain",
                link: "/ut02-sintaxis/2-9-5-alcance-call-stack-scope",
              },
              {
                text: "2.9.6 El pseudoarray arguments",
                link: "/ut02-sintaxis/2-9-6-pseudoarray-arguments",
              },
            ],
          },
          {
            text: "2.10 Componentes en React",
            collapsed: true,
            items: [
              {
                text: "2.10 Componentes en React (General)",
                link: "/ut02-sintaxis/2-10-componentes-react",
              },
              {
                text: "2.10.1 Tipos de componentes",
                link: "/ut02-sintaxis/2-10-1-tipos-componentes",
              },
              {
                text: "2.10.2 Propiedades en un componente (props)",
                link: "/ut02-sintaxis/2-10-2-props-componentes",
              },
              {
                text: "2.10.3 JSX",
                link: "/ut02-sintaxis/2-10-3-jsx",
              },
            ],
          },
          {
            text: "Prácticas UT02",
            //link: "/ut02-sintaxis/practicas",
          },
        ],
      },
      {
        text: "UT03: Objetos predefinidos y hooks",
        collapsed: true,
        items: [
          {
            text: "Resumen",
            link: "/ut03-objetos-hooks/",
          },
          {
            text: "3.1 Objetos predefinidos",
            collapsed: true,
            items: [
              {
                text: "3.1 Objetos predefinidos (General)",
                link: "/ut03-objetos-hooks/3-1-objetos-predefinidos",
              },
              {
                text: "3.1.1 Funciones predefinidas",
                link: "/ut03-objetos-hooks/3-1-1-funciones-predefinidas",
              },
              {
                text: "3.1.2 Objeto predefinido String",
                link: "/ut03-objetos-hooks/3-1-2-objeto-string",
              },
              {
                text: "3.1.3 Objeto predefinido Date",
                link: "/ut03-objetos-hooks/3-1-3-objeto-date",
              },
              {
                text: "3.1.4 Objeto predefinido Math",
                link: "/ut03-objetos-hooks/3-1-4-objeto-math",
              },
              {
                text: "3.1.5 Objeto predefinido Array",
                link: "/ut03-objetos-hooks/3-1-5-objeto-array",
              },
            ],
          },
          {
            text: "3.2 JavaScript Object Notation (JSON)",
            collapsed: true,
            items: [
              {
                text: "3.2 JavaScript Object Notation (JSON) (General)",
                link: "/ut03-objetos-hooks/3-2-json",
              },
              {
                text: "3.2.1 Conversión",
                link: "/ut03-objetos-hooks/3-2-1-conversion-json",
              },
              {
                text: "3.2.2 Encadenamiento opcional (optional chaining)",
                link: "/ut03-objetos-hooks/3-2-2-encadenamiento-opcional",
              },
            ],
          },
          {
            text: "3.3 Operador spread (...)",
            link: "/ut03-objetos-hooks/3-3-operador-spread",
          },
          {
            text: "3.4 Desestructuración",
            link: "/ut03-objetos-hooks/3-4-desestructuracion",
          },
          {
            text: "3.5 Estados en React",
            collapsed: true,
            items: [
              {
                text: "3.5 Estados en React (General)",
                link: "/ut03-objetos-hooks/3-5-estados-react",
              },
              {
                text: "3.5.1 Hooks en React",
                link: "/ut03-objetos-hooks/3-5-1-hooks-react",
              },
              {
                text: "3.5.2 El hook de estado: useState",
                link: "/ut03-objetos-hooks/3-5-2-usestate",
              },
            ],
          },
          {
            text: "Prácticas UT03",
            //link: "/ut03-objetos-hooks/practicas",
          },
        ],
      },
      {
        text: "UT04: Document Object Model",
        collapsed: true,
        items: [
          {
            text: "Resumen",
            link: "/ut04-dom/",
          },
          {
            text: "4.1 Browser Object Model (BOM)",
            collapsed: true,
            items: [
              {
                text: "4.1 Browser Object Model (BOM) (General)",
                link: "/ut04-dom/4-1-bom",
              },
              {
                text: "4.1.1 Objeto window",
                link: "/ut04-dom/4-1-1-objeto-window",
              },
              {
                text: "4.1.2 Objeto navigator",
                link: "/ut04-dom/4-1-2-objeto-navigator",
              },
              {
                text: "4.1.3 Objeto location",
                link: "/ut04-dom/4-1-3-objeto-location",
              },
              {
                text: "4.1.4 Objeto document",
                link: "/ut04-dom/4-1-4-objeto-document",
              },
            ],
          },
          {
            text: "4.2 Trabajando con el DOM",
            link: "/ut04-dom/4-2-trabajando-dom",
          },
          {
            text: "4.3 Tipos de nodo",
            link: "/ut04-dom/4-3-tipos-nodo",
          },
          {
            text: "4.4 Seleccionando elementos",
            link: "/ut04-dom/4-4-seleccionando-elementos",
          },
          {
            text: "4.5 Añadiendo contenido al DOM",
            link: "/ut04-dom/4-5-anadiendo-contenido-dom",
          },
          {
            text: "4.6 Gestionando atributos",
            link: "/ut04-dom/4-6-gestionando-atributos",
          },
          {
            text: "4.7 Virtual DOM en React",
            collapsed: true,
            items: [
              {
                text: "4.7 Virtual DOM en React (General)",
                link: "/ut04-dom/4-7-virtual-dom-react",
              },
              {
                text: "4.7.1 useRef",
                link: "/ut04-dom/4-7-1-useref",
              },
            ],
          },
          {
            text: "4.8 React-router-dom",
            link: "/ut04-dom/4-8-react-router-dom",
          },
          {
            text: "Prácticas UT04",
            //link: "/ut04-dom/practicas",
          },
        ],
      },
      {
        text: "UT05: Eventos y Hooks. Formularios",
        collapsed: true,
        items: [
          {
            text: "Resumen",
            link: "/ut05-eventos-formularios/",
          },
          {
            text: "5.1 Eventos",
            collapsed: true,
            items: [
              {
                text: "5.1 Eventos (General)",
                link: "/ut05-eventos-formularios/5-1-eventos",
              },
              {
                text: "5.1.1 Asignación de eventos",
                link: "/ut05-eventos-formularios/5-1-1-asignacion-eventos",
              },
              {
                text: "5.1.2 Un evento especial: arrastrar y soltar (drag and drop)",
                link: "/ut05-eventos-formularios/5-1-2-drag-and-drop",
              },
              {
                text: "5.1.3 Esperar a la carga",
                link: "/ut05-eventos-formularios/5-1-3-esperar-carga",
              },
              {
                text: "5.1.4 El objeto event",
                link: "/ut05-eventos-formularios/5-1-4-objeto-event",
              },
              {
                text: "5.1.5 Flujo de eventos",
                link: "/ut05-eventos-formularios/5-1-5-flujo-eventos",
              },
              {
                text: "5.1.6 Delegación de eventos",
                link: "/ut05-eventos-formularios/5-1-6-delegacion-eventos",
              },
            ],
          },
          {
            text: "5.2 Formularios",
            collapsed: true,
            items: [
              {
                text: "5.2 Formularios (General)",
                link: "/ut05-eventos-formularios/5-2-formularios",
              },
              {
                text: "5.2.1 Elementos del formulario",
                link: "/ut05-eventos-formularios/5-2-1-elementos-formulario",
              },
              {
                text: "5.2.2 Validación de formularios: expresiones regulares",
                link: "/ut05-eventos-formularios/5-2-2-validacion-expresiones-regulares",
              },
            ],
          },
          {
            text: "5.3 Persistencia de datos local: HTML Web Storage",
            collapsed: true,
            items: [
              {
                text: "5.3 Persistencia de datos local: HTML Web Storage (General)",
                link: "/ut05-eventos-formularios/5-3-persistencia-local",
              },
              {
                text: "5.3.1 localStorage",
                link: "/ut05-eventos-formularios/5-3-1-localstorage",
              },
              {
                text: "5.3.2 sessionStorage",
                link: "/ut05-eventos-formularios/5-3-2-sessionstorage",
              },
              {
                text: "5.3.3 Cookies",
                link: "/ut05-eventos-formularios/5-3-3-cookies",
              },
            ],
          },
          {
            text: "5.4 Ciclo de vida de un componente en React",
            collapsed: true,
            items: [
              {
                text: "5.4 Ciclo de vida de un componente en React (General)",
                link: "/ut05-eventos-formularios/5-4-ciclo-vida-react",
              },
              {
                text: "5.4.1 El hook de efecto: useEffect",
                link: "/ut05-eventos-formularios/5-4-1-useeffect",
              },
            ],
          },
          {
            text: "5.5 Formularios en React",
            collapsed: true,
            items: [
              {
                text: "5.5 Formularios en React (General)",
                link: "/ut05-eventos-formularios/5-5-formularios-react",
              },
              {
                text: "5.5.1 No controlados",
                link: "/ut05-eventos-formularios/5-5-1-no-controlados",
              },
              {
                text: "5.5.2 Controlados",
                link: "/ut05-eventos-formularios/5-5-2-controlados",
              },
            ],
          },
          {
            text: "Prácticas UT05",
            //link: "/ut05-eventos-formularios/practicas",
          },
        ],
      },
      {
        text: "UT06: Programación asíncrona y bibliotecas",
        collapsed: true,
        items: [
          {
            text: "Resumen",
            link: "/ut06-asincronia/",
          },
          {
            text: "6.1 Asynchronous JavaScript And XML (AJAX)",
            link: "/ut06-asincronia/6-1-ajax",
          },
          {
            text: "6.2 El objeto XMLHttpRequest",
            link: "/ut06-asincronia/6-2-xmlhttprequest",
          },
          {
            text: "6.3 Promise",
            collapsed: true,
            items: [
              {
                text: "6.3 Promise (General)",
                link: "/ut06-asincronia/6-3-promise",
              },
              {
                text: "6.3.1 Utilizando promise",
                link: "/ut06-asincronia/6-3-1-utilizando-promise",
              },
              {
                text: "6.3.2 Estados de promise",
                link: "/ut06-asincronia/6-3-2-estados-promise",
              },
              {
                text: "6.3.3 Encadenamiento de promise",
                link: "/ut06-asincronia/6-3-3-encadenamiento-promise",
              },
              {
                text: "6.3.4 Evaluando promise en conjunto",
                link: "/ut06-asincronia/6-3-4-evaluando-promise-conjunto",
              },
            ],
          },
          {
            text: "6.4 Usando la API fetch",
            collapsed: true,
            items: [
              {
                text: "6.4 Usando la API fetch (General)",
                link: "/ut06-asincronia/6-4-fetch-api",
              },
              {
                text: "6.4.1 Petición",
                link: "/ut06-asincronia/6-4-1-peticion",
              },
              {
                text: "6.4.2 Enviando datos",
                link: "/ut06-asincronia/6-4-2-enviando-datos",
              },
              {
                text: "6.4.3 Respuesta",
                link: "/ut06-asincronia/6-4-3-respuesta",
              },
            ],
          },
          {
            text: "6.5 “De vuelta” al modelo síncrono: async/await",
            link: "/ut06-asincronia/6-5-async-await",
          },
          {
            text: "6.6 Uso de bibliotecas externas: Supabase",
            collapsed: true,
            items: [
              {
                text: "6.6 Uso de bibliotecas externas: Supabase (General)",
                link: "/ut06-asincronia/6-6-supabase",
              },
              {
                text: "6.6.1 Creación de una base de datos",
                link: "/ut06-asincronia/6-6-1-creacion-bd",
              },
              {
                text: "6.6.2 Conectar con la base de datos",
                link: "/ut06-asincronia/6-6-2-conectar-bd",
              },
              {
                text: "6.6.3 Autentificación de usuarios",
                link: "/ut06-asincronia/6-6-3-autentificacion-usuarios",
              },
              {
                text: "6.6.4 Roles de usuario",
                link: "/ut06-asincronia/6-6-4-roles-usuario",
              },
              {
                text: "6.6.5 Políticas de seguridad a nivel de fila (RLS)",
                link: "/ut06-asincronia/6-6-5-politicas-rls",
              },
              {
                text: "6.6.6 Escribir datos",
                link: "/ut06-asincronia/6-6-6-escribir-datos",
              },
              {
                text: "6.6.7 Leer datos",
                link: "/ut06-asincronia/6-6-7-leer-datos",
              },
              {
                text: "6.6.8 Borrar datos",
                link: "/ut06-asincronia/6-6-8-borrar-datos",
              },
              {
                text: "6.6.9 Actualizar datos",
                link: "/ut06-asincronia/6-6-9-actualizar-datos",
              },
            ],
          },
          {
            text: "6.7 ¿Mi información al descubierto? Uso de variables de entorno",
            collapsed: true,
            items: [
              {
                text: "6.7 ¿Mi información al descubierto? Uso de variables de entorno (General)",
                link: "/ut06-asincronia/6-7-variables-entorno",
              },
              {
                text: "6.7.1 NodeJS y JavaScript vanilla",
                link: "/ut06-asincronia/6-7-1-nodejs-vanilla",
              },
              {
                text: "6.7.2 React y Angular",
                link: "/ut06-asincronia/6-7-2-react-angular",
              },
            ],
          },
          {
            text: "6.8 Hooks personalizados (custom hooks)",
            link: "/ut06-asincronia/6-8-custom-hooks",
          },
          {
            text: "6.9 Contextos en React",
            link: "/ut06-asincronia/6-9-contextos-react",
          },
          {
            text: "Prácticas UT06",
            //link: "/ut06-asincronia/practicas",
          },
        ],
      },
      {
        text: "UT07: Clases en JavaScript",
        collapsed: true,
        items: [
          {
            text: "Resumen",
            link: "/ut07-clases/",
          },
          {
            text: "7.1 Trabajando con objetos",
            collapsed: true,
            items: [
              {
                text: "7.1 Trabajando con objetos (General)",
                link: "/ut07-clases/7-1-trabajando-objetos",
              },
              {
                text: "7.1.1 Propiedades",
                link: "/ut07-clases/7-1-1-propiedades",
              },
              {
                text: "7.1.2 Métodos",
                link: "/ut07-clases/7-1-2-metodos",
              },
            ],
          },
          {
            text: "7.2 Objetos literales",
            collapsed: true,
            items: [
              {
                text: "7.2 Objetos literales (General)",
                link: "/ut07-clases/7-2-objetos-literales",
              },
              {
                text: "7.2.1 Prototipos",
                link: "/ut07-clases/7-2-1-prototipos",
              },
              {
                text: "7.2.2 Herencia",
                link: "/ut07-clases/7-2-2-herencia",
              },
            ],
          },
          {
            text: "7.3 Clases",
            collapsed: true,
            items: [
              {
                text: "7.3 Clases (General)",
                link: "/ut07-clases/7-3-clases",
              },
              {
                text: "7.3.1 Definición de clases con class",
                link: "/ut07-clases/7-3-1-definicion-clases",
              },
              {
                text: "7.3.2 Ámbitos de una clase",
                link: "/ut07-clases/7-3-2-ambitos-clase",
              },
              {
                text: "7.3.3 Propiedades y métodos privados",
                link: "/ut07-clases/7-3-3-propiedades-metodos-privados",
              },
              {
                text: "7.3.4 Métodos estáticos",
                link: "/ut07-clases/7-3-4-metodos-estaticos",
              },
              {
                text: "7.3.5 Herencia con clases",
                link: "/ut07-clases/7-3-5-herencia-clases",
              },
            ],
          },
          {
            text: "Prácticas UT07",
            //link: "/ut07-clases/practicas",
          },
        ],
      },
    ],
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "Buscar apuntes...",
                buttonAriaLabel: "Buscar apuntes",
              },
              modal: {
                noResultsText: "No se encontraron resultados",
                resetButtonTitle: "Limpiar búsqueda",
                footer: {
                  selectText: "para seleccionar",
                  navigateText: "para navegar",
                  closeText: "para cerrar",
                },
              },
            },
          },
        },
      },
    },
    outline: {
      level: [2, 4],
      label: "En esta página",
    },
    docFooter: {
      prev: "Página anterior",
      next: "Página siguiente",
    },
    darkModeSwitchLabel: "Tema",
    lightModeSwitchTitle: "Cambiar a modo claro",
    darkModeSwitchTitle: "Cambiar a modo oscuro",
    sidebarMenuLabel: "Menú",
    returnToTopLabel: "Volver arriba",
  },
});
