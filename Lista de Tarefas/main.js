document.addEventListener('DOMContentLoaded', (event) => {
    const novaTarefa = document.getElementById('new-task'); // Campo de entrada para nova tarefa
    const listaTarefas = document.getElementById('task-list'); // Elemento <ul> para listar as tarefas
    const adicionarTarefas = document.getElementById('add-task'); // Botão para adicionar novas tarefas

    // Função para carregar tarefas do localStorage
    const carregarTarefas = () => {
        // Recupera as tarefas do localStorage (ou um array vazio se não houver tarefas)
        const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
        // Para cada tarefa recuperada, adiciona-a ao DOM
        tarefas.forEach(task => addTarefaDom(task));
    };

    // Função para salvar as tarefas no localStorage
    const salvarTarefas = () => {
        const tarefas = [];
        // Seleciona todas as tarefas do DOM e armazena em um array
        document.querySelectorAll('.task-item').forEach(item => {
            // Para cada tarefa, obtém o texto e se está marcada como concluída
            tarefas.push({
                text: item.querySelector('.task-text').textContent, // Texto da tarefa
                completed: item.querySelector('.task-checkbox').checked // Tarefa concluída ou não
            });
        });
        // Armazena o array de tarefas no localStorage em formato JSON
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    };

    // Função para adicionar uma tarefa ao DOM
    const addTarefaDom = (task) => {
        // Cria um elemento <li> para a tarefa
        const itemTarefa = document.createElement('li');
        itemTarefa.className = 'task-item' + (task.completed ? ' completed' : ''); // Adiciona classe se a tarefa estiver concluída

        // Cria uma caixa de verificação para indicar se a tarefa está concluída ou não
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.checked = task.completed; // Define o estado da caixa de verificação com base no status da tarefa
        checkbox.addEventListener('change', () => { // Adiciona um evento de mudança para alterar o estado da tarefa
            itemTarefa.classList.toggle('completed'); // Alterna a classe 'completed' para marcar visualmente a tarefa como concluída
            salvarTarefas(); // Salva as alterações no localStorage
        });

        // Cria um elemento <span> para o texto da tarefa
        const textoTarefa = document.createElement('span');
        textoTarefa.className = 'task-text';
        textoTarefa.textContent = task.text;

        // Cria um botão para remover a tarefa
        const removerTarefa = document.createElement('button');
        removerTarefa.className = 'btn-remove';
        removerTarefa.textContent = 'Remover';
        removerTarefa.addEventListener('click', () => { // Adiciona um evento de clique para remover a tarefa
            itemTarefa.remove(); // Remove a tarefa do DOM
            salvarTarefas(); // Salva as alterações no localStorage
        });

        // Adiciona a caixa de verificação, o texto da tarefa e o botão de remover ao item da lista
        itemTarefa.appendChild(checkbox);
        itemTarefa.appendChild(textoTarefa);
        itemTarefa.appendChild(removerTarefa);
        // Adiciona o item da lista ao elemento <ul> no DOM
        listaTarefas.appendChild(itemTarefa);
    };

    // Evento de clique para adicionar uma nova tarefa
    adicionarTarefas.addEventListener('click', () => {
        // Verifica se o campo de entrada não está vazio
        if (novaTarefa.value.trim() === '') return;
        // Cria um objeto de tarefa com o texto da tarefa e status não concluído
        const tarefaNaoConc = { text: novaTarefa.value.trim(), completed: false };
        // Adiciona a nova tarefa ao DOM
        addTarefaDom(tarefaNaoConc);
        // Salva a nova lista de tarefas no localStorage
        salvarTarefas();
        // Limpa o campo de entrada
        novaTarefa.value = '';
    });

    // Carrega as tarefas do localStorage quando a página é carregada
    carregarTarefas();
});