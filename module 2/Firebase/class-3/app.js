import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";

import { getFirestore, addDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyC8rp54Hi5Y-uT0w2ESicSpVOK8_dFNFnk",
  authDomain: "third-project-39be0.firebaseapp.com",
  projectId: "third-project-39be0",
  storageBucket: "third-project-39be0.firebasestorage.app",
  messagingSenderId: "114043967976",
  appId: "1:114043967976:web:a34c87e67665bcfe84ac5d"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


console.log("FIRESBASE SETUP", app)



const addTodo = document.getElementById("addTODO");
const todoList = document.getElementById("todos");


addTodo.addEventListener("click", addTodoHandler);


async function addTodoHandler() {

  try {
    const inputElement = document.getElementById("input_field").value;
    const docRef = await addDoc(collection(db, "todos"), {
      id: new Date().getTime(),
      task: inputElement
    });


    console.log("Document written with ID: ", docRef.id);

    getTodos()
  } catch (e) {
    console.error("Error adding document: ", e);
  }


}


async function getTodos() {
  try {
    todoList.innerHTML = "";
    const todos = await getDocs(collection(db, "todos"));
    todos.forEach((doc) => {
      const { task } = doc.data();
      const ele = `<li id=${doc.id}>${task}</li>`;

      todoList.innerHTML += ele;
    });
  } catch (error) {
    console.log("Error getting document:", error);
  }

}

getTodos();