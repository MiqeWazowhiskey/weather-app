import React from 'react'
export const Layout = ({children}) => {
  return (
    <div className="max-w-full container bg-[url('/sky.jpg')] bg-no-repeat bg-cover bg-fixed bg-center flex justify-center items-center">
        {children} 
    </div>
  )
}
