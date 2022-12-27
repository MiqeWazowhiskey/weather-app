import { useState } from 'react'
import './App.css'
import { Card } from './components/Card'
function App() {
    const [input,setInput]= useState("")

    return (
    <div className="flex-col w-full h-screen flex justify-center items-center">
      <div className='mb-10 border-2 rounded-[50px] border-[#8EC1D6]'>
        <input onChange={(e)=>{const lower = e.target.value.toLowerCase() ; setInput(lower)}} type="search" size={23} className="outline-none bg-inherit p-5 text-center font-bold text-2xl"/>  
      </div>
      
      <Card query={input}/>
    </div>
  )
}

export default App
