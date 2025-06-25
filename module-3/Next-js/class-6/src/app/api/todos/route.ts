// GET 

import { NextRequest, NextResponse } from "next/server";
import { start } from "repl";

type ITodos = {
    id: number;
    todo: string;
    isCompleted: boolean
}

let nextId = 1


const todos: ITodos[] = [
    
]


export async function GET(){
    return NextResponse.json(todos)
}

export async function POST(request: NextRequest,){
    const {todo, isCompleted} = await request.json()
    console.log("BODY",todo, isCompleted)
    try {
    todos.push({
        id: nextId++,
        todo: todo,
        isCompleted: isCompleted
    })
    return NextResponse.json({
        status: 'success',
        message: 'Todo Add Successfully !'
    })
    } catch (error) {
        console.log(error)

        return NextResponse.json({
            status: 'Failed',
            message: 'Todos is not add !'
        })
    }
    
}