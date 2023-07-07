const btnAgregar = document.querySelector('#newTask');
const task = document.querySelector('#newTask');
const tbodyTasks = document.querySelector('#tasks');
const tasksList = [];


btnAgregar.addEventListener('keypress', function(e) {
if(e.keyCode === 13){
    addTask();
}
});

const addTask = () => {
    if (task.value === '') {
        alert('Debe ingresar una tarea');
        return; 
    }

    const newTask = {
        id: tasksList.length + 1, 
        name: task.value,
        status: false
    };
        tasksList.push(newTask);
        updateList();
    
}

const updateList = () => {
    let html = '';
    for (let task of tasksList) {
        html +=
        `<tr>
        <td>${task.id}</td>
        <td>${task.name}</td>
        <td>${task.status ?'realizada': 'pendiente'}</td>
        <td><button class="btn btn-danger">Eliminar</button></td>
        </tr>`
        ;
    }
    task.value = "";
    tbodyTasks.innerHTML = html;
}