import React from 'react';
import '../hojas-de-estilo/Contador.css';

function Contador ({ numeroDeClics }) {
    return (
        <div className='contador'>
            {numeroDeClics}
        </div>
    );  
}

export default Contador;