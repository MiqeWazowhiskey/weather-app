import React from 'react'
export const Layout = ({children}) => {
  return (
    <>
      <div className="bg-orange-300 max-w-full min-h-screen font-Righteous bg-no-repeat flex justify-center items-center">
          <div className='w-full h-full z-20 bg-gradient-to-b from-transparent bg-no-repeat to-purple-500 backdrop-blur-sm ' >{children} </div>
      </div>
    </>
  )
}
