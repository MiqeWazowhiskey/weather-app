import React from 'react'

export const Layout = ({children}) => {
  return (
    <div className='overflow-hidden flex-col w-full h-full flex justify-center items-center' style={{background:"url('./sky.jpg')", backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundSize:'100% 100%'}}>
        {children}
    </div>
  )
}
