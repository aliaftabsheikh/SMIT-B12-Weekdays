import { NextResponse } from "next/server"

export async function GET(){
    return NextResponse.json('Hello from the User API route!');
}