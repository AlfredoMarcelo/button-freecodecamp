# Contador de clic




## Preparar el proyecto

se elimina
- setupTest
- reportWebVitals.js
- App.test.js
- logo.svg
- Vaciar los componentes que estan dentro de App.js, solo dejar <className="App">. Eliminar importacion de logo.svg
- vaciar declaraciones de App.css
- Vaciar en index.js la importación de reportWebVitals y los comentarios

### `Comandos`

Para crear el proyecto
- npm create-react-app nombreProyecto

Para arrrancar el proyecto
- npm start

### `Importar imagenes`

Crear carpeta
- dentro de src, crear carpeta de imagenes

Importar imagen local
- dentro del componente se debe añadir con el tag img e importar indicando el nombre y ubicacion ej: import logo from "./imagenes/nombreimagen.tipo". Para hacer uso de la imagen, se debe declarar dentro de src={logo}, el mismo nombre que utilizamos para la importación

### `arbol componentes`

Index.js es el componente principal, es de ahí que se envian todos los componentes a la vista html.

Para los componentes se debe crear una carpeta dentro de src
- componentes

App.js es un componente, y todo componente es de notacion PascalCase

#### `Agenda`

- se puede utilizar la desestructurarcion al importar props dentro de los componentes({propiedad1, propiedad2,N°veces})

- operador ternario => condicion ? true : false

- un eventListener para botones en react es onClick => onClick={}

- un componente siempre se debe exportar, y el componente padre lo debe importar para utilizar. Si es solo el componente y un elemento se usa el `export default nombreComponente;`