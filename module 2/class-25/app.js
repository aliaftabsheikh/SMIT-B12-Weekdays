//OBJECTS

// var person = {
//     name: 'Huzaifa',
//     age: 23,
//     role: 'Teacher',
//     isPermenant: true,
//     greet: function(name){
//         return "Welcome " + this.role
//     },
//     // shifts: ["morning", "evening", "night"]
//     shifts: {
//         morning: "morning",
//         evening : "evening",
//         night: "night"
//     }
// }

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));





// for(key in person){
//     if(person[key] === "Ali"){
//         console.log("Ali FOUND !");
//     }
// }


// person.age = 43;
// console.log(person.hasOwnProperty('age22'));

// console.log(person);



// TODO MODIFY 


// Topic

// style
// style.cssTsxt
// setAttribute
// className
// classList


var idCount = 0;
var todos = []



// function addTodo() {
//     var inpVal = document.getElementById('inp')

//     todos.push({
//         id: idCount,
//         title: inpVal.value
//     })

//     render()

//     var todos = document.getElementById('todos')

//     // todos.setAttribute('class', 'todosContainer')

//     if(inpVal.value.trim() === ""){
//         alert("Please add Todo Task !")
//         return;
//     }


//     var element = document.createElement('div')
//     element.setAttribute('id', idCount)
//     element.setAttribute('class', "todo")

//     element.innerHTML = `
//     <p>${inpVal.value}</p> <button onclick="deleteTodo(${idCount})">Delete</button> <button onclick="updateTodo(${idCount})">Update</button>
//    `

//     todos.appendChild(element)

//     idCount = idCount + 1;
//     inpVal.value = "";
// }

function addTodo() {
    var inpVal = document.getElementById('inp')

    todos.push({
        id: idCount,
        title: inpVal.value
    })

    render()
}



function render() {
    var todoElem = document.getElementById('todos')
    todoElem.innerHTML = "";
    for (i = 0; i < todos.length; i++) {
        var elem = document.createElement('div');
        var textElem = document.createElement('p')
        var deleteButton = document.createElement('button');
        var updateButton = document.createElement('button');

        deleteButton.textContent = "Delete";
        updateButton.textContent = "Update"
        textElem.textContent = todos[i].title



        elem.setAttribute("id", todos[i].id);
        deleteButton.setAttribute("onclick", `deleteTodo(${todos[i].id})`)
        elem.appendChild(textElem)
        elem.appendChild(deleteButton)
        elem.appendChild(updateButton)
        todoElem.appendChild(elem)

    }
    idCount++;

}

function deleteTodo(id) {
    // // console.log("DELETED", id);
    // var deletedItem = document.getElementById(id);
    // var parentElem = deletedItem.parentNode;
    // parentElem.removeChild(deletedItem)

    render()
}

function updateTodo(id) {
    var inpVal = document.getElementById('inp')
    var todoItem = document.getElementById(id)

    if (inpVal.value.trim() === "") {
        alert("Updated Todo not be empty !")
        return;
    }

    todoItem.innerHTML = `
    <p>${inpVal.value}</p> <button onclick="deleteTodo(${id})">Delete</button> <button onclick="updateTodo(${id})">Update</button>
   `
}





