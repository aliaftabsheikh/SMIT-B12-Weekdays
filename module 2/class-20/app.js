// Topic

// style
// style.cssTsxt
// setAttribute
// className
// classList


var idCount = 1

function addTodo() {
    var todos = document.getElementById('todos')
    var inpVal = document.getElementById('inp')

    todos.setAttribute('class', 'todosContainer')

    
    var element = document.createElement('div')
    element.setAttribute('id', idCount)
    element.setAttribute('class', "todo")

    element.innerHTML = `
    <p>${inpVal.value}</p> <button onclick="deleteTodo(${idCount})">Delete</button> <button onclick="updateTodo(${idCount})">Update</button>
   `

    todos.appendChild(element)

    idCount = idCount + 1;
}

function deleteTodo(id){
    // console.log("DELETED", id);
    var deletedItem = document.getElementById(id);
    var parentElem = deletedItem.parentNode;
    parentElem.removeChild(deletedItem)
}

function updateTodo(id){
    var inpVal = document.getElementById('inp')
    var todoItem = document.getElementById(id)

    todoItem.innerHTML = `
    <p>${inpVal.value}</p> <button onclick="deleteTodo(${id})">Delete</button> <button onclick="updateTodo(${id})">Update</button>
   `
}