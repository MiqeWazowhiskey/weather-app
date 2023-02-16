import React from 'react'
export const Layout = ({children}) => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#BBE6E4] to-[#053760] z-20 max-w-full container bg-no-repeat bg-cover bg-fixed bg-center flex justify-center items-center">
          {children} 
      </div>
    </>
  )
}
