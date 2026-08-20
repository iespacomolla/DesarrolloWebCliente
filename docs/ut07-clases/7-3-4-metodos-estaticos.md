# 7.3.4 Métodos estáticos

Para usar un método de una clase es necesario crear el objeto basado en la clase haciendo un new. Si es necesario crear métodos estáticos en una clase habrá que anteponer la palabra reservada static antes del método:

```javascript
class Persona {
    static despedirse() {
        return "Adiós";
    }
    hablar() {
        return "Hola";
    }
}

Persona.despedirse(); // Adiós.
```

Una de las limitaciones de los métodos estáticos es que, en su interior, sólo es posible **hacer referencia a elementos que también sean estáticos**. No es posible acceder a propiedades o métodos no estáticos ya que sería necesario instanciar un objeto para hacerlo. Los métodos estáticos se suelen utilizar para crear funciones de apoyo que realicen tareas concretas o genéricas.
