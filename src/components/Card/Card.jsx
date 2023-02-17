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
    
    <div className='lg:w-4/6 h-5/6 w-full rounded-[50px] bg-[#F3D5F6] m-5 border overflow-auto border-[#3C2F64] mt-28'>
      <div className='w-full lg:h-1/2 flex justify-center items-center lg:flex-row flex-col bg-[#3C2F64] rounded-t-[50px] p-2'>

        <div className='flex lg:items-start items-center lg:p-2 justify-start text-8xl '>
          {isSuccess && icons.find(v=>v.name===data.list[0].weather[0].main).icon}
        </div> 

        <p className='font-bold text-white w-5/6 h-full flex flex-col justify-end lg:items-start items-center lg:p-8 lg:border-r-4  text-8xl whitespace-nowrap'>

          {Math.floor((data.list[0].main.temp)-273.15).toString().concat(" °")}
            <p className='text-white w-full text-2xl lg:text-start text-center lg:p-5 font-medium tracking-wider'>
            {data.list[0].weather[0].main}
            </p>
            
        </p>
        
        

        {<p className='text-3xl font-bold text-white w-1/2 h-full flex justify-end items-center lg:p-16 '>
          <span className='w-1/6 h-[6px] rounded-[50px] bg-white flex mt-8'>
          {/**css line */}
          </span>
          { data.city.name}
          <span className='w-1/6 h-[6px] rounded-[50px] bg-white flex mb-8'>
          {/**css line */}
          </span>
        </p>}
        
      </div>
      <div className='w-full flex lg:flex-wrap flex-col justify-center items-center lg:h-1/2 gap-2 p-2'>
      {data.list.filter(v=>v.dt_txt.substring(11,16)=="15:00").map((v,i)=>{
            return(
              <div key={i} className="lg:h-full lg:w-1/6 w-full h-[72px] flex lg:flex-col justify-around gap-x-1 lg:justify-center items-center bg-white lg:p-2 p-5 border-2 border-[#3C2F64] rounded-[50px] ">
                {i==0
                  ?<p className='lg:text-lg text-xs'>
                    Today
                  </p>
                  :i==1
                  ?<p className='lg:text-lg text-xs'>
                    Tomorrow
                  </p>
                  :<p className='lg:text-lg text-xs'>
                    {new Date(v.dt*1000).toLocaleDateString("en-US",{
                      month:"long",
                      day:"2-digit",
                    })}
                  </p>}
                <div className='lg:text-6xl text-3xl text-center'>
                  {icons.find(val=>val.name===v.weather[0].main).icon}
                </div>
                <p className='lg:text-md text-xs'>
                  {v.weather[0].description}
                </p>
                <p className='lg:text-5xl text-lg'>
                  {Math.floor(v.main.temp-273.15).toString().concat("°")}
                </p>
              </div>
            )
          })}
      </div>
    </div>
    ) : <h3 className='text-white font-bold text-5xl'>LOADING...</h3>
}
