# 4.8 React-router-dom


**React** permite crear **SPA** (*Single Page Application*) y mostrar varias vistas dentro de la misma página. Aún así, navegación entre páginas, una **URL** específica para una vista o simplemente retroceder/avanzar en el historial de navegación son características de las que toda aplicación web hace uso.

La utilización de las rutas en **React** se simplifica mucho gracias a esta biblioteca y a su división en componentes y *hooks*. Se encarga de capturar los eventos de la barra de navegación del navegador, evitar su funcionamiento por defecto e imponer uno nuevo que será gestionado a través de componentes. No se pretende en este manual estudiar en profundidad esta biblioteca, pero se ahondará lo suficiente para crear un sistema de rutas competente.

Y para todo esto se necesita instalar los paquetes necesarios a través del siguiente comando (escrito dentro de la carpeta del proyecto):

```bash
npm install react-router-dom
```

Los elementos de la biblioteca que se utilizarán serán:

- `<BrowserRoute>`, conecta la aplicación a la **URL** del navegador, es decir, mantiene la interfaz de usuario en sincronía con la **URL** del navegador mediante la *API History* de **HTML5**,

- `<Routes>`, genera un árbol de rutas que permite reemplazar la vista con el componente que coincide con la **URL** de la barra de navegación y dibuja solamente dicho componente,

- `<Route>`, representa una ruta en el árbol y necesita, al menos, las propiedades `path` y `element`, para representar una ruta,
  - `path` indica la ruta que debe coincidir con la del navegador para cargar el componente especificado. Hay que tener en cuenta que las rutas aquí indicadas funcionan con direccionamiento absoluto y relativas de igual modo que el sistema **Unix** (esto no ocurre en el primer nivel de rutas):
    - si la ruta **comienza con una barra**, la ruta de la barra de direcciones se sustituirá por la que indica el atributo `path` del `<Link>`
    - si la ruta **no empieza con una barra**, la ruta especificada en `path` se añadirá a la ruta existente,
- element especifica el componente que debe dibujar el enrutador,
- `<Outlet>`, sirve para indicar el destino de las rutas anidadas (submenús),
- `<Link>`, sustituye a la etiqueta `<a>` de **HTML** para prevenir el funcionamiento por defecto y evitar que se recargue la página. Recibe en su propiedad to el `path` de la ruta a dibujar.
- `useNavigate`, *hook* que permitirá controlar la *API History* del navegador. Se usará para acciones como redirigir al/la usuario/a a una ruta determinada en función de alguna condición o acción,
- `useLocation`, ofrece información de las rutas gestionadas por *React-router-dom*,
- `useParams`, permite gestionar los parámetros pasados en una ruta.

Lo ideal es crear las rutas en el componente raíz de la aplicación, que usualmente será `<App>`, ya que será dentro del componente `<Routes>` donde se carguen los componentes que se especifica en cada ruta.

En el siguiente código se define un árbol de rutas con un submenú incluido:

```jsx
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Inicio />} />
    <Route path='login' element={<Login />} />
    <Route path='notas' element={<Notas />}/>
    <Route path='herramientas' element={<Herramientas />}>
      <Route path='ciclos' element={<Ciclos />} />
      <Route path='modulos' element={<Modulos />} />
      <Route path='practicas' element={<Practicas />} />
    </Route>
    <Route path='acerca-de' element={<AcercaDe />} />
  </Routes>
</BrowserRouter>
```

El componente `<Routes>`, situado dentro de `<BrowserRoute>`, contendrá todas las rutas que sean necesarias para construir la aplicación. Además, es posible crear rutas anidadas para la creación de submenús incluyendo rutas dentro de un componente `<Route>`, tal y como se ve en el ejemplo.

Una vez creadas las rutas, será necesario crear el enlace que conduce hasta ellas a través del componente `<Link>` del siguiente modo:

```jsx
<nav>
  <Link to='/'>Inicio</Link>
  <Link to='/login'>Login</Link>
  <Link to='/notas'>Notas</Link>
  <Link to='/herramientas'>Herramientas</Link>
<Link to='/acerca-de'>Acerca de</Link>
</nav>
```

El dibujado de este submenú se realizará allá donde se encuentre el componente `<Outlet>` más cercano, que suele situarse junto a los componentes `<Link>` que cargan las rutas de ese submenú, tal y como se puede ver en el siguiente componente:

```jsx
const Herramientas = () => {

return (
  <>
  <nav>
    <Link to='herramientas/ciclos'>Administrar ciclos</Link>
    <Link to='herramientas/modulos'>Administrar módulos</Link>
    <Link to='herramientas/practicas'>Administrar prácticas</Link>
  </nav>
  <div className='contenido'>
    <Outlet />
  </div>
  </>
)};
```

Si en la etiqueta `<Link>` no se hace uso de una ruta anidada, el componente que debe dibujar lo hará donde esté situado `<Routes>`.

#### Ruta por defecto

Hay que tener en cuenta que cuando se usa el componente `<Link>` y se activa, éste buscará la ruta de su atributo to en la lista de rutas disponibles. Si no encuentra ninguna coincidencia no cargará ningún componente y la aplicación puede verse comprometida.

Para estos casos existe el `path="*"`para poder dibujar un componente por defecto que indique que la ruta no existe o muestre un mensaje de error, por ejemplo.

```jsx
<Route path='\*' element={<Error />} />;
```

#### Rutas con parámetro

Para usar parámetros en una ruta debe especificarse en la propiedad path del componente `<Route>` del siguiente modo:

```jsx
<Route path='/discente/:nia' element={<Discente />} />;
```

De esta forma la ruta será dinámica y pasará el valor de la variable nia al componente que carga. En él, en esta ocasión `<Discente>`, se debe usar el *hook* `useParams` para recoger ese dato y actuar en consecuencia:

```javascript
const { nia } = useParams();
```

#### Redirección de rutas manual

Para poder enviar a los usuarios a una ruta como resultado de alguna acción es posible utilizar el *hook* `useNavigate` indicando como parámetro la ruta que debe cargarse. Lo primero es crear el elemento que controlará la navegación:

```javascript
const navigate = useNavigate();
```

Lo segundo usándolo a conveniencia:

```jsx
sesion_iniciada ? navigate("inicio") : navigate("login");
```

Esta es una visión muy simple de este hook ya que también acepta un objeto como segundo parámetro para personalizar la redirección permitiendo, entre otras cosas, dar información al usuario. Algo a tener en cuenta es que para utilizar este *hook* es necesario hacerlo dentro del ámbito de `<BrowserRouter>` o no tendrá efecto alguno. Si es necesario utilizarlo una configuración adecuada sería convertir al componente `<App>` en *children* de `<BrowserRouter>` para que el ámbito de utilización del *hook* sea toda la aplicación:

```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

Utilizando esta biblioteca de esta forma se asegurará que el resultado siga siendo una **SAP** y evitar recargar la página con todo lo que ello supone. Queda a discreción del discente ahondar sobre las características de esta biblioteca.
