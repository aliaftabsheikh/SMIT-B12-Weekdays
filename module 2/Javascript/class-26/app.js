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

function updateTodo(id) {
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


// var object = {
//     first: 1,
//     second: 2,
//     first: 2,
// }

// console.log(object.first);

// var num = 10;

// console.log(num.toFixed(2));

// var name = 'alia'

// console.log(name.lastIndexOf('a'));


// var name = "john player";
// console.log(name[3]);

// var myarray = ["foo","bar","baz"];
// myarray.length=0;
// myarray.push("bin");
// console.log(myarray);

// var a=7;
// function hello() {
//  if (true) {
// var a=5;
// }
// console.log(a);
// }

// hello()

// var size = 5;
// var a = 5;
// var size = 4;
// for(var j=size; j>=0 ; j--){
//   console.log(a);
//   a = a-2;
// }

// function range(length) {
//     var a=5;
//   for (var i=0; i<length; i++) {
//     console.log(a);
//     }
//   }
//   range(3)