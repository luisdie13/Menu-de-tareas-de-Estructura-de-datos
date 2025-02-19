class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.siguiente = null;
    }
}

class ListaEnlazada {
    constructor () {
        this.head = null;
        this.size = 0;
    }

    add(elemento) {
        const nuevoNodo = new Nodo(elemento)
        if(!this.head) {
            this.head = nuevoNodo
        } else {
            let current = this.head
            while(current.siguiente) {
                current = current.siguiente
            }
            current.siguiente = nuevoNodo
        }
        this.size++
        this.render()
        console.log('Elemento agregado')
    }

remove (valor) {
    if(!this.head) {
        return null
    }
    if(this.head.valor == valor){
        this.head = this.head.siguiente
        this.render()
        this.size--
        return true;
}
let current = this.head; 
while(current.siguiente && current.siguiente.valor != valor) {
    current = current.siguiente 
}
if (current.siguiente) {
    current.siguiente = current.siguiente.siguiente
    this.size--
    this.render()
    return true
}
return false;
}
render () {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    let current = this.head;
    while (current) {
        const li = document.createElement('li');
        li.textContent = current.valor;
        const valorActual = current.valor;
        const button = document.createElement('button');
        button.textContent = 'Delete';
        button.onclick = () => this.remove(valorActual)
        li.appendChild(button);
        taskList.appendChild(li);
        current = current.siguiente
    }
}
}

const listaDeTareas = new ListaEnlazada();

const addTask = () => {
    const taskInput = document.getElementById('task-input');
    const taskValue = taskInput.value.trim();
    if(taskValue != '') {
        listaDeTareas.add(taskValue);
        taskInput.value = '';
    }
}

document.getElementById('task-input').addEventListener('keyup', (event) => {
    if(event.key == 'Enter') {
        addTask();
    }
})