# 6.5 “De vuelta” al modelo síncrono: async/await

Con ***async/await*** se sigue utilizando el modelo de promesas, pero se abandona el modelo de encadenamiento de `.then()` para utilizar uno en el que se trabaja de forma más tradicional.
Si se observa el siguiente código, la función `traerDatos` hace un `fetch` (código asíncrono) y trata de imprimir el resultado por consola. Ya es sabido que `fetch` devuelve una **promesa** y en el momento de imprimirlo en consola no contendrá los datos, sino un  objeto *promise*. Lo que se obtendrá será `Promise {pending}`.

```javascript
const traerDatos = () => {
    const respuesta = fetch("https://swapi.dev/api/people/1");
    console.log(respuesta); // Devuelve una Promise en estado <pending>.
};
```

Para utilizar este código de forma correcta `console.log` debería esperar al `fetch`. Para eso se definirá la función `trearDatos` como asíncrona (`async`) y, de ese modo, **transformar** su ámbito síncrono en uno asíncrono. En este espacio ya es posible emplear la palabra `await` para hacer que el código detrás se espere a la resolución de la *promise*, como se indica a continuación:

```javascript
const traerDatos = async () => {
const respuesta = await fetch("https://swapi.dev/api/people/1");
    console.log(respuesta); // Devuelve un objeto response con los datos del fetch.
};
```

En el caso de respuesta del primer ejemplo, se obtiene el valor devuelto por la función pero envuelto en una **promesa** que deberá **consumirse** con `.then()` para acceder a los datos. Sin embargo, en el segundo ejemplo se obtiene el valor procesado ya que `await` espera a que se resuelva la promesa y guarda el valor.

En realidad, lo que se pretende con esta consulta es el acceso a los datos y no a un objeto de tipo `response`, por lo que habrá que acceder a ellos a través de su método `.json()`. Este método devolverá una promesa, así que habrá que consumirla, de nuevo, con `await`:

```javascript
const traerDatos = async () => {
const respuesta = await fetch("https://swapi.dev/api/people/1");
console.log(respuesta); // Devuelve un objeto response con los datos del fetch.
// Los datos que interesan están contenidos en él y se accede a ellos con .json().
const datos = await respuesta.json(); // Se consume la promesa con await.
console.log(datos); // Se obtiene un objeto JSON con los datos solicitados.
};
```

También con ***async/await*** se pueden encadenar promesas, pero el código pierde legibilidad y requiere más destreza y práctica de la que se dispone a estas alturas del curso, por lo que se desaconseja su uso:

```javascript
const traerDatos = async () => {
const datos = await (await fetch("https://swapi.dev/api/people/1")).json();
console.log(datos);
};
```

Esta forma de trabajar con ***async/await***, aunque sigue trabajando con promesas, hace que sea más fácil y trivial para usuarios que no estén acostumbrados a ellas ya que el código parece síncrono (aunque no lo sea).
