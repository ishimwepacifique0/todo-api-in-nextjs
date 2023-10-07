'use client'
import TopicList from '@/components/TopicList';
import apiCall from '@/utils/apiCall';
import { pathTodoapp } from '@/utils/path';
import React,{useEffect,useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Home() {
  const [topics, setTopics] = useState([])

  useEffect(()=>{
    const fetchData= async ()=> {
      try{
        const response = await apiCall.get(`${pathTodoapp.GET_TOPIC}`)
        setTopics(response.data.Record)
        if(response.status != 200){
          toast('Please wait')
        }
      }catch(err){
        console.log(err)
      }

    }
    fetchData()
  },[])

  return (
    <>
    <ToastContainer theme='dark' />
    {topics.map((item:any,index:any)=>{
      return(
        <>
        <TopicList key={index} id={`${item._id}`} title={`${item.title}`} description={`${item.description}`} />
        </>
      )
      })}
    </>
  )
}
