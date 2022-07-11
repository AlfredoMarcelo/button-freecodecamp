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

## `Hoja de estilos`

Cuando se van creando componentes, es de buena practica crear una carpeta dentro de src para las hojas de estilos, esto con el fin de mantener el orden si cada componente va a tener una. La hoja de estilo debe tener el mismo nombre que el componente pero con su tipo .css

### `arbol componentes`

Index.js es el componente principal, es de ahí que se envian todos los componentes a la vista html.

Para los componentes se debe crear una carpeta dentro de src
- componentes

App.js es un componente, y todo componente es de notacion PascalCase

#### `Agenda`

- se puede utilizar la desestructurarcion al importar props dentro de los componentes `function Boton({ texto, esBotonDeClic, manejarClic }){

}`

- operador ternario => condicion ? true : false

- un eventListener para botones en react es onClick => onClick={}

- un componente siempre se debe exportar, y el componente padre que lo cree o lo renderice lo debe importar para utilizar. Si es solo el componente y un elemento se usa el `export default nombreComponente;`

- Función flecha: expresion de funcion => const nombreVar = () => {
    codigo
} 

- Para abrir la herramienta de react se debe apretar f12 en la vista, luego seleccionar `components`, allí se podrá ver los contenedores padres e hijos, sus props, funciones y valores.

- Hooks minuto 3:40, useState.

- useState permite agregar un estado a un componente funcional. Para usar el hook se debe importar => import { useState } from 'react';

- Punto y coma, al final de una funcion flecha se puede usar los punto y coma como buena práctica;

- La importación de => import React from 'react';, ya no es necesario hacerlo en todos los componentes. Esto se debe a la actualización 17 de react.