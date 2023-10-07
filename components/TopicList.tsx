import React from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'
import { HiPencilAlt, HiOutlineTrash } from 'react-icons/hi'
import Link from 'next/link'
import apiCall from '@/utils/apiCall'
import { pathTodoapp } from '@/utils/path'
export default function TopicList({id,title,description}:any) {
    const removeRecord = async()=>{
        try{
        const response =  await apiCall.delete(`${pathTodoapp.GET_TOPIC}?id=${id}`) 
        if(response.status == 200){
            window.location.reload()
            alert("Delete Successfully")
        }
        }catch(err){
            console.log(err)
        }
    }
    return (
        <div>
            <div className='p-4 hover:shadow-inner hover:transition-all hover:duration-200 border border-slate-300 my-3 flex items-center justify-between'>
                <div>
                    <h1 className='font-semibold text-2xl '>{title}</h1>
                    <div>{description}</div>
                </div>
                <div className='flex gap-2'>
                    <a>
                        <HiOutlineTrash size={24} className='text-red-400' onClick={()=>{removeRecord()}} />
                    </a>
                    <Link href={`/edit-topic/${id}`}>
                        <HiPencilAlt size={24} />
                    </Link>

                </div>
            </div>
        </div>
    )
}
