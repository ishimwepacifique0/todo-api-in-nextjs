'use client'
import apiCall from '@/utils/apiCall'
import { pathTodoapp } from '@/utils/path'
import { ToastContainer, toast } from 'react-toastify';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
export default function AddTopic() {
    const [title, setTitle]: any = useState([])
    const [description, setDescription]: any = useState([])
    const router = useRouter()

    const Submitdata = async(e:any) =>{
        e.preventDefault()
        const data:any =  {
            "title":title,
            "description":description
        }   
        console.log(data)
        if(data.title == '' || data.description == ''){
            alert('Please fill all field')
        }    
        try{
            const response =  await apiCall.post(`${pathTodoapp.POST_TOPIC}`,data)
            console.log(response)
            if(response.status == 200){
                router.push('/')
            }
        }catch(err){
            console.log(err)
        }
    }



    return (
        <div className='flex flex-col gap-3'>
            <ToastContainer theme='dark' position='bottom-right' />
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='p-4 border border-slate-400 px-8 py-2 focus:border'
                type='text'
                placeholder='Title' />

            <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className='p-4 border border-slate-400 px-8 py-2'
                type='text'
                placeholder='Description' />


            <button onClick={(e)=>{Submitdata(e)}} type='submit' className='bg-green-600 font-semibold text-white py-3 px-6 w-fit'>Add topic</button>
        </div>

    )
}
