import React from 'react'
export const Layout = ({children}) => {
  return (
    <>
      <div className="bg-orange-300 max-w-full min-h-screen font-Righteous lg:!overflow-hidden bg-no-repeat bg-cover bg-fixed flex justify-center items-center">
          <div className='w-full h-full z-20 bg-gradient-to-b from-transparent to-purple-500 backdrop-blur-sm bg-fixed' >{children} </div>
      </div>
    </>
  )
}
