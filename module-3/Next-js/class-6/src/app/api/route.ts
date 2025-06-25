import { NextResponse } from "next/server";


export async function GET(){
    return NextResponse.json('Hello from the API route!');
}