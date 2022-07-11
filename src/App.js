import './App.css';
import dedo from './imagenes/dedo.png';

function App() {
  return (
    <div className="App">
      <div className='dedo-logo-contenedor'>
        <img
          className='dedo-logo'
          src={dedo} 
          alt='logo de dedo'
        />
        <div className='contenedor-principal'>
          
        </div>

      </div>
    </div>
  );
}

export default App;
