import React from 'react'

export const Layout = ({children}) => {
  return (
    <div className='overflow-hidden flex-col w-full h-full flex justify-center items-center' style={{background:"url('./sky.jpg')", backgroundRepeat:"no-repeat", backgroundSize:"100vw 100vh",backgroundAttachment:"fixed"}}>
        {children}
    </div>
  )
}