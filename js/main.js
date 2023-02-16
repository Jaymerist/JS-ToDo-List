
/*
    Todolist

    We're going to make a todolist that counts how many todos we've completed.
    We'll do this using objects in the todos array shown below.

    HTML FOR The todo

    <li class="list-group-item">
        <input class="form-check-input todo-status"
            todo-id="INDEX HERE"
            type="checkbox"
            value="TODO VALUE WITH INDEX HERE" aria-label="..."
            TODO COMPLETE TERNARY HERE>
        DESCRIPTION HERE

    </li>

*/

let todolist = document.querySelector(".todo-list")
let todoForm = document.querySelector("#add-todo-form")


let todos = [
    {
        description: 'Todo 1',
        complete: false,

    },
    {
        description: 'Todo 2',
        complete: true,
    }
];

todoForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    let todoDescription = event.target.elements['todo-description']
    let newTodo = {
        description: todoDescription.value,
        complete: false
    }
    console.log(newTodo)
    addTodo(newTodo)
    todoDescription.value = ""
})

const addTodo = (todoObject) => {
    todos.push(todoObject)
    renderTodos()
}

todolist.addEventListener("change", (event) => {
    console.log("changed")
    let todoCheckBox = event.target
    let todoIndex = event.target.getAttribute("todo-id")

    //access the index
    todos[todoIndex].complete = todoCheckBox.checked
    calculateCompleted()
})

const calculateCompleted = () => {
    let initialValue = 0
    let completedCount = todos.reduce((previousValue, currentTodo) =>{
        if(currentTodo.complete){
            return previousValue + 1
        }
        return previousValue
    }, initialValue)
    console.log(completedCount)
    let todoCompletedCount = document.querySelector('#todo-complete-count')
    todoCompletedCount.innerText = completedCount
}

const renderTodos = () => {
    calculateCompleted()
    todolist.innerHTML = ""
    todos.forEach((todo, index) => {
        console.log(`iteration ${index}`)
        console.log(todo)
        let checkedString = ""
        if(todo.complete) {
            checkedString = "checked"
        }
        todolist.innerHTML += `<li class="list-group-item">
        <input class="form-check-input todo-status"
            todo-id="${index}"
            type="checkbox"
            value="todo-${index}" aria-label="..."
            TODO COMPLETE TERNARY HERE>
        ${todo.description}

    </li>`
    })
}

renderTodos()


