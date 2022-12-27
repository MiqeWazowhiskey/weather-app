import React from 'react'
import { useGetWeatherDataQuery } from './api/weatherApiSlice'

export const Card = ({query}) => {
  const{data,error,isError,isLoading}= useGetWeatherDataQuery({query: query})
  return (
    <>
    </>
  )
}
