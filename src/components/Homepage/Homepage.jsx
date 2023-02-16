import React from 'react'
import { useState } from 'react'
import { Card } from '../Card'
import { Layout } from '../Layout'
export const Homepage = () => {
    const [input,setInput]= useState("")
  return (
    <Layout>
        <div className='w-full bg-white bg-opacity-30 h-screen flex flex-col items-center justify-center'>
          <div className='flex w-full my-auto justify-between absolute top-0 p-5 bg-[#3C2F64] gap-x-10'>
            <h2 className='text-3xl font-bold text-white '>Weather App</h2>
            <input onChange={(e)=>{setInput(e.target.value.toLowerCase())}} placeholder="Search" type="search" size={14} className="outline-none opacity-30 rounded-[10px]  border-2  border-[#8EC1D6] text-center font-bold text-2xl pl-5 py-1 focus:border-black"/>  
          </div>
          <Card query={input ? input : "Istanbul"}/>
        </div>
      </Layout>
  )
}

