import connectionMongodb from "@/libs/mongodb";
import Topic from "@/models/module";
import { NextResponse } from "next/server";


export async function GET(request:any,{params}:any){
    const {id} = params
    await connectionMongodb
    const Record = await Topic.findById(id)
    return NextResponse.json({
        message:'Success',
        data:Record,
        status:200
    })
}

export async function PATCH(request:any,{params}:any) {
    const {id} = params
    const {title,description} = await request.json()
    await connectionMongodb 
    const Record =  await Topic.findByIdAndUpdate(id,{title,description})
    return NextResponse.json({
        message:'Data update successfully',
        data:Record,
        status:200
    })
}

