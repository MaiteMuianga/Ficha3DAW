import React, { useEffect } from 'react';

function CicloVida(){

    // Efeito para montagem (equivalente ao componentDidMount)
  useEffect(() => {
    console.log('Componente foi montado.');
    
    // Função de limpeza (equivalente ao componentWillUnmount)
    return () => {
      console.log('Componente está sendo desmontado.');
    };
  }, []);

  // Efeito para atualização (equivalente ao componentDidUpdate)
  useEffect(() => {
    console.log('Componente foi atualizado.');
  });

    return(
        <div>
             <h1>Componente Ciclo de Vida</h1>
      <p>Consulte o console para mensagens de log.</p>
        </div>
    )
}
export default CicloVida;
