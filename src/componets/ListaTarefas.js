import React, { useState } from 'react';
function ListaTarefas(){

    const [tarefas, setTarefas] = useState([]); // Estado para armazenar as tarefas
  const [novaTarefa, setNovaTarefa] = useState(''); // Estado para a nova tarefa a ser adicionada

  // Função para adicionar uma nova tarefa à lista
  const adicionarTarefa = () => {
    if (novaTarefa.trim() === '') {
      return; // Impede a adição de tarefas em branco
    }
    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa(''); // Limpa o campo de entrada
  };

  // Função para remover uma tarefa da lista pelo índice
  const removerTarefa = (indice) => {
    const novasTarefas = tarefas.filter((_, i) => i !== indice);
    setTarefas(novasTarefas);
  };
    return(
        <div>
              <h1>Lista de Tarefas</h1>
      <div>
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Nova Tarefa"
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>
      <ul>
        {tarefas.map((tarefa, indice) => (
          <li key={indice}>
            {tarefa}
            <button onClick={() => removerTarefa(indice)}>Remover</button>
          </li>
        ))}
      </ul>
        </div>
    )
}

export default ListaTarefas;