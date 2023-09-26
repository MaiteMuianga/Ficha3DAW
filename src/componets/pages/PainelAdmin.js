import React, { useState } from 'react';

function PainelAdimin() {
    const [livros, setLivros] = useState([
        { id: 1, titulo: 'Livro 1' },
        { id: 2, titulo: 'Livro 2' },
        // Adicione mais livros conforme necessário
      ])

      const [novoLivro, setNovoLivro] = useState('');

      const handleAdicionarLivro = () => {
        if (novoLivro) {
          setLivros([...livros, { id: livros.length + 1, titulo: novoLivro }]);
          setNovoLivro('');
        }
      };

      const handleExcluirLivro = (id) => {
        const novosLivros = livros.filter((livro) => livro.id !== id);
        setLivros(novosLivros);
      };
    return (
      <div>
        <h1>PainelAdimin</h1>

        <h2>Lista de Livros na Biblioteca</h2>
      <ul>
        {livros.map((livro) => (
          <li key={livro.id}>
            {livro.titulo}
            <button onClick={() => handleExcluirLivro(livro.id)}>Excluir</button>
          </li>
        ))}
      </ul>

      <h2>Adicionar Novo Livro</h2>
      <input
        type="text"
        placeholder="Título do Livro"
        value={novoLivro}
        onChange={(e) => setNovoLivro(e.target.value)}
      />
      <button onClick={handleAdicionarLivro}>Adicionar Livro</button>
       
      </div>
    )
  }
  
  export default PainelAdimin