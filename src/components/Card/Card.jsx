import React, {useState} from 'react'
import { useGetWeatherDataQuery } from './api/weatherApiSlice'

export const Card = ({query}) => {
  const{data,error,isError,isSuccess}= useGetWeatherDataQuery({query: query})  
  console.log(data)
  const icons = [
  {name: 'Clear', icon: '☀️'},
  {name:'Rain',icon: '🌧️'},
  {name:'Snow',icon: '❄️'},
  {name:'Drizzle',icon: '🌨️'},
  {name:'Haze',icon: '💨'},
  {name:'Mist',icon: '🌫️'},
  {name:'Clouds',icon: '☁️'},
  {name:'Thunderstorm',icon: '⚡'},
  ]
  
  return isSuccess ? (
    
    <div className='w-4/6 h-5/6 rounded-[50px] bg-[#F3D5F6] m-5 border border-[#3C2F64] mt-28'>
      <div className='w-full h-1/2 flex flex-row bg-[#3C2F64] rounded-t-[50px]'>

        <div className='flex w-1/68 h-full items-start p-2 justify-start text-8xl '>
          {isSuccess && icons.find(v=>v.name===data.list[0].weather[0].main).icon}
        </div> 

        <p className='font-bold text-white w-5/6 h-full flex flex-col justify-end items-start p-8 border-r-4  text-8xl whitespace-nowrap'>

          {Math.floor((data.list[0].main.temp)-273.15).toString().concat(" °")}
            <p className='text-white w-full text-2xl text-start p-5 font-medium tracking-wider'>
            {data.list[0].weather[0].main}
            </p>
            
        </p>
        
        

        {<p className='text-3xl font-bold text-white w-1/2 h-full flex justify-end items-center p-16'>
          <span className='w-1/6 h-[6px] rounded-[50px] bg-white flex mt-8'>
          {/**css line */}
          </span>
          { data.city.name}
          <span className='w-1/6 h-[6px] rounded-[50px] bg-white flex mb-8'>
          {/**css line */}
          </span>
        </p>}
        
      </div>
      <div className='w-full flex lg:flex-wrap flex-col justify-center items-center h-1/2 gap-2 p-5'>
      {data.list.map((v,i)=>{
            return(
              v.dt_txt.substring(11,16)=="15:00" &&
              <div key={i} className="h-full flex flex-col justify-center items-center bg-white w-1/6 border-2 border-[#3C2F64] rounded-[50px] ">
                <p className='text-lg'>{new Date(v.dt*1000).toLocaleDateString("en-US",{
                  month:"long",
                  day:"2-digit",
                })}</p>
                <div className='text-6xl w-full text-center'>
                  {icons.find(val=>val.name===v.weather[0].main).icon}
                </div>
                <p className='text-md'>
                  {v.weather[0].description}
                </p>
                <p className='text-5xl'>
                  {Math.floor(v.main.temp-273.15).toString().concat("°")}
                </p>
              </div>
            )
          })}
      </div>
    </div>
    ) : <h3 className='text-white font-bold text-5xl'>LOADING...</h3>
}
