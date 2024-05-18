document.addEventListener('DOMContentLoaded', (event) => {
    const taskInput = document.getElementById('new-task'); // Campo de entrada para nova tarefa
    const taskList = document.getElementById('task-list'); // Elemento <ul> para listar as tarefas
    const addTaskBtn = document.getElementById('add-task'); // Botão para adicionar novas tarefas

    // Função para carregar tarefas do localStorage
    const loadTasks = () => {
        // Recupera as tarefas do localStorage (ou um array vazio se não houver tarefas)
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        // Para cada tarefa recuperada, adiciona-a ao DOM
        tasks.forEach(task => addTaskToDOM(task));
    };

    // Função para salvar as tarefas no localStorage
    const saveTasks = () => {
        const tasks = [];
        // Seleciona todas as tarefas do DOM e armazena em um array
        document.querySelectorAll('.task-item').forEach(item => {
            // Para cada tarefa, obtém o texto e se está marcada como concluída
            tasks.push({
                text: item.querySelector('.task-text').textContent, // Texto da tarefa
                completed: item.querySelector('.task-checkbox').checked // Tarefa concluída ou não
            });
        });
        // Armazena o array de tarefas no localStorage em formato JSON
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    // Função para adicionar uma tarefa ao DOM
    const addTaskToDOM = (task) => {
        // Cria um elemento <li> para a tarefa
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item' + (task.completed ? ' completed' : ''); // Adiciona classe se a tarefa estiver concluída

        // Cria uma caixa de verificação para indicar se a tarefa está concluída ou não
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.checked = task.completed; // Define o estado da caixa de verificação com base no status da tarefa
        checkbox.addEventListener('change', () => { // Adiciona um evento de mudança para alterar o estado da tarefa
            taskItem.classList.toggle('completed'); // Alterna a classe 'completed' para marcar visualmente a tarefa como concluída
            saveTasks(); // Salva as alterações no localStorage
        });

        // Cria um elemento <span> para o texto da tarefa
        const taskText = document.createElement('span');
        taskText.className = 'task-text';
        taskText.textContent = task.text;

        // Cria um botão para remover a tarefa
        const removeBtn = document.createElement('button');
        removeBtn.className = 'btn-remove';
        removeBtn.textContent = 'Remover';
        removeBtn.addEventListener('click', () => { // Adiciona um evento de clique para remover a tarefa
            taskItem.remove(); // Remove a tarefa do DOM
            saveTasks(); // Salva as alterações no localStorage
        });

        // Adiciona a caixa de verificação, o texto da tarefa e o botão de remover ao item da lista
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskText);
        taskItem.appendChild(removeBtn);
        // Adiciona o item da lista ao elemento <ul> no DOM
        taskList.appendChild(taskItem);
    };

    // Evento de clique para adicionar uma nova tarefa
    addTaskBtn.addEventListener('click', () => {
        // Verifica se o campo de entrada não está vazio
        if (taskInput.value.trim() === '') return;
        // Cria um objeto de tarefa com o texto da tarefa e status não concluído
        const newTask = { text: taskInput.value.trim(), completed: false };
        // Adiciona a nova tarefa ao DOM
        addTaskToDOM(newTask);
        // Salva a nova lista de tarefas no localStorage
        saveTasks();
        // Limpa o campo de entrada
        taskInput.value = '';
    });

    // Carrega as tarefas do localStorage quando a página é carregada
    loadTasks();
});