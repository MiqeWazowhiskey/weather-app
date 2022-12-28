import React from 'react'
import { useState } from 'react'
import { Card } from '../Card'
import { Layout } from '../Layout'
import {FcSearch as Search} from 'react-icons/fc'
export const Homepage = () => {
    const [input,setInput]= useState("")
  return (
    <Layout>
        <div className='pt-20 lg:w-3/4 w-full bg-white bg-opacity-30 h-full flex flex-col items-center justify-center p-5'>
          <div className='flex items-center justify-start mb-10 border-2 rounded-[50px] border-[#8EC1D6] shadow-lg shadow-[#3D4B5F]'>
            <span className='absolute p-4'><Search size={32}/></span>
            <input onChange={(e)=>{setInput(e.target.value.toLowerCase())}} placeholder="Search" type="search" size={14} className="outline-none opacity-30 rounded-[50px] p-5 text-center font-bold text-2xl"/>  
          </div>
          <Card query={input ? input : "Istanbul"}/>
        </div>
      </Layout>
  )
}

