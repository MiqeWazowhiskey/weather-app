import React from 'react'
export const Layout = ({children}) => {
  return (
    <>
      <img className='z-[-10] fixed top-0 left-0 object-fit w-[100vw] h-[100vh]' src='/sky.jpg'/>
      <div className="z-20 max-w-full container bg-no-repeat bg-cover bg-fixed bg-center flex justify-center items-center">
          {children} 
      </div>
    </>
  )
}
