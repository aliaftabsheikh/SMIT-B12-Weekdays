import { NextResponse, NextRequest } from 'next/server';

export async function GET() {
   return NextResponse.json({messgae: "Hello World!"});
}





