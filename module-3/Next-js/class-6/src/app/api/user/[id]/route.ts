import { NextResponse, NextRequest } from "next/server"



export const GET = (request: NextRequest, {params}: {params: {id: number}})=>{

    const {id} = params

    return NextResponse.json({
        status: 'success',
        message: {
            id : `Userid-${id}`,
        }
    })
}