import {createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [
        {
            id: 1,
            text: "TODO 1 "
        },
    ]
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers : {
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text : action.payload
            }

            state.todos.push(todo)

            console.log("ADD TODO !", action.payload);
            
        },
        // deleteTodo : ()=> {

        // }
    }
})


export default todoSlice.reducer

export const {addTodo} = todoSlice.actions
