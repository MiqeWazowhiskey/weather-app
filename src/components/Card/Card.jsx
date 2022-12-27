import React from 'react'
import { useGetWeatherDataQuery } from './api/weatherApiSlice'

export const Card = ({name, weather}) => {
  const data = weather.filter((v,i)=>i<=4);
  return (
    <div className='flex flex-col items-center justify-center w-1/3 h-2/6 rounded-[50px] border border-black'>
      <span className='text-3xl font-bold'>
        {name}
      </span>
        {data.map((v,i)=>{
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
