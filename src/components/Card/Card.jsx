import React from 'react'
import { useGetWeatherDataQuery } from './api/weatherApiSlice'

export const Card = ({query}) => {
  const{data,error,isError,isLoading}= useGetWeatherDataQuery({query: query})
  const name = data && data.city.name
  const list = data.list && data.list
  const weatherData = list.filter((v,i)=>i<=4);
  return (
    <div className='flex flex-col items-center justify-center w-1/3 h-2/6 rounded-[50px] shadow-2xl shadow-[#CBD5E1]'>
      <span className='text-3xl font-bold p-5 text-[#3D4B5F]'>
        {name}
      </span>
        {weatherData.map((v,i)=>{
          return(
            <div key={i}>
              {
                new Date(v.dt * 1000).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })
              }
            </div>
          )
        })}
    </div>
  )
}
