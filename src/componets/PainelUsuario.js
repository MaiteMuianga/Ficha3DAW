import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'; 


function PainelUsuario() {
    const [perfil, setPerfil] = useState('Usuário');

    const handleLogout = () => {
        // Faça logout, redefinindo o perfil para nulo
        setPerfil(null);
        // Você também pode redefinir outros estados relevantes aqui
      };

    const [livros, setLivros] = useState([
        { id: 1, titulo: 'Livro 1', lido: false },
        { id: 2, titulo: 'Livro 2', lido: true },
        { id: 3, titulo: 'Livro 3', lido: false },
        // Adicione mais livros conforme necessário

        
      ]);
    return (
      <div>
        <h1>PainelUsuario</h1>
        
        <h2>Lista de Livros na Biblioteca</h2>
      <ul>
        {livros.map((livro) => (
          <li key={livro.id}>
            {livro.titulo} - {livro.lido ? 'Lido' : 'Não lido'}
          </li>
        ))}
      </ul>
      {livros.length === 0 && <p style={{ color: 'red' }}>Livro não disponível no momento</p>}
      {perfil && <p>Seu perfil: {perfil}</p>}
      <button onClick={handleLogout}>Logout</button>

    </div>
    )
  }
  
  export default PainelUsuario