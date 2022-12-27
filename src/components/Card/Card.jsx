import React, { useState, useEffect } from 'react'
import { useGetWeatherDataQuery } from './api/weatherApiSlice'

export const Card = ({query}) => {
  const{data,error,isError,isSuccess}= useGetWeatherDataQuery({query: query})  
  return (
    <>
      <h1 className='text-3xl font-bold p-5 text-[#3D4B5F]'>
          {isSuccess && data.city.name}
      </h1>
      <div className='flex flex-wrap gap-y-10 gap-x-5 items-center justify-center w-4/6 '>
          {isSuccess && data.list.map((v,i)=>{
            return(
              <div key={i} className="flex flex-col items-center lg:gap-y-10 rounded-[50px] bg-[#8EC1D6] bg-opacity-40 p-5 shadow-xl">
                <div className='lg:w-[96px] w-[256px] flex p-2'>
                  {
                    new Date(v.dt * 1000).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })
                  }
                </div>
                <span>
                  {(v.main.temp-273.15).toString().substring(0,4)} °C
                </span>
            </div>
            )
          })}
      </div>
    </>
  )
}
