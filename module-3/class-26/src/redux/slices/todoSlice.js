import  { nanoid, createSlice } from "@reduxjs/toolkit";

const initialState = {
        todos: [
            {
                id: 1,
                text: "Hello World "
            },
        ]
    }


const todoSlice = createSlice({
    name: 'todo',
    initialState,

    reducers: {
        addTodo: (state, action)=>{
            const todo = { id: nanoid(), text: action.payload }

            state.todos.push(todo)

            console.log("TODO ADDED !");
        },
        
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)

        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const existingTodo = state.todos.find(todo => todo.id === id);
            if (existingTodo) {
                existingTodo.text = text;
                console.log("TODO UPDATED!", action.payload);
            }
        }
    }

})



export default todoSlice.reducer

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions