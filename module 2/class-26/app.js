// var para = document.getElementsByClassName('para');
// var para1 = document.querySelector('.para');

// var btn = document.getElementById('btn')

// var parentElem = document.getElementsByTagName('div')

var idCount = 1;


function addTodo() {
    var input = document.getElementById('inp');

    var todo = document.getElementById('todos');

    var element = document.createElement('div')
    var para = document.createElement('p');
    var deleteBtn = document.createElement('button');
    var updateBtn = document.createElement('button');

    deleteBtn.textContent = "Delete"
    updateBtn.textContent = "Update"

    deleteBtn.setAttribute("onclick", `deleteTodo(${idCount})`)
    updateBtn.setAttribute("onclick", `updateTodo(${idCount})`)

    element.setAttribute("id", idCount)
    para.textContent = input.value;

    element.appendChild(para);
    element.appendChild(deleteBtn)
    element.appendChild(updateBtn)

    todo.appendChild(element);

    idCount = idCount + 1

}

function updateTodo(id){
    var element = document.getElementById(id)
    var paraElem = element.querySelector('p')
    var input = document.getElementById('inp');

    paraElem.textContent = input.value;

}

function deleteTodo(id) {
    var element = document.getElementById(id)

    var parentElem = element.parentNode;
    parentElem.removeChild(element)
}