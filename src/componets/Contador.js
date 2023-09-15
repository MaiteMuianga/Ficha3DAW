import React, { useState } from 'react';
import Styles from './Contador.module.css'

function Contador(props) {
    const [contador, setContador] = useState(props.numeroInicial);

  const incrementar = () => {
    setContador(contador + 1);
  }

  const decrementar = () => {
    setContador(contador - 1);
  }
return(
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
)

}
export default Contador;