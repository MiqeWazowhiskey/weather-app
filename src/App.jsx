
import './App.css'
import { Card } from './components/Card'
import { useGetWeatherDataQuery } from './components/Card/api/weatherApiSlice'
function App() {
  const{data,error,isError,isLoading}= useGetWeatherDataQuery({query: "New+York+City"})
  const name = data && data.city.name
  const list = data && data.list
  console.log(list)
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card name={name} weather={list}/>
    </div>
  )
}

export default App
