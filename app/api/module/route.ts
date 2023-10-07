import connectionMongodb from '@/libs/mongodb'
import Topic from '@/models/module'
import {NextResponse} from 'next/server'
export async function POST(request:any){
    const {title,description} = await request.json()
    await connectionMongodb()
    const Record =  await Topic.create({title,description})
    return NextResponse.json({
        message:'New Module created',
        data: Record,
        status: 200
    })
}
export async function GET(){
    await connectionMongodb()
    const Record =  await Topic.find()
    return NextResponse.json({Record})
}


export async function DELETE(request:any){
    const id =  request.nextUrl.searchParams.get('id')
    await connectionMongodb()
    await Topic.findByIdAndDelete(id)
    return NextResponse.json({
        message:'One record deleted successfully'
    })
}