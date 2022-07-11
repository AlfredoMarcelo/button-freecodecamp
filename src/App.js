import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import dedo from './imagenes/dedo.png';
import { useState } from 'react';

function App() {

  const [ numeroDeClics, setNumeroDeClics ] = useState(0);

  const manejarClic = () => {
    setNumeroDeClics( numeroDeClics + 1 );//el valor actulizado será igual a numClics +1
  }

  const reiniciarContador = () => {
    setNumeroDeClics(0);
  }

  return (
    <div className="App">
      <div className='dedo-logo-contenedor'>
        <img
          className='dedo-logo'
          src={dedo} 
          alt='logo de dedo'
        />
       </div>
        <div className='contenedor-principal'>
          <Contador numeroDeClics={numeroDeClics} />
          <Boton
            texto         = 'Clic'
            esBotonDeClic = {true}
            manejarClic   = {manejarClic}
          />
          <Boton
            texto         = 'Reiniciar'
            esBotonDeClic = {false}
            manejarClic   = {reiniciarContador}
          />
        </div>     
    </div>
  );
}

export default App;
