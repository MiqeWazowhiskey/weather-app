import React from 'react'
import { useGetWeatherDataQuery } from './api/weatherApiSlice'
export const Card = ({query}) => {
  const{data,error,isError,isSuccess}= useGetWeatherDataQuery({query: query})  
  return (
    
      <div className='flex flex-wrap whitespace-nowrap border items-center justify-center w-full rounded-[50px] mb-12 p-5 bg-white bg-opacity-50'>
        <div className='items-center justify-center w-full'>
          <h1 className='text-3xl w-full text-center font-bold p-2 text-[#3D4B5F]'>
              {isSuccess && data.city.name}
          </h1>

          <div className='flex w-full text-2xl justify-center flex-col gap-x-10 items-center'>
            <p>
              {isSuccess && data.list[0].weather[0].description.toUpperCase()}
            </p>
            <p>
            {isSuccess && data.list[0].dt_txt.substring(10,16)}
            </p>
            <p>
            {isSuccess && (data.list[0].main.temp-273.15).toString().substring(0,4).length==4 
              ? (data.list[0].main.temp-273.15).toString().substring(0,4) 
              : (data.list[0].main.temp-273.15).toString().substring(0,4).concat(".00")} °C
            </p>

          </div>
        </div>
          {isSuccess && data.list.map((v,i)=>{
            return(
              <div key={i} className="flex flex-row items-center rounded-[50px] m-2 bg-[#8EC1D6] bg-opacity-40 shadow-xl">
                <div className='w-5/6 whitespace-nowrap text-center flex p-2 text-xs'>
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
                  {(v.main.temp-273.15).toString().substring(0,4).length==4 
                  ? (v.main.temp-273.15).toString().substring(0,4)
                  : (v.main.temp-273.15).toString().substring(0,4).concat(".00")} °C
                </span>
                <img className='bg-[#8EC1D6] rounded-full bg-opacity-40 ml-3' 
                     width={48} 
                     src={`http://openweathermap.org/img/wn/${v.weather[0].icon}.png`}/>
            </div>
            )
          })}
      </div>
    )
}
