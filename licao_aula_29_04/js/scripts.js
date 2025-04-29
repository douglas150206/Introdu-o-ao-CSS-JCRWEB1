let tarefas = [];

function renderizarTarefas() {
  const lista = document.getElementById('listaTarefas');
  lista.innerHTML = '';

  for (let i = 0; i < tarefas.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = `
      ${tarefas[i].nome}
        <div class="botoes">
            <button class="editar" onclick="editarTarefa(${i})">Editar</button>
            <button class="excluir" onclick="removerTarefa(${i})">Excluir</button>
        </div>
    `;
    lista.appendChild(li);
  }
}

function adicionarTarefa() {
    const input = document.getElementById('tarefaInput');
    const nome = input.value.trim();
  
    if (nome !== '') {
      tarefas.push({ nome: nome });
      input.value = '';
      renderizarTarefas();
    }
  }
  
  function editarTarefa(indice) {
    const novoNome = prompt("Editar tarefa:", tarefas[indice].nome);
    if (novoNome !== null && novoNome.trim() !== '') {
      tarefas[indice].nome = novoNome.trim();
      renderizarTarefas();
    }
  }
  
  function removerTarefa(indice) {
    tarefas.splice(indice, 1);
    renderizarTarefas();
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('tarefaInput').addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        adicionarTarefa();
      }
    });
  });
  

