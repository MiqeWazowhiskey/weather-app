import React, { useState, useEffect } from 'react'
import { useGetWeatherDataQuery } from './api/weatherApiSlice'
import {TiWeatherSunny as Sunny} from 'react-icons/ti'
export const Card = ({query}) => {
  const{data,error,isError,isSuccess}= useGetWeatherDataQuery({query: query})  
  return (
    <>
    
      <div className='flex flex-col border items-center w-5/6 lg:w-1/2 h-1/2 rounded-[50px] mb-12 p-5 bg-white bg-opacity-50'>
        <h1 className='text-3xl font-bold p-5 text-[#3D4B5F] '>
            {isSuccess && data.city.name}
        </h1>

        <div className='w-1/2 flex flex-col items-center'>
          <p className=''>
            {isSuccess && data.list[1].weather[0].main}
          </p>
          <p>
            {isSuccess && data.list[1].weather[0].description}
          </p>
          <p>
          {isSuccess && data.list[1].dt_txt.substring(0,10)}
          </p>
          <p>
          {isSuccess && data.list[1].dt_txt.substring(10,16)}
          </p>
          {isSuccess && <img className='bg-[#8EC1D6] rounded-full bg-opacity-40' width={82} src={`http://openweathermap.org/img/wn/${data.list[1].weather[0].icon}.png`}/>}

        </div>
   
      </div>
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
                <img className='bg-[#8EC1D6] rounded-full bg-opacity-40' width={48} src={`http://openweathermap.org/img/wn/${v.weather[0].icon}.png`}/>
            </div>
            )
          })}
      </div>
    </>
  )
}
