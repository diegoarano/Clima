import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({resultado}) => {


    // extraer valores

    const {name , main} = resultado;

    if(!name) return null;

    //grados Kelvin
    const Kelvin = 273.15;

    return ( 
       <div className="card-panel col s12">
           <div className="black-text">
               <h2>El Clima de {name} es:</h2>
               <p className="temaperatura">{ parseFloat(main.temp - Kelvin , 10).toFixed(1)} <span> &#x2103; </span></p>

               <p>Temperatura Maxima:{ parseFloat(main.temp_max - Kelvin , 10).toFixed(1)} <span> &#x2103; </span></p>

               <p>Temperatura Minina:{ parseFloat(main.temp_min - Kelvin , 10).toFixed(1)} <span> &#x2103; </span></p>

           </div>

       </div>
     );
}
 
Clima.propTypes ={
    resultado : PropTypes.object.isRequired
}

export default Clima;