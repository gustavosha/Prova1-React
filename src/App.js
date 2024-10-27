import React, { useState } from 'react';

function App() {
 
  const [tarefa, setTarefa] = useState(['ALimentar o cachorro', 'Lavar a moto','Correr']);
  const [input, setInput] = useState('');


  function acionaRegistro(e) {
    e.preventDefault();
    if (input.trim() !== '') { 
      setTarefa([...tarefa, input]);
      setInput('');
    }
  }

  return (
    <div>
      <h1>Prova1 - grupo 7</h1>
      <h2>Integrantes</h2>
      <ul>
        <li>Diego</li>
        <li>Giovanna</li>
        <li>Gustavo</li>
        <li>Kerllon</li>
      </ul>

      <h1>Cadastrando Tarefas</h1>
      <form onSubmit={acionaRegistro}>
        <label>Nome da tarefa:</label>
        <br />
        <input
          placeholder='Digite uma tarefa'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type='submit'>Inserir</button>
        <br />
        <ul>
          {tarefa.map((tarefa, index) => (
            <li key={index}>{tarefa}</li>
          ))}
        </ul>
      </form>
      <br />
    </div>
  );
}

export default App;
